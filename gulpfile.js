const gulp = require('gulp');
const pug = require('gulp-pug');
const print = require('gulp-print');
const ts = require('gulp-typescript');
const sass = require('gulp-sass');

gulp.task('default', ['compile']);

// Transpiles pug to html, ts to js, and sass to css
gulp.task('compile', ['build-html', 'build-ts', 'build-sass']);

// Transpiles all pug files in src/ to html files in build/
gulp.task('build-html', function build_html() {
	return gulp.src('src/**/*.pug')
	.pipe(pug({}))
	.pipe(gulp.dest('build/'));
});

// Transpiles all ts files in src/ to js files in build/
gulp.task('build-ts', function build_ts() {
	return gulp.src('src/**/*.ts')
	.pipe(ts())
	.pipe(gulp.dest('build/'));
});

gulp.task('build-sass', function build_sass() {
	return gulp.src('src/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('build/'));
});