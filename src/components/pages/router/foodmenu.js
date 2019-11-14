var React = require('react');
class foodmenu extends React.Component{
  render() {
    return (
      <div>foodmenu</div>
    )
  }
  
  componentDidMount() {
    console.log(this.props.location.query)
  }
}
export default foodmenu