var gulp = require('gulp'),
    uglify = require('gulp-uglify');
jshint = require('gulp-jshint');
concat = require('gulp-concat');
debug = require('gulp-debug');
fixmyjs = require("gulp-fixmyjs");
cleanCSS = require('gulp-clean-css');

var libraries = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-route/angular-route.min.js',
    'bower_components/angular-animate/angular-animate.min.js'
];

var controllers = [
    'resources/angular/js/application.js',
    'resources/angular/js/MainController.js'
];

var cssFiles = [
    'resources/assets/css/style.css',
    'resources/assets/css/animation.css'
];

gulp.task('components', function () {
    return gulp.src(libraries)
        .pipe(debug())
        .pipe(uglify())
        .pipe(fixmyjs({
            asi: false
        }))
        .pipe(concat('components.js'))
        .pipe(gulp.dest('resources/build/js'));
});

// All Controllers
gulp.task('angularControllers', function () {
    return gulp.src(controllers)
        .pipe(debug())
        .pipe(uglify())
        .pipe(fixmyjs({
            asi: false
        }))
        .pipe(concat('controllers.js'))
        .pipe(gulp.dest('resources/build/js'));
});

// CSS Files
gulp.task('css', function () {
    return gulp.src(cssFiles)
        .pipe(jshint())
        .pipe(debug())
        .pipe(cleanCSS())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('resources/build/css'))
});

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch(cssFiles, ['css']);
    gulp.watch(controllers, ['angularControllers']);
    gulp.watch(libraries, ['components']);
});

gulp.task('default', ['components', 'css', 'angularControllers', 'watch']);