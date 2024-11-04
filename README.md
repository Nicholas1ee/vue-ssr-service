# 项目启动
本项目是一个用于理解SSR原理的小项目，用于加深对于SSR的认识。
- 安装依赖：npm ci
- 运行开发模式：npm run dev
- 打包：npm run build
- 启动SSR服务：npm run start

# 什么是SSR
SSR其实就是把页面的html生成的工作从客户端移动到服务端的技术。在服务端生成了完整的html之后，再将html发送给客户端。这样在客户端就可以无需等待JavaScript加载和执行，可以直接得到完整的结构，进行 DOM 的解析、渲染。
    
- CSR模式页面源代码
```html

<!DOCTYPE html>
<html lang="en">

<head>
    <!--基础的meta信息-->
    <meta charset="UTF-8" />
    <meta name="renderer" content="webkit" />
    <meta descript="ninihaohao" content="webkit" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="icon" href="data:image/jpg;base64,/9j/4AA">
    <title>
        vue-ssr-service
    </title>
<script defer src="/index.js"></script></head>

<body>
    <noscript>
        <strong>
            We're sorry but vue-ssr-service doesn't work properly without JavaScript enabled.
            Please enable it to continue.
        </strong>
    </noscript>
    <div id="app"></div>
</body>

</html>
```
可以发现，CSR模式下页面的dom结果只有一个根节点，其他所有的dom都需要靠script脚本的加载和执行才能渲染到页面上
- SSR模式页面源代码
```html
<!DOCTYPE html>
<html lang="en">
<html>
    <head>
        <meta charset=utf-8>
        <meta name=viewport content="width=device-width,initial-scale=1">
        <title>vue-ssr-service</title>
        <!-- 省略一部分css和head代码 -->
    </head>
    <body>
        <div id="app" data-server-rendered="true" class="h-screen bg-black/90"><nav class="p-7 flex justify-end gap-5 text-white text-opacity-80"><a href="/" aria-current="page" class="router-link-exact-active router-link-active">Home</a> |
        <a href="/about">About</a></nav> <div class="mx-auto w-[800px]"><main class="flex justify-end"><aside class="flex mr-24 w-40 shrink-0 flex-col gap-8"><div class="flex justify-center items-center mb-8"><img src="/images/me.0ff4b61495.jpg" class="w-16 rounded-full border-2 border-gray-600"> <span class="text-3xl text-2xl text-xl"></span> <h1 class="grow text-center font-bold text-white ml-4 cursor-pointer text-3xl">李楠</h1></div> <div class="flex justify-between text-white text-opacity-80"><span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 16 16"></svg> <span>滴滴</span></span> <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 16 16"></svg> <span>前端开发</span></span></div> <div class="text-xs leading-5 text-white text-opacity-80">
          Vue · React · Tailwind CSS · JavaScript · Webpack · Golang · TypeScript · VS Code
        </div></aside> <article class="flex flex-col gap-4 text-white text-opacity-80 w-[500px]"><p>你好，欢迎查看我的个人简介</p> <p>目前就职于滴滴出行增长技术部</p> <p>一个兴趣使然的技术爱好者</p> <p>理想是制作有意思的产品</p> <p>游戏玩的还不错的竞技游戏玩家</p> <div class="mt-8"><div class="mb-5">Find me on</div> <div class="flex gap-2 wrap text-white text-opacity-80"><a href class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 16 16"></svg> <span>Emaill</span></a> <a href class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 16 16"></svg> <span>GitHub</span></a> <a href class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 16 16"></svg> <span>Instagram</span></a> <a href class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 16 16"></svg> <span>Twitter</span></a> <a href class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 16 16"></svg> <span>Tiktok</span></a></div></div></article></main></div></div><script>window.__INITIAL_STATE__={"common":{"renderType":2}}</script><script src="/main.js" defer></script>
    </body>
</html>
```
> SSR模式下页面的dom结构无需通过script脚本的加载和执行，是渲染服务直接返回的，可以直接进行dom的解析和渲染
# 怎么实现一个SSR
## 同构
- 对于一个页面来说，除了上文说到的展示层面的dom之外，页面还会有一些交互设计。例如开发一个领券页面，除了向用户展示券信息之外还有一个很重要的事情就是实现一个按钮，点击能够触发领取券的交互。而SSR在服务端只会生成一个静态的html结构，不会进行事件绑定的操作。
- 这个时候为了解决这个问题，我们就引入了同构。所谓同构就是客户端与服务端共用一套渲染代码，服务端渲染完成页面结构，浏览器端渲染完成事件绑定。对于同构来说我们要保证的条件有三个，两端使用的组件一致，两端路由数据同步，两端全局状态同步。
### 组件同步
对于使用的组件一致，我们只需要将获取 Vue 实例这步操作写成通用代码，之后在客户端和服务端都使用同一个vue实例即可。
### 路由数据同步
对于路由数据同步，我们同样的会把创建的路由抽成通用代码，并在客户端和服务端之间共享。而服务端使用的路由是*，接受任意URL。这样客户端在请求一个URL的时候，请求的URL传递给router，使得在创建app的时候可以根据URL匹配到对应的路由，进而服务端就知道需要渲染哪些组件。
### 全局状态同步
对于全局状态同步，与前面类似，我们会把实例化store抽成通用代码，同时提供给客户端和服务端使用。在服务端，我们会将store存入context.state中，在服务端渲染HTML时候，context.state会被序列化到window.__INITIAL_STATE__中，方便客户端激活数据。而我们在客户端渲染的时候可以直接将window.__INITIAL_STATE__同步到客户端的store中，实现状态数据的激活。
## 怎么做
首先，作为同构应用，代码会给客户端和服务端都提供一个入口，服务端的入口负责返回应用实例，同时还会进行路由匹配和数据的预处理。客户端的入口负责创建应用程序，挂载实例 DOM 。而对于两个入口来说，我们也会有两个webpack配置对两个入口进行打包，打包之后会有两个 bundle 产物。
- Server-bundle
  - server-bundle 会通过 vue-server-renderer提供的server-plugin构建一份 vue-ssr-server-bundle.json 文件。这个文件里面记录了需要在服务端运行的文件以及一份source-map。
- Client-bundle
  - 而client-bundle 会通过vue-server-renderer提供的client-plugin构建一份 vue-ssr-client-manifest.json 文件。服务端在渲染页面时，根据这个清单来渲染html中的js脚本和css。

有了打包产物后，在渲染服务上，服务会监听所有的路由，每次请求都会通过createBundleRenderer生成一个渲染器，渲染器会指明server-bundle文件、clientManifest文件，以及渲染模版。最后通过渲染器上的renderToString方法将Vue组件渲染成HTML字符串，最后把这个html发送到客户端。
