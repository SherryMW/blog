---
article: false
---

# 指令

## v-html

更新元素的 [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

- 期望的绑定值类型：string

- 详细信息

    `v-html` 的内容直接作为普通 HTML 插入— Vue 模板语法是不会被解析的。如果你发现自己正打算用 `v-html` 来编写模板，不如重新想想怎么使用组件来代替
    
    ::: warning 安全警告
    在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。请仅在内容安全可信时再使用 `v-html`，并且永远不要使用用户提供的 HTML 内容
    :::

- 示例

    ```vue
    <template>
      <div>
        <p>使用双大括号，HTML 会被转义：</p>
        <div>{{ rawHtml }}</div>
    
        <p>使用 v-html 指令，HTML 会被渲染：</p>
        <div v-html="rawHtml"></div>
      </div>
    </template>
    
    <script>
      export default {
        data() {
          return {
            rawHtml: '<span style="color: red;">这是一个红色的文字！</span>'
          }
        }
      }
    </script>
    ```
    
    运行结果：

  - 第一个 `<div>` 会显示文本：`<span style="color: red;">这是一个红色的文字！</span>`

  - 第二个 `<div>` 会显示一个红色的文字：<span style="color: red;">这是一个红色的文字！</span>

- 参考模板语法 - [原始 HTML](../guide/essentials/template-syntax.md#原始-html)

## v-bind

动态的绑定一个或多个 attribute，也可以是组件的 prop

- 缩写：

    `:` 或者 `.` (当使用 `.prop`/`.attr` 修饰符)
    
    值可以省略 (当 attribute 和绑定的值同名时，需要 3.4+ 版本)

- 期望：`any (带参数) | Object (不带参数)`

- 参数：`attrOrProp (可选的)`

- 修饰符：

    `.camel` - 将短横线命名的 attribute 转变为驼峰式命名
    
    `.prop` - 强制绑定为 DOM property (3.2+)
    
    `.attr` - 强制绑定为 DOM attribute (3.2+)

- 用途：

    当用于绑定 `class` 或 `style` attribute，`v-bind` 支持额外的值类型如数组或对象，详见下方的参考链接

    ---

    在处理绑定时，Vue 默认会利用 `in` 操作符来检查该元素上是否定义了和绑定的 key 同名的 DOM property。如果存在同名的 property，则 Vue 会将它作为 DOM property 赋值，而不是作为 attribute 设置。这个行为在大多数情况都符合期望的绑定值类型，但是你也可以显式用 `.prop` 和 `.attr` 修饰符来强制绑定方式

    首先需要理解 HTML attribute 和 DOM property 的区别：

    ```html title="HTML attribute：写在 HTML 标签上的属性"
    <div id="my-div" class="container" data-value="123"></div>
    ```
    
    ```js title="DOM property：DOM 对象上的 JavaScript 属性"
    const div = document.getElementById('my-div');
    console.log(div.id); // "my-div" - property
    console.log(div.className); // "container" - property
    ```

    Vue 使用 `in` 操作符来检查元素是否有同名的 DOM property：

    ```js title="Vue 内部类似的逻辑"
    if (key in element) {
      // 作为 DOM property 设置
      element[key] = value;
    } else {
      // 作为 HTML attribute 设置
      element.setAttribute(key, value);
    }
    ```

    示例说明默认行为：

    ```vue
    <template>
      <div>
        <!-- value 既是 attribute 也是 property -->
        <input v-bind:value="inputValue" />
        
        <!-- data-id 不是标准的 DOM property -->
        <div v-bind:data-id="itemId"></div>
        
        <!-- title 既是 attribute 也是 property -->
        <span v-bind:title="tooltip"></span>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          inputValue: 'hello',
          itemId: '123',
          tooltip: '提示信息'
        }
      }
    }
    </script>
    ```
    
    实际绑定结果：
    
    `value`：作为 DOM property 设置（`input.value = 'hello'`）
    
    `data-id`：作为 HTML attribute 设置（`div.setAttribute('data-id', '123')`）
    
    `title`：作为 DOM property 设置（`span.title = '提示信息'`）

    **显式修饰符**
    
    `.prop` 修饰符 - 强制作为 DOM Property
    
    ```vue title="动态设置文本内容"
    <template>
      <div>
        <h3>不同的内容设置方式：</h3>
    
        <!-- 方式1：文本插值（默认） -->
        <div>内容：{{ content }}</div>
    
        <!-- 方式2：v-html（渲染HTML） -->
        <div v-html="content"></div>
    
        <!-- 方式3：textContent property（设置纯文本） -->
        <div :text-content.prop="content"></div>
      </div>
    </template>
    
    <script>
      export default {
        data() {
          return {
            content: '<span style="color: red">红色文字</span>'
          }
        }
      }
    </script>
    ```
    
    方式1：`内容：<span style="color: red">红色文字</span>`
    
    方式2：<span style="color: red">红色文字</span>
    
    方式3：`<span style="color: red">红色文字</span>`

    ```vue title="自定义组件属性传递"
    <template>
      <div>
        <!-- 传递复杂数据到自定义组件 -->
        <user-card :user-data.prop="userInfo"></user-card>
        
        <!-- 传递简单的字符串属性 -->
        <user-card user-name.attr="张三"></user-card>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          userInfo: {
            name: '李四',
            age: 25,
            address: {
              city: '北京',
              street: '长安街'
            }
          }
        }
      }
    }
    </script>
    ```

    |          方式          |      设置的什么      |                      HTML结果                       |                        显示效果                        |   用途    |
    |:--------------------:|:---------------:|:-------------------------------------------------:|:--------------------------------------------------:|:-------:|
    | `:text-content.prop` |  	DOM property  |                   `<div></div>`                   | `&lt;span style="color: red"&gt;红色文字&lt;/span&gt;` | 设置纯文本内容 |
    |   `:text-content`    | 	HTML attribute |         `<div text-content="..."></div>`          |                        (空)                         | 设置自定义属性 |
    |   `{{ content }}`    |      	文本插值      |           `<div>&lt;span...&gt;</div>`            | `&lt;span style="color: red"&gt;红色文字&lt;/span&gt;` | 显示转义文本  |
    |       `v-html`       |   		innerHTML   | `<div><span style="color: red">红色文字</span></div>` |                        红色文字                        | 渲染HTML  |

    `.attr` 修饰符 - 强制作为 HTML Attribute
    
    ```vue
    <template>
      <div>
        <!-- 强制作为 HTML attribute -->
        <input :value.attr="inputValue" />
        
        <!-- 即使元素有同名 property 也作为 attribute -->
        <div :title.attr="tooltip"></div>
        
        <!-- 自定义数据属性 -->
        <div :data-info.attr="jsonData"></div>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          inputValue: 'test',
          tooltip: '提示信息',
          jsonData: '{"id": 1, "name": "test"}'
        }
      }
    }
    </script>
    ```
    
    ```html title="渲染后的 HTML 结果"
    <div>
      <!-- 强制作为 HTML attribute -->
      <input value="test" />
      
      <!-- 即使元素有同名 property 也作为 attribute -->
      <div title="提示信息"></div>
      
      <!-- 自定义数据属性 -->
      <div data-info="{&quot;id&quot;: 1, &quot;name&quot;: &quot;test&quot;}"></div>
    </div>
    ```

    ---

    当用于组件 props 绑定时，所绑定的 props 必须在子组件中已被正确声明

    ```vue title="子组件 ChildComponent.vue："
    <template>
      <div>
        <h3>子组件</h3>
        <p>标题: {{ title }}</p>
        <p>数量: {{ count }}</p>
        <p>是否禁用: {{ disabled }}</p>
      </div>
    </template>
    
    <script>
      export default {
        // 必须在这里声明所有接受的 props
        props: {
          title: String,
          count: {
            type: Number,
            default: 0
          },
          disabled: {
            type: Boolean,
            default: false
          }
        }
      }
    </script>
    ```
    
    ```vue title="父组件 ParentComponent.vue："
    <template>
      <div>
        <h3>父组件</h3>
        
        <!-- 正确：绑定的 props 已在子组件中声明 -->
        <ChildComponent 
          :title="pageTitle"
          :count="itemCount"
          :disabled="isDisabled"
        />
        
        <!-- 错误：someUndefinedProp 未在子组件中声明 -->
        <!-- 这会触发 Vue 警告 -->
        <ChildComponent :some-undefined-prop="value" />
      </div>
    </template>
    
    <script>
    import ChildComponent from './ChildComponent.vue'
    
    export default {
      components: {
        ChildComponent
      },
      data() {
        return {
          pageTitle: '页面标题',
          itemCount: 5,
          isDisabled: true,
          value: 'some value'
        }
      }
    }
    </script>
    ```

    ---

    当 `v-bind` 不带参数使用时，可以绑定一个对象，对象的每个属性都会作为 attribute 或 prop 绑定到目标元素或组件上

    ```vue
    <template>
      <div class="form-builder">
        <h3>📝 在线表单设计器</h3>
        
        <!-- 设计区域 -->
        <div class="design-area">
          <h4>设计你的问题：</h4>
          
          <div class="field-config">
            <label>问题类型：</label>
            <select v-model="currentFieldType">
              <option value="text">单行文本</option>
              <option value="textarea">多行文本</option>
              <option value="email">邮箱地址</option>
              <option value="number">数字</option>
              <option value="tel">手机号码</option>
            </select>
            
            <label>问题标题：</label>
            <input v-model="fieldLabel" placeholder="例如：您的姓名" />
          </div>
    
          <!-- 实时预览 -->
          <div class="preview">
            <h4>👀 用户看到的实际效果：</h4>
            <div class="form-preview">
              <label>{{ fieldLabel }}</label>
              <!-- 这里就是关键！根据选择的类型动态渲染不同的输入框 -->
              <input v-bind="fieldConfig" />
            </div>
          </div>
        </div>
    
        <!-- 配置详情 -->
        <div class="config-info">
          <h4>⚙️ 当前字段配置：</h4>
          <pre>{{ JSON.stringify(fieldConfig, null, 2) }}</pre>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          currentFieldType: 'text',  // 当前选择的字段类型
          fieldLabel: '请输入内容'    // 字段的标签文字
        }
      },
      computed: {
        fieldConfig() {
          // 根据不同的字段类型，返回不同的HTML属性配置
          const configs = {
            text: {
              type: 'text',
              placeholder: '请输入文本',
              maxlength: 50,
              class: 'form-input'
            },
            textarea: {
              type: 'text',  // 实际项目中会用 <textarea>，这里简化为 input
              placeholder: '请详细描述...',
              maxlength: 500,
              class: 'form-input large'
            },
            email: {
              type: 'email',
              placeholder: 'example@email.com',
              pattern: '[^@\\s]+@[^@\\s]+\\.[^@\\s]+',
              class: 'form-input',
              required: true
            },
            number: {
              type: 'number',
              placeholder: '请输入数字',
              min: 0,
              max: 100,
              class: 'form-input'
            },
            tel: {
              type: 'tel',
              placeholder: '138-0000-0000',
              pattern: '[0-9]{3}-[0-9]{4}-[0-9]{4}',
              class: 'form-input',
              maxlength: 13
            }
          }
          
          return configs[this.currentFieldType]
        }
      }
    }
    </script>
    ```

- 示例

    ```vue
    <!-- 绑定 attribute -->
    <img v-bind:src="imageSrc" />
    
    <!-- 动态 attribute 名 -->
    <button v-bind:[key]="value"></button>
    
    <!-- 缩写 -->
    <img :src="imageSrc" />
    
    <!-- 缩写形式的动态 attribute 名 (3.4+)，扩展为 :src="src" -->
    <img :src />
    
    <!-- 动态 attribute 名的缩写 -->
    <button :[key]="value"></button>
    
    <!-- 内联字符串拼接 -->
    <img :src="'/path/to/images/' + fileName" />
    
    <!-- class 绑定 -->
    <div :class="{ red: isRed }"></div>
    <div :class="[classA, classB]"></div>
    <div :class="[classA, { classB: isB, classC: isC }]"></div>
    
    <!-- style 绑定 -->
    <div :style="{ fontSize: size + 'px' }"></div>
    <div :style="[styleObjectA, styleObjectB]"></div>
    
    <!-- 绑定对象形式的 attribute -->
    <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
    
    <!-- prop 绑定。“prop” 必须在子组件中已声明。 -->
    <MyComponent :prop="someThing" />
    
    <!-- 传递子父组件共有的 prop -->
    <MyComponent v-bind="$props" />
    
    <!-- XLink -->
    <svg><a :xlink:special="foo"></a></svg>
    ```

- 参考

    - [Class 与 Style 绑定](../guide/essentials/class-and-style.md)

    - 组件 - [Prop 传递细节](../guide/components/props.md#传递-prop-的细节)