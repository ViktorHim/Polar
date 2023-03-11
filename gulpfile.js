const {src, dest, watch, parallel, series} = require('gulp');


const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoPrefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');

function styles() {
	return src('app/sass/style.sass')
		.pipe(autoPrefixer({ overrideBrowserslist: ['last 10 version']}))
		.pipe(concat('style.min.css'))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(dest('app/css'))
		.pipe(browserSync.stream())
}

function scripts() {
	return src([
		'app/js/menu.js',
		'app/js/slider.js',
		'app/js/tab.js'
	])
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(dest('app/js'))
		.pipe(browserSync.stream())
}

function browsersync() {
	browserSync.init({
		server: {
			baseDir: "app/"
		}
	});
}

function cleanDist() {
	return src('dist')
		.pipe(clean())
}

function building() {
	return src([
		'app/css/style.min.css',
		'app/js/main.min.js',
		'app/images/*.*',
		'app/fonts/*.*',
		'app/**/*.html'
	], {base: 'app'})
	.pipe(dest('dist'))
}

function watching() {
	watch(['app/sass/*.sass'], styles)
	watch(['app/js/main.js'], scripts)
	watch(['app/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;

exports.build = series(cleanDist, building);
exports.default = parallel( styles, scripts, browsersync, watching);