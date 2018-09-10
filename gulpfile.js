const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');

// gulp.task('browser-sync', function () {
//   browserSync({
//       server: {
//           baseDir: 'webpack'
//       },
//       notify: false
//   });

// });

gulp.task('js', () => {
  return gulp.src('./home.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(uglify())
    .pipe(gulp.dest('js'));

});

// gulp.task('watch', ['js', 'browser-sync'], function () {
//   gulp.watch('./home.js', browserSync.reload);
//   gulp.watch('./welcome.js', browserSync.reload);
// });