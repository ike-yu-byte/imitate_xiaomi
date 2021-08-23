console.log('加载成功')
/* 
    配置当前项目用到哪些模块
    遵从AMD规范
    所有js文件后缀可省略
 */
require.config({
    paths:{ // 各模块路径
        "jquery": "./jquery-1.11.3",
        "jquery-cookie": "./jquery.cookie.js"
    },
    shim: { // 设置依赖关系
        "jquery-cookie": ["jquery"], // jquery-cookie依赖jQuery，进而先加载jQuery
    }
})



