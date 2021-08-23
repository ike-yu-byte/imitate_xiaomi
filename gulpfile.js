/* 
    第三方插件
    gulp-sass
    gulp-minify-css
    gulp-rename
    均不指定版本，用最新版
 */

/* 引入gulp开发依赖 */
const gulp = require('gulp')
/* 引入gulp开发依赖 */

/* 引入插件依赖 */
var scss = require('gulp-sass')(require('sass'))
// 注意：gulp-sass必须配合gulp-sass一起使用
const minifyCSS = require('gulp-minify-css')
const rename = require('gulp-rename')
/* 引入插件依赖 */

/* 任务：index.scss->index.css->index.min.css */
gulp.task('scss', function(){
    return gulp.src('stylesheet/index.scss')
    .pipe(scss())
    .pipe(gulp.dest('dist/css/')) // 可以省略，不然会生成一个index.css文件
    .pipe(minifyCSS())
    .pipe(rename('index.min.css'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(connect.reload())
})
/* 任务：index.scss->index.css->index.min.css */

/* 批量处理scss */
gulp.task('scssAll',function(){
    return gulp.src('./stylesheet/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./dist/css'))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'))
    .pipe(connect.reload())
    // 注意：路径加不加'./'和'/'都无所谓
})
/* 批量处理scss */

/* 批量复制js */
gulp.task("scripts", function(){
    return gulp.src(["*.js", "!gulpfile.js"]) // 当前文件下除gulpfile.js外的所有js文件
    .pipe(gulp.dest("dist/js")) // 存放到./dist/js文件夹下
    .pipe(connect.reload())
})
/* 批量复制js */

/* 批量复制html文件 */
gulp.task('html', () => {
    return gulp.src('*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})
/* 批量复制html文件 */

/* 批量复制json文件 */
gulp.task('json', () => {
    return gulp.src(['*.json','!package.json','!package-lock.json'])
    .pipe(gulp.dest('dist/data'))
    .pipe(connect.reload())
})
/* 批量复制json文件 */

/* 批量处理图片 */
gulp.task('images', () => {
    return gulp.src('images/**/*')
    // 'images/*/*' 为images下的所有文件夹及文件夹里面的所有，是错误写法
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload())
})
/* 批量处理图片 */

/* 一次执行多个任务 */
gulp.task('build', ['scssAll', 'scripts', 'html', 'json', 'images'], () => {
    console.log('项目建立成功')
})
/* 一次执行多个任务 */

/* 监听文件变化 */
gulp.task('watch', () => {
    // watch('文件匹配规则', [option可选项], [任务])  
    gulp.watch('stylesheet/index.scss', ['scss'])
    gulp.watch('stylesheet/*.scss', ['scssAll'])
    gulp.watch(["*.js", "!gulpfile.js"], ['scripts'])
    gulp.watch('*.html', ['html'])
    gulp.watch(['*.json','!package.json','!package-lock.json'], ['json'])
    gulp.watch('images/**/*', ['images'])
})
/* 监听文件变化 */

/* 启动一个服务 */
var connect = require('gulp-connect')
gulp.task('server', () => {
    connect.server({
        root: 'dist/html', // 默认显示dist/html/index.html文件
        port: 8888,
        livereload: true
    })
})
/* 启动一个服务 */

/* 默认任务 */
gulp.task('default', ['watch','server']) // 默认任务直接通过gulp运行
/* 默认任务 */









