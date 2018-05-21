import React , {Component} from 'react';
import axios from 'axios';
import * as mainAc from '../action/mainpage.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Tab from './Tab.js';
import Shop from './shop/Shop.js';
import './maincss.css';

class Mainpage extends Component{
    
    componentWillMount = () => {
        let data = this.props.data;
        let acfunc = this.props.actions;
        if(data.comer.comername === ''){
            acfunc.get_cominfofunc();
        }
        if(data.goods.length === 0){
            acfunc.get_goodsfunc();
        }
    }

    render(){
        let data = this.props.data;
        let acfunc = this.props.actions;
        let pagecontent;
        if(data.tabaction === 0){
            pagecontent = <Shop 
                            cominfo = {data.comer}
                            goods = {data.goods}
                            />
        }
        return (
            <div className="mainpagecss">
                <Tab 
                    tabaction={data.tabaction}
                    tabchange={acfunc.tab_change}
                />

                <div className="content">
                    {pagecontent}
                </div>

            </div>    
        );
    } 
}
//将store中的数据作为props绑定到组件中
const mapStateToProps = state => {
    return {data:state.Mainpage}
}
//将action作为props绑定到组件中
const mapDispatchToProps = dispatch => {
    return {actions:bindActionCreators(mainAc, dispatch)}
}

//将store和组件联系在一起的
export default connect(mapStateToProps, mapDispatchToProps)(Mainpage);
// export default Mainpage;