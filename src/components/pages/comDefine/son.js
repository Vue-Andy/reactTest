import React from 'react'
class son extends React.Component{
  render(){
    return (<div>
      <h3>comDefine的子组件</h3>
      <div>从父组件传来的props为：{this.props.name}</div>
    </div>)
  }
}
export default son;