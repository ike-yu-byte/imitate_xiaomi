# 原生开发-仿小米网站

# 1. 项目描述  

## **前端技术**

HTML+css+jQuery  

## **后端技术**  

PHP+MySQL  

## **开发工具**

gulp+sass+require.js  

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

```npm
npm install gulp@3.9.1 --save-dev
```

![](https://z3.ax1x.com/2021/08/16/f2hn0O.png)

![](https://z3.ax1x.com/2021/08/17/fhpzcR.png)

## 2.3  安装插件  

```
npm i gulp-scss gulp-minify-css gulp-rename -D 
```

![](https://z3.ax1x.com/2021/08/16/f2hJjP.png)

## 2.4  测试gulp任务

```javascript
const gulp = require('gulp')

gulp.task('hello', () => {
    console.log('hello gulp')
})
```

![](https://z3.ax1x.com/2021/08/17/fh9GCQ.png)















