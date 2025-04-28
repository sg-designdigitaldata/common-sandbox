// Design System, CSS, JS 
//=======================
// Reference node modules list depDep
// Gulp
const gulp = require('gulp');
// SCSS to CSS
const sass = require('gulp-sass')(require('sass'));
// JS to ES5
const browserify = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");

// Application wwwroot folder
const wwwrootapp = 'ApiVisualiser/wwwroot/lib/designsystem';

//====================
// Import Design System from node_modules to wwwroot (@scottish-government devDep in package.json)
// Run: gulp dsbuild
function dsbuild() {
    return gulp.src('node_modules/@scottish-government/design-system/src/**')
        .pipe(gulp.dest(wwwrootapp))
};

//====================
// SCSS to CSS
// App
// Run: gulp styleapp
function styleapp() {
    return gulp.src(wwwrootapp + "/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest(wwwrootapp))
};

//====================
// Create es5 js file
// App
// Run: gulp jses5app
function jses5app() {
    return (
        browserify({
            entries: [wwwrootapp + "/all.js"],
            transform: [babelify.configure({ presets: ["@babel/preset-env"] })]
        })
            .bundle()
            .pipe(source("all.es5.js"))
            // Turn it into a buffer!
            .pipe(buffer())
            // And uglify
            .pipe(uglify())
            .pipe(gulp.dest(wwwrootapp))
    );
};

//====================
exports.dsbuild = dsbuild;
exports.styleapp = styleapp;
exports.jses5app = jses5app;
// =====================