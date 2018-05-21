import React , {Component} from 'react';

class Shoptitle extends Component{

    

    render(){
        var data = this.props;
        return (
            <div className="shoptitlecss">
                <div className="top">
                    <div className="left">
                        <img src={data.cominfo.logo} />
                    </div>
                    <div className="mid">
                        <div  className="">{data.cominfo.comername}</div>
                        <p className="">公告：玩游戏赢K币，K币可兑换以下商品</p>
                        <div className="xingji">
                            <span>
                                <i className="iconfont icon-pingfen"></i>
                                <i className="iconfont icon-pingfen"></i>
                                <i className="iconfont icon-pingfen"></i>
                                <i className="iconfont icon-pingfen"></i>
                                <i className="iconfont icon-pingfen"></i>
                            </span>
                            <span>
                                5.0
                            </span>
                        </div>
                    </div>
                </div>
                <div className="LabelDiv">
                    <div className="labelop">品质高</div>
                    <div className="labelop">环境舒适</div>
                    <div className="labelop">服务好</div>
                </div>
            </div>    
        );
    } 
}

export default Shoptitle;