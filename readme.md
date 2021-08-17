# 原生开发-仿小米网站

# 1. 项目描述  

## **前端技术**

HTML+css+jQuery  

## **后端技术**  

PHP+MySQL  

## **开发工具**

gulp3+scss+require.js  

## **协同开发**

gitee+GitHub  

​	为了更安全的上传大文件，采用ssh方式上传 ，需要生成公钥 

```git
ssh-keygen -t rsa -C  ike_yu@qq.com
```

![](https://z3.ax1x.com/2021/08/17/fhSci4.png)

![](https://z3.ax1x.com/2021/08/17/fhSRzR.png)

![](https://z3.ax1x.com/2021/08/17/fhSodO.png)

![](https://z3.ax1x.com/2021/08/17/fhSXQI.png)

## 效果图

![](https://z3.ax1x.com/2021/08/16/f2WWrT.png)

![](https://z3.ax1x.com/2021/08/16/f2W4ZF.png)

![](https://z3.ax1x.com/2021/08/16/f2WIIJ.png)

![](https://z3.ax1x.com/2021/08/16/f2WTi9.png)

![](https://z3.ax1x.com/2021/08/16/f2WHR1.png)

![](https://z3.ax1x.com/2021/08/16/f2WLM6.png)

![](https://z3.ax1x.com/2021/08/16/f2WvZD.png)

![](https://z3.ax1x.com/2021/08/16/f2fpid.png)

![](https://z3.ax1x.com/2021/08/16/f2f9JA.png)

![](https://z3.ax1x.com/2021/08/16/f2fFQP.png)

# 2.gulp搭建

**node要求**：版本不高于12

**gulp版本**：3.9.1

![](https://z3.ax1x.com/2021/08/16/f2fv60.png)

已经准备好了如上所示框架  

## 2.1  初始化项目  

```
npm init
```

```json
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (xiaomi) 
version: (1.0.0)
description:
entry point: (jquery-1.11.3.js)
test command:
git repository: (https://github.com/ike-yu-byte/imitate_xiaomi.git)
keywords:
author:
license: (ISC)
About to write to C:\Users\ike\Desktop\Xiaomi\package.json:

{
  "name": "xiaomi",
  "version": "1.0.0",
  "description": "**前端技术**：HTML+css+jQuery",
  "main": "jquery-1.11.3.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ike-yu-byte/imitate_xiaomi.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/ike-yu-byte/imitate_xiaomi/issues"
  },
  "homepage": "https://github.com/ike-yu-byte/imitate_xiaomi#readme"
}


Is this OK? (yes)
```

一路回车  

```
{
  "name": "xiaomi",
  "version": "1.0.0",
  "description": "**前端技术**：HTML+css+jQuery",
  "main": "jquery-1.11.3.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ike-yu-byte/imitate_xiaomi.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/ike-yu-byte/imitate_xiaomi/issues"
  },
  "homepage": "https://github.com/ike-yu-byte/imitate_xiaomi#readme"
}
```

项目里出现如上所示package.json文件  

## 2.2  安装gulp

```
npm view gulp versions
```

```javascript
[
  '0.0.1',  '0.0.2', '0.0.3', '0.0.4', '0.0.5',
  '0.0.7',  '0.0.8', '0.0.9', '0.1.0', '0.2.0',
  '1.0.0',  '1.1.0', '1.2.0', '1.2.1', '2.0.0',
  '2.0.1',  '2.1.0', '2.2.0', '2.3.0', '2.4.0',
  '2.4.1',  '2.6.0', '2.6.1', '2.7.0', '3.0.0',
  '3.1.1',  '3.1.2', '3.1.3', '3.1.4', '3.2.0',
  '3.2.1',  '3.2.2', '3.2.3', '3.2.4', '3.2.5',
  '3.3.0',  '3.3.1', '3.3.2', '3.3.4', '3.4.0',
  '3.5.0',  '3.5.1', '3.5.2', '3.5.5', '3.5.6',
  '3.6.0',  '3.6.1', '3.6.2', '3.7.0', '3.8.0',
  '3.8.1',  '3.8.2', '3.8.3', '3.8.4', '3.8.5',
  '3.8.6',  '3.8.7', '3.8.8', '3.8.9', '3.8.10',
  '3.8.11', '3.9.0', '3.9.1', '4.0.0', '4.0.1',
  '4.0.2'
]
```

查看所有版本号  

```
npm i -g gulp
```

​	全局安装gulp命令行

```npm
npm install gulp@3.9.1 --save-dev
```

​	安装gulp开发依赖

![](https://z3.ax1x.com/2021/08/18/fI3wrR.png)

![](https://z3.ax1x.com/2021/08/17/fhpzcR.png)

## 2.3  安装插件  

**gulp-sass**：将scss转成css，必须同时安装sass插件

**gulp-minify-css**：将css压缩  

**gulp-rename**：文件重命名

```
npm i gulp-scss gulp-minify-css gulp-rename -D 
```

![](https://z3.ax1x.com/2021/08/18/fI3cGD.png)

经测试gulp-scss在win10无法使用，故改成了gulp-sass@5.0.0



## 2.4  测试gulp任务

```javascript
const gulp = require('gulp')

gulp.task('hello', () => {
    console.log('hello gulp')
})
```

![](https://z3.ax1x.com/2021/08/17/fh9GCQ.png)

## 2.5  nvm版本控制(扩展)

[GitHub地址](https://github.com/coreybutler/nvm-windows)

[下载地址](https://github.com/coreybutler/nvm-windows/releases)

![](https://z3.ax1x.com/2021/08/17/fh9aD0.png)

![](https://z3.ax1x.com/2021/08/17/fhCuRJ.png)

![](https://z3.ax1x.com/2021/08/17/fhCKz9.png)

```JavaScript
root: D:\software\nvm\nvm
path: D:\software\nvm\node
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

切换镜像配置，以防有些包下载失败  

```
nvm install 11.15.0
```

安装指定版本的node

![](https://z3.ax1x.com/2021/08/17/fhCls1.png)

如上所示切换node，并在node环境下安装依赖和运行程序

## 2.6  批量处理文件

### 2.6.1  scss

**方式一**：利用minifycss压缩时

```JavaScript
/* 引入gulp开发依赖 */
const gulp = require('gulp')
/* 引入gulp开发依赖 */

/* 引入插件依赖 */
var scss = require('gulp-sass')(require('sass'))
// 注意：gulp-sass必须配合gulp-sass一起使用
const minifyCSS = require('gulp-minify-css')
const rename = require('gulp-rename')
/* 引入插件依赖 */

/* 批量处理scss */
gulp.task('scssAll',function(){
    return gulp.src('./stylesheet/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./dist/css'))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'))
    // 注意：路径加不加'./'和'/'都无所谓
})
/* 批量处理scss */
```

![](https://z3.ax1x.com/2021/08/18/fIYUFx.png)



**注意**：rename参数是个回调函数时  

```JavaScript
.pipe(rename(function(path){
   console.log(path)
}))
```

![](https://z3.ax1x.com/2021/08/18/fIYdfK.png)

**注意**：rename参数为对象时，可以有以下属性

```JavaScript
{
    dirname: "main/text/ciao",
    basename: "aloha",
    prefix: "bonjour-",
    suffix: "-hola",
    extname: ".md"
}
```

**方式二**：利用sass压缩时  

```javascript
/* 引入gulp开发依赖 */
const gulp = require('gulp')
/* 引入gulp开发依赖 */

/* 引入插件依赖 */
var scss = require('gulp-sass')(require('sass'))
// 注意：gulp-sass必须配合gulp-sass一起使用
const minifyCSS = require('gulp-minify-css')
const rename = require('gulp-rename')
/* 引入插件依赖 */

gulp.task('scssAll',function(){
    return gulp.src('./stylesheet/*.scss')
    .pipe(scss({
        outputStyle: 'compressed'
    }))
    // .pipe(gulp.dest('./dist/css'))
    // .pipe(minifyCSS())
    // .pipe(rename({
    //     suffix: "min"
    // }) // 必须注释，否则报错
    .pipe(gulp.dest('dist/css/'))
    // 注意：路径加不加'./'和'/'都无所谓
})
```

![](https://z3.ax1x.com/2021/08/18/fIYIXQ.png)

































