// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  var resultArry = '[{"id","1","thumbnail":"2","category":"2","thumbnail":"2","date":"2019-1-12","comments":"123","thumbses":"123","meta":{"thumbnail":"123","views":"123"},"title":{"rendered":"123"}}]'
  return JSON.stringify(resultArry);;
}