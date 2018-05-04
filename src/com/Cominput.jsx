import React , {Component} from 'react';
import './Cominput.css';
import {iconfont} from '../iconfont/iconfont.css';

class Cominput extends Component{
    static defaultProps = {
        place:'请输入',
        inputval:'',
        type:'text',
        typeval:'',
        icon:'',
        change:()=>{console.log('未设定')},
        keyval:''
    }
    state = {
        place:this.props.place,
        inputval:this.props.inputval,
        type:this.props.type,
        typeval:this.props.type,
        icon:this.props.icon
    }

    

    inputchange = event => {
        this.setState({inputval: event.target.value});
        this.props.change(this.props.keyval,event.target.value);
    }

    clearinput = () => {
        this.setState({inputval:""});
    }

    passtypetab = (t) => {
        if(t === 1){//密码->text
            this.setState({
                typeval: 'passwordT',
                type:'text'
            });
        }else{//text=>密码
            this.setState({
                typeval: 'password',
                type:'password'
            });
        }
        
    }
    

    render() {
        //清空按钮
        var delI = null;
        if (this.state.inputval !== '') {
            delI = <i className="iconfont icon-shanchu3 iconright" onClick={this.clearinput}></i>;
        } else {
            delI = null;
        }
        //密码type切换按钮
        var passtab = null;
        if (this.state.typeval === 'password') {
            passtab = <i className="iconfont icon-zhengyan iconright" onClick={() => this.passtypetab(1)}></i>;
        } else if(this.state.typeval === 'passwordT'){
            passtab = <i className="iconfont icon-biyan iconright" onClick={() => this.passtypetab(2)}></i>;
        }
        //左侧图标
        var lefticon = null;
        if (this.state.icon !== '') {
            var iclass = 'iconfont '+this.state.icon;
            lefticon = <i className={iclass}></i>;
        }
        return (
            <div className="inputcss">
                {lefticon}
                <input type={this.state.type} placeholder={this.state.place} value={this.state.inputval} onChange={this.inputchange}/>
                {delI}
                {passtab}
                {/* <div className="rightbu" >
                    <button>获取验证码</button>
                    <div>秒</div>
                </div> */}
            </div>
        )
    };
}

export default Cominput;