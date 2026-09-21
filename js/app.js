/* APAC Cyber Compliance Assistant — practical assessment workspace. */
(function () {
  'use strict';

  const E = window.HKCCEngine;
  const STORE_KEY = 'hkcc.state.v2';
  const LEGACY_STORE_KEY = 'hkcc.state.v1';
  const BROKEN_STORE_KEY = 'hkcc.state.broken';
  const MAX_PROJECT_BYTES = 5 * 1024 * 1024;
  const STATUSES = [
    { id: 'none', key: 'statusUnrated', cls: 's-none' },
    { id: 'done', key: 'statusDone', cls: 's-done' },
    { id: 'partial', key: 'statusPartial', cls: 's-partial' },
    { id: 'gap', key: 'statusGap', cls: 's-gap' },
    { id: 'na', key: 'statusNa', cls: 's-na' }
  ];
  const byId = new Map(HKCC.controls.map(c => [c.id, c]));
  const licenseById = new Map(HKCC.licenses.map(l => [l.id, l]));
  const attributeLicenseIndex = E.indexAttributeLicenses(HKCC.controls);
  const definitions = {
    controlIds: new Set(HKCC.controls.map(c => c.id)),
    licenseIds: new Set(HKCC.licenses.map(l => l.id)),
    attributeIds: new Set(HKCC.attributes.map(a => a.id))
  };

  const today = () => {
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };

  const state = {
    project: { name: '', asOfDate: today() },
    licenses: new Set(),
    attributes: new Set(),
    assessments: Object.create(null),
    unresolvedAssessments: Object.create(null),
    merge: true,
    gapsOnly: false,
    query: '',
    jurisdiction: '',
    domain: '',
    storageAvailable: true,
    quarantined: false
  };

  let activeScopeJurisdiction = '';
  let projectPanelOpen = false;
  let scopeDrawerOpen = false;
  let headerMoreOpen = false;
  let scopeReturnFocus = null;
  const licenseGroupState = new Map();
  const mobileScopeQuery = window.matchMedia('(max-width: 900px)');

  const $ = (selector, root) => (root || document).querySelector(selector);
  const el = (tag, cls, value) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (value != null) node.textContent = value;
    return node;
  };
  const regKey = regulator => regulator === 'SFC' ? 'SFC' :
    regulator === 'HKMA' ? 'HKMA' : regulator === 'PCPD' ? 'PCPD' :
    regulator === 'IA' ? 'IA' : regulator === 'MAS' ? 'MAS' : 'CI';
  const t = (key, vars) => HKCC.t(key, vars);
  const trControl = control => HKCC.tr('controls', control.id, control);
  const trSource = id => HKCC.tr('sources', id, HKCC.sources[id]);
  const trLicense = licence => HKCC.tr('licenses', licence.id, licence);
  const trAttribute = attribute => HKCC.tr('attributes', attribute.id, attribute);
  const trDomain = domain => HKCC.tr('domains', domain.id, domain);
  const trJurisdiction = jurisdiction => HKCC.tr('jurisdictions', jurisdiction.id, jurisdiction);
  const jurisdictionLabel = id => {
    const item = HKCC.jurisdictions.find(j => j.id === id);
    return item ? trJurisdiction(item).label : id;
  };

  function projectData(includeExportTime) {
    return {
      schemaVersion: E.SCHEMA_VERSION,
      controlDataVersion: HKCC.meta.version,
      exportedAt: includeExportTime ? new Date().toISOString() : '',
      project: { ...state.project },
      scope: { licenses: [...state.licenses], attributes: [...state.attributes] },
      assessments: state.assessments,
      unresolvedAssessments: state.unresolvedAssessments,
      preferences: { merge: state.merge }
    };
  }

  function hydrate(data) {
    state.project = {
      name: data.project?.name || '',
      asOfDate: data.project?.asOfDate || today()
    };
    state.licenses = new Set(data.scope?.licenses || data.licenses || []);
    state.attributes = new Set(data.scope?.attributes || data.attributes || []);
    state.assessments = data.assessments || Object.create(null);
    state.unresolvedAssessments = data.unresolvedAssessments || Object.create(null);
    state.merge = data.preferences?.merge !== false && data.merge !== false;
  }

  function save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(projectData(false)));
      state.storageAvailable = true;
    } catch (error) {
      state.storageAvailable = false;
    }
  }

  /* 读不懂的本地状态先另存一份再让新状态覆盖：本地状态是用户唯一的自动保存，
     直接覆盖等于在一次解析失败后销毁整份评估记录。备份留给手动恢复。 */
  function quarantine(raw) {
    try {
      if (raw) localStorage.setItem(BROKEN_STORE_KEY, raw);
    } catch (error) { /* 配额或隐私模式：备份不成功也不该挡住应用启动 */ }
  }

  function load() {
    let unreadableV2 = null;
    try {
      const current = localStorage.getItem(STORE_KEY);
      unreadableV2 = current;
      if (current) {
        const result = E.validateProject(JSON.parse(current), definitions);
        if (!result.ok) throw new Error('stored project failed validation');
        hydrate(result.data);
        return;
      }
      const legacy = localStorage.getItem(LEGACY_STORE_KEY);
      if (!legacy) return;
      const migrated = E.migrateV1(JSON.parse(legacy), HKCC.controls);
      hydrate({
        project: migrated.project,
        scope: { licenses: migrated.licenses, attributes: migrated.attributes },
        assessments: migrated.assessments,
        unresolvedAssessments: migrated.unresolvedAssessments,
        preferences: { merge: migrated.merge }
      });
      save();
    } catch (error) {
      // 分辨两种失败：浏览器不让用 localStorage，与状态本身读不懂。
      // 前者该提示「无法自动保存」，后者浏览器其实好好的，提示那句会误导。
      if (!storageUsable()) { state.storageAvailable = false; return; }
      // v1 迁移失败时原数据仍在 hkcc.state.v1 下，本来就不会被覆盖；
      // 只有读不懂的 v2 需要另存，否则下一次自动保存就把它抹掉。
      if (unreadableV2) quarantine(unreadableV2);
      state.quarantined = true;
    }
  }

  function storageUsable() {
    try {
      const probe = STORE_KEY + '.probe';
      localStorage.setItem(probe, '1');
      localStorage.removeItem(probe);
      return true;
    } catch (error) {
      return false;
    }
  }

  /* 引擎回传的诊断为 { code, params }，在此译成当前语言。
     未知代码退回显示代码本身，好过让对话框空白。 */
  function formatDiagnostic(item) {
    if (typeof item === 'string') return item;
    if (!item || !item.code) return '';
    const text = t(item.code, item.params);
    return text === item.code ? item.code : text;
  }

  function assessment(id) {
    return state.assessments[id] || {};
  }

  function updateAssessment(id, field, value) {
    const record = { ...assessment(id) };
    if (value == null || value === '' || (field === 'status' && value === 'none')) delete record[field];
    else record[field] = value;
    if (field === 'status') record.assessedAt = value === 'none' ? undefined : today();
    for (const key of Object.keys(record)) if (record[key] == null || record[key] === '') delete record[key];
    if (Object.keys(record).length) state.assessments[id] = record;
    else delete state.assessments[id];
    save();
  }

  function applies(control) {
    return E.applies(control, state.licenses, state.attributes);
  }

  function matchesQuery(group) {
    if (!state.query) return true;
    const query = state.query.toLowerCase();
    return group.some(control => {
      const source = HKCC.sources[control.sourceId];
      const translated = trControl(control);
      const translatedSource = trSource(control.sourceId);
      const record = assessment(control.id);
      return [control.id, control.title, control.requirement, translated.title, translated.requirement,
        control.quote || '', control.clause, source.titleZh, source.titleEn, translatedSource.titleZh,
        source.regulator, record.implementationNote || '',
        record.evidenceRef || '', record.owner || ''].join(' ').toLowerCase().includes(query);
    });
  }

  function scopeForJurisdiction(id) {
    const licenses = HKCC.licenses.filter(item => item.jurisdiction === id);
    const attributes = HKCC.attributes.filter(item => item.jurisdiction === id);
    return {
      licenses,
      attributes,
      selectedLicenses: licenses.filter(item => state.licenses.has(item.id)),
      selectedAttributes: attributes.filter(item => state.attributes.has(item.id))
    };
  }

  function preferredScopeJurisdiction() {
    const selected = HKCC.jurisdictions.find(j => {
      const scope = scopeForJurisdiction(j.id);
      return scope.selectedLicenses.length || scope.selectedAttributes.length;
    });
    return selected?.id || HKCC.jurisdictions[0]?.id || '';
  }

  function relevantAttributes(scope) {
    const selectedLicenses = new Set(scope.selectedLicenses.map(item => item.id));
    return scope.attributes.filter(attribute => {
      if (state.attributes.has(attribute.id)) return true;
      const eligibleLicenses = attributeLicenseIndex.get(attribute.id);
      return eligibleLicenses && [...selectedLicenses].some(id => eligibleLicenses.has(id));
    });
  }

  function clearJurisdictionScope(id) {
    const scope = scopeForJurisdiction(id);
    for (const license of scope.licenses) state.licenses.delete(license.id);
    for (const attribute of scope.attributes) state.attributes.delete(attribute.id);
    save();
    render();
  }

  function clearAllScope() {
    state.licenses.clear();
    state.attributes.clear();
    save();
    render();
  }

  function renderSidebar() {
    const box = $('#sidebar');
    box.innerHTML = '';

    const drawerHead = el('div', 'scope-drawer-head');
    drawerHead.appendChild(el('h2', null, t('scopeTitle')));
    const close = el('button', 'scope-close', t('btnClose'));
    close.type = 'button';
    close.addEventListener('click', closeScopeDrawer);
    drawerHead.appendChild(close);
    box.appendChild(drawerHead);

    const project = el('details', 'scope-project');
    project.open = projectPanelOpen;
    const projectSummary = el('summary');
    projectSummary.appendChild(el('span', null, t('scopeProjectDetails')));
    if (state.project.name) projectSummary.appendChild(el('small', null, state.project.name));
    project.appendChild(projectSummary);
    const projectFields = el('div', 'project-fields');
    projectFields.appendChild(field(t('projectName'), 'text', state.project.name, value => {
      state.project.name = value;
      save();
      updatePrintHeader();
    }, { maxlength: 200, placeholder: t('projectNamePlaceholder') }));
    projectFields.appendChild(field(t('asOfDate'), 'date', state.project.asOfDate, value => {
      state.project.asOfDate = value || today();
      save();
      render();
    }));
    project.appendChild(projectFields);
    project.addEventListener('toggle', () => { projectPanelOpen = project.open; });
    box.appendChild(project);

    if (!HKCC.jurisdictions.some(j => j.id === activeScopeJurisdiction)) {
      activeScopeJurisdiction = preferredScopeJurisdiction();
    }

    const scopeHeading = el('h2', 'scope-section-title', t('scopeJurisdictions'));
    box.appendChild(scopeHeading);
    const tabs = el('div', 'scope-jurisdiction-tabs');
    tabs.setAttribute('role', 'tablist');
    tabs.setAttribute('aria-label', t('scopeJurisdictions'));
    for (const jurisdiction of HKCC.jurisdictions) {
      const jurisdictionScope = scopeForJurisdiction(jurisdiction.id);
      const count = jurisdictionScope.selectedLicenses.length + jurisdictionScope.selectedAttributes.length;
      const button = el('button', 'scope-jurisdiction-tab');
      button.type = 'button';
      button.id = `scope-tab-${jurisdiction.id}`;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', String(activeScopeJurisdiction === jurisdiction.id));
      button.setAttribute('aria-controls', `scope-panel-${jurisdiction.id}`);
      button.setAttribute('aria-label', t('scopeJurisdictionTab', { name: jurisdictionLabel(jurisdiction.id) }));
      button.classList.toggle('active', activeScopeJurisdiction === jurisdiction.id);
      button.classList.toggle('configured', count > 0);
      button.appendChild(el('span', null, jurisdictionLabel(jurisdiction.id)));
      if (count) button.appendChild(el('b', null, count));
      button.addEventListener('click', () => {
        activeScopeJurisdiction = jurisdiction.id;
        renderSidebar();
      });
      tabs.appendChild(button);
    }
    box.appendChild(tabs);

    const jurisdiction = HKCC.jurisdictions.find(j => j.id === activeScopeJurisdiction);
    if (jurisdiction) {
      const jurisdictionScope = scopeForJurisdiction(jurisdiction.id);
      const panel = el('section', 'scope-jurisdiction-panel');
      panel.id = `scope-panel-${jurisdiction.id}`;
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `scope-tab-${jurisdiction.id}`);

      const panelHead = el('div', 'scope-panel-head');
      const title = el('div');
      title.appendChild(el('h3', null, jurisdictionLabel(jurisdiction.id)));
      const selectedSummary = jurisdictionScope.selectedLicenses.length || jurisdictionScope.selectedAttributes.length ?
        t('scopeConfigured', {
          licenses: jurisdictionScope.selectedLicenses.length,
          attributes: jurisdictionScope.selectedAttributes.length
        }) : t('scopeNotConfigured');
      title.appendChild(el('p', null, selectedSummary));
      panelHead.appendChild(title);
      if (jurisdictionScope.selectedLicenses.length || jurisdictionScope.selectedAttributes.length) {
        const clear = el('button', 'scope-clear-jurisdiction', t('scopeClearJurisdiction'));
        clear.type = 'button';
        clear.addEventListener('click', () => clearJurisdictionScope(jurisdiction.id));
        panelHead.appendChild(clear);
      }
      panel.appendChild(panelHead);

      panel.appendChild(el('h4', 'scope-subheading', t('scopeEntities')));
      const groups = [];
      for (const rawLicense of jurisdictionScope.licenses) {
        let group = groups.find(item => item.key === rawLicense.group);
        if (!group) {
          group = { key: rawLicense.group, label: trLicense(rawLicense).group, licenses: [] };
          groups.push(group);
        }
        group.licenses.push(rawLicense);
      }

      for (const group of groups) {
        const groupKey = `${jurisdiction.id}:${group.key}`;
        const selectedCount = group.licenses.filter(item => state.licenses.has(item.id)).length;
        const stored = licenseGroupState.get(groupKey);
        const isOpen = stored == null ? selectedCount > 0 : stored;
        const groupBox = el('div', 'scope-license-group');
        const toggle = el('button', 'scope-license-group-toggle');
        toggle.type = 'button';
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', t('scopeGroupToggle', { name: group.label }));
        toggle.appendChild(el('span', 'scope-chevron', isOpen ? '▾' : '▸'));
        toggle.appendChild(el('span', 'scope-license-group-name', group.label));
        toggle.appendChild(el('span', 'scope-license-group-count', `${selectedCount}/${group.licenses.length}`));
        toggle.addEventListener('click', () => {
          licenseGroupState.set(groupKey, !isOpen);
          renderSidebar();
        });
        groupBox.appendChild(toggle);
        if (isOpen) {
          const options = el('div', 'scope-license-options');
          for (const rawLicense of group.licenses) {
            options.appendChild(option(rawLicense.id, trLicense(rawLicense), state.licenses));
          }
          groupBox.appendChild(options);
        }
        panel.appendChild(groupBox);
      }

      panel.appendChild(el('h4', 'scope-subheading scope-characteristics-heading', t('scopeCharacteristics')));
      const attributes = relevantAttributes(jurisdictionScope);
      if (!jurisdictionScope.selectedLicenses.length && !jurisdictionScope.selectedAttributes.length) {
        panel.appendChild(el('p', 'scope-hint', t('scopeSelectEntityFirst')));
      } else {
        const attributeOptions = el('div', 'scope-attribute-options');
        for (const rawAttribute of attributes) {
          attributeOptions.appendChild(option(rawAttribute.id, trAttribute(rawAttribute), state.attributes));
        }
        panel.appendChild(attributeOptions);
      }
      box.appendChild(panel);
    }

    const current = el('section', 'scope-current');
    const currentHead = el('div', 'scope-current-head');
    currentHead.appendChild(el('h2', null, t('scopeCurrent')));
    if (state.licenses.size || state.attributes.size) {
      const clear = el('button', null, t('scopeClearAll'));
      clear.type = 'button';
      clear.addEventListener('click', clearAllScope);
      currentHead.appendChild(clear);
    }
    current.appendChild(currentHead);
    if (!state.licenses.size && !state.attributes.size) {
      current.appendChild(el('p', 'scope-hint', t('scopeCurrentEmpty')));
    } else {
      for (const item of HKCC.jurisdictions) {
        const itemScope = scopeForJurisdiction(item.id);
        if (!itemScope.selectedLicenses.length && !itemScope.selectedAttributes.length) continue;
        const row = el('div', 'scope-current-row');
        row.appendChild(el('strong', null, jurisdictionLabel(item.id)));
        const labels = [
          ...itemScope.selectedLicenses.map(entry => trLicense(entry).label),
          ...itemScope.selectedAttributes.map(entry => trAttribute(entry).label)
        ];
        row.appendChild(el('span', null, labels.join(HKCC.locale === 'en' ? '; ' : '；')));
        current.appendChild(row);
      }
      current.appendChild(el('div', 'scope-control-count',
        t('scopeControlCount', { n: HKCC.controls.filter(applies).length })));
    }
    box.appendChild(current);
  }

  function field(labelText, type, value, onChange, options) {
    const label = el('label', 'stacked-field');
    label.appendChild(el('span', null, labelText));
    const input = el('input');
    input.type = type;
    input.value = value || '';
    if (options?.maxlength) input.maxLength = options.maxlength;
    if (options?.placeholder) input.placeholder = options.placeholder;
    input.addEventListener(type === 'date' ? 'change' : 'input', event => onChange(event.target.value));
    label.appendChild(input);
    return label;
  }

  function option(id, item, set) {
    const label = el('label', 'opt');
    const input = el('input');
    input.type = 'checkbox';
    input.checked = set.has(id);
    input.addEventListener('change', () => {
      input.checked ? set.add(id) : set.delete(id);
      save();
      render();
    });
    const text = el('div', 'opt-text');
    text.appendChild(el('div', 'opt-label', item.label));
    if (item.note) text.appendChild(el('div', 'opt-note', item.note));
    label.append(input, text);
    return label;
  }

  function render() {
    renderSidebar();
    updatePrintHeader();
    $('#merge').checked = state.merge;
    $('#gaps').checked = state.gapsOnly;
    $('#jurisdiction-filter').value = state.jurisdiction;
    $('#domain-filter').value = state.domain;

    const active = HKCC.controls.filter(applies);
    const allGroups = E.cluster(active, byId, state.merge);
    let visible = allGroups.filter(matchesQuery);
    if (state.jurisdiction) {
      visible = visible.filter(group => group.some(c => controlJurisdictionId(c) === state.jurisdiction));
    }
    if (state.domain) visible = visible.filter(group => group.some(c => c.domain === state.domain));
    if (state.gapsOnly) visible = visible.filter(group => E.pendingCount(group, state.assessments) > 0);
    visible.sort(compareGroups);
    currentVisibleGroups = visible;
    renderSummary(active, allGroups);

    const out = $('#results');
    out.innerHTML = '';
    if (!state.licenses.size) {
      out.appendChild(emptyState(t('emptyNoLicenseTitle'), t('emptyNoLicenseNote')));
      return;
    }
    if (!visible.length) {
      out.appendChild(emptyState(t('emptyNoMatchTitle'),
        state.gapsOnly ? t('emptyNoMatchGaps') : t('emptyNoMatchQuery')));
      return;
    }

    for (const domain of HKCC.domains) {
      const groups = visible.filter(group => group[0].domain === domain.id);
      if (!groups.length) continue;
      const translatedDomain = trDomain(domain);
      const section = el('section', 'domain');
      const heading = el('h2', null, translatedDomain.label);
      heading.appendChild(el('span', 'n', t('countItems', { n: groups.length })));
      section.append(heading, el('p', 'desc', translatedDomain.desc));
      for (const group of groups) section.appendChild(renderControl(group));
      out.appendChild(section);
    }
  }

  function compareGroups(a, b) {
    if (!state.gapsOnly) return 0;
    const firstDate = group => group
      .filter(c => !['done', 'na'].includes(assessment(c.id).status))
      .map(c => assessment(c.id).targetDate || '9999-12-31')
      .sort()[0];
    // 同日到期时按标题排序，须用当前语言的标题，否则英文界面按简体字序排列。
    return firstDate(a).localeCompare(firstDate(b)) ||
      trControl(a[0]).title.localeCompare(trControl(b[0]).title, HKCC.locale);
  }

  function emptyState(title, note) {
    const box = el('div', 'panel empty');
    box.appendChild(el('strong', null, title));
    box.appendChild(document.createTextNode(note));
    return box;
  }

  function renderControl(group) {
    const primary = group[0];
    const translatedPrimary = trControl(primary);
    const card = el('article', 'panel control');
    const head = el('div', 'control-head');
    const titleBox = el('div');
    titleBox.appendChild(el('h3', 'control-title', translatedPrimary.title));
    titleBox.appendChild(el('div', 'control-ids', group.map(c => c.id).join('  ·  ')));
    head.appendChild(titleBox);
    const pending = E.pendingCount(group, state.assessments);
    head.appendChild(el('span', pending ? 'tag pending' : 'tag complete',
      pending ? t('pendingCount', { n: pending }) : t('allComplete')));
    card.appendChild(head);

    card.appendChild(el('p', 'control-req', translatedPrimary.requirement));
    for (const control of group.slice(1)) {
      const extra = el('p', 'control-req');
      extra.appendChild(el('strong', null,
        t('alsoStates', { regulator: trSource(control.sourceId).regulator })));
      extra.appendChild(document.createTextNode(' ' + trControl(control).requirement));
      card.appendChild(extra);
    }

    const members = el('div', 'assessment-members');
    for (const control of group) members.appendChild(renderMember(control));
    card.appendChild(members);

    const quoted = group.filter(c => c.quote);
    if (quoted.length) {
      const details = el('details', 'quote');
      details.appendChild(el('summary', null, t('quoteSummary')));
      for (const control of quoted) {
        const label = control.quoteStatus === 'verbatim' ? t('quoteVerbatim') :
          control.quoteStatus === 'excerpt' ? t('quoteExcerpt') : t('quoteSummaryType');
        details.appendChild(el('div', 'quote-kind', label));
        const quote = el('blockquote', null, control.quote);
        quote.appendChild(el('footer', 'source-line',
          `— ${HKCC.sources[control.sourceId].titleEn}, ${control.clause}`));
        details.appendChild(quote);
      }
      card.appendChild(details);
    }

    const tags = el('div', 'tags');
    if (group.length > 1) tags.appendChild(el('span', 'tag merged', t('tagMerged', { n: group.length })));
    const licenceIds = new Set();
    const attributeIds = new Set();
    for (const control of group) {
      for (const id of control.applicability.licenses) if (state.licenses.has(id)) licenceIds.add(id);
      for (const id of control.applicability.attributes || []) if (state.attributes.has(id)) attributeIds.add(id);
      if (control.deadline) tags.appendChild(el('span', 'tag deadline', t('tagDeadline', { date: control.deadline })));
    }
    for (const id of licenceIds) {
      const item = HKCC.licenses.find(x => x.id === id);
      if (item) tags.appendChild(el('span', 'tag', t('tagApplies', { value: trLicense(item).label })));
    }
    for (const id of attributeIds) {
      const item = HKCC.attributes.find(x => x.id === id);
      if (item) tags.appendChild(el('span', 'tag', t('tagTriggered', { value: trAttribute(item).label })));
    }
    if (tags.childNodes.length) card.appendChild(tags);

    const notes = group.flatMap(c => {
      const translated = trControl(c);
      return [translated.applicabilityNote || c.applicabilityNote, translated.note || c.note];
    }).filter(Boolean);
    for (const noteText of [...new Set(notes)]) {
      card.appendChild(el('p', 'control-note', t('notePrefix') + noteText));
    }
    return card;
  }

  function renderMember(control) {
    const source = trSource(control.sourceId);
    const translatedControl = trControl(control);
    const record = assessment(control.id);
    const member = el('section', 'assessment-member');
    const top = el('div', 'member-top');
    const sourceLine = el('div', 'source-line');
    sourceLine.appendChild(el('span', 'tag reg-' + regKey(source.regulator), source.regulator));
    if (source.verifiedOn) {
      sourceLine.title = t('sourceMetaTip', { issued: source.issued, verified: source.verifiedOn });
    }
    const link = el('a', null, HKCC.sourceTitle(control.sourceId));
    link.href = source.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    sourceLine.append(link, el('span', 'clause', translatedControl.clause || control.clause));
    if (source.issued && source.issued !== '—') sourceLine.appendChild(el('span', 'clause', source.issued));
    top.append(sourceLine, renderAssess(control.id));
    member.appendChild(top);

    const details = el('details', 'work-record');
    if (record.implementationNote || record.evidenceRef || record.owner || record.targetDate) details.open = true;
    const summaryText = record.implementationNote || record.evidenceRef || record.owner || record.targetDate ?
      t('recordFilled') : t('recordEmpty');
    details.appendChild(el('summary', null, summaryText));
    const grid = el('div', 'record-grid');
    grid.appendChild(recordField(control.id,
      record.status === 'na' ? t('naReason') : t('implementationNote'), 'implementationNote', 'textarea',
      record.implementationNote, t('implementationPlaceholder'), 10000));
    grid.appendChild(recordField(control.id, t('evidenceRef'), 'evidenceRef', 'textarea', record.evidenceRef,
      t('evidencePlaceholder'), 10000));
    grid.appendChild(recordField(control.id, t('owner'), 'owner', 'text', record.owner,
      t('ownerPlaceholder'), 200));
    grid.appendChild(recordField(control.id, t('targetDate'), 'targetDate', 'date', record.targetDate));
    details.appendChild(grid);

    const due = E.dueState(record.targetDate, state.project.asOfDate);
    if (due) details.appendChild(el('span', `tag ${due}`, due === 'overdue' ? t('overdue') : t('dueSoon')));
    member.appendChild(details);
    return member;
  }

  function renderAssess(id) {
    const box = el('div', 'assess');
    const current = assessment(id).status || 'none';
    for (const status of STATUSES) {
      const label = el('label', status.cls);
      const input = el('input');
      input.type = 'radio';
      input.name = `as-${id}`;
      input.checked = current === status.id;
      input.addEventListener('change', () => {
        updateAssessment(id, 'status', status.id);
        render();
      });
      const labelText = t(status.key);
      label.append(input, document.createTextNode(labelText));
      label.title = labelText;
      box.appendChild(label);
    }
    return box;
  }

  function recordField(id, labelText, key, type, value, placeholder, maxlength) {
    const label = el('label', 'record-field');
    label.appendChild(el('span', null, labelText));
    const input = el(type === 'textarea' ? 'textarea' : 'input');
    if (type !== 'textarea') input.type = type;
    input.value = value || '';
    if (placeholder) input.placeholder = placeholder;
    if (maxlength) input.maxLength = maxlength;
    input.addEventListener(type === 'date' ? 'change' : 'input', event => {
      updateAssessment(id, key, event.target.value);
      if (type === 'date') render();
    });
    label.appendChild(input);
    return label;
  }

  function renderSummary(active, groups) {
    const box = $('#summary');
    box.innerHTML = '';
    const top = el('div', 'summary-top');
    top.appendChild(el('span', 'summary-count', String(groups.length)));
    top.appendChild(el('span', 'summary-label', t('summaryLabel')));
    box.appendChild(top);
    const merged = active.length - groups.length;
    box.appendChild(el('div', 'summary-note', merged > 0 ?
      t('summaryFromMerged', { total: active.length, merged }) :
      t('summaryFrom', { total: active.length })));

    if (!state.storageAvailable) {
      box.appendChild(el('div', 'storage-warning', t('storageWarning')));
    }
    if (state.quarantined) {
      box.appendChild(el('div', 'storage-warning', t('quarantineWarning', { key: BROKEN_STORE_KEY })));
    }
    if (Object.keys(state.unresolvedAssessments).length) {
      box.appendChild(el('div', 'storage-warning',
        t('unresolvedWarning', { n: Object.keys(state.unresolvedAssessments).length })));
    }

    const counts = {};
    for (const control of active) {
      const regulator = trSource(control.sourceId).regulator;
      counts[regulator] = (counts[regulator] || 0) + 1;
    }
    const regulators = el('div', 'by-reg');
    for (const [regulator, count] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
      regulators.appendChild(el('span', 'tag reg-' + regKey(regulator), `${regulator} ${count}`));
    }
    if (regulators.childNodes.length) box.appendChild(regulators);

    if (active.length) {
      const tally = { done: 0, partial: 0, gap: 0, na: 0, none: 0 };
      for (const control of active) tally[assessment(control.id).status || 'none']++;
      const scored = active.length - tally.na;
      const pct = scored ? Math.round(((tally.done + tally.partial * 0.5) / scored) * 100) : 0;
      const wrap = el('div', 'progress-wrap');
      const progressHead = el('div', 'progress-head');
      progressHead.appendChild(el('span', null, t('progressLabel', { pct })));
      progressHead.appendChild(el('span', null, t('progressTally', {
        done: tally.done, partial: tally.partial, gap: tally.gap, none: tally.none
      })));
      const bar = el('div', 'progress');
      for (const [cls, count] of [['done', tally.done], ['partial', tally.partial], ['gap', tally.gap]]) {
        if (!count) continue;
        const segment = el('i', cls);
        segment.style.width = `${count / active.length * 100}%`;
        bar.appendChild(segment);
      }
      wrap.append(progressHead, bar,
        el('div', 'score-note', t('progressDisclaimer')));
      box.appendChild(wrap);
    }
  }

  let currentVisibleGroups = [];
  function statusLabel(status) {
    const item = STATUSES.find(entry => entry.id === (status || 'none')) || STATUSES[0];
    return t(item.key);
  }

  function applicabilityText(control) {
    const licences = control.applicability.licenses
      .filter(id => state.licenses.has(id))
      .map(id => {
        const item = HKCC.licenses.find(entry => entry.id === id);
        return item ? trLicense(item).label : null;
      })
      .filter(Boolean);
    const attributes = (control.applicability.attributes || [])
      .map(id => {
        const item = HKCC.attributes.find(entry => entry.id === id);
        return item ? trAttribute(item).label : null;
      })
      .filter(Boolean);
    return [...licences, ...attributes].join(HKCC.locale === 'en' ? '; ' : '；');
  }

  function controlJurisdictionId(control) {
    const licenceId = control.applicability.licenses[0];
    return licenseById.get(licenceId)?.jurisdiction || '';
  }

  function controlJurisdiction(control) {
    const id = controlJurisdictionId(control);
    return id ? jurisdictionLabel(id) : '';
  }

  function toCSV() {
    const rows = [[t('csvProjectName'), t('csvAsOfDate'), t('csvJurisdiction'), t('csvId'), t('csvDomain'),
      t('csvTitle'), t('csvRequirement'), t('csvApplicability'), t('csvRegulator'), t('csvSource'), t('csvClause'),
      t('csvIssued'), t('csvVerified'), t('csvDeadline'), t('csvUrl'), t('csvQuoteType'), t('csvQuote'),
      t('csvStatus'), t('csvImplementation'), t('csvEvidence'), t('csvOwner'), t('csvTargetDate'),
      t('csvDueState')]];
    for (const group of currentVisibleGroups) {
      for (const control of group) {
        if (state.gapsOnly && ['done', 'na'].includes(assessment(control.id).status)) continue;
        const source = trSource(control.sourceId);
        const translatedControl = trControl(control);
        const rawDomain = HKCC.domains.find(item => item.id === control.domain);
        const domain = rawDomain ? trDomain(rawDomain) : null;
        const record = assessment(control.id);
        const due = E.dueState(record.targetDate, state.project.asOfDate);
        const quoteType = control.quoteStatus === 'verbatim' ? t('quoteVerbatim') :
          control.quoteStatus === 'excerpt' ? t('quoteExcerpt') : control.quote ? t('quoteSummaryType') : '';
        rows.push([state.project.name, state.project.asOfDate, controlJurisdiction(control), control.id,
          domain?.label || control.domain, translatedControl.title, translatedControl.requirement,
          applicabilityText(control), source.regulator, HKCC.sourceTitle(control.sourceId),
          translatedControl.clause || control.clause, source.issued, source.verifiedOn || '', control.deadline || '',
          source.url, quoteType, control.quote || '', statusLabel(record.status), record.implementationNote || '',
          record.evidenceRef || '', record.owner || '', record.targetDate || '',
          due === 'overdue' ? t('overdue') : due === 'due-soon' ? t('dueSoon') : '']);
      }
    }
    return '\ufeff' + rows.map(row => row.map(E.csvCell).join(',')).join('\r\n');
  }

  function download(name, content, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function safeFileName(value) {
    return (value || 'apac-compliance').trim().replace(/[^\p{L}\p{N}._-]+/gu, '-').slice(0, 80) || 'apac-compliance';
  }

  function exportProject() {
    const data = projectData(true);
    download(`${safeFileName(state.project.name)}-${today()}.hkcc.json`, JSON.stringify(data, null, 2),
      'application/json;charset=utf-8');
  }

  async function importProject(file) {
    if (!file) return;
    if (file.size > MAX_PROJECT_BYTES) {
      alert(t('importTooLarge'));
      return;
    }
    let parsed;
    try {
      parsed = JSON.parse(await file.text());
    } catch (error) {
      alert(t('importInvalidJson'));
      return;
    }
    const result = E.validateProject(parsed, definitions);
    if (!result.ok) {
      alert(t('importValidationFailed', {
        errors: result.errors.slice(0, 12).map(formatDiagnostic).join('\n')
      }));
      return;
    }
    const data = result.data;
    const known = Object.keys(data.assessments).length;
    const unresolved = Object.keys(data.unresolvedAssessments).length;
    const versionNote = data.controlDataVersion && data.controlDataVersion !== HKCC.meta.version ?
      t('importVersionDifferent', { imported: data.controlDataVersion, current: HKCC.meta.version }) :
      t('importVersion', { version: data.controlDataVersion || t('notRecorded') });
    const warningText = result.warnings.length ?
      t('importWarnings', { warnings: result.warnings.slice(0, 8).map(formatDiagnostic).join('\n') }) : '';
    const confirmed = confirm(t('confirmImport', {
      name: data.project.name || t('unnamedProject'),
      exportedAt: data.exportedAt || t('notRecorded'),
      versionNote,
      known,
      unresolved,
      warningText
    }));
    if (!confirmed) return;
    hydrate(data);
    activeScopeJurisdiction = preferredScopeJurisdiction();
    save();
    render();
  }

  function updatePrintHeader() {
    const separator = HKCC.locale === 'en' ? '; ' : '；';
    const licences = [...state.licenses]
      .map(id => {
        const item = HKCC.licenses.find(entry => entry.id === id);
        return item ? trLicense(item).label : null;
      }).filter(Boolean);
    const attributes = [...state.attributes]
      .map(id => {
        const item = HKCC.attributes.find(entry => entry.id === id);
        return item ? trAttribute(item).label : null;
      }).filter(Boolean);
    $('#ph-title').textContent = t('printTitle');
    $('#ph-project').textContent = t('phProject', { name: state.project.name || t('unnamedProject') });
    $('#ph-scope').textContent = t('phScope') + (licences.join(separator) || t('phNone'));
    $('#ph-attrs').textContent = t('phAttrs') + (attributes.join(separator) || t('phNone'));
    $('#ph-date').textContent = t('phAssessmentDate', {
      date: state.project.asOfDate || today(), version: HKCC.meta.version, verified: HKCC.verifiedOn()
    });
  }

  function renderDomainOptions() {
    const jurisdictionSelect = $('#jurisdiction-filter');
    jurisdictionSelect.innerHTML = '';
    const allJurisdictions = el('option', null, t('allJurisdictions'));
    allJurisdictions.value = '';
    jurisdictionSelect.appendChild(allJurisdictions);
    for (const jurisdiction of HKCC.jurisdictions) {
      const option = el('option', null, trJurisdiction(jurisdiction).label);
      option.value = jurisdiction.id;
      jurisdictionSelect.appendChild(option);
    }
    jurisdictionSelect.value = state.jurisdiction;
    jurisdictionSelect.setAttribute('aria-label', t('jurisdictionFilterAria'));

    const select = $('#domain-filter');
    select.innerHTML = '';
    const all = el('option', null, t('allDomains'));
    all.value = '';
    select.appendChild(all);
    for (const domain of HKCC.domains) {
      const option = el('option', null, trDomain(domain).label);
      option.value = domain.id;
      select.appendChild(option);
    }
    select.value = state.domain;
    select.setAttribute('aria-label', t('domainFilterAria'));
  }

  function renderChrome() {
    $('#app-title').textContent = t('appTitle');
    $('#export-project').textContent = t('btnExportProject');
    $('#import-project').textContent = t('btnImportProject');
    $('#export-csv').textContent = t('btnExport');
    $('#print').textContent = t('btnPrint');
    $('#reset').textContent = t('btnReset');
    $('#header-more-toggle').textContent = t('btnMore');
    $('#scope-open').textContent = t('btnEditScope');
    const theme = $('#theme');
    theme.textContent = t('btnTheme');
    theme.title = t('btnThemeTitle');
    const query = $('#q');
    query.placeholder = t('searchPlaceholder');
    query.setAttribute('aria-label', t('searchAria'));
    $('#merge-label').textContent = t('optMerge');
    $('#gaps-label').textContent = t('optGaps');
    $('#version').textContent = t('versionLine', { version: HKCC.meta.version, date: HKCC.verifiedOn() });
    $('#version').title = HKCC.verifiedOn() === HKCC.lastVerifiedOn() ? '' :
      t('verifiedRangeTip', { from: HKCC.verifiedOn(), to: HKCC.lastVerifiedOn() });

    const footer = $('#disclaimer');
    footer.innerHTML = '';
    const first = el('p');
    first.append(el('strong', null, t('disclaimerLabel')), document.createTextNode(t('disclaimerBody')));
    const second = el('p');
    second.append(el('strong', null, t('langNoteLabel')), document.createTextNode(t('langNoteBody')));
    footer.append(first, second);

    for (const button of document.querySelectorAll('#lang [data-lang]')) {
      const selected = button.dataset.lang === HKCC.locale;
      button.classList.toggle('on', selected);
      button.setAttribute('aria-pressed', String(selected));
    }
    $('#lang').setAttribute('aria-label', t('langLabel'));
    renderDomainOptions();
  }

  function renderAll() {
    renderChrome();
    render();
    syncHeaderMore();
    syncScopeDrawer();
  }

  function syncHeaderMore() {
    const actions = $('.header-actions');
    const toggle = $('#header-more-toggle');
    actions.classList.toggle('more-open', headerMoreOpen);
    toggle.setAttribute('aria-expanded', String(headerMoreOpen));
  }

  function closeHeaderMore() {
    if (!headerMoreOpen) return;
    headerMoreOpen = false;
    syncHeaderMore();
  }

  function syncScopeDrawer() {
    const isMobile = mobileScopeQuery.matches;
    const open = isMobile && scopeDrawerOpen;
    document.body.classList.toggle('scope-drawer-open', open);
    $('#scope-open').setAttribute('aria-expanded', String(open));
    const sidebar = $('#sidebar');
    sidebar.inert = isMobile && !open;
    sidebar.setAttribute('aria-hidden', String(isMobile && !open));
  }

  function openScopeDrawer() {
    if (!mobileScopeQuery.matches) return;
    scopeReturnFocus = document.activeElement;
    scopeDrawerOpen = true;
    closeHeaderMore();
    syncScopeDrawer();
    requestAnimationFrame(() => $('.scope-close', $('#sidebar'))?.focus());
  }

  function closeScopeDrawer() {
    if (!scopeDrawerOpen) return;
    scopeDrawerOpen = false;
    syncScopeDrawer();
    if (scopeReturnFocus?.focus) scopeReturnFocus.focus();
    scopeReturnFocus = null;
  }

  function init() {
    load();
    activeScopeJurisdiction = preferredScopeJurisdiction();
    projectPanelOpen = !state.project.name;
    HKCC.applyDocumentLocale();
    const domainFilter = $('#domain-filter');
    const jurisdictionFilter = $('#jurisdiction-filter');
    $('#q').addEventListener('input', event => {
      state.query = event.target.value.trim();
      render();
    });
    $('#merge').addEventListener('change', event => {
      state.merge = event.target.checked;
      save();
      render();
    });
    $('#gaps').addEventListener('change', event => {
      state.gapsOnly = event.target.checked;
      render();
    });
    domainFilter.addEventListener('change', event => {
      state.domain = event.target.value;
      render();
    });
    jurisdictionFilter.addEventListener('change', event => {
      state.jurisdiction = event.target.value;
      render();
    });
    $('#export-csv').addEventListener('click', () =>
      download(`${safeFileName(state.project.name)}-${today()}.csv`, toCSV(), 'text/csv;charset=utf-8'));
    $('#export-project').addEventListener('click', exportProject);
    const importInput = $('#import-file');
    $('#import-project').addEventListener('click', () => importInput.click());
    importInput.addEventListener('change', async event => {
      const file = event.target.files?.[0];
      event.target.value = '';
      await importProject(file);
    });
    $('#print').addEventListener('click', () => {
      updatePrintHeader();
      window.print();
    });
    $('#reset').addEventListener('click', () => {
      if (!confirm(t('confirmReset'))) return;
      state.project = { name: '', asOfDate: today() };
      state.licenses.clear();
      state.attributes.clear();
      state.assessments = Object.create(null);
      state.unresolvedAssessments = Object.create(null);
      state.query = '';
      state.jurisdiction = '';
      state.domain = '';
      state.gapsOnly = false;
      $('#q').value = '';
      activeScopeJurisdiction = HKCC.jurisdictions[0]?.id || '';
      projectPanelOpen = true;
      save();
      render();
    });
    $('#theme').addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : current === 'light' ? '' : 'dark';
      if (next) document.documentElement.setAttribute('data-theme', next);
      else document.documentElement.removeAttribute('data-theme');
    });

    $('#header-more-toggle').addEventListener('click', event => {
      event.stopPropagation();
      headerMoreOpen = !headerMoreOpen;
      syncHeaderMore();
    });
    $('#secondary-actions').addEventListener('click', event => {
      if (event.target.closest('button')) closeHeaderMore();
    });
    $('#scope-open').addEventListener('click', openScopeDrawer);
    $('#scope-backdrop').addEventListener('click', closeScopeDrawer);
    mobileScopeQuery.addEventListener('change', syncScopeDrawer);
    document.addEventListener('click', event => {
      if (headerMoreOpen && !event.target.closest('.header-actions')) closeHeaderMore();
    });
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      if (scopeDrawerOpen) closeScopeDrawer();
      else closeHeaderMore();
    });

    const language = $('#lang');
    for (const definition of HKCC.locales) {
      const button = el('button', 'lang-btn', definition.label);
      button.type = 'button';
      button.dataset.lang = definition.id;
      button.lang = definition.html;
      button.addEventListener('click', () => HKCC.setLocale(definition.id));
      language.appendChild(button);
    }
    document.addEventListener('hkcc:localechange', renderAll);
    renderAll();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
