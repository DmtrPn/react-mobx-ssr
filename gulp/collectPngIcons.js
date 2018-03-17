const gulp = require('gulp');
const path = require('path');

const PNG_PATH = './src/client/modules/common/Icon/png/*.png';
const DEST = path.resolve('dist/client/modules/common/Icon/png');

module.exports = function collectPngIcons() {
    return gulp.src(PNG_PATH)
        .pipe(gulp.dest(DEST));
};
