import React from 'react'
import './comRender.css'

/*** 组件渲染 ***/
// 一：条件渲染（动态组件）
let Login = (props) => {
    return <input type="button" value="login" onClick={props.click}/>;
}
let Logout = (props) => {
    return <input type="button" value="logout" onClick={props.click}/>;
}
// 二：列表渲染--React 没有指令，所以在列表渲染时得借助数组来完成
// 1.列表渲染 —— 简单实现
let lis = [<li key="Javascript">函数式组件</li>, <li key="Vue">ES5组件</li>, <li key="React">ES6组件</li>]
// 2.列表渲染 —— 循环 for
let data = ['Javascript', 'Vue', 'React']
let lis1 = [];
for(let frm of data){
    lis1.push(<li key={frm}>{frm}</li>)
} 
// 3.列表渲染 —— 循环 map --- 可以如下操作，也可以在render的时候map
let lis2 = data.map((frm) => {
    return <li key={frm}>{frm}</li>
});
// 4.列表渲染 —— 对象数组  ---见组件里的students / array
// 5.列表渲染 —— 键(Keys)  --- 见本组件的渲染
/*
* 因为 React 是虚拟 DOM 到真实 DOM 的一个过程，而 DOM 本身就是一个对象，对象默认没有唯一标识，所以需要手动指定
* 键(Keys) 帮助 React 标识哪个项被修改、添加或者移除了。数组中的每一个元素都应该有一个唯一不变的键(Keys)来标识。
* 键(Keys)用到列表渲染中，同辈元素中必须是唯一的
*/
// 三：组件渲染 —— 组件子节点
export default class comRender extends React.Component{
    constructor(){
        super()
        this.getKeys = this.getKeys.bind(this)
    }
    state = {
        status:0
    }
    login(){
        this.setState({status: 1})
    }
    logout(){
        this.setState({status: 0})
    }
    getKeys(obj = {}){  // es6 默认参数
        return Object.keys(obj)
    }
    static defaultProps = {
        students: [
            {id: 1, name: 'Tom', age: 18, gender: 1}, 
            {id: 2, name: 'Sam', age: 22, gender: 1}, 
            {id: 3, name: 'Lucy', age: 20, gender: 0},
            {id: 4, name: 'Nacy', age: 25, gender: 0}
        ]
    }
    render(){
        // 此段代码依赖state，所以写在render里面，不依赖state的话，写里面外面都可以
        let array = [{name:'zhangsan'},{name:'lisi'},{name:'wangwu'}]
        let button = null;
        if(this.state.status === 0){
            button = <Login click={this.login.bind(this)}/>
        } else {
            button = <Logout click={this.logout.bind(this)} />
        }
        return (
            <div className='comRender'>
                <h3>comRender - 组件渲染</h3>
                {button}
                <ul>
                    {lis}
                </ul>
                <ul>
                    {lis1}
                </ul>
                <ul>
                    {lis2}
                </ul>
                <ul>
                    {
                        array.map(function(item,index){
                            return <li key={index}>{item.name}--{index}</li>
                        })
                    }
                </ul>
                <table>
                    <thead>
                        <tr>
                            {
                                this.getKeys(this.props.students[0]).map((key) => {
                                    return <th key={key}>{key}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.students.map((obj) => {
                                return (
                                    <tr key={obj.id}>
                                        {
                                            this.getKeys(obj).map((key, idx) => {
                                                return <td key={key + idx}>{obj[key]}</td>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {
                    React.Children.map(this.props.children,function(item){
                        return <li>{item}</li>
                    })
                }
            </div>
        )
    }
}
