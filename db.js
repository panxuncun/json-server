
var Mock = require('mockjs')
//import Mock from 'mockjs' 错
var mdata = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name':'@cname'
    }]
})
// 输出结果
console.log(JSON.stringify(mdata, null, 4))

module.exports = function() {
  let data = { list: [],mdata }


//   for (let i = 0; i < 100; i++) {
//     data.list.push({ id: i, name: 'user' + i })
//   }
  return mdata
}