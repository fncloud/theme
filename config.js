// config.js

window.config = {
  logo: 'https://yunpan.fncloud.top/PicGo/favicon',             // 网站 logo
  title: 'FnCloud',                                            // 网站标题
  host: 'https://qq.fncloud.top/',                            // 后端接口地址（注意最后要带 “/”）
  
  storeHome: {
    title: '选择最适合你的订阅计划',
    description: '若您已购买订阅且当前未过期，再次购买相同套餐将在原过期时间上追加时长，购买其他套餐则对原有订阅进行覆盖替换，流量、并重置到期时间.  如需更换订阅，请确认无误后再操作.'
  },

  SignPage: {
    title: '覆盖全球的高速网络，您的高速旅程从 AirBus 开始',
    desc1: 'High-speed network covering the whole world',
    desc2: 'Your high-speed journey starts with AirBus',
    inviteCodeEdit: false
  },

  homeClient: {
    display: true, // 是否显示客户端下载教程卡片
    clients: [
      {
        key: 'ios',
        title: 'iOS 客户端',
        icon: 'ri:apple-fill',
        downloadLink: '/#/dashboard/knowledge/1',
        // 官方文档站点，保留外链
        knowledgeLink: '/#/dashboard/knowledge/1'
      },
      {
        key: 'android',
        title: 'Android 客户端',
        icon: 'ri:android-fill',
        downloadLink: 'https://gh-proxy.com/https://github.com/MetaCubeX/ClashMetaForAndroid/releases/download/v2.11.13/cmfa-2.11.13-meta-universal-release.apk',
        knowledgeLink: '/#/dashboard/knowledge/2'
      },
      {
        key: 'windows',
        title: 'Windows 客户端',
        icon: 'ri:windows-fill',
        downloadLink: 'https://gh-proxy.com/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.3.1/Clash.Verge_2.3.1_x64-setup.exe',
        // 统一改为用主域名前缀，避免因相对/外域混用导致跳转失效
        knowledgeLink: '/#/dashboard/knowledge/3'
      },
      {
        key: 'mac',
        title: 'Mac 客户端',
        icon: 'ri:finder-fill',
        downloadLink: 'https://gh-proxy.com/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.3.1/Clash.Verge_2.3.1_aarch64.dmg',
        knowledgeLink: '/#/dashboard/knowledge/5'
      },
      {
        key: 'knowledge',
        title: '常见问题',
        icon: 'ri:questionnaire-fill',
        downloadLink: '/#/dashboard/knowledge/8',
        knowledgeLink: '/#/dashboard/knowledge/8'
      }
    ]
  },

  homeBanner: {
    display: true,
    title: '邀请好友享首次付费20%返佣',
    link: '/dashboard/invite',
    btnText: '立即邀请',
    element: 'https://tencentcdna.production.link3.cc/user_create_images/link3_1742225483539/picsingle/1750367406447',
    bgImg: 'https://gd-hbimg.huaban.com/246ac6f06aeeab3b0c7e5908e7693b9a0e1b8a5249899-hB42f3_fw1200'
  }
};
