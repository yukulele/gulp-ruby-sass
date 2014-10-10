'use strict';

var gulp = require('gulp');
// var path = require('path');
// var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var debug = require('gulp-debug');
var sass = require('./');

gulp.task('sass', function() {
	sass('fixture/source', {
		// bundleExec: true,
		// sourcemap: 'none',
		noCache: true
	})

	.pipe(debug({verbose:false}))

	.pipe(sourcemaps.init({ loadMaps: true }))

	.on('error', function (err) { console.error('ERROR', err.message); })
	.pipe(gulp.dest('fixture/results'));
});
