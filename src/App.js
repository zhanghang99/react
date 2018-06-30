import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Router, Route, Link } from 'react-router';
import { addToCart,A } from './reducers/cart-reducer'

class App extends Component {
  constructor(props){
    super(props)
  }
  jump = () => {
      console.log(this.props.history);
      this.props.history.push('/Login')
  }
  render() {
    return (
      <div className="App" onClick={this.jump.bind(this)}>
        'zhanghang'
      </div>
    );
  }
}

export default connect((state)=>{return state},(dispatch)=>{return {dispatch}})(App)
