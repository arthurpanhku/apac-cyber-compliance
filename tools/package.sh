#!/usr/bin/env bash
# 打包离线部署用的压缩档：只含运行所需文件（页面、样式、脚本、数据、图标）及说明与授权，
# 不含测试、工具与开发文件。没有构建步骤——压缩档内的文件与仓库中的完全相同。
#
#   bash tools/package.sh            # 产出 dist/apac-cyber-compliance-v<版本>.zip 及 .sha256
set -euo pipefail
cd "$(dirname "$0")/.."

VERSION=$(node -e "global.window = {}; require('./data/_registry.js'); process.stdout.write(window.HKCC.meta.version)")
NAME="apac-cyber-compliance-v${VERSION}"

rm -rf "dist/${NAME}" "dist/${NAME}.zip" "dist/${NAME}.zip.sha256"
mkdir -p "dist/${NAME}"
cp -R index.html css js data assets LICENSE CHANGELOG.md \
      README.md README.zh-Hans.md README.zh-Hant.md "dist/${NAME}/"

# 固定文件时间，使同一版本重复打包得到相同的压缩档与校验值
find "dist/${NAME}" -exec touch -h -d '2000-01-01T00:00:00Z' {} +
(cd dist && find "${NAME}" -print | LC_ALL=C sort | zip -qX -@ "${NAME}.zip" && sha256sum "${NAME}.zip" > "${NAME}.zip.sha256")

echo "dist/${NAME}.zip"
cat "dist/${NAME}.zip.sha256"
