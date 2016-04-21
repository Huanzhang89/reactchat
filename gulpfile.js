var gulp = require('gulp');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var stylus = require('gulp-stylus');

//JS Task
gulp.task('js', function() {
    return gulp.src('src/js/app.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('dist/js/'));
})

//Compile Stylus
gulp.task('stylus', function() {
    return gulp.src('src/stylus/app.styl')
        .pipe(stylus())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['lint']);
    gulp.watch('src/stylus/*.styl', ['stylus']);
});


gulp.task('default', ['stylus', 'js', 'watch']);