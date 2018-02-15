var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('styles', function() {
  gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./styles'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('serve', ['styles'], function() {

  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./scss/*.scss', ['styles']);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
