import React from 'react'
import {
  Route,
  // Switch,
  Link,
  // Redirect,
  // NavLink,
  BrowserRouter as Router
} from 'react-router-dom'
import Foodlist from './foodlist'
import Foodmenu from './foodmenu'
// 路由动态传参
const id = 152

class router extends React.Component{
  render() {
    return (
      <div>
        <Router>
          <Link to={`/router/foodlist/${id}`}>foodlist</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/router/foodmenu">foodmenu</Link>
          <Route path="/router/foodlist/:id" component = {Foodlist}></Route>
          <Route path="/router/foodmenu" component = {Foodmenu}></Route>
        </Router>
      </div>
    )
  }
}
export default router;