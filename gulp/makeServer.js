const gulp = require('gulp');
const babel = require('gulp-babel');

module.exports = function() {
    gulp.src('dist/**/*.js')
        .pipe(babel({
            presets: ['es2015'],
            plugins: [
                [
                    "css-modules-transform", {
                        "generateScopedName": "./getLocalIdent.js",
                        "extensions": [".scss"]
                    }
                ],
                [
                    "file-loader",
                    {
                        "name": "[name].[ext]",
                        "extensions": ["png", "jpg", "jpeg", "gif"],
                        "publicPath": "static/images/",
                        "emitFile": false
                    }
                ]
            ]
        }))
        .pipe(gulp.dest('build'));
};
