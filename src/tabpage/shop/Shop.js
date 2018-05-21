import React , {Component} from 'react';
import Shoptitle from './Shoptitle.js';
import Goodslist from './Goodslist.js';
import './shopcss.css';

class Shop extends Component{
    render(){
        var actionfunc = this.props.actions;
        var data = this.props;
        return (
            <div className="shopcss">
                <Shoptitle 
                    cominfo={data.cominfo}
                />
                <div className="goodsscroll">
                    <Goodslist 
                        goods = {data.goods}
                    />
                </div>
            </div>    
        );
    } 
}

export default Shop;