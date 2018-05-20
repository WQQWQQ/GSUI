const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

const rootPath=".";

const srcStylePath=`${rootPath}/src/styles`;
const distPath=`${rootPath}/dist/Gsui3`;
const demoGsuiPath=`${rootPath}/examples/lib/Gsui3`;
const themePath=`${rootPath}/gsui-theme`;
const utilsPath=`${rootPath}/src/utils`;

const srcFontPath=`${themePath}/common/iconfont/fonts/*.*`;
const distFontPath=`${rootPath}/dist/Gsui3/styles/fonts`;

gulp.task('css', function() {
    gulp.src(`${srcStylePath}/index.less`)
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8']
        }))
        .pipe(cleanCSS())
        .pipe(rename('gsui3-extend.min.css'))
        .pipe(gulp.dest(`${distPath}/styles`));
});

gulp.task('fonts', function() {
    gulp.src(srcFontPath)
        .pipe(gulp.dest(distFontPath));
});

gulp.task('concatLess', function() {
    return gulp.src([`${themePath}/custom.less`,`${srcStylePath}/custom.less`])
        .pipe(concat('custom.less'))
        .pipe(gulp.dest(themePath));
});

gulp.task('concatJs', function() {
    return gulp.src([`${utilsPath}/iview-shim.js`,`${utilsPath}/es6-promise.auto.min.js`,`${distPath}/js/gsui3.min.js`])
        .pipe(concat('gsui3.min.js'))
        .pipe(gulp.dest(`${distPath}/js`));
});

gulp.task('rename', function() {
    return gulp.src(`${themePath}/dist/iview.css`)
        .pipe(rename('gsui3-core.min.css'))
        .pipe(gulp.dest(`${distPath}/styles`))
        .pipe(gulp.dest(`${demoGsuiPath}/styles`));
});

gulp.task('copy',function(){
    return gulp.src(`${distPath}/**/*`)
    .pipe(gulp.dest(demoGsuiPath));
});

gulp.task('default', ['css', 'fonts','copy']);
