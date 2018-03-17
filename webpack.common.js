const path = require('path');
const lodash = require('lodash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const LOCAL_SUBTRAHEND = 2;
const COMPONENT_SUBTRAHEND = 1;

module.exports = {
    entry: './dist/client/App.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/')
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            plugins: [
                                'transform-decorators-legacy',
                                'transform-class-properties'
                            ],
                            presets: ['es2015', 'stage-0', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                minimize: true,
                                sourceMap: true,
                                importLoaders: 2,
                                getLocalIdent: getLocalIdent
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: (loader) => [
                                    require('autoprefixer')()
                                ]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                modules: true,
                                sourceMap: true
                            }
                        }
                    ]
                }),
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true,
                            svgo: {
                                plugins: [
                                    { removeTitle: false }
                                ],
                                floatPrecision: 2
                            },

                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpg|jpeg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: 'static/',
                            outputPath: 'images/'
                        }
                    }
                ],
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};

function getLocalIdent(context, localIdentName, localName, options) {

    const filePath = context.resourcePath;
    const pathParts = filePath.split(path.sep);
    const lastIndex = pathParts.length - 1;

    let className = '';

    if(/_.scss$/i.test(pathParts[lastIndex])) {
        className = localName;
    } else {
        const local = pathParts[lastIndex - LOCAL_SUBTRAHEND];
        const component = pathParts[lastIndex - COMPONENT_SUBTRAHEND];

        const parts = [
            lodash.kebabCase(local),
            lodash.kebabCase(component),
            localName
        ];

        className = parts.join('__');
    }

    return className
}