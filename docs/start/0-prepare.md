<style>
  .start-img-box img {
    display: inline-block;
    vertical-align: middle;
    margin: 5px 5px 5px 0;
    box-shadow: 6px 6px 3px #ababab;
  }
  .nvm-img {
    border: 1px solid #efefef;
  }
  .qa-container {
    background: #ecfaff;
    margin-top: 20px;
    padding: 10px;
    /* border: 1px solid #b3e2f7; */
    border-left: 8px solid #42b4e7;
  }
  .question {
    font-weight: 600;
    color: #128dc4;
  }
  .answer {
    padding: 6px;
    color: #999;
  }
</style>

## 开发环境配置  
- VS Code
- iTerm2 + oh-my-zsh
- nvm
- node
- npm

#### VS Code  
vscode 因为其免费开源的特点逐渐成为前端的主流编辑器，它比sublime开源，比atom更快，比webstorm 更轻。
1. 下载  
[官网链接](https://code.visualstudio.com/)
2. 常用插件  
介绍几款我自己常用的插件
- 主题相关   
作为一个颜值控，怎么能少了 theme 相关的插件，毕竟优美的开发环境也是有利于身心健康哒，当然也是能促进开发效率的提升:point_up:。 
  - Dracula Official
  - Panda Theme  
  - Shades of Purple  
  - Easy icon theme
  - Horizon Theme  

<!-- <div align="left" class="start-img-box">
  <img src="http://i.loli.net/2019/06/05/5cf6a50693bc890261.png" width = "300" alt="图片名称" title="node-version.png" />
  <img src="http://i.loli.net/2019/06/05/5cf6a54acda3389861.png" width = "300" alt="图片名称" title="node-version.png" />
  <img src="http://i.loli.net/2019/06/05/5cf6a5a149cfb17581.jpeg" width = "300" alt="图片名称" title="node-version.png" />
</div>    -->

- 开发利器   
  - GitLens，GitLens 增强了 Visual Studio Code 中内置的 Git 功能。例如 commits 搜索，历史记录和查看代码作者身份，还能通过强大的比较命令获得有价值的见解等等。
  - Import Cost，计算引入包的大小。  
  - TODO Highlight，可高亮以及快速搜索 TODO 以及 FIXME等，对于一些先写整体结构后面再填充细节的人来说很好用。
  - Todo Tree，在侧边栏生成 TODO 树，可视化较好，TODO 项越来越少的感觉也是一个很好的正向激励。
  - vetur
  - 还有其他一些，Eslint 等等，可以去[官网 Extensions](https://marketplace.visualstudio.com/VSCode)里发掘适合自己的工具，后面项目中用到的插件会具体介绍。

#### iTerm2 + oh-my-zsh
 - iTerm 比 Mac 自带的 Terminal 要好用，因为iTerm支持子窗口、色彩高亮、命令提示、各种智能补全等，点击查看[详细功能列表](https://www.iterm2.com/features.html)。
 - oh-my-zsh 是对zsh的一个个性化定制，提供了更多强大的功能和好看的主题。

#### nvm
nvm 是一个安装、管理、切换 node 版本的工具，使用非常方便。[安装](https://github.com/nvm-sh/nvm)  
注意：安装完成后如果出现 `nvm: command not found`，参照以下方式解决。 

<img class="nvm-img" src="http://i.loli.net/2019/06/05/5cf6c0117801a55993.png" alt="图片名称" title="node-version.png" />

#### node
虽然纯前端页面不需要本地 node 环境，浏览器自带解释器，但是现代各种打包构建工具的运行还是依赖 node 的运行时环境。node 的安装就用上面提到的 nvm ，方便快捷。  
关于版本的选择，安装最新的 LTS(Long Term Support) 版本即可，目前是 10.x，记得及时更新最新版。[node releases](https://nodejs.org/en/about/releases/)。

<img class="nvm-img" src="http://i.loli.net/2019/06/05/5cf738f09250556746.png" alt="node-version.png" height="200" title="node-version.png" />  

#### npm
npm(Node Package Manager) 是随同 NodeJS 一起安装的默认包管理工具，所以一般不需要单独安装。

## 浏览器调试技巧
以下数据来看([数据来源](http://gs.statcounter.com/))，chrome 的流行还是占压倒性优势的，所以，以 chrome 为例介绍浏览器开发者工具，其他浏览器可自行 google。  

<img src="https://i.loli.net/2019/06/06/5cf91e098fa6d42540.png" alt="chrome-data.png" title="chrome-data.png" />  

#### 界面概览：  

<img  class="nvm-img" style="margin-top: 16px;" src="https://i.loli.net/2019/06/07/5cfa3f49542d679375.png" alt="Chrome.png" title="Chrome.png" />  

#### 经常使用到的技巧  
- 设备模式
  - 模拟移动端设备，上图左上角位置
- Elements 面板
  - 检查和调整页面
  - 编辑样式
  - 编辑DOM
- Console 面板,可以使用控制台面板记录诊断信息，或者使用它作为 shell在页面上与JavaScript交互。
  - 查看日志报错信息
  - 命令行交互
- Sources 面板，在源代码面板中设置断点来调试 JavaScript ，或者通过Workspaces（工作区）连接本地文件来使用开发者工具的实时编辑器。
  - 断点调试
  - 调试混淆的代码
  - 使用开发者工具的Workspaces（工作区）进行持久化保存
- Network 面板,使用网络面板了解请求和下载的资源文件并优化网页加载性能。
  - 网络面板基础
  - 了解资源时间轴
  - 网络带宽限制

其他面板的使用，可以查看以下学习资料。

> [Google develops 官网文档](https://developers.google.com/web/tools/chrome-devtools/)  
[脑图](https://i.loli.net/2019/06/07/5cfa38d14aaa752893.png)  
[视频](https://frontendmasters.com/courses/chrome-dev-tools-v2/)

<!-- ::: warning
This is a tip
::: -->

## QA  
  
<div class="qa-container">
  <div class="question">
    1. 为什么首页是 dark 风格，后面又变成 light 风格?
  </div>
  <div class="answer">
    因为自制的 logo 背景是黑色，为了统一就将整个页面背景都置黑了 😝。 
  </div>
  <div class="question">
    2. 为什么上面的介绍都只是放很多官网的链接，没有更多细节或步骤的展示?
    </div>
  <div class="answer">
    这真的不是偷懒。   
    其实这是一个用心良苦的设计，为了让你在学习的时候多翻翻官网，快速了解和融入前端的技术圈。Enjoy it 🤟.
  </div>
</div>