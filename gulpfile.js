var gulp = require('gulp');
var args = require('yargs').argv;
var plug = require('gulp-load-plugins')();
                   
gulp.task('vetting', function() {
    log('Analyizing source with JSHint & JSCS');
    return gulp
    .src()
    .pipe(plug.gulpif(args.verbose, plug.print()))
    .pipe(plug.jscs())
    .pipe(plug.jshint())
    .pipe(plug.jshint.reporter('jshint-stylish', { verbose: true }))
    .pipe(plug.jshint.reporter('fail'));
});




////////////////////
function log(msg){

    if(typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                plug.util.log(plug.util.colors.blue(msg[item]));
            }
        }
    } else {
        plug.util.log(plug.util.colors.blue(msg));
    }
}