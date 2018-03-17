const gulp = require('gulp');
const path = require('path');
const lint = require('gulp-tslint');

module.exports = function tslint() {
   return gulp.task('tslint', () => {
        return gulp.src(['src/**/*.tsx', 'src/**/*.ts', '!src/**/*.css.d.ts'])
            .pipe(lint({
                formatter: 'stylish'
            }))
            .pipe(lint.report({
                emitError: false,
                summarizeFailureOutput: true
            }));
    });
};
