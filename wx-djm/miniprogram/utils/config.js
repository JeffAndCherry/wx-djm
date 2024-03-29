/*
 * 
 * WordPres Mini APP For Travel
 * Author: 艾码汇
 * Github:  https://github.com/dchijack/WordPress-MinAPP-For-Travel
 * 技术支持：https://www.imahui.com  微信公众号：WordPress(搜索微信号：WPGeek)
 * 
 */
var DOMAIN = "api.it120.cc";// 网站域名
var SITENAME = "大境门"; // 网站名称
var DESCRIPTION = '分享有趣旅行,讲述奇闻趣事'; // 网站描述
var SITELOGO = "../../images/icon.png"; // 网站LOGO
var REPLAYTEMPPLATEID = 'AoEILP56aMEqW07Zzix5aRAFaADRz_MIEqgDvzYE2k4';//回复评论消息模版id
var THUMBNAIL = 'https://demo.imahui.com/uploads/default.png'; // 默认缩略图
var QRCODEPATH = 'https://' + DOMAIN + '/uploads/qrcode/';		// 二维码目录
var HOST_URI = 'https://' + DOMAIN + '/f18dfef5ed5feac5d4b887f3b12dbf60/';
var HOST_WECHAT = 'https://' + DOMAIN + '/wp-json/wechat/v1/';
var DOWNLOADDOMAIN = [	// 信任下载域名
  { id: 1, domain: 'www.imahui.com' },
  { id: 2, domain: 'demo.imahui.com' }
]
var INDEXNAVIGATION = [ //首页图标导航，'id' 为导航的Id，可以自定义，'name'为名称，'image'为图标路径，'url' 为跳转页面
  { id: '1', name: '景点展示', image: '../../images/Attractions.png', url: '../list/list?id=5392'},
  { id: '2', name: '景区活动', image: '../../images/Strategy.png', url: '../list/list?id=5393'},
  { id: '3', name: '景区政务', image: '../../images/Travels.png', url: '../list/list?id=5394'},
  { id: '4', name: '景区招聘', image: '../../images/wxParse.png', url: '../list/list?id=5395'}
]

export default {
  getDomain: DOMAIN,
  getAppSite: SITENAME,
  getAppDescript: DESCRIPTION,
  getAppLogo: SITELOGO,
  getHostUrl: HOST_URI,
  getHostPlus: HOST_WECHAT,
  getThumbnail:THUMBNAIL,
  getQrcodePath:QRCODEPATH,
  getNavigation: INDEXNAVIGATION,
  getDownloadDomain: DOWNLOADDOMAIN,
  getReplayTemplateId: REPLAYTEMPPLATEID
}