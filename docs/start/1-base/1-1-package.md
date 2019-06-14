# 前端模块机制
可以说前端模块机制的发展奠定了前端开发大型应用的基础。模块化编程是一种常用的软件开发思路，在不同的开发语言中也有很好的实现，但是在前端的普及经历了一个比较漫长过程，比如文件拆分、全局变量、命名空间等（详细过程可查看 [JavaScript 模块化七日谈](https://huangxuan.me/2015/07/09/js-module-7day/)），直到 Node 根据 CommomJS 规范实现了模块机制，前端的模块化进程才慢慢稳定下来，现今 ES Modules 也逐渐普及，但是 npm 上大部分的包都还是符合 CommonJS 规范的。

曾有段时间学习了下 golang，依赖包文件跟项目文件分割不清让我膈应了很久，直到看到陶师傅的文章《[刚从别的语言转到 golang，下面几个问题让我琢磨了好久](https://zhuanlan.zhihu.com/p/26005856)》，更加坚定了我的想法。对比下来还是 node 的模块化方案清晰明了，想想前端这些年的飞速发展还是很有效果的，模块化，依赖管理，前端异步方案，类…. 越来越能当大任。

组件化开发是前端的常规思路，比如 vue 官网介绍：几乎任意类型的应用界面都可以抽象为一个组件树，每个组件依赖的 CSS、JavaScript、模板、图片等资源放在一起开发和维护，组件是资源独立的，组件在系统内部可复用，组件和组件之间可以嵌套。组件化的基础实际就是 Node 对模块化的支持，一组相关的组件可以定义成一个模块，一个暴露了通用验证方法的对象可以定义成一个模块，一个全局的json配置文件也可以定义成一个模块。而包则是为了更好的共享功能模块。下图很好的解释了各部分的关系。

<img class="base-img" src="https://i.loli.net/2019/06/12/5d0097a4ac2f777285.png" alt="前端模块.png" title="前端模块.png" />

## CommonJS Modules
CommonJS 的 [Modules](http://wiki.commonjs.org/wiki/Modules/1.1.1) 部分定义了模块规范，主要包括以下几部分：
1. require
2. Module Context
3. Module Identifiers
4. Unspecified


## NPM 与包
CommonJS 的`Modules`部分 和`Packages`部分分别定义了模块和包的规范，Node 和 NPM 分别对其进行了实现，
npm(Node Package Manager) 是随同 NodeJS 一起安装的默认包管理工具，所以一般不需要单独安装。  
点击查看[npm 详细介绍](https://docs.npmjs.com/about-npm/)，npm 由三部分组成：
- [npm 网站](https://www.npmjs.com/)，可以查看使用别人发布的包，也可以管理自己发布的包，可是说是一个共享沟通的桥梁。
- CLI 交互，通过一些简单的命令 上传、发布、下载 包，比如 `npm publish`,`npm install` 等。
- 数据仓库，存储上传的数据。  

简单来说，这个过程是：  
1.代码中需要使用一个包，打开官网（www.npmjs.com）查看下详细信息，比如怎么使用等。  
2.在 Terminal 中运行命令：`npm install xxx`，npm 会帮你在仓库中下载代码到本地或全局路径下的 node_modules 目录下。  
3.代码中使用 `require('xx')` 或者 `import [name] from xx`即可。  
是不是感觉到 so easy，如果你也想发布包，(1).注册个账号，(2).上传包。

## ES Module
