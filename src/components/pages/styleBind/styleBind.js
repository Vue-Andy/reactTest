import React from 'react' 
import './styleBind.css'

/********** ②样式绑定 **********/
// 一：申明对象，再引用 1.直接在便签里写 style={style} 2.在外部JSX语法标签里写 style={style},再整体引入到render
// 二：绑定className，如 son2
// 三：直接内联绑定样式，需要使用{{}} -- 见组件里的ul

let style = {fontSize: '12px', color: '#000'};
let html = <span style={style}>样式绑定第二种：绑定className</span>;
class styleBind extends React.Component{
  render(){
    return (<div className='son6'>
      <h3>son6 - 样式绑定</h3>
      <div style={style}>样式绑定第一种：申明对象，再引用</div>
      {html}
      <ul style={{listStyle:'none'}}>
        <li>样式绑定第三种：直接内联绑定样式</li>
        <li>basketball</li>
        <li>football</li>
        <li>volleball</li>
      </ul>
    </div>)
  }
}
export default styleBind;
