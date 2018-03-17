const gulp = require('gulp');
const path = require('path');

const IMAGE_PATH = './assets/images/*.*(png|ico|gif|jpg|svg)';
const DEST = path.resolve('public/static/images');

module.exports = function collectImages() {
    return gulp.src(IMAGE_PATH)
        .pipe(gulp.dest(DEST));
};
