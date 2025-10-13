---
article: false
---

# 模板语法

Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析

在底层机制中，Vue 会将模板编译成高度优化的 JavaScript 代码。结合响应式系统，当应用状态变更时，Vue 能够智能地推导出需要重新渲染的组件的最少数量，并应用最少的 DOM 操作

## 文本插值

最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：

```vue
<span>Message: {{ msg }}</span>
```

双大括号标签会被替换为[相应组件实例](reactivity-fundamentals.md)中 `msg` 属性的值。同时每次 `msg` 属性更改时它也会同步更新

## 原始 HTML

双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，你需要使用 [v-html](../../api/built-in-directives.md#v-html) 指令：

```vue
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

这里我们遇到了一个新的概念。这里看到的 `v-html` attribute 被称为一个指令。指令由 `v-` 作为前缀，表明它们是一些由 Vue 提供的特殊 attribute，你可能已经猜到了，它们将为渲染的 DOM 应用特殊的响应式行为。这里我们做的事情简单来说就是：在当前组件实例上，将此元素的 innerHTML 与 `rawHtml` 属性保持同步

`span` 的内容将会被替换为 `rawHtml` 属性的值，插值为纯 HTML——数据绑定将会被忽略。注意，你不能使用 `v-html` 来拼接组合模板，因为 Vue 不是一个基于字符串的模板引擎。在使用 Vue 时，应当使用组件作为 UI 重用和组合的基本单元

::: warning 安全警告
在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。请仅在内容安全可信时再使用 `v-html`，并且永远不要使用用户提供的 HTML 内容
:::

## Attribute 绑定

双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个 attribute，应该使用 [v-bind](../../api/built-in-directives.md#v-bind) 指令：

```vue
<div v-bind:id="dynamicId"></div>
```

`v-bind` 指令指示 Vue 将元素的 `id` attribute 与组件的 dynamicId 属性保持一致。如果绑定的值是 null 或者 undefined，那么该 attribute 将会从渲染的元素上移除

```vue
<template>
  <div>
    <h3>v-bind 与 null/undefined 的处理</h3>
    
    <!-- 动态绑定 id -->
    <div :id="dynamicId" class="demo-box">
      ID: {{ dynamicId }}
    </div>

    <!-- 控制面板 -->
    <div class="controls">
      <button @click="setId('my-element')">设置 ID</button>
      <button @click="setId(null)">设置 null</button>
      <button @click="setId(undefined)">设置 undefined</button>
      <button @click="setId('')">设置空字符串</button>
    </div>

    <div class="info">
      <p>当前 dynamicId: {{ JSON.stringify(dynamicId) }}</p>
      <p>渲染后的 HTML: <code>{{ getRenderedHTML() }}</code></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicId: 'initial-id'
    }
  },
  methods: {
    setId(value) {
      this.dynamicId = value
    },
    getRenderedHTML() {
      // 模拟渲染结果
      if (this.dynamicId === null || this.dynamicId === undefined) {
        return '<div class="demo-box">ID: ' + this.dynamicId + '</div>'
      } else {
        return `<div id="${this.dynamicId}" class="demo-box">ID: ${this.dynamicId}</div>`
      }
    }
  }
}
</script>
```

不同值的具体行为

::: tabs

@tab 正常字符串值

```vue
<template>
  <div v-bind:id="dynamicId"></div>
</template>

<script>
export default {
  data() {
    return {
      dynamicId: 'main-content'
    }
  }
}
</script>
```

渲染结果： `<div id="main-content"></div>`

@tab null 值

```vue
<template>
  <div v-bind:id="dynamicId"></div>
</template>

<script>
export default {
  data() {
    return {
      dynamicId: null
    }
  }
}
</script>
```

渲染结果： `<div></div>` ← id attribute 被移除

@tab undefined 值

```vue
<template>
  <div v-bind:id="dynamicId"></div>
</template>

<script>
export default {
  data() {
    return {
      dynamicId: undefined
    }
  }
}
</script>
```

渲染结果： `<div></div>` ← id attribute 被移除

:::

**简写**

因为 v-bind 非常常用，我们提供了特定的简写语法：

```vue
<div :id="dynamicId"></div>
```

开头为 `:` 的 attribute 可能和一般的 HTML attribute 看起来不太一样，但它的确是合法的 attribute 名称字符，并且所有支持 Vue 的浏览器都能正确解析它。此外，他们不会出现在最终渲染的 DOM 中。简写语法是可选的，但相信在你了解了它更多的用处后，你应该会更喜欢它

**同名简写**

待更新