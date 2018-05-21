import React , {Component} from 'react';
import './tabcss.css';
import {iconfont} from '../iconfont/iconfont.css';

class Tab extends Component{

    static defaultProps = {
        tabaction:0,
    }

    state = {
        tabaction:this.props.tabaction
    }

    tabchange= () => {

    }

    render(){
        let props = this.props;
        return (
            <div className="tabsdiv">
                <div className={props.tabaction === 0?'tabdiv tabac':'tabdiv'} onClick={()=>props.tabchange(0)}>
                    <i className="tabicon iconfont icon-shangcheng-tab"></i>
                    <div className="tabtitle">游戏</div>
                </div>
                <div className={props.tabaction === 1?'tabdiv tabac':'tabdiv'} onClick={()=>props.tabchange(1)}>
                    <i className="tabicon iconfont icon-youxi-tab"></i>
                    <div className="tabtitle">排行</div>
                </div>
                <div className={props.tabaction === 2?'tabdiv tabac':'tabdiv'} onClick={()=>props.tabchange(2)}>
                    <i className="tabicon iconfont icon-jiangzhang"></i>
                    <div className="tabtitle">我的</div>
                </div>
                <div className={props.tabaction === 3?'tabdiv tabac':'tabdiv'} onClick={()=>props.tabchange(3)}>
                    <i className="tabicon iconfont icon-wode-tab"></i>
                    <div className="tabtitle">商城</div>
                </div>
            </div>
        );
    }
}

export default Tab;
