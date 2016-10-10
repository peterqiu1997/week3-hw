const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const rename = require('gulp-rename');

gulp.task('sass', () => {
  
});

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./assets/css/*.css').on('change', browserSync.reload);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./assets/js/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);

