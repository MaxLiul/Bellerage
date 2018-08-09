var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function(){
    
    return gulp.src("app/sass/main.sass")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync',  function(){
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });

});



gulp.task('watch', gulp.series('sass', 'browser-sync'), function(){
     gulp.watch('app/css/main.css', gulp.series('sass'));
     gulp.watch('app/*.html', browserSync.reload);
     gulp.watch('app/js/**/*.js', browserSync.reload);
    
});

//gulp.task('build', gulp.series('sass'), gulp.parallel('watch', 'browser-sync'));
