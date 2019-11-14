import React from 'react'

/*** 函数式组件props参数的两种写法 ***/
// 1.如果传入的是props，则通过props.属性名 取值 
// 2.如果传入的是一个对象,如：{name}，则可以直接取值{name}
function son(props){
  /*** 函数式组件默认属性 ***/
  props = Object.keys(props).length !== 0 ? props : {name:'Zhangsan'}
  // props = JSON.stringify(props) !== '{}' ? props : {name:'Zhangsan'}  // 这种方式判断对象是否为空也可以  
  // 定义数据在函数式组件才可以写到render同级，es6组件则写在外面--见son2
  return (<div>
    <h3>comDefine的子组件</h3>
    <div>从父组件传来的props为：{props.name}</div>
  </div>)
}
export default son;