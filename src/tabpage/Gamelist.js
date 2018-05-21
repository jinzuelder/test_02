import React , {Component} from 'react';
import Cominput from '../com/Cominput';
import * as registerAc from '../action/register.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Registercss.css';


class Register extends Component{
    render(){
        var actionfunc = this.props.actions;
        var userdata = this.props.data;
        return (
            <div className="registercss">
                <div className="firsttitle">手机号注册</div>
                <div className="sectitle">
                    <span>已有账号?</span>
                    <Link to="/login"><span>立即登录</span></Link>
                </div>
                <Cominput 
                    place="请输入手机号码"
                    inputval={userdata.tel}
                    icon="icon-shouji"
                />

                <Cominput 
                    place="请输入密码"
                    inputval={userdata.password}
                    type="password"
                    icon="icon-mima"
                />

                <button className="subbu" onClick={()=>actionfunc.redux_textfunc()}>注册</button>
            </div>    
        );
    } 
}
//将store中的数据作为props绑定到组件中
const mapStateToProps = state => {
    return {data:state.Register}
}
//将action作为props绑定到组件中
const mapDispatchToProps = dispatch => {
    return {actions:bindActionCreators(registerAc, dispatch)}
}

//将store和组件联系在一起的
export default connect(mapStateToProps, mapDispatchToProps)(Register);