# vol-vue 项目开发规范

## 项目概述

**项目名称：** vol-vue  
**项目类型：** Vue.js 个人网站/作品集  
**项目地址：** https://yuzhupeng.top  
**作者：** jxx

### 技术栈

- **前端框架：** Vue.js 2.5.2
- **路由管理：** Vue Router 3.0.1
- **状态管理：** Vuex 3.1.1
- **UI 组件库：** Element UI 2.14.1、iView 3.2.2
- **国际化：** vue-i18n 8.22.4
- **HTTP 客户端：** Axios 0.18.0
- **构建工具：** Webpack 3.6.0
- **转译器：** Babel 6.22.1
- **代码检查：** ESLint 4.15.0
- **样式预处理：** Less 3.9.0

### 开发环境要求

- Node.js >= 6.0.0
- npm >= 3.0.0

---

## 项目结构说明

```
src/
├── api/              # API 接口和权限管理
├── assets/           # 静态资源（图片、字体等）
├── components/       # 可复用的 Vue 组件
├── config/           # 项目配置文件
├── extension/        # 扩展功能模块
├── i18n/             # 国际化配置和翻译文件
├── router/           # 路由配置
├── static/           # 静态文件（第三方库等）
├── store/            # Vuex 状态管理
├── utilities/        # 工具函数和公共方法
├── views/            # 页面组件
├── App.vue           # 根组件
└── main.js           # 应用入口文件
```

### 关键目录说明

- **src/views/PersonProfile/** - 个人资料页面相关组件
- **src/config/** - 项目配置，包含按钮配置、环境变量等
- **src/i18n/** - 多语言翻译文件，支持中文和其他语言
- **src/api/** - HTTP 请求和权限管理模块
- **src/store/** - Vuex 状态管理模块

---

## Vue 单文件组件规范

### 组件结构

所有 Vue 组件应遵循以下结构顺序：

```vue
<template>
  <!-- HTML 模板 -->
</template>

<script>
// 导入语句
import { ... } from '...'

export default {
  // 组件名称
  name: 'ComponentName',
  
  // 组件注册
  components: { ... },
  
  // 属性定义
  props: { ... },
  
  // 数据
  data() {
    return { ... }
  },
  
  // 计算属性
  computed: { ... },
  
  // 监听器
  watch: { ... },
  
  // 方法
  methods: { ... },
  
  // 生命周期钩子（按执行顺序）
  beforeCreate() { },
  created() { },
  beforeMount() { },
  mounted() { },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { }
}
</script>

<style lang="less" scoped>
/* 样式代码 */
</style>
```

### 命名规范

- **组件文件名：** 使用 PascalCase（如 `PersonProfile.vue`）或 kebab-case（如 `person-profile.vue`）
- **组件名称：** 使用 PascalCase（如 `PersonProfile`）
- **方法名：** 使用 camelCase（如 `getUserInfo`）
- **变量名：** 使用 camelCase（如 `userInfo`、`isLoading`）
- **常量名：** 使用 UPPER_SNAKE_CASE（如 `MAX_RETRY_COUNT`）
- **CSS 类名：** 使用 kebab-case（如 `.right-top`、`.skill-item`）

### 模板规范

- 使用 `v-bind:` 或 `:` 绑定属性
- 使用 `v-on:` 或 `@` 绑定事件
- 使用 `{{ }}` 进行文本插值
- 避免在模板中进行复杂的逻辑运算，应使用计算属性或方法
- 使用 `v-if`、`v-show`、`v-for` 等指令时，确保有唯一的 `key`

### 脚本规范

- 使用 ES6+ 语法
- 避免在组件中直接修改 props，应通过事件向父组件通信
- 使用 `this.$t()` 进行国际化文本翻译
- 使用 `this.http` 进行 HTTP 请求
- 使用 `this.$store` 访问 Vuex 状态

### 样式规范

- 使用 Less 作为样式预处理器
- 始终添加 `scoped` 属性，避免样式污染
- 使用 BEM 命名法组织样式（如 `.block__element--modifier`）
- 响应式设计：使用媒体查询支持移动端（参考 `@media (max-width: 768px)`）
- 避免使用内联样式，应在 `<style>` 块中定义

---

## 国际化（i18n）规范

### 使用方式

在模板中使用 `$t()` 方法进行翻译：

```vue
<template>
  <h1>{{ $t('personalInfo.name') }}</h1>
  <p>{{ $t('skills.title') }}</p>
</template>
```

在脚本中使用：

```javascript
const message = this.$t('personalInfo.position')
```

### 翻译文件组织

翻译文件应按功能模块组织，使用嵌套的对象结构：

```javascript
{
  personalInfo: {
    name: '姓名',
    position: '职位',
    description: '描述'
  },
  skills: {
    title: '技能',
    categories: {
      frontend: { title: '前端' },
      backend: { title: '后端' }
    }
  }
}
```

### 新增翻译

- 在 `src/i18n/` 目录中维护各语言的翻译文件
- 新增翻译时，需要同时更新所有语言文件
- 使用有意义的 key 名称，避免过于简洁或模糊

---

## 代码风格规范

### ESLint 配置

项目使用 ESLint 进行代码检查，配置文件为 `.eslintrc.js`。

### 常见规范

- **缩进：** 2 个空格
- **分号：** 必须使用分号结尾
- **引号：** 优先使用单引号，除非字符串中包含单引号
- **空格：** 
  - 关键字后面加空格（如 `if (condition)`）
  - 对象属性冒号后加空格（如 `{ key: value }`）
  - 函数参数之间加空格（如 `function(a, b)`）
- **注释：** 
  - 单行注释使用 `//`
  - 多行注释使用 `/* */`
  - 注释应清晰说明代码意图

### 代码检查

运行以下命令检查代码风格：

```bash
npm run lint
```

修复自动可修复的问题：

```bash
npm run lint -- --fix
```

---

## 开发工作流

### 本地开发

启动开发服务器：

```bash
npm install          # 首次安装依赖
npm run dev          # 启动开发服务器
# 或
npm start
```

开发服务器默认运行在 `http://localhost:8080`

### 构建生产版本

```bash
npm run build
```

生成的文件位于 `dist/` 目录

### 代码检查

```bash
npm run lint         # 检查代码风格
npm run lint -- --fix # 自动修复问题
```

### 测试

```bash
npm run unit         # 运行单元测试
npm run e2e          # 运行端到端测试
npm test             # 运行所有测试
```

### 部署到 GitHub Pages

```bash
# 方法一：使用 gh-pages 工具
npm install -g gh-pages
npm run build
gh-pages -d dist

# 方法二：使用 git subtree
npm run build
git add .
git commit -m 'push dist'
git subtree push --prefix dist origin gh-pages
```

### 清理缓存

```bash
npm cache clean --force
rm -r node_modules
rm package-lock.json
npm install
```

---

## HTTP 请求规范

### 使用方式

在组件中使用 `this.http` 进行 HTTP 请求：

```javascript
this.http.get('/api/endpoint').then(response => {
  // 处理响应
}).catch(error => {
  // 处理错误
})
```

### 初始化

HTTP 模块在 `src/main.js` 中初始化：

```javascript
import http from './api/http'
Vue.prototype.http = http
http.init(vue)
```

---

## 权限管理规范

### 使用方式

在组件中使用 `this.permission` 进行权限检查：

```javascript
if (this.permission.hasPermission('admin')) {
  // 执行管理员操作
}
```

### 初始化

权限模块在 `src/main.js` 中初始化：

```javascript
import permission from './api/permission'
Vue.prototype.permission = permission
permission.init(vue)
```

---

## 路由导航进度条

项目使用 iView 的 Loading 组件显示路由导航进度条：

```javascript
router.beforeEach((to, from, next) => {
  vue.$Loading.start({ color: 'white', height: 2 })
  next()
})

router.afterEach(() => {
  vue.$Loading.finish()
})
```

---

## 常见问题和最佳实践

### 1. 避免直接修改 props

❌ **错误做法：**
```javascript
this.propValue = newValue  // 直接修改 props
```

✅ **正确做法：**
```javascript
this.$emit('update:propValue', newValue)  // 通过事件通信
```

### 2. 使用计算属性而不是方法

❌ **错误做法：**
```javascript
<p>{{ getUserName() }}</p>

methods: {
  getUserName() {
    return this.firstName + ' ' + this.lastName
  }
}
```

✅ **正确做法：**
```javascript
<p>{{ fullName }}</p>

computed: {
  fullName() {
    return this.firstName + ' ' + this.lastName
  }
}
```

### 3. 使用 v-show 还是 v-if

- **v-if：** 用于条件不经常改变的情况，减少 DOM 节点
- **v-show：** 用于频繁切换显示/隐藏的情况，只改变 CSS display 属性

### 4. 列表渲染必须有 key

```vue
<div v-for="item in items" :key="item.id">
  {{ item.name }}
</div>
```

### 5. 响应式数据更新

使用 `Vue.set()` 或 `this.$set()` 添加响应式属性：

```javascript
// 添加新属性
this.$set(this.user, 'email', 'user@example.com')

// 或
Vue.set(this.user, 'email', 'user@example.com')
```

### 6. 避免在 data 中使用箭头函数

❌ **错误做法：**
```javascript
data: () => ({
  message: 'Hello'
})
```

✅ **正确做法：**
```javascript
data() {
  return {
    message: 'Hello'
  }
}
```

### 7. 组件通信

- **父子通信：** 使用 props 和 $emit
- **兄弟组件通信：** 使用 Vuex 或事件总线
- **深层组件通信：** 使用 Vuex 或 provide/inject

### 8. 性能优化

- 使用 `v-lazy` 进行图片懒加载
- 使用 `keep-alive` 缓存组件状态
- 避免在模板中进行复杂计算
- 使用 `Object.freeze()` 冻结不需要响应式的大对象

---

## 相关资源

- [Vue.js 官方文档](https://vuejs.org/)
- [Vue Router 文档](https://router.vuejs.org/)
- [Vuex 文档](https://vuex.vuejs.org/)
- [Element UI 文档](https://element.eleme.io/)
- [vue-i18n 文档](https://kazupon.github.io/vue-i18n/)

---

**最后更新：** 2026 年 1 月 12 日
