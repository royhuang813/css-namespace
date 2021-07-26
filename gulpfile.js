const gulp = require('gulp')
const gulpCleanCss = require('gulp-clean-css')
const gulpCssWrap = require('gulp-css-wrap')
const path = require('path')

// 取个类名
const themeClassName = 'winter-theme'

gulp.task('css-wrap', function () {
    return gulp.src(path.resolve('./theme/index.css'))
        .pipe(gulpCssWrap({
            selector: `.${themeClassName}` // 命名空间
        }))
        .pipe(gulpCleanCss())
        .pipe(gulp.dest(`dist/${themeClassName}`)) // 输出目录
})