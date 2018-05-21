import React , {Component} from 'react';
import axios from 'axios';
import Cominput from '../com/Cominput';
import * as loginAc from '../action/login.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Registercss.css';
// import history from '../History';
// import createHistory from 'history/createBrowserHistory';


class Login extends Component{

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    componentWillReceiveProps = () =>{
        var userdata = this.props.data;
        // let context = this.context;
        // if(userdata.lp_result && userdata.lp_result.status === 1){
        //     console.log(context)
        //     context.router.history.push("/mainpage");
        // }
    }

    login_pass = () => {
        var data = this.props.data.userdata;
        var context = this.context;
        axios({
            method: 'post',
            url: '/mobile/mobile/userLogin', 
            data: {
              login_user:data.tel,
              password:data.password,
              c:320,
              type:2
            }
          })
          .then(function(res) {
            if(res.data.status == 1){
                console.log(res.data);
                context.router.history.push("/mainpage");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render(){
        
        var actionfunc = this.props.actions;
        var userdata = this.props.data;

        return (
            <div className="registercss">
                <div className="firsttitle">登录</div>
                <div className="sectitle">
                    <span>已有账号?</span>
                    <Link to="/"><span>立即注册</span></Link>
                </div>
                <Cominput 
                    place="请输入手机号码"
                    inputval={userdata.userdata.tel}
                    icon="icon-shouji"
                    change={actionfunc.input_change}
                    keyval="tel"
                />

                <Cominput 
                    place="请输入密码"
                    inputval={userdata.userdata.password}
                    type="password"
                    icon="icon-mima"
                    change={actionfunc.input_change}
                    keyval="password"
                />

                <button className="subbu" onClick={()=>this.login_pass()}>登录</button>
            </div>    
        );
    } 
}
//将store中的数据作为props绑定到组件中
const mapStateToProps = state => {
    return {data:state.Login}
}
//将action作为props绑定到组件中
const mapDispatchToProps = dispatch => {
    return {actions:bindActionCreators(loginAc, dispatch)}
}

//将store和组件联系在一起的
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;