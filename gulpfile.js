var gulp = require('gulp);
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
                   
                   
                   
                   
                   
                   
                   
gulp.task('vetting', function() {
   return gulp
    .src('[
        './src/**/*.js',
             './*.js'
    ]')
    .pipe(jscs())
    .pipe(jshint(jshint.reporter('jshint-stylish', { verbose: true })));
    
    
});