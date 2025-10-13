---
article: false
---

# 应用实例

## createApp()

创建一个应用实例

- 类型

    ```ts
    function createApp(rootComponent: Component, rootProps?: object): App
    ```
  
- 详细信息

    第一个参数是根组件。第二个参数可选，它是要传递给根组件的 props

- 示例

    ```js title="可以直接内联根组件"
    import { createApp } from 'vue'
    
    const app = createApp({
      /* 根组件选项 */
    })
    ```
    
    ```js title="也可以使用从别处导入的组件"
    import { createApp } from 'vue'
    import App from './App.vue'
    
    const app = createApp(App)
    ```
  
- 参考指南 - [创建一个 Vue 应用实例](../guide/essentials/application.md)