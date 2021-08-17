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
})
/* 任务：index.scss->index.css->index.min.css */

/* 批量处理scss */
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
/* 批量处理scss */

gulp.task("scripts", function(){
    return gulp.src(["*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})