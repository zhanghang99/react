import React,{Component} from 'react'
import { connect } from 'react-redux';
import { addToCart,A } from '../../reducers/all'
import Table from '../../components/table/table';

class IndexCom extends Component {
    componentWillMount(){
        console.log(this.props);
        let paramater = {
            product:"phone",
            quantity:20000,
            unitCost:20000
        }
        this.props.dispatch(addToCart('all/ADD_TO_CART',paramater))
        Promise.all([this.props.dispatch(A('all/ADD_TO_A','20180304'))]).then(()=>{
            console.log(this.props);
            console.log(55555555);
        });
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
export default connect((state)=>{return state.all},(dispatch)=>{return {dispatch}})(IndexCom)