<style>
  .base-img {
    margin: 10px 0;
    border: 1px solid #daf3e6;
  }
</style>

# 从一个前端项目结构开始
先看一个由 [vue-cli(2.0)](https://github.com/vuejs/vue-cli/tree/v2#vue-cli--) 生成的官方项目模版(具有普适性和代表性)，主要目录结构如下图，当然在初始化项目时有很多可选项，所以，目录文件不一定 100% 匹配，但这不是重点。  
<!-- <img src="https://i.loli.net/2019/06/08/5cfb6deadd48b71867.png" alt="图片名称" width="280" title="vue-cli2目录结构.png" class="base-img" />   -->
```js
.
|-- build                      // 项目构建(webpack)相关代码
|   |-- build.js               // 生产环境构建代码
|   |-- check-version.js       // 检查node、npm等版本
|   |-- dev-client.js          // 热重载相关
|   |-- dev-server.js          // 构建本地服务器
|   |-- utils.js               // 构建工具相关
|   |-- webpack.base.conf.js   // webpack基础配置
|   |-- webpack.dev.conf.js    // webpack开发环境配置
|   |-- webpack.prod.conf.js   // webpack生产环境配置
|-- config                     // 项目开发环境配置
|   |-- dev.env.js             // 开发环境变量
|   |-- index.js               // 项目一些配置变量
|   |-- prod.env.js            // 生产环境变量
|   |-- test.env.js            // 测试环境变量
├── dist
│   ├── index.html
│   └── static
|-- src                        // 源码目录
|   |-- components             // vue公共组件
|   |-- store                  // vuex的状态管理
|   |-- App.vue                // 页面入口文件
|   |-- main.js                // 程序入口文件，加载各种公共组件
|-- static                     // 静态文件，比如一些图片，json数据等
|   |-- data                   // 群聊分析得到的数据用于数据可视化
|-- .babelrc                   // ES6语法编译配置
|-- .editorconfig              // 定义代码格式
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .postcssrc.js
|-- README.md                  // 项目说明
|-- favicon.ico 
|-- index.html                 // 入口页面
|-- package.json               // 项目基本信息
.
```
通过分析以上目录结构，可以看出前端项目主要由几大部分构成：
<img class="base-img" src="https://i.loli.net/2019/06/09/5cfcff9ee540d73919.png" alt="前端目录结构.png" title="前端目录结构.png" />
由这几块项目的构成可以很非常清晰的看出项目的整个生产流程，简单来说就是：
1. 根据项目说明安装开发依赖以及执行依赖
2. 源码开发调试测试
3. 利用构建工具生成可部署版本
4. 运行部署脚本部署代码
5. 浏览器解析运行并展现出页面  

看完上面的介绍，你或许会轻视一笑：这就是个非常 normal 的流程，软件开发不都这样吗？又或许你会感到疑惑：前端安装依赖什么鬼，不就是用 `script` 标签在 html 中引用需要的脚本么？构建工具又是什么，前端又不用像其他高级语言一样，需要编译成机器语言，它的执行环境浏览器本身就可以解析执行 js...  

 下面我将会解释以下几个问题：
- 前端的模块机制
- Vue,React 等在前端扮演什么角色？
- 项目构建到底做了什么？
- 浏览器是如何加载出一个完整的页面?
- 前端异常监控以及埋点

::: tip
如果你有其他的问题，请私信我 😊
:::