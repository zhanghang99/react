import React,{Component} from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
export default class Table extends Component {
    jump = () => {
        console.log(this.props.history);
        this.props.history.push('/Login')//跳不成功
    }
    render(){
        return (
            <div>
                <div onClick={this.jump.bind(this)}>table(未在路由中注册的组件用JS是不能直接用history跳转)</div>
                <Link to='/'>用Link是可以直接跳转路由的</Link>
            </div>
        )
    }
} 