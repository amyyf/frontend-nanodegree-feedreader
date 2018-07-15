const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const useref = require('gulp-useref');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');

gulp.task('default', function () {
  console.log('hello');
});

gulp.task('script-dist', function () {
  gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('useref', function () {
  gulp.src('src/*.html')
    .pipe(useref())
    .pipe(sourcemaps.init())
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-fonts', function () {
  gulp.src('src/fonts/*.{eot,svg,ttf,woff}')
    .pipe(gulp.dest('dist/fonts'));
});
