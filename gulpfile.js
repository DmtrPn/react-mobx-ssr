const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const watch = require('gulp-watch');

const tasks = require('./gulp');

gulp.task('default', gulpSequence(
    'clean',
    'fonts',
    'collect-images',
    ['csscomb', 'build-sprite', 'tslint'],
    ['styles', 'external-styles'],
    'tcm',
    'build'
));

gulp.task('dev', gulpSequence('default', 'watch'));

gulp.task('clean', ['clean-client', 'clean-server', 'clean-build']);
gulp.task('clean-client', tasks.cleanClient);
gulp.task('clean-server', tasks.cleanServer);
gulp.task('clean-build', tasks.cleanBuild);

gulp.task('styles', ['sass']);
gulp.task('sass', tasks.buildStyles);
gulp.task('tcm', tasks.typeCssModules);
gulp.task('csscomb', tasks.csscomb);
gulp.task('external-styles', tasks.externalStyles);

gulp.task('fonts', tasks.fonts);
gulp.task('build-sprite', ['icon-type'], tasks.buildSprite);
gulp.task('icon-type', tasks.generateIconType);
gulp.task('collect-images', tasks.collectImages);

gulp.task('tslint', tasks.tslint);

gulp.task('build', ['bundle', 'compile-server'], tasks.makeServer);
gulp.task('bundle', ['compile-client'], tasks.makeBundle);
gulp.task('compile-client', tasks.compileClient);
gulp.task('compile-server', tasks.compileServer);
gulp.task('make-server', ['compile-server'], tasks.makeServer);
gulp.task('make-client', ['bundle'], tasks.makeServer);

gulp.task('watch', () => {
    watch(['src/client/**/*.ts', 'src/client/**/*.tsx'], () => gulp.start('make-client'));
    watch(['src/server/**/*.ts', 'src/server/**/*.tsx'], () => gulp.start('make-server'));
    watch(['src/**/*.ts', 'src/**/*.tsx'], () => gulp.start('tslint'));
    watch(['src/client/**/*.scss'], () => gulp.start('styles'));
    watch(['dist/client/**/*.scss'], () => gulp.start('tcm'));
});
