/*
文件配置：

    基础配置   
    entry       入口 代表webpack要构建哪个文件     
    module      各种loader配置 文件解析器的配置        
    plugins     提供插件       
    output      出口

    进阶配置      
    resolve
    devtool
    devServer       开启服务

*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:{
        app:'./app/js/main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true, //是否开启gzip压缩
        port: 9000  //服务占用的接口
    },
    module:{//告诉webpack什么样的文件使用什么样的解析器
        loaders:[{
            test:/\.html$/,       //识别文件的正则表达式
            loader:'html-loader'  //文件解析器
        },{
            test:/\.vue$/,
            loader:'vue-loader'
        },{
            test:'/\.scss$/',
            loader:'style-loader!css-loader!sass-loader'  //webpack支持一个文件用多种解析器进行解析，解析器之间用！连接，解析顺序从右往左
        }]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'app/view/index.html'
        })
    ],
    output:{
        filename:'[name].min.js', //输出文件名
        path: path.resolve(__dirname,'dist')  //path由nodeJS提供 __dirname：表示当前路径  dist：表示起的路径名
    }
}