'use strict';

const gulp = require('gulp');

const clean = require('gulp-clean');
gulp.task('clean', function () {
    return gulp
        .src('build', {
            read: false,
        })
        .pipe(clean());
});

gulp.task('html:copy', () => {
    return gulp
        .src(['./app/public/**/*.html', '!./app/public/bower_components/**/', '!./app/public/node_modules/**/', '!./app/public/tests/**/'])
        .pipe(gulp.dest('./build/public'));
});

const uglifyCss = require('gulp-uglifycss');
gulp.task('css:compress', function () {
    gulp.src('./app/public/bundle.css')
        .pipe(uglifyCss({
            'maxLineLen': 80,
            'uglyComments': true
        }))
        .pipe(gulp.dest('./build/public'))
});

const uglify = require('gulp-uglifyjs');
gulp.task('js:compress', function () {
    gulp.src('./app/out/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});

const babel = require('gulp-babel');
gulp.task('js:compile-client', () => {
    return gulp.src('./app/public/**/*.js', '!./app/public/bower_components/**/', '!./app/public/node_modules/**/', '!./app/public/tests/**/')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(gulp.dest('./app/out/public'));
});

gulp.task('js:compile-server', () => {
    return gulp.src('./app/private/**/*.js')
        .pipe(babel({
            presets: ['es2015'],
        }))
        .pipe(gulp.dest('./app/out/private'));
});

gulp.task("js:compile", ['js:compile-server']);

gulp.task("final", ['html:copy', 'css:compress', 'js:compile', 'js:compress']);

const sass = require('gulp-sass');
gulp.task('sass:compile', function () {
    return gulp.src(['./app/public/**/*.scss', '!./app/public/bower_components/**/', '!./app/public/node_modules/**/'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/public/css'));
});

const concatCss = require('gulp-concat-css');
gulp.task('css:concat', function () {
    return gulp.src('./app/public/css/**/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('./app/public'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/public/**/*.scss', ['sass:compile', 'css:concat']);
});