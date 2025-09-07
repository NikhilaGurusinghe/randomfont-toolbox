/*
 * MIT License
 *
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        home: {
            import: './src/sketch.ts',
            dependOn: ['p5']
        },
        large: {
            import: './src/experiments/large/sketch.ts',
            dependOn: ['p5']
        },
        medium: {
            import: './src/experiments/medium/sketch.ts',
            dependOn: ['p5']
        },
        small: {
            import: './src/experiments/small/sketch.ts',
            dependOn: ['p5']
        },
        p5: 'p5'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'assets/images/[name].[contenthash:8][ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
        },
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'randomfont',
            filename: 'index.html',
            chunks: ['home', 'p5'],
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: 'large experiment',
            filename: 'experiments/large/index.html',
            chunks: ['large', 'p5'],
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: 'medium experiment',
            filename: 'experiments/medium/index.html',
            chunks: ['medium', 'p5'],
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: 'small experiment',
            filename: 'experiments/small/index.html',
            chunks: ['small', 'p5'],
            inject: 'body'
        }),
        new MiniCssExtractPlugin()
    ],
    optimization: {
        emitOnErrors: false,
        splitChunks: {
            chunks: "all",
        },
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.sharpMinify,
                    options: {
                        encodeOptions: {
                            jpeg: {
                                // https://sharp.pixelplumbing.com/api-output#jpeg
                                quality: 100,
                            },
                            webp: {
                                // https://sharp.pixelplumbing.com/api-output#webp
                                lossless: true,
                            },
                            avif: {
                                // https://sharp.pixelplumbing.com/api-output#avif
                                lossless: true,
                            },

                            // PNG by default sets the quality to 100%, which is same as lossless
                            // https://sharp.pixelplumbing.com/api-output#png
                            png: { quality: 90 },

                            // GIF does not support lossless compression at all
                            // https://sharp.pixelplumbing.com/api-output#gif
                            gif: {},
                        },
                    },
                },
            }),
        ]
    },
    output: {
        path: path.resolve(__dirname, 'out/dist'),
        filename: '[name].[fullhash:8].js',
        sourceMapFilename: '[name].[fullhash:8].map',
        chunkFilename: '[name].[fullhash:8].js',
        clean: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'out/dist')
        },
        client: {
            overlay: true
        },
        compress: true,
        host: '127.0.0.1',
        port: 8080,
        hot: true,
        watchFiles: ['./src/**/*.ts'],
        liveReload: true,
        webSocketServer: false
    }
};
