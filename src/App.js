import React from 'react';

// import { HashRouter as Router, Route} from 'react-router-dom'
// 引入路由模块 --- cnpm install react-router-dom -S
import {
  Route,
  Switch,
  // Link,
  // Redirect,
  NavLink,
  BrowserRouter as Router
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Father from './components/Father/Father'  // 此处引入组件
import jsx from './components/pages/jsx/jsx'  
import comDefine from './components/pages/comDefine/comDefine' 
import comRender from './components/pages/comRender/comRender'  
import eventBind from './components/pages/eventBind/eventBind'  
import state from './components/pages/state/state'  
import styleBind from './components/pages/styleBind/styleBind'  
import router from './components/pages/router/router'  
import form from './components/pages/form/form'  
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>
            <NavLink to="/father" activeClassName="active">father</NavLink>
            <NavLink to="/jsx" activeClassName="active">jsx</NavLink>
            <NavLink to="/comDefine" activeClassName="active">comDefine</NavLink>
            <NavLink to="/comRender" activeClassName="active">comRender</NavLink>
            <NavLink to="/eventBind" activeClassName="active">eventBind</NavLink>
            <NavLink to="/state" activeClassName="active">state</NavLink>
            <NavLink to="/styleBind" activeClassName="active">styleBind</NavLink>
            <NavLink to="/router" activeClassName="active">router</NavLink>
            <NavLink to="/form" activeClassName="active">form</NavLink>
          </span>
        </header>
        <section id='sec'>
          <div>
            {/* 此处如果路由'/'不加exact,则所有路由都会匹配到 father组件，此为包容性路由，react默认就是包容性路由 */}
            {/* <Route path={'/'} exact component={Father}></Route>
            <Route path={'/father'} exact component={Father}></Route>
            <Route path='/jsx' exact component={jsx}></Route>
            <Route path='/comDefine' exact component={comDefine}></Route>
            <Route path='/comRender' exact component={comRender}></Route>
            <Route path='/eventBind' exact component={eventBind}></Route>
            <Route path='/state' exact component={state}></Route>
            <Route path='/styleBind' exact component={styleBind}></Route>
            <Route path='/router' component={router}></Route>
            <Route path='/form' component={form}></Route>
            <Route exact render={()=> (<div>404页面</div>)}></Route> */}

            {/* 使用Switch是为了将React默认的包容性路由变为排他性路由 */}
            {/* 包容性路由：/food 既能匹配到/ 又能匹配到/food  排他性路由：只能匹配一个 /food就只能匹配到/food */}

            <Switch>
              {/*Redirect 是路由转化  即匹配到某一个路由转化到另一个路由  */}
              {/* <Redirect from="/" exact to="/father"/> */}
              {/* 除了用Switch外也可以用exact来避免一个路由匹配多个，exact是精准匹配，但是使用exact时需要每个路由上都加上exact才能达到和Switch一样的效果 */}
              <Route path={'/'} exact component={Father}></Route>
              <Route path={'/father'} component={Father}></Route>
              <Route path='/jsx' component={jsx}></Route>
              <Route path='/comDefine' component={comDefine}></Route>
              <Route path='/comRender' component={comRender}></Route>
              <Route path='/eventBind' component={eventBind}></Route>
              <Route path='/state' component={state}></Route>
              <Route path='/styleBind' component={styleBind}></Route>
              <Route path='/router' component={router}></Route>
              <Route path='/form' component={form}></Route>
              <Route render={()=> (<div>404页面</div>)}></Route>
            </Switch>
            {/* 上面两种的区别是，使用switch的路由，不会每次都渲染404页面 */}
          </div>
        </section>
        <footer>
          <img src={logo} className="App-logo" alt="logo" />I am footer
        </footer>
      </Router>
    </div>
  );
}

export default App;
