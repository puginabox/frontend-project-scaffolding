var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var util = require('gulp-util');    
var gulpprint = require('gulp-print');
var args = require('yargs').argv;
var gulpif = require('gulp-if');                   
                   
gulp.task('vetting', function() {
    log('Analyizing source with JSHint & JSCS');
    return gulp
    .src([
        './src/**/*.js',
             './*.js'
    ])
    .pipe(gulpif(args.verbose, gulpprint()))
    .pipe(jscs())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', { verbose: true }))
    .pipe(jshint.reporter('fail'));
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