const gulp = require('gulp');
const path = require('path');

const paths = {
    fonts: path.resolve(__dirname, '../assets/fonts/**/*'),
    public: path.resolve(__dirname, '../public/static/fonts')
};

module.exports = function fonts() {
    return gulp.src(paths.fonts).pipe(gulp.dest(paths.public));
};
