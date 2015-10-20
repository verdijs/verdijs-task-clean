//==================================================
//  TASK
//  clean
//  Deletes the `./target` directory
//==================================================

var del = require('del');
var gulp = require('gulp');
var PLI = require('verdijs-pli');

gulp.task('clean', function(cb) {
  del([PLI.TARGET], cb);
});
