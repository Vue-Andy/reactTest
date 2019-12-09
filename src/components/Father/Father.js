// React组件的使用---只需要引入React即可，不需要引入ReactDOM
import React from 'react';
import Son from './son';
import './father.css';

class Father extends React.Component{ 
  state={
    msg:'父组件初始值'
  }
  changeMsg() {
    this.setState({msg:'修改后的父组件值...'})
  }
  changeSon= ()=> {
    // 调用子组件的change方法
    this.refs.son.change()
  }
  render() {
    return (<div className='father bs'>
      <h2>I am father component</h2>
      <p>{this.state.msg}</p>
      <button onClick={this.changeSon.bind(this)}>点我改变子组件值</button>
      {/*引用子组件时通过属性传值把事件传过去*/}
      <Son ref='son' msg="我是你爸爸" changeMsg={this.changeMsg.bind(this)}></Son>
    </div>)
  }
}
export default Father;
