var React = require('react');
class foodlist extends React.Component{
  state = {  // es5里面才有getInitialState
    id:null
  }
  render() {
    return (
      <div>
        foodlist--id:{this.state.id}
        <button onClick={this.jump.bind(this)}>跳转到foodmenu</button>
      </div>
    )
  }
  componentDidMount() {
    let index = this.props.location.pathname.lastIndexOf('/')
    console.log(this.props.location.pathname.slice(index+1))
    this.setState({id:this.props.location.pathname.slice(index+1)})
  }
  jump() {
    this.props.history.push({pathname:'/router/foodmenu',query:{data:123}})
  }
}
export default foodlist;