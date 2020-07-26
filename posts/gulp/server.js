var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('dev:server', function (){
    return nodemon({
        script: 'server.js',
        ext: 'js'
    })
});