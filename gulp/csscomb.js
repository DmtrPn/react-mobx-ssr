const gulp = require('gulp');
const path = require('path');
const Comb = require('csscomb');

module.exports = function csscomb() {
    return gulp.task('csscomb', () => {

        const config = require(path.resolve('.csscomb'));
        const comb = new Comb(config);

        comb.processPath('src/client');
    });
};
