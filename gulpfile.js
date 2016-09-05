/**
 * Created by samuel on 2016/9/4.
 */


(function(){

    'use strict';

    const gulp = require('gulp');

    const babel = require('gulp-babel');

    const sourcemaps = require('gulp-sourcemaps');

    const changed = require('gulp-changed');

    const del = require('del');

    var watch = require('gulp-watch');

    var debug = require('gulp-debug');

    var browserSync = require('browser-sync').create();


    gulp.task('clean', function (cb) {
        del([
            'bin/**',
            // 'dist/report.csv',
            // // 这里我们使用一个通配模式来匹配 `mobile` 文件夹中的所有东西
            // 'dist/mobile/**/*',
            // // 我们不希望删掉这个文件，所以我们取反这个匹配模式
            // '!dist/mobile/deploy.json'
        ], cb);
    });

    gulp.task('build',() => {

        return gulp.src('lib/**/*.js')
            .pipe(debug({title:'git-server:'}))
            .pipe(changed('bin'))
            .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('bin'));

    });

    gulp.task('watch',function () {
        return gulp.watch('lib/**/*.js',['build']);
    });


    gulp.task('default',['clean','build','watch']);





})();
