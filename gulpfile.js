var gulp = require("gulp"),//http://gulpjs.com/
	util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
	sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
	autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
	minifycss = require('gulp-minify-css'),//https://www.npmjs.org/package/gulp-minify-css
	rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
	concatCss = require('gulp-concat-css');//https://www.npmjs.com/package/gulp-concat-css
	concat = require('gulp-concat');//https://www.npmjs.com/package/gulp-concat
	log = util.log;

var sassFiles = "./src/routes/Feed/components/FeedView.scss";
var sassFiles2 = "./src//components/FeedInspiration/FeedInspiration.scss";

gulp.task("sass", function() {
	log("Generate CSS files " + (new Date()).toString());
	gulp.src(sassFiles)
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
	.pipe(gulp.dest('./src/routes/Feed/components'));

	gulp.src(sassFiles)
	.pipe(sass({ style: 'expanded' }))
				.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
	.pipe(gulp.dest('./dist'));
});

gulp.task("sass", function() {
	log("Generate CSS files " + (new Date()).toString());
	gulp.src(sassFiles2)
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
	.pipe(gulp.dest('./src/components/FeedInspiration'));

	gulp.src(sassFiles2)
	.pipe(sass({ style: 'expanded' }))
				.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
	.pipe(gulp.dest('./dist'));
});

gulp.task("watch", function() {
	log("Watching scss files for modifications");
	gulp.watch(sassFiles2, ["sass"]);
});

gulp.task("bundle", function() {
	log("Bundling css files");
	gulp.src(['./public/css/*.css', './src/routes/Feed/components/FeedView.css'])
    .pipe(concatCss("dv3-feed.css"))
    .pipe(gulp.dest('./dist'));

	log("Bundling all js files from routes");
	gulp.src('./src/routes/**/*.js')
    .pipe(concat('feed.js'))
    .pipe(gulp.dest('./dist/'));
})
