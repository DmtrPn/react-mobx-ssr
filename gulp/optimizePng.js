const gulp = require('gulp');
const image = require('gulp-image');

const ICONS_FOLDER = './src/client/modules/common/Icon/png';

module.exports = function optimizePng() {
    return gulp.src('ICONS_FOLDER')
        .pipe(image())
        .pipe(gulp.dest('./dist'));
};
