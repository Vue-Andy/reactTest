const React = require('react')

class son extends React.Component{
  state = {
    msg:'我是初始值'
  }
  change() {
    this.setState({msg:'修改后的值...'}) 
  }
  changeMsg() {
    this.props.changeMsg() 
  }
  render() {
    return (<div>
      <h3>我是子组件</h3>
      <p>{this.state.msg}</p>
      <p>从父组件传过来的参数为：{this.props.msg}</p>
      <p><button onClick={this.changeMsg.bind(this)}>点我改变父组件的state</button></p>
    </div>)
  }
}
export default son;
