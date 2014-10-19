'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('./');
// var debug = require('gulp-debug');

gulp.task('sass', function() {
	return sass('fixture/source', {
		sourcemap: 'file'
	})
	.on('error', function (err) {
	  console.error('ERROR', err.message);
   })
	.pipe(sourcemaps.init({ loadMaps: true }))
	.pipe(sourcemaps.write('../maps'))
	.pipe(gulp.dest('fixture/result'));
});
