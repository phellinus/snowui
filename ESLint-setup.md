# ESLint 配置说明

本文档整理本次在 `snowui` 项目内新增或更新的 ESLint/Prettier 相关配置，便于日后维护。

## 新增的配置文件

- `eslint.config.mjs`：使用 ESLint Flat Config，核心内容包括
  - 启用 `@typescript-eslint/parser` 并指向 `tsconfig.json`，确保类型信息可用。
  - 合并 `@eslint/js` 推荐规则、`@typescript-eslint/eslint-plugin` 的 strict 规则以及 `eslint-config-prettier`，同时启用 React Hooks、React Refresh、Prettier 插件。
  - 忽略 `build/`、`node_modules/` 等目录，保证扫描范围只覆盖业务源码。
- `.prettierrc.js`：统一格式化风格（单引号、2 空格缩进、120 字符行宽等），供 `eslint-plugin-prettier` 引用。

## 更新内容

- `package.json`
  - `devDependencies` 新增 ESLint/Prettier 及相关插件（`@eslint/js`、`@typescript-eslint/*`、`eslint-plugin-prettier`、`eslint-plugin-react-hooks`、`eslint-plugin-react-refresh`、`globals`、`prettier`、`cross-env` 等）。
  - 新增脚本
    - `lint`: `cross-env ESLINT_USE_FLAT_CONFIG=true eslint .`
    - `lint:fix`: `npm run lint -- --fix`
  - 保留 CRA 默认的 `eslintConfig` 字段，仅供 `react-scripts` 内置流程使用；自定义校验改为走 Flat Config。
- `.eslintrc.json`：保持在仓库中，便于 CRA 自带脚手架依赖；实际 lint 时通过 `ESLINT_USE_FLAT_CONFIG=true` 使用 `eslint.config.mjs`。

## 使用方式

1. **命令行**
   - 检查：`npm run lint`
   - 自动修复：`npm run lint:fix`
   - 手动执行：`npx cross-env ESLINT_USE_FLAT_CONFIG=true eslint <文件或目录> [--fix]`
2. **IDE（例如 WebStorm / VSCode）**
   - 确保触发 ESLint 时带上环境变量 `ESLINT_USE_FLAT_CONFIG=true`，或使用 IDE 的 Flat Config 支持。
   - 在编辑器中使用快捷键 `Option + Enter`，会出现 “ESLint: 修复当前文件”，对应 `eslint --fix`。

## 其他说明

- 运行 `npm run lint` 后报的 `prettier/prettier` 错误可以通过 `npm run lint:fix` 或编辑器快捷修复。
- 如果需要根据项目情况调整格式/规则，可分别修改 `.prettierrc.js` 或 `eslint.config.mjs`。
- 未来升级依赖时，请注意 `@typescript-eslint` 与 ESLint 主版本的兼容性；如遇 peer dependency 警告，可按需统一版本。
