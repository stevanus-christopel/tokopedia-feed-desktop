var gulp = require("gulp"),//http://gulpjs.com/
	util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
	sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
	autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
	minifycss = require('gulp-minify-css'),//https://www.npmjs.org/package/gulp-minify-css
	flatten = require('gulp-flatten');//https://www.npmjs.com/package/gulp-flatten
	concat = require('gulp-concat'),//https://www.npmjs.com/package/gulp-concat
	babel = require('gulp-babel'),
	deleteLines = require('gulp-delete-lines'),//https://www.npmjs.com/package/gulp-delete-lines
	log = util.log;

var sassFilesComponents = './src/components/**/**/**/*.scss';
var sassFilesRoutes = './src/routes/**/**/**/*.scss';

gulp.task("sass-components", function() {
	log('Generate CSS files in components ' + (new Date()).toString());
	gulp.src(sassFilesComponents)
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
	.pipe(gulp.dest('./src/components/'));
})

gulp.task("sass-routes", function() {
	log('Generate CSS files in routes ' + (new Date()).toString());
	gulp.src(sassFilesRoutes)
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
	.pipe(gulp.dest('./src/routes/'));
})

gulp.task("bundle", function() {
	log('Bundling css files');
	gulp.src(['./src/routes/**/*/*.css', './src/components/**/*.css'])
    .pipe(concat('dv3-feed.css'))
    .pipe(gulp.dest('./dist'));

	log('Bundling all js files');
	gulp.src(['./src/routes/**/*.js', './src/components/**/*.js'])
	.pipe(babel({ presets: ['react'] }))
    .pipe(concat('feed-component.js'))
	.pipe(deleteLines({ 'filters': [/import/g] }))
	.pipe(deleteLines({ 'filters': [/export/g] }))
    .pipe(gulp.dest('./dist/'));

	log('Move img to /public/img')
	gulp.src(['./src/routes/**/*.{jpg,png,svg}', './src/components/**/*.{jpg,png,svg}'])
	.pipe(flatten())
	.pipe(gulp.dest('./public/img/'))
	
	log('Done bundling');
})

gulp.task('watch', function() {
	log('Watching scss files for modifications');
	gulp.watch(sassFilesRoutes, ['sass-routes']);
	gulp.watch(sassFilesComponents, ['sass-components']);
})