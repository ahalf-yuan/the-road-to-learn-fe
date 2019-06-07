<style>
</style>

## NPM 与包
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
