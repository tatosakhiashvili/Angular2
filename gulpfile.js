var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy:true});

gulp.task('default', ['styles-watcher'], function() {});

gulp.task('styles', function(){
    return gulp
            .src('./src/app/**/*.less')
            .pipe($.plumber())
            .pipe($.less())
            .pipe($.autoprefixer({browsers:['last 2 version', '> 5%']}))
            .pipe($.cssmin())
            .pipe(gulp.dest('./src/app/.'));
});

gulp.task('styles-watcher', ['styles'], function(){
    gulp.watch('./src/app/**/*.less', ['styles']);
});