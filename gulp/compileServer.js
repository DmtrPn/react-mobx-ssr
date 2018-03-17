const gulp = require('gulp');
const typescript = require('typescript');
const ts = require('gulp-typescript');

const project = ts.createProject('./tsconfig.json', { typescript });

module.exports = function compileServer() {
    let result = gulp.src('src/server/**/*{ts,tsx}').pipe(project());
    return result.js.pipe(gulp.dest('dist/server'));
};
