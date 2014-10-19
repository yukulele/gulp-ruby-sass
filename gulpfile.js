'use strict';

var gulp = require('gulp');
// var path = require('path');
// var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
// var debug = require('gulp-debug');
var sass = require('./');

gulp.task('sass', function() {
	return sass('fixture/source', {
		// bundleExec: true,
		sourcemap: 'file',
		noCache: true
	})
	.on('error', function (err) {
	  console.error('ERROR', err.message);
	  // this.emit('end'); // good idea, should doc
   })
	.pipe(sourcemaps.init({ loadMaps: true }))
	.pipe(sourcemaps.write('../maps'))


	// .pipe(debug({verbose:true}))
	// .pipe(sourcemaps.write('../maps'))
	.pipe(gulp.dest('fixture/results'));
});
