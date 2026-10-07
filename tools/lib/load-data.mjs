/**
 * 在 Node 中载入全部数据文件，供校验脚本使用。
 * 数据文件是为浏览器写的普通脚本（调用全局 HKCC.add*），这里提供同名的最小注册表。
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

export function loadData() {
  const HKCC = {
    baseLocale: 'zh-Hans',
    sources: {}, jurisdictions: [], licenses: [], attributes: [], domains: [], controls: [],
    equivalence: [], i18n: {},
    addSources(o) { Object.assign(this.sources, o); },
    addJurisdictions(a) { this.jurisdictions.push(...a); },
    addLicenses(a) { this.licenses.push(...a); },
    addAttributes(a) { this.attributes.push(...a); },
    addDomains(a) { this.domains.push(...a); },
    addControls(a) { this.controls.push(...a); },
    addEquivalence(a) { this.equivalence.push(...a); },
    addI18n(loc, obj) {
      const b = this.i18n[loc] || (this.i18n[loc] = {});
      for (const [k, v] of Object.entries(obj)) Object.assign(b[k] || (b[k] = {}), v);
    }
  };
  const load = p => new Function('HKCC', readFileSync(join(root, p), 'utf8'))(HKCC);

  load('data/jurisdictions.js');
  load('data/domains.js');
  for (const j of HKCC.jurisdictions) {
    load(`data/${j.id}/sources.js`);
    load(`data/${j.id}/taxonomy.js`);
    const dir = join(root, `data/${j.id}/controls`);
    for (const f of readdirSync(dir).filter(f => f.endsWith('.js')).sort()) {
      load(`data/${j.id}/controls/${f}`);
    }
  }
  load('data/equivalence.js');
  for (const f of readdirSync(join(root, 'data/i18n')).filter(f => f.endsWith('.js')).sort()) {
    load(`data/i18n/${f}`);
  }
  return HKCC;
}
