'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');
const uglifyCss = require('gulp-uglifycss');

gulp.task('css:compress', function () {
    gulp.src('./public/components/**/*.css')
        .pipe(uglifyCss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(gulp.dest('./public/out'))
});

gulp.task('css:concat', function () {
    return gulp.src('./public/styles/**/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('./public'));
});

gulp.task('sass:compile', function () {
    return gulp.src(['./public/**/*.scss', '!./public/bower_components/**/'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/styles'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./public/**/*.scss', ['sass:compile', 'css:concat']);
});