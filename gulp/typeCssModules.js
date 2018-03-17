const gulp = require('gulp');
const tcm = require('gulp-typed-css-modules');

const DIST = 'src/client/**/*.scss';
const SRC = 'src/client/';

module.exports = function typeCssModules() {
    return gulp.src(DIST)
        .pipe(tcm({module: true, camelCase: true}))
        .pipe(gulp.dest(SRC));
};
