import React from 'react' 
import './styleBind.css'

/********** ②样式绑定 **********/
// 一：申明对象，再引用 1.直接在便签里写 style={style} 2.在外部JSX语法标签里写 style={style},再整体引入到render
// 二：绑定className
// 三：直接内联绑定样式，需要使用{{}} 

let style = {fontSize: '12px', color: '#000'};
let html = <span>可以先声明代码片段，再引入</span>;
class styleBind extends React.Component{
  render(){
    return (<div>
      <h3>样式绑定</h3>
      <div style={style}>样式绑定第一种：行内样式--申明对象，再引用</div>
      <div className='colorRed'>样式绑定第二种：绑定className</div>
      <div style={{color:'green'}}>样式绑定第三种：直接内联绑定样式</div>
      <div>{html}</div>
    </div>)
  }
}
export default styleBind;
