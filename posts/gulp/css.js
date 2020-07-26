var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('css', function (done) {
    gulp.src('./css/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('assets'));
    done();
})