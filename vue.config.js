// const urlDns = "https://192.168.2.23";   // 老叶电脑
// const urlDns = "https://192.168.2.113";   // 本地
const urlDns = "https://111.230.225.181";   // 腾讯云
// const urlDns = 'http://123.207.32.32:8000'   // why 服务器


module.exports = {
  // 解决别名的问题
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'store': '@/store',
        'views': '@/views'
      }
    }
  },
  // 反向代理:   解决跨域 访问数据的问题
  devServer: {
    open: false,
    https: false,
    hotOnly: false,
    port: 9088,
    proxy: {
      '/control': {
        target: urlDns,
        changeOrigin: true,
        ws:true,
        // secure: false,  // 如果是https接口，需要配置这个参数
        pathRewrite: {
          '^/control': '/control_app'
        }
        
      },
      '/hyt': {
        target: urlDns,
        changeOrigin: true,
        ws:true,
        pathRewrite: {
          '^/hyt': ''   // 这种接口配置出来
        }
      },
      '/api': {
        target: 'http://39.97.33.178',
        changeOrigin: true,
        ws:true,
      }
    }
  },
  // publicPath: "./"
}