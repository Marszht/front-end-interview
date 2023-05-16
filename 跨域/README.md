## 跨域

浏览器的一个安全机制，同源策略: 从同一个源加载的文档或者脚本如何与来自另一个源的资源进行交互。
协议，端口，域名，其中一个不同都是跨域. 它能帮助阻隔恶意文档，减少可能被攻击的媒介。
注意是浏览器才会有这个问题，服务器跟服务器之间没有。
浏览器跟服务器之间也没有，反向代理就是这个原理，利用浏览器跟服务器之间进行数据交互

### 解决方法

#### JSONP

> 利用 script 没有跨域限制的漏洞。通过 script 标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时。
> 除了 script 标签，还有以下的一些标签也具有跨域
> `img, video, audio, @font-face(引入允许跨域的字体) iframe`

```javascript
function jsonp(url, jsonpCallback, callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = `${url}?callback=${jsonpCallback}`;
  window[jsonpCallback] = data => {
    callback && callback(data);
    document.body.removeChild(script);
  };
  document.body.appendChild(script);
}
```

这个一般需要服务端也做配合处理，因为要识别 请求链接上的 callback, 然后解析出 jsonpCallback，返回并执行 jsonpCallback(data)；然后挂在 windows 上就能识别到
服务端端处理

```js
const express = require('express');
const app = express();
const port = '3001';
app.use('/api/data', (req, res) => {
  const data = { name: 'Alice', age: 25 };
  const callback = req.query.callback;
  if (callback) {
    const jsonpResponse = `${callback}(${JSON.stringify(data)})`;
    res.send(jsonpResponse);
  } else {
    res.json(data);
  }
});
// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

![proxy servrt](https://blog.logrocket.com/wp-content/uploads/2022/03/proxy-server-diagram.png)

#### Nginx 反向代理 这个还得看

```bash


```

#### Proxy http-proxy-middleware 插件方向代理

> 本地开发环境 localhost: 3000 请求 gfwx.gfduns.com.cn 接口 ，proxy 代理地址 就是目标想要访问的  
> 原理就是：
>
> - 客户端向 本地服务器 发送请求
> - 本地服务器 向 proxy 代理的 服务器 gfwx.gfduns.com.cn 发送请求，因为是服务器 跟服务器之间的数据交换，所以是不受同源策略影响的。获取到数据之后 再返回给 本地服务器
> - 本地服务器 再返回到本地客户端

出于对性能以及安全的考虑，一般在测试环境或者本地开发才会使用 proxy 代理。生产环境使用 更成熟的 nginx 来处理 跨域的问题。

#### CORS(跨域资源共享)

通过配置请求头中 `Access-Control-Allow-Origin`: "\*" 或者配置其他可以访问的域名。
`Access-Control-Allow-Methods` 一般还有这个字段。

当浏览器发出跨域请求的时候并且该请求为简单请求才会触发OPTIONS 预检请求，代理后的接口请求不回再发出OPTIONS 请求。

`简单请求`  

请求方法为
-  GET
- HEAD 
- POST

请求头中有以下字段
- Accept
- Accept-language
- Content-Type
- Range

Content-Type 标头所指定的类型仅限以下三者
- text/plain
- multipart/form-data
- application/x-www-form-urlencoded

相关的资料
[stackoverflow](https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141)

[CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)
#### document.domain

> 这种方式只能用于二级域名相同的情况 `a.test.com` , `b.test.com` 只需要给页面添加 `document.domain = test.com`

#### postMessage

> 这种方式通常用于获取嵌入的第三方页面数据，一个页面发送消息，另一个页面判断来源并接受消息

```javascript
// 发送消息
// 表示 只给 http://localhost:3001 发送消息，其他的域名接受不到。
window.parent.postMessage(data, 'http://localhost:3001');
window.addEventListener('message', event => {
  var origin = event.origin;
  if 
  if(origin !== 'http://localhost:3001') {
    return;
  }
  // do something
  console.log(event);

  // verify 
  event.source.postMessage("i have got you message", origin)

});
```

### 日常开发中会遇到的情况

1. 开发过程中出现的跨域，本地访问接口出现的跨域，解决方法：

- 后端没有设置 CORS，
- nginx 方向代理
- 本地启动服务去代理
- 设置浏览器为跨域浏览器（一般用于 chrome）

2. 图片的跨域
3. canvas 中出现的跨域 在画图的时候可能会出现 html2canvas
4. 字体的跨域 

### 常见 web 应用程序漏洞

[参考资料](https://github.com/trimstray/the-book-of-secret-knowledge)
[web程序漏洞](https://juejin.cn/post/7155262627860447240)
#### Cross-site Scripting - XSS（跨站脚本攻击）

> 攻击者可以利用这种漏洞在网站注入恶意客户端代码。若受害者运行这些代码，则攻击者可以冒充用户
> 一般是将 cookie 或者其他隐私信息发送给攻击者，将受害者重定向到攻击者的网站

#### 分类

1. 存储型（持久型）
   > 注入型脚本永久存储在目标服务器上。
2. 反射型（非持久型）
   > 当用户点击一个恶意链接，提交一个表单，或者进入一个恶意网站时，注入脚本进入被攻击者的网站。
3. DOM 型
   > 通过修改原始客户端代码，受害者浏览器 DOM 环境改变。

#### 预防

1. 转义字符，就是对于用户输入的内容，不要直接传给后端，需要进行转义
2. CSP：Content-Security-Policy，建立白名单，开发者明确告诉浏览器哪些外部资源可以加载和执行

#### CSRF 跨站请求伪造
> 构造出一个后端请求地址，诱导用户点击或者通过某些途径自动发起请求。

##### 预防
1. 不让GET请求改变数据
2. 不让第三方网站访问到用户Cookie
> 可以对Cookid 设置 `SameSite` 属性，防止跨域请求携带 Cookie  
3. 组织第三方网站请求接口
> 使用CORS来防止 ，验证Refer 来判断请求是否为第三方网站发起的请求
4. 请求时附带验证信息，比如token
> 服务器随机下发一个 Token，每次请求 携带Token，服务器验证Token 是否正确

### 点击劫持
> 是一种视觉欺骗的攻击手段。公攻击者将需要攻击的网站通过  iframe 嵌入的方式 嵌入自己的网站中。将iframe 设置为透明，引导用户点击

#### 预防
1. X-FRAME-OPTIONS  
是一个 HTTP 响应头，在现代浏览器有一个很好的支持。这个 HTTP 响应头 就是为了防御用 iframe 嵌套的点击劫持攻击。
- DENY，表示页面不允许通过 iframe 的方式展示
- SAMEORIGIN，表示页面可以在相同域名下通过 iframe 的方式展示
- ALLOW-FROM，表示页面可以在指定来源的 iframe 中展示

2. js 预防 
> 原理就是当识别为iframe 嵌入的时候，做处理

### 中间人攻击
> 攻击者建立服务器和客户端的链接，并让双方认为是安全的。

#### 预防
可以使用https 来预防。
增加一个安全通道来传输信息