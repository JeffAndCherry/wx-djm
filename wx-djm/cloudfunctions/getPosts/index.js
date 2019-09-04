// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  return { "statusCode": 200, "data": [{ "id": "1", "thumbnail": "/images/random.png", "category": "category", "date": "2019-1-12", "meta": { "thumbnail": "thumbnail", "views": "123" }, "title": { "rendered": "第一条消息的标题" } }, { "id": "2", "thumbnail": "/images/random.png", "category": "category", "date": "2019-1-12", "meta": { "thumbnail": "thumbnail", "views": "234" }, "title": { "rendered": "第二条消息的标题" } }, { "id": "3", "thumbnail": "/images/random.png", "category": "category", "date": "2019-1-12", "meta": { "thumbnail": "thumbnail", "views": "345" }, "title": { "rendered": "第三条消息的标题" } }]}
}