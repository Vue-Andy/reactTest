import React from 'react'
import './jsx.css'

/********** ①.jsx语法实现 **********/
/* 
 * 特点：
 * 1.在 jsx 语法中使用 html 标签不用加引号，直接当对象使用
 * 2.标签一定要有对应的结束标标签或结束标识,单标签也是一样;
 * 3.只能有一个根节点;
 * 4.不能在标签当中加注释;
 * 5.jsx 语法允许 html 标签和 javascript 代码混写
*/
let html = <h1>标签直接保存到变量</h1>
let name = "DK";
let value
let handleChange = function(e){
  console.log(e.target.value)
}
let style = {fontSize: '12px', color: 'red'};
let html1 = <span style={style}>{name}</span>;
let style1 = {fontSize:'16px',fontWeight:'bold',color:'#58bc58',overflowY:'auto'}
let input = <input type='text' value={value} onChange={handleChange}  style={{height:'30px'}}/>

class jsx extends React.Component{
  /*** 为何要使用super以及props参数？？ ***/
  // https://www.jianshu.com/p/7568b0eaa503
  constructor(){
    // 在super()之前，this还没有被初始化，所以不能使用
    // console.log(this) // undefinde
    super()
    /*** 如果有使用到构造函数就不会报 no-useless-constructor 的错误了 ***/ 
    this.state = {
        msg:''
    }
  }   /*** 此处不用逗号区分开 ***/ 
  UNSAFE_componentWillMount(){
    this.setState({msg: '我是在willMount函数里赋值的msg'})
  }
  changeState = () => {
    this.setState({msg: '我是修改后的state的值'})
  }
  static defaultProps = {
    son1: 'Lily'
  }
  render(){
    return (
      <div className='son1 bs' style={style1}>
        <h3>son1 - JSX语法</h3>
        {html}
        {input}
        {html1}
        <h6 style={{color:'red'}}>{this.state.msg}</h6>
        <button onClick={this.changeState}>changeState</button>
        <div>从Father组件传来的props为：{this.props.son1}</div>  
      </div>
    ) 
  }
}
export default jsx;