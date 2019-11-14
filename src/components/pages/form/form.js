const React = require('react')
class form extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text: 'Hello React',
      textareaText:'anything',
      selectValue:'lime'
    }
    this.change.bind(this)
  }
  change = (e,param) => {
    if(param === 2) {
      this.setState({text: e.target.value})
    }else if(param === 3) {
      this.setState({textareaText: e.target.value})
    }else{
      this.setState({selectValue: e.target.value})
    }
  }
  submit() {
    console.log([this.state.text,this.state.textareaText,this.state.selectValue])
    console.log(this.file.files)
  }
  render() {
    return (
      <div>
        <h3>input输入框</h3>
        <p><label>写死value-锁定状态</label><input type="text" value="hello react" onChange={(ev)=> this.change(ev,1)}/></p>
        <p><label>动态value-没锁状态</label><input type="text" value={this.state.text} onChange={(ev)=> this.change(ev,2)}/></p>
        <p><label>不指定value-没锁状态</label><input type="text"/></p>
        
        <h3>textarea输入框</h3>
        <textarea value={this.state.textareaText} onChange={(ev)=> this.change(ev,3)}/>

        <h3>select下拉框</h3>
        <select value={this.state.selectValue} onChange={(ev)=> this.change(ev,4)}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>  

        <h3>文件上传</h3>
        <input type='file' ref={input => {this.file = input}}/>
        {/* <input type="button" value="submit" onClick={this.submit} /> */}
        <button onClick={this.submit.bind(this)}>提交</button>
      </div>
    )
  }
}
export default form;