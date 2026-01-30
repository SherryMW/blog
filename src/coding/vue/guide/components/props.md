---
article: false
---

# Props

## 什么是 Props？

想象一下你在点一杯奶茶：

- 奶茶店（子组件）：它负责如何制作奶茶（它有自己的内部逻辑和状态，比如怎么摇匀、加多少冰）
- 你（父组件）：你不需要知道制作细节，只需关心结果
- 点单（传递 `Props`）：告诉店员你的要求，比如：“我要一杯大杯的珍珠奶茶，少糖，正常冰”

在这个比喻中：

- 大小、品类、糖度、冰度就是你要传递给奶茶店的 `Props`
- 奶茶店接收这些 `Props`，然后根据这些“指令”来制作一杯符合你要求的奶茶
- 奶茶店不能擅自改变你的订单（直接修改 `Props`），如果你要改，必须通知你（父组件）来改

在 Vue 中的官方定义：

`Props` 是父组件向子组件传递数据的一种方式。它是一种自定义属性，子组件需要显式声明它希望接收哪些外部传入的数据（`Props`），然后父组件就可以像给 HTML 标签添加属性一样，把这些数据传递给它

核心要点：

单向数据流：数据只能从父组件流向子组件，不能反向流动。这保证了数据源的单一性，便于理解和调试

只读的：子组件不能直接修改接收到的 `Props`。如果试图修改，Vue 会在控制台发出警告。如果子组件需要“修改”这个数据，应该通知父组件，让父组件来改变它，然后再通过 `Props` 传递下来

## 为什么需要 Props？组件化编程的核心

Vue 的核心思想是组件化，即将页面拆分成一个个独立、可复用的部件

一个组件就像一台机器，`Props` 就是这台机器的输入参数。没有输入，机器就无法根据外部条件做出不同的反应，它的作用就会非常有限

没有 `Props` 的组件：

像一个只能播放固定一首音乐的播放器，功能单一，无法复用

```vue
<!-- MusicPlayer.vue -->
<template>
  <div>
    <p>正在播放：永远的一首《固定歌名》</p>
    <button>播放</button>
  </div>
</template>
```

有 `Props` 的组件：

像一个真正的音乐播放器，可以接收不同的歌曲名、歌手名作为输入，从而播放不同的音乐，高度可复用

```vue
<!-- MusicPlayer.vue -->
<template>
  <div class="music-player">
    <h3>正在播放：{{ singer }} - {{ songName }}</h3>
    <p>播放状态：{{ isPlaying ? '播放中' : '已暂停' }}</p>
    <button @click="handleClick">
      {{ isPlaying ? '暂停' : '播放' }}
    </button>
  </div>
</template>

<script setup>
  // 声明它需要接收哪些输入参数
  defineProps({
    songName: String,
    singer: String,
    isPlaying: Boolean
  })

  // 在方法中触发事件
  const emit = defineEmits(['play'])

  const handleClick = () => {
    emit('play')  // 触发 play 事件
  }
</script>
```

然后，父组件就可以像这样使用它，传递不同的数据：

```vue
<!-- App.vue -->
<template>
  <div>
    <MusicPlayer song-name="晴天" singer="周杰伦"/>
    <MusicPlayer song-name="Blinding Lights" singer="The Weeknd"/>
    <MusicPlayer :song-name="dynamicSong" :singer="dynamicSinger"/>
  </div>
</template>

<script setup>
  import {ref} from 'vue' // ref 用于创建一个响应式引用，让数据变成响应式的，当数据变化时，Vue 会自动更新相关的视图
  import MusicPlayer from './MusicPlayer.vue'

  const dynamicSong = ref('动态歌曲')
  const dynamicSinger = ref('动态歌手')
</script>
```

## 在 Vue3 的 `<script setup>` 中如何使用 Props？

### 子组件：声明 Props

使用 `defineProps` 宏来声明。它不需要导入，直接在 `<script setup>` 中使用

方式一：数组形式（简单，但不推荐）

```vue
<script setup>
  defineProps(['songName', 'singer', 'isPlaying'])
</script>
```

方式二：对象形式（推荐，可以定义类型和验证）

```vue
<script setup>
  defineProps({
    // 基础类型检查
    songName: String,
    singer: String,

    // 多个可能的类型
    duration: [String, Number], // 时长可以是字符串或数字

    // 必填项
    id: {
      type: Number,
      required: true
    },

    // 带有默认值
    isPlaying: {
      type: Boolean,
      default: false
    },

    // 自定义验证函数
    volume: {
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['low', 'medium', 'high'].includes(value)
      }
    }
  })
</script>
```

方式三：TypeScript 类型声明（最强类型支持）

```vue
<script setup lang="ts">
  // 【interface】：TypeScript 的关键字，用于定义对象的形状（结构）
  // 【Props】：接口名称，约定俗成用 Props 表示组件属性
  interface Props { 
    songName: string // 必须的字符串属性
    singer: string // 必须的字符串属性
    isPlaying?: boolean // 可选的布尔属性（? 表示可选）
  }
  
  // 或者使用类型别名
  // type Props = { ... }

  // defineProps<Props>()：使用泛型语法，将 Props 接口应用到组件的 props 定义中
  // TypeScript 的泛型参数，告诉 defineProps 使用我们定义的接口
  defineProps<Props>()
</script>
```

等价对比：

TypeScript 写法：

```ts
interface Props {
  songName: string
  singer: string
  isPlaying?: boolean
}

defineProps<Props>()
```

JavaScript 写法：

```js
defineProps({
  songName: {
    type: String,
    required: true
  },
  singer: {
    type: String, 
    required: true
  },
  isPlaying: {
    type: Boolean,
    default: false
  }
})
```

两种写法效果相同，但 TypeScript 版本更简洁且类型安全

### 父组件：传递 Props

传递 `Props` 就像给 HTML 标签添加属性一样

传递静态值（字符串）：直接使用属性名

```vue
<MusicPlayer song-name="晴天" singer="周杰伦" />
```

传递动态值（变量、表达式）：使用 `v-bind` 或其缩写 `:`

```vue
<template>
  <MusicPlayer :song-name="currentSong" :singer="currentSinger" :is-playing="isPlay" />
</template>

<script setup>
import { ref } from 'vue'
const currentSong = ref('七里香')
const currentSinger = ref('周杰伦')
const isPlay = ref(true)
</script>
```

## 传递 prop 的细节

待更新