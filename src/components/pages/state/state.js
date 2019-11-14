import React from 'react' 

/** 
 * state 可以理解成 props，不一样的在于 props 是只读的，而 state 是可读写。
 * 当 state 发生改变的时候会重新执行 render 方法去渲染整颗 DOM 树，在渲染的过程中会有 diff 算法去计算哪些 DOM 有更新，从而提升性能。 
 * 在使用 state　前要先初始化 getInitialState 更改 state 一定要用 setState getInitialState 该方法在每次 render 时都会被调用一次。
**/
/* es5里面state用getInitialState:function(){ return {}} 的方式 
var Son1 = React.createClass({ // es6已经不支持此方法了
    getInitialState: function(){
        return {
            text: ''
        }
    },
    getDefaultProps: function(){
        return {
            name: 'Tom',
            age: 20
        }
    },  -----  此处用逗号区分开函数
    render: function(){
        return (
            <div>
                <h1>Tom</h1>
                <h1>Sam</h1>
            </div>
        )
    }
}) */
/* es6里面state直接用state = {} 的方式--见son4; state的初始化，通过构造函数
*/
let style = {
    border:'2px solid #888',
    background:'#666',
    padding:'10px',
    marginTop:'10px'
}
class state extends React.Component{
    constructor(){
        super()
        // state的初始化，通过构造函数
        this.state = {
            status: 0
        }
    }
    render(){
        return (<div className='son5' style={style}>
            <h3>son5 - State</h3>
            <div>{this.state.status}</div>
        </div>)
    }
}
export default state;
