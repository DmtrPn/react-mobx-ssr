const gulp = require('gulp');
const webpack = require('webpack-stream');

const configPath = process.env.PRG_ENV === 'prod' ? '../webpack.prod.config.js' : '../webpack.dev.config.js';

module.exports = function() {
    return gulp.src('dist/client/app.js')
        .pipe(webpack(require(configPath)))
        .pipe(gulp.dest('public/static'));
};
