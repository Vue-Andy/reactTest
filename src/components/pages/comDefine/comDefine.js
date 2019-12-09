import React from 'react'  // 用import 或者 require 都可以
// var React = require('react');
/*** 如果想要定义属性的时候添加条件限制，需要引入PropTypes ***/
import PropTypes from 'prop-types'
import './comDefine.css'
import Son from './son'
/*组件小结：
    组件名首字母必须为大写
    函数返回一个虚拟 DOM 节点
    类组件必须要有 render 方法
    render 必须返回一个虚拟 DOM 节点
    实际工作中，类组件是常用的方式
*/

/********** 申明组件的方法 **********/
// 一：函数式组件，可以通过props直接传入参数
/* function Father(props){
    return (
      <div>
        {props.name}
      </div>
    )
} */

// 二：类组件 —— ES5 语法 --jsx组件
/* 默认属性用 getDefaultProps：function(){ return {}} 的方式 
* 取值用this.props.属性名
* es5里面state用getInitialState:function(){ return {}} 的方式 
var Son2 = React.createClass({ // es6已经不支持此方法了
  getInitialState: function(){
    return {
      text: ''
    }
  },
  getDefaultProps: function(){
    return {
      name: 'Tom',
      age: 20
    }
  },  -----  此处用逗号区分开函数
  render: function(){
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}) */

/* 三：类组件 —— ES6 语法 --jsx组件
* 默认属性用 static defaultProps = {} 的方式;也可定义在外面，如：Son1.defaultProps = {} 
* 取值用this.props.属性名 
* es6里面state直接用state = {} 的方式; state的初始化，通过构造函数，见son3组件
* 属性的类型规则 --- 见son2 */

/********* 组件属性(Props) **********/
// 1.函数式组件，可以通过props直接传入参数
// 2.类组件不管是否设置默认属性，都用 this.props.属性名取值
// 3.默认属性 
// ① 函数式组件：见Father组件
// ② ES5类组件默认属性用 getDefaultProps：function(){ return {}} 的方式
// ③ ES6默认属性用 static defaultProps = {} 的方式;也可定义在外面，如：Son2.defaultProps = {} 
class comDefine extends React.Component{
  static defaultProps = {
    son2:'我是默认属性'
  }
  render(){
    return (<div className='comDefine'>
      <h3>comDefine - 组件定义</h3>
      <div>默认属性：{this.props.son2}</div>
      <Son name='lisi'></Son>
    </div>)
  }
}
// 默认属性的第二种
/* Son2.defaultProps = {
    name: "Sam",
    age: 22
} */
/*** 属性的类型规则(propTypes) ***/
comDefine.propTypes = {
  son2: PropTypes.string.isRequired
}
export default comDefine;
