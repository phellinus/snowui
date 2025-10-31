# SnowUI 设计说明

## 项目使用的关键技术与知识点

- **React 19 + Create React App 5**：以 CRA 作为脚手架快速启动项目，使用 React 19 的 `createRoot` API 构建组件化界面。
- **TypeScript**：通过枚举、联合类型与 `Partial` 泛型组合，给按钮组件提供类型安全的属性定义与智能提示。
- **Sass (SCSS)**：集中维护配色、尺寸、排版等设计令牌（`_variables.scss`），使用 mixin 在样式层复用尺寸/交互逻辑。
- **CSS 自定义属性**：在组件运行时注入 `--btn-*` 变量，驱动不同按钮实例的颜色、hover、禁用状态。
- **classnames 工具库**：根据 props 动态拼接 class，切换尺寸、类型、动画方向等样式。
- **ESLint Flat Config + Prettier**：自定义 lint 规范并整合格式化，保证 TypeScript/React/Sass 文件风格统一，提升可维护性。
- **Testing Library 基础配置**：保留 CRA 默认测试脚手架，为后续 UI 行为测试奠定基础。

## 按钮组件的设计思路

1. **属性建模**
   - 使用 `ButtonType`、`ButtonSize` 枚举枚举化按钮“外观”和“尺寸”，提供统一可选值。
   - 通过 `BaseButtonProps` 扩展颜色、文本色、链接地址、线条动画位置等自定义能力，再与 `ButtonHTMLAttributes`、`AnchorHTMLAttributes` 合并，兼容原生属性。
   - `Partial<NativeButtonProps & AnchorButtonProps>` 允许开发者在按钮 & 链接场景自由选择所需属性，避免大量手工透传。

2. **运行时主题控制**
   - 组件内准备 `presetColors` 预设调色板（primary、success、danger 等），也支持传入任意色值。
   - 每次渲染时根据按钮类型计算 `--btn-bg`、`--btn-border`、`--btn-text`、`--btn-hover-*` 等 CSS 变量，实现“数据驱动样式”。
   - Sass mixin 读取这些变量，在不同伪类（hover/disabled）下响应变化，使单个组件实例即可拥有独立主题。

3. **视觉层实现**
   - 基础 `.btn` 类利用 Sass mixin `button-size`、`button-style` 统一处理内边距、圆角、字体、交互态。
   - 各变体：
     - `btn-filled`：实心按钮，hover 时增强阴影强调层次。
     - `btn-border`：描边按钮，通过 hover 时填充背景与文字反转营造交互反馈。
     - `btn-line`：使用 `::before`/`::after` 伪元素绘制线条，并通过 `line-origin`、`line-position` 类控制动画方向与位置。
     - `btn-flat`：弱化边框与阴影，强调简洁风格。
     - `btn-gradient`：使用 `linear-gradient` 与 `color-mix` 制作渐变背景，同时配合位移阴影模拟浮起效果。
     - `btn-relief`：通过内阴影体现“浮雕/压印”质感。
     - `btn-link`：移除按钮视觉，继承链接语义，并在 disabled 时屏蔽交互。
   - Sass 变量文件引入类 Bootstrap 的重置（`_reboot.scss`）与设计令牌，保证不同组件共享一致的基础视觉语言。

4. **语义与可访问性**
   - 当 `btnType` 为 `Link` 且提供 `href` 时渲染 `<a>` 标签，保留原生可访问性；其他情况下使用 `<button>`。
   - 组件透传 `disabled`、`autoFocus`、`onClick` 等原生属性，确保键盘与屏幕阅读器兼容。

5. **组合与扩展**
   - 全局样式入口 `styles/index.scss` 聚合变量、重置、mixin、组件样式，便于后续新增组件直接复用令牌。
   - 通过在 `App.tsx` 展示多种类型/尺寸组合，验证按钮在不同语义颜色下的表现，也可作为未来文档/Story 的基础。

## 实现流程概览

1. **搭建基础工程**：使用 CRA + TypeScript 模板创建项目，保留默认测试和报告工具。
2. **配置样式体系**：引入 Sass，拆分变量、mixin、重置层，与组件样式分目录维护。
3. **实现按钮组件**：
   - 定义 TypeScript API；
   - 实现颜色处理与 CSS 自定义属性；
   - 使用 `classnames` 组装 class；
   - 针对 link/button 分支渲染。
4. **编写样式**：根据按钮类型分别书写 Sass，利用 mixin 复用公共逻辑，添加动画与交互效果。
5. **构建展示页面**：在 `App.tsx` 中组合多种变体，充当 demo 验证视觉与逻辑。
6. **建立代码规范**：引入 ESLint Flat Config 与 Prettier，新增 lint 脚本，编写 `ESLint-setup.md` 指导团队使用。

## 后续完善建议

- 引入 Storybook 或 Docs 页面，将 `SyButton` 属性、交互状态、设计规范可视化。
- 为 `ButtonProps` 增加更严格的区分联合（button/link）以避免属性误用。
- 编写交互测试（点击、禁用、hover class 变更），提升组件稳定性。
- 在 README 中补充组件库简介、安装方式与快速上手示例，完善整体文档。

