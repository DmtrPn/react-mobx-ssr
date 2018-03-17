const path = require('path');
const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');

const Path = {
    SRC: './src/client/**/*.svg',
    TEMPLATE: './src/client/modules/common/Icon/template.html',
    PUBLIC: './public',
    DEST_SVG: '../sprite.svg',
    DEST_SCSS: '../../dist/client/sprite.scss'
};

module.exports = function buildSprite() {
    return gulp.src(Path.SRC)
        .pipe(svgmin({
            js2svg: { pretty: true }
        }))
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: Path.DEST_SVG,
                    render: {
                        scss: {
                            dest: Path.DEST_SCSS,
                            template: Path.TEMPLATE
                        }
                    }
                }
            },
            shape: {
                id: {
                    generator(name, file) {
                        let parsedPath = path.parse(name);
                        return parsedPath.name;
                    }
                }
            }
        }))
        .pipe(gulp.dest(Path.PUBLIC));
};
