import React ,{Component} from 'react';
import { BrowserRouter,Switch } from 'react-router-dom';
import {Route } from 'react-router';
// 路由组件
import App from './App';
import IndexCom from './routes/Index/index'
import Login from './routes/Login/login'
class RouterConfig extends Component{
  render(){
    return (
      <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/IndexCom' component={IndexCom}/>
          <Route exact path='/Login' component={Login}/>  
      </Switch>
    )
  }
}
export default RouterConfig;