import React, { Component } from 'react';
Component
export default class Login extends Component{
    jump = () => {
        console.log(this.props.history);
        this.props.history.push('/IndexCom')
    }
    render(){
        return (
            <div onClick={this.jump.bind(this)}>登录页面</div>
        )
    }
}