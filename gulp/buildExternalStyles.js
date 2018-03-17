const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

const gulpConfig = require('./gulp-config');

module.exports = function buildExternalStyles() {
    return gulp.src(gulpConfig.externalStyles)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('externalStyles.css'))
        .pipe(gulp.dest('public/static'));
};
