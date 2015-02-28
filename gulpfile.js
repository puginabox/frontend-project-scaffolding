var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var util = require('gulp-util');       
                   
                   
                   
                   
                   
                   
gulp.task('vetting', function() {
    log('Analyizing source with JSHint & JSCS');
    return gulp
    .src([
        './src/**/*.js',
             './*.js'
    ])
    .pipe(jscs())
    .pipe(jshint(jshint.reporter('jshint-stylish', { verbose: true })));
});







////////////////////
function log(msg){

    if(typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                util.log(util.colors.blue(msg[item]));
            }
        }
    } else {
        util.log(util.colors.blue(msg));
    }
}