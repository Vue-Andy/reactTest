// React组件的使用---只需要引入React即可，不需要引入ReactDOM
import React from 'react';
import Son1 from '../sons/son1/son1'
import Son2 from '../sons/son2/son2'
import Son3 from '../sons/son3/son3'
import Son4 from '../sons/son4/son4'
import Son5 from '../sons/son5/son5'
import Son6 from '../sons/son6/son6'
let obj = 'msg from father'  // 也可以使用动态方式绑定属性到子组件


function Father(props){ 
    /*** 函数式组件props参数的两种写法 ***/
    // 1.如果传入的是props，则通过props.属性名 取值 
    // 2.如果传入的是一个对象,如：{name}，则可以直接取值{name}

    /*** 函数式组件默认属性 ***/
    props = Object.keys(props).length !== 0 ? props : {name:'Zhangsan'}
    // props = JSON.stringify(props) !== '{}' ? props : {name:'Zhangsan'}  // 这种方式判断对象是否为空也可以  
    
    // 定义数据在函数式组件才可以写到render同级，es6组件则写在外面--见son2
    return (
        <div className='father bs'>
            <h2>I am father component</h2>
            从app组件传来的props为：{props.name}
            <Son1 son1={obj}></Son1>
            <Son2></Son2>
            <Son3>
                <span>childnode1</span>
                <span>childnode2</span>
            </Son3>
            <Son4></Son4>
            <Son5></Son5>
            <Son6></Son6>
        </div>
    )
}
export default Father;
