var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('browser-sync');
var svgSprite = require('gulp-svg-sprite');
var svgstore = require("gulp-svgstore");
var rename = require('gulp-rename');
var autoprefixer = require("gulp-autoprefixer");
var imagemin = require("gulp-imagemin");
var cleancss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var csso = require('csso');
var concatCss = require('gulp-concat-css');

/*Task for Sass*/
gulp.task('sass', function() { //Таск sass
	return gulp.src('source/scss/**/style.scss') // Берем источник
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS 
	.pipe(gulp.dest('source/css')) // Выгружаем результат в папку css
	.pipe(server.stream());
});
/*Task for Browser-Sync*/
gulp.task('server', function(){
	server.init({
		server: 'source/',
		notify: false,
		open: true,
		cors: true,
		ui: false
		});
	gulp.watch('source/scss/**/*.scss', {usePolling: true}, gulp.series('sass'));
	gulp.watch('source/*.html').on('change', server.reload);
});

// Only svg Sprite
gulp.task("spritesvg", function () {
  return gulp.src("source/img/**/*.svg")
    .pipe(svgstore({
      inlineSvg: true
  }))
    .pipe(rename("sprite-icon.svg"))
    .pipe(gulp.dest("source/img/sprite"));
});





// min css 
gulp.task('cssmin', function () {
    gulp.src('source/css/*.css')
        .pipe(cleancss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'));
});

//Autopref
gulp.task('autoprefixer', function () {
    return gulp.src('source/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('source/css'));
});

//Image Compress
gulp.task('compress', function() {
  gulp.src('source/img/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('build/img'))
});

gulp.task('start', gulp.series('sass', 'server'));

