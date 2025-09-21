---
article: false
---

# Props

## Props 是什么？一个简单的比喻

想象一下你在点一杯奶茶：

- 奶茶店（子组件）：它负责如何制作奶茶（它有自己的内部逻辑和状态，比如怎么摇匀、加多少冰） 
- 你（父组件）：你不想知道制作细节，你只关心结果 
- 点单（传递 Props）：你会告诉店员你的要求，比如：“我要一杯大杯的珍珠奶茶，少糖，正常冰”

在这里：

- 大小、品类、糖度、冰度就是你要传递给奶茶店的 Props
- 奶茶店接收这些 Props，然后根据这些“指令”来制作一杯符合你要求的奶茶
- 奶茶店不能擅自改变你的订单（直接修改 Props），如果你要改，必须通知你（父组件）来改

在 Vue 中的官方定义：

Props 是父组件向子组件传递数据的一种方式。它是一种自定义属性，子组件需要显式声明它希望接收哪些外部传入的数据（Props），然后父组件就可以像给 HTML 标签添加属性一样，把这些数据传递给它

核心要点：

单向数据流：数据只能从父组件流向子组件，不能反向流动。这保证了数据源的单一性，便于理解和调试

只读的：子组件不能直接修改接收到的 Props。如果试图修改，Vue 会在控制台发出警告。如果子组件需要“修改”这个数据，应该通知父组件，让父组件来改变它，然后再通过 Props 传递下来

## 为什么需要 Props？组件化编程的核心

Vue 的核心思想是组件化，即将页面拆分成一个个独立、可复用的部件

一个组件就像一台机器，Props 就是这台机器的输入参数。没有输入，机器就无法根据外部条件做出不同的反应，它的作用就会非常有限

没有 Props 的组件：

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

有 Props 的组件：

像一个真正的音乐播放器，可以接收不同的歌曲名、歌手名作为输入，从而播放不同的音乐。高度可复用

```vue
<!-- MusicPlayer.vue -->
<template>
  <div>
    <p>正在播放：{{ singer }} - {{ songName }}</p>
    <button>播放</button>
  </div>
</template>

<script setup>
  // 声明它需要接收哪些输入参数
  defineProps({
    songName: String,
    singer: String
  })
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
  import {ref} from 'vue'
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
  // 使用接口
  interface Props {
    songName: string
    singer: string
    isPlaying?: boolean // 可选属性
  }

  // 或者使用类型别名
  // type Props = { ... }

  defineProps<Props>()
</script>
```

### 父组件：传递 Props

传递 Props 就像给 HTML 标签添加属性一样

传递静态值（字符串）：直接使用属性名

```vue
<MusicPlayer song-name="晴天" singer="周杰伦" />
```

---

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

## 在子组件模板中使用 Props

声明后，Props 可以直接在模板中像普通变量一样使用

```vue
<template>
  <div class="music-player">
    <h3>{{ singer }} - {{ songName }}</h3>
    <p>播放状态：{{ isPlaying ? '播放中' : '已暂停' }}</p>
    <button @click="$emit('play')">{{ isPlaying ? '暂停' : '播放' }}</button>
  </div>
</template>

<script setup>
  defineProps({
    songName: String,
    singer: String,
    isPlaying: Boolean
  })

  // 如果需要在本组件的 <script> 逻辑中使用 props，可以接收返回值
  const props = defineProps({...})
  console.log(props.songName) // 在JS中访问
</script>
```
