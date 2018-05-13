const WebpackDevServer = require('webpack-dev-server');
const path=require('path');

const config = require(path.resolve(__dirname, '../webpack.config.js'));
const webpack = require('webpack');

const options={
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    contentBase:path.resolve(__dirname, '../dist'),//本地服务器所加载的页面所在的目录
    open:true,//自动打开浏览器
    inline: true,//实时刷新
    port:3000,
    compress: true,
    hot:true  //开启热更新
};
WebpackDevServer.addDevServerEntrypoints(config,options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler,options);

server.listen(3000, '127.0.0.1', function (err) {
    if (err) throw err;
    console.log('start server listening on port 3000');
});