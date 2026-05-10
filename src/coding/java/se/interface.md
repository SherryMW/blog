---
article: false
---

# 接口

## 多态

我们先创建一个 `Message` 接口，里面定义一个 `send` 抽象方法：

```java
public interface Message {
    
    void send();
}
```

接下来我们创建一个 `Email` 类来实现这个 `Message` 接口用来发邮件：

```java
public class Email implements Message {
    
    @Override
    public void send() {
        System.out.println("This is an email");
    }
}
```

同样的，我们再来创建一个 `Sms` 类来实现 `Message` 接口用来发送短消息：

```java
public class Sms implements Message {
    
    @Override
    public void send() {
        System.out.println("This is an Sms");
    }
}
```

最后我们在 `Main` 函数中写一个方法用来负责统一发送消息：

```java
public class Main {
    
    public static void sendMessage(Message message) {
        message.send();
    }
}
```

因为参数类型为 `Message` 接口，这就意味着不管传入的是 `Email` 对象还是 `Sms` 对象，它们的类都已经各自实现了 `Message` 接口的 `send` 方法。所以 `sendMessage` 方法内部只需要执行 `message` 的 `send` 方法，而不需要关心执行的到底是哪个对象的 `send` 方法，免去了复杂的判断和切换，这也是面向接口编程的一个典型应用场景

我们现在来发送一下邮件消息：

```java
public class Main {
    
    public static void main(String[] args) {
        Message email = new Email(); // 接口类型引用指向其实现类的对象
        sendMessage(email);
    }
    
    public static void sendMessage(Message message) {
        message.send();
    }
}
```

我们再来尝试一下发送 SMS 消息：

```java
public class Main {
    
    public static void main(String[] args) {
        Message sms = new Sms();
        sendMessage(sms);
    }
    
    public static void sendMessage(Message message) {
        message.send();
    }
}
```

拆开看 `Message message = new Email();` 这行代码：

左边是接口（规矩），右边是实现类（干活的），接口引用指向实现类对象 → 这就是**多态**

左边：`Message message`

- `Message` 是接口

- 它只定义规则：定义了 `send()` 抽象方法

- 它不能直接创建对象，不能写 `new Message()`

右边：`new Email()`

- `Email` 是实现了 `Message` 接口的类

- 它真正写了 `send()` 方法的内容

- 它是真正能干活的对象

最形象的比喻：

`Message` = “能发送的东西”（规则）

`Email` = “邮件”（具体东西）

一个 “能发送的东西”，现在是一封邮件：`Message message = new Email();`

一个 “能发送的东西”，现在是一条短信：`Message message = new Sms();`

---

动态方法调度（Dynamic Dispatch）

编译期：

编译器只知道 `message` 是 `Message` 类型，里面有 `send()` 方法

它只做语法检查，不绑定具体实现

运行期（JVM 真正执行时）：

1. 拿到 `message` 引用

2. 找到它实际指向的对象 `Email`

3. 从对象头找到方法表 vtable

4. 在方法表里找到 `send()` 对应的具体实现

5. 执行 `Email` 的 `send()`

