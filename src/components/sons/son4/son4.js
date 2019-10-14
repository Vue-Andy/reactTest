import React from 'react'
import './son4.css'

export default class Son4 extends React.Component{
    constructor(){
        super()
        this.focusHandler = this.focusHandler.bind(this)  // 在模板里调用时bind 或者在 构造函数里bind
    }
    state = {  // es5里面才有getInitialState
        msg:'初始值',
        data:'initial data',
        name:'Zhangsan',
        initNum:0,
        count:0,
        addr:''
    }
    submit(e){  // 事件对象 event 是一个合成事件，所以不需要担心浏览器兼容的问题
        e.target.style.color = 'red'
    }
    // 为了改变this的指向,可以采取以下几种方式:
    // 一:事件定义使用箭头函数
    changeData = () => {
        // 使用箭头函数就不需要在constructor里面bind this 了 
        this.setState({data:'changed data'})
    }
    // 二：事件调用时使用用箭头函数,函数名后面需要加()
    changeName(){
        // console.log(e.target)
        this.setState({name:'Lisi'})
    }
    // 三：构造函数中使用 bind(this)
    focusHandler(){  // 通过refs获取DOM节点
        console.log(this)  // 如果不在constructor里面bind this 会指向undefined
        this.refs.name.focus();
    }
    // 四：事件调用时用 bind(this)
    handleClick(){
        this.setState({msg : '修改后的值'})
    }
    // 事件传参数
    // 一：事件调用时使用用箭头函数传参
    add = (n) => {
        // var changedNum = this.state.initNum + n
        this.setState({initNum: this.state.initNum+n})
    }
    // 二：事件调用时用 bind，传参
    count(n){
        this.setState({count: this.state.count+n})
    }
    changeAddr(e){
        this.setState({addr:e.target.value})
    }
    render(){
        return (
            <div className='son4'>
                <h3>son4 - 组件事件</h3>
                <div>{this.state.msg}</div>
                <button onClick={this.handleClick.bind(this)}>click me!</button> <br/>
                <input type="text" name="name" placeholder="" ref="name"/>
                <input type="button" name="" value="focus" onClick={this.focusHandler} /><br/>
                <input type="button" value="submit" onClick={this.submit}/>
                <span>{this.state.data}</span>
                <input type="button" value="data" onClick={this.changeData}/>
                <span>{this.state.name}</span>
                <input type="button" value="name" onClick={() => this.changeName()}/><br/>
                <span>{this.state.initNum}</span>
                <input type="button" value="add" onClick={() => this.add(10)}/>
                <span>{this.state.count}</span>
                <input type="button" value="count" onClick={this.count.bind(this,100)}/><br/>
                <span>{this.state.addr}</span>
                <input type="text" value={this.state.addr} onChange={this.changeAddr.bind(this)}/><br/>
            </div>
        )
    }
}
