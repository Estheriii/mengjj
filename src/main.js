import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/home/main','pages/explore/main',
            'pages/add/main','pages/like/main','pages/my/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    "tabBar":
    {
      "color":"white",
      "selectedColor":"whitew",
     "borderStyle":"white",
     "backgroundColor":"#fff",  
    "list":[{
      "pagePath":'pages/home/main',
      "iconPath":"static/home.png",
      "selectedIconPath":"static/home-a.png",
    },{
      "pagePath":'pages/explore/main',
      "iconPath":"static/explore.png",
      "selectedIconPath":"static/explore-a.png",
    },{
      "pagePath":'pages/add/main',
      "iconPath":"static/add.png",
      "selectedIconPath":"static/add-a.png",
    },{
      "pagePath":'pages/like/main',
      "iconPath":"static/like.png",
      "selectedIconPath":"static/like-a.png",
    },{
      "pagePath":'pages/my/main',
      "iconPath":"static/my.png",
      "selectedIconPath":"static/my-a.png",
    }]
  }
  }
}

