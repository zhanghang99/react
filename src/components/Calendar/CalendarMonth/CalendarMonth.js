import React, { Component } from 'react'
import './CalendarMonth.css'

export default class CalendarMonth extends Component{
  constructor(props){
    super(props)
    this.state={
      month:["一","二","三","四","五","六","七","八","九","十","十一","十二"],
      current:new Date().getMonth() - 1,//当前选择的月份
      chooseYear:new Date().getFullYear(),//当前选择的年份
      allYear:[],//所有的下拉年份
      isShow:false,//年份下拉是否隐藏
      startYear:1990,//下拉年份的最久远的一个
      showCalendarMonth:false,//整个控件是否隐藏
      isMove:0,//小于0则控件向左移，大于0则控件向右移，等于0则回归
      moveBorder:true,//判断当前年份是否达到最远或最近年份，超过边界则禁止左右移动
    }
  }

  componentWillMount(){
    this.leftRightMove = true;//节流
    let { startYear } = this.state;
    const nowYear = new Date().getFullYear();
    let allYear = [];
    while(startYear <= nowYear){
      allYear.push(startYear);
      startYear++;
    }
    this.setState({
      allYear:allYear.reverse()
    })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.showCalendarMonth !== this.props.showCalendarMonth){
      this.setState({
        showCalendarMonth:true
      })
    }
  }

  clickCurrent = (i) => {
    const { chooseYear , current } = this.state;
    this.setState({
      current:i,
      showCalendarMonth:false,
      isShow:false,
    },()=>{
      this.props.getYearMonth(this.state.chooseYear + '',this.state.current < 9 ? 
                              "0" + (this.state.current + 1) : this.state.current + 1 + ''
      );
    })
  }

  clickYear = (year) => {
    this.setState({
      chooseYear:year,
      isShow:false
    })
  }

  yearShow = () => {
    const { isShow } = this.state;
    this.setState({
      isShow:!isShow
    })
  }

  addYear = (num) => {
    if(this.leftRightMove){
      this.jieliu(num);
      this.leftRightMove = false;
      setTimeout(()=>{
        this.leftRightMove = true;
      },500)
    }
  }

  jieliu = (num) => {
    let { chooseYear,startYear,moveBorder } = this.state;
    moveBorder = chooseYear + num > new Date().getFullYear() || 
                 chooseYear + num < startYear ? false : true;
    chooseYear =  chooseYear === new Date().getFullYear() && num > 0  || 
                  chooseYear === startYear && num < 0 
                  ? chooseYear : chooseYear + num
    this.setState({
      chooseYear,
      moveBorder,
      isShow:false
    },()=>{
      if(this.state.moveBorder && num > 0){
        this.setState({
          isMove:this.state.isMove + 1
        })
      }else if(this.state.moveBorder && num < 0){
        this.setState({
          isMove:this.state.isMove - 1
        })
      }
      setTimeout(()=>{
        this.setState({
          isMove:0
        })
      },500)
    })
  }

  clickModel = () => {
    this.setState({
      showCalendarMonth:false,
      isShow:false,
    })
  }
  
  render(){
    const { month,current,chooseYear,allYear,isShow, showCalendarMonth,isMove} = this.state;
    return (
      <div className="CalendarBox">
        <div 
          className={showCalendarMonth?  "CalendarModel" : ""}
          onClick={this.clickModel}
        />
        <div className={showCalendarMonth? "CalendarMonth upShow" : "CalendarMonth"}>
          <div className="Year">
            <div className="left" onClick={this.addYear.bind(this,-1)}><i></i></div>
            <div className="center">
              <div onClick={this.yearShow}>
                {chooseYear}
                <i></i>
              </div>
              <div 
                className={isShow ? "fullYear show" : "fullYear"}
              >
                {     
                  allYear.map((v)=>{
                    return (
                      <div 
                        className={chooseYear ===v ? "chooseYear allYear" : "allYear"} 
                        key={v}
                        onClick={this.clickYear.bind(this,v)}
                      >
                        {v}
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="right" onClick={this.addYear.bind(this,1)}><i></i></div>
          </div>
          <div className="MonthBox">
            {
              [1,2,3].map((val)=>{
                return (
                  <div className={isMove < 0 ? "Month leftMove" : isMove > 0 ? "Month rightMove" : "Month"} key={val}>
                    {
                      month.map((v,i)=>{
                        return (
                          <div key={v}>
                            <span 
                              className={current===i ? 'current' : ''}
                              onClick={this.clickCurrent.bind(this,i)}
                            >
                                {v}月
                            </span>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}