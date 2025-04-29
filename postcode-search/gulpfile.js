const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

// Adjust the paths as needed
const paths = {
  scss: './src/main.scss',
  output: './src/assets/css'
};

gulp.task('build-css', () => {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.output));
});

// Optional: Watch task
gulp.task('watch', () => {
  gulp.watch(paths.scss, gulp.series('build-css'));
})