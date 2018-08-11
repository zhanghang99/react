import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Router, Route, Link } from 'react-router';
import CalendarMonth from './components/Calendar/CalendarMonth/CalendarMonth'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showCalendarMonth:false,
    }
  }
  clickCalendarMonth = () => {
    const { showCalendarMonth } = this.state;
    this.setState({
      showCalendarMonth:!showCalendarMonth
    })
  }
  getYearMonth = (year,month) => {
    console.log(year,month);
  }
  render() {
    const { showCalendarMonth,currentMonth } = this.state;
    return (
      <div className="App">
        <button onClick={this.clickCalendarMonth}>月历</button>
        <CalendarMonth 
          showCalendarMonth={showCalendarMonth}
          getYearMonth={this.getYearMonth}
        />
      </div>
    );
  }
}

export default connect((state)=>{return state},(dispatch)=>{return {dispatch}})(App)
