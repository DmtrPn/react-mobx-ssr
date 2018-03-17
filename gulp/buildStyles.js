const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

module.exports = function buildStyles() {
    return gulp.src(['src/**/*.scss'])
        .pipe(gulp.dest('./dist'));
};
