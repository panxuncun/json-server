
var Mock = require('mockjs')

var img = Mock.Random.image('100x100', '#4A7BF7', 'Hello')
//import Mock from 'mockjs' 错
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'user|5-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name': '@cfirst@cname',
    'province': '@province',
    'img': Mock.Random.image('80x80', '#4A7BF7', '@name')
  }]
})


//console.log(Mock.Random.image('100x100', '#4A7BF7', 'Hello'))

// 输出结果
//console.log(JSON.stringify(mdata, null, 4))

module.exports = function () {
  return data
}

