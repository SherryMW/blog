---
article: false
---

# 创建一个 Vue 应用

## 应用实例

每个 Vue 应用都是通过 [createApp](../../api/application.md#createapp) 函数创建一个新的 应用实例：

```js
import { createApp } from 'vue'

const app = createApp({
  /* 根组件选项 */
})
```

## 根组件

我们传入 `createApp` 的对象实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件

如果你使用的是单文件组件，我们可以直接从另一个文件中导入根组件

```js
import { createApp } from 'vue'
// 从一个单文件组件中导入根组件
import App from './App.vue'

const app = createApp(App)
```

虽然本指南中的许多示例只需要一个组件，但大多数真实的应用都是由一棵嵌套的、可重用的组件树组成的

```text
根组件 (App.vue)
├── 头部组件 (Header.vue)
│   ├── 导航菜单 (NavMenu.vue)
│   └── 用户信息 (UserInfo.vue)
├── 主内容区 (MainContent.vue)
│   ├── 文章列表 (ArticleList.vue)
│   └── 侧边栏 (Sidebar.vue)
└── 底部组件 (Footer.vue)
```

**实际示例对比**

直接定义根组件：

```js title="main.js"
import { createApp } from 'vue'

// 直接在 main.js 中定义根组件
const RootComponent = {
  data() {
    return {
      title: '我的应用'
    }
  },
  template: `
    <div>
      <h1>{{ title }}</h1>
      <button @click="title = '新标题'">修改标题</button>
    </div>
  `
}

const app = createApp(RootComponent)
app.mount('#app')
```

使用单文件组件（推荐）：

```vue title="App.vue"
<template>
  <div id="app">
    <Header />
    <MainContent />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MainContent from './components/MainContent.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    MainContent,
    Footer
  }
}
</script>
```

```js title="main.js"
// main.js
import { createApp } from 'vue'
// 从单文件组件导入根组件
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```

**为什么这样设计？**

- 组件化架构

    ```text
    // 整个应用就是组件嵌套
    createApp(RootComponent)
         ↓
    RootComponent
         ├── UserDashboard
         │   ├── UserProfile
         │   └── UserSettings
         └── ProductList
             ├── ProductItem
             └── Pagination
    ```

- 更好的代码组织

    ```js
    // 传统方式：所有代码在一个文件
    const app = createApp({
      // 几百行代码都在这里...
    })
    
    // 现代方式：模块化分离
    import App from './App.vue'           // 根组件
    import router from './router'         // 路由
    import store from './store'           // 状态管理
    
    const app = createApp(App)
    app.use(router)
    app.use(store)
    app.mount('#app')
    ```

- 可维护性和复用性

    ```vue
    <!-- 根组件可以很简单，只负责布局 -->
    <template>
      <div class="app">
        <AppHeader />
        <router-view />  <!-- 路由内容在这里渲染 -->
        <AppFooter />
      </div>
    </template>
    ```

我们会在指南的后续章节中讨论如何定义和组合多个组件。在那之前，我们得先关注一个组件内到底发生了什么

## 挂载应用

应用实例必须在调用了 `.mount()` 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串：

```html
<div id="app"></div>
```

```js
app.mount('#app')
```

应用根组件的内容将会被渲染在容器元素里面。容器元素自己将**不会**被视为应用的一部分

### .mount() 方法的调用时机

`.mount()` 方法应该始终在整个应用配置和资源注册完成后被调用

```js
const app = createApp(App)

// ✅ 正确的顺序：先配置，后挂载
app.use(router)
app.use(store)
app.component('MyComponent', MyComponent)
app.directive('focus', focusDirective)

// 在所有配置完成后调用 mount()
const vm = app.mount('#app')
```

```js
// ❌ 错误的顺序：先挂载，后配置
const vm = app.mount('#app') // 此时配置可能不会生效
app.use(router) // 可能无法正常工作
app.component('MyComponent', MyComponent) // 可能无法注册
```

### 返回值差异

不同于其他资源注册方法，它的返回值是根组件实例而非应用实例

```js title="其他方法返回应用实例（支持链式调用）"
const app = createApp(App)
  .use(router)        // 返回 app，可以继续链式调用
  .use(store)         // 返回 app
  .component('Btn', Btn) // 返回 app
  .directive('focus', focusDirective) // 返回 app
```

```js title=".mount() 返回组件实例"
const app = createApp(App)
  .use(router)
  .use(store)

// mount() 返回根组件实例，不是应用实例
const vm = app.mount('#app') // vm 是组件实例，不是 app

console.log(vm.$el)     // 可以访问 DOM 元素
console.log(vm.message) // 可以访问组件数据
// console.log(vm.use()) // 错误！vm 没有 use 方法
```

```js title="实际示例"
// 应用配置阶段
const app = createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
})

// 注册全局资源
app.component('TodoItem', {
    template: '<li>这是一个待办项</li>'
})

app.directive('highlight', {
    mounted(el) {
        el.style.backgroundColor = 'yellow'
    }
})

// 使用插件
app.use(router)

// 挂载阶段 - 返回组件实例
const rootComponentInstance = app.mount('#app')

// 现在可以操作组件实例
console.log(rootComponentInstance.message) // 'Hello Vue!'
rootComponentInstance.message = 'Updated!' // 可以修改数据
```

## 应用配置

应用实例会暴露一个 `.config` 对象允许我们配置一些应用级的选项，例如定义一个应用级的错误处理器，用来捕获所有子组件上的错误：

```js
app.config.errorHandler = (err) => {
  /* 处理错误 */
}
```

应用实例还提供了一些方法来注册应用范围内可用的资源，例如注册一个组件：

```js
app.component('TodoDeleteButton', TodoDeleteButton)
```

这使得 `TodoDeleteButton` 在应用的任何地方都是可用的

请确保在挂载应用实例之前完成所有应用配置！

## 多个应用实例

应用实例并不只限于一个。`createApp` API 允许你在同一个页面中创建多个共存的 Vue 应用，而且每个应用都拥有自己的用于配置和全局资源的作用域

```js
const app1 = createApp({
  /* ... */
})
app1.mount('#container-1')

const app2 = createApp({
  /* ... */
})
app2.mount('#container-2')
```

如果你正在使用 Vue 来增强服务端渲染 HTML，并且只想要 Vue 去控制一个大型页面中特殊的一小部分，应避免将一个单独的 Vue 应用实例挂载到整个页面上，而是应该创建多个小的应用实例，将它们分别挂载到所需的元素上去