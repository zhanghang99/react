import React,{Component} from 'react'
import { connect } from 'react-redux';
import { addToCart,A } from '../../reducers/all'
import Table from '../../components/table/table';

class IndexCom extends Component {
    componentWillMount(){
        console.log(this.props);
        let paramater = {
            product:"huwenpan",
            quantity:28,
            unitCost:165
        }
        this.props.dispatch(addToCart('all/ADD_TO_CART',paramater))
        this.props.dispatch(A('all/ADD_TO_A','20180304'))
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }
    jump = () => {
        console.log(this.props.history);
        this.props.history.push('/Login')
    }
    render(){
        return (
            <div>
                <div onClick={this.jump.bind(this)}>首页</div>
                <Table/>    
            </div>
        )
    }

}
export default connect((state)=>{return state},(dispatch)=>{return {dispatch}})(IndexCom)