var gulp = require("gulp"),//http://gulpjs.com/
	util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
	sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
	autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
	minifycss = require('gulp-minify-css'),//https://www.npmjs.org/package/gulp-minify-css
	rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
	concatCss = require('gulp-concat-css');//https://www.npmjs.com/package/gulp-concat-css
	concat = require('gulp-concat');//https://www.npmjs.com/package/gulp-concat
	log = util.log;

var sassFilesComponents = "./src/components/**/**/**/*.scss";
var sassFilesRoutes = "./src/routes/**/**/**/*.scss";

gulp.task("sass-components", function() {
	log("Generate CSS files in components" + (new Date()).toString());
	gulp.src(sassFilesComponents)
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
	.pipe(gulp.dest('./src/components/'));
})

gulp.task("sass-routes", function() {
	log("Generate CSS files in routes " + (new Date()).toString());
	gulp.src(sassFilesRoutes)
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
	.pipe(gulp.dest('./src/routes/'));
})

gulp.task("watch", function() {
	log("Watching scss files for modifications");
	gulp.watch(sassFilesRoutes, ["sass-routes"]);
	gulp.watch(sassFilesComponents, ["sass-components"]);
})

gulp.task("bundle", function() {
	log("Bundling css files");
	gulp.src(['./public/css/*.css', './src/routes/**/*/*.css', './src/components/**/**/*.css'])
    .pipe(concatCss("dv3-feed.css"))
    .pipe(gulp.dest('./dist'));

	log("Bundling all js files from routes");
	gulp.src('./src/routes/**/*.js')
    .pipe(concat('feed.js'))
    .pipe(gulp.dest('./dist/'));
})