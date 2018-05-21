import React , {Component} from 'react';
import './goodslistcss.css';
import hotsrc from '../../img/hot.png';
import blanksrc from '../../img/blank.gif';


const Goodsitem = (props) => {
    let data = props.data;
    return (
        <div className="goodslist">
            <div className="left">
                <img className="lazy" src={data.picurl} alt="商品"/>
            </div>
            <div className="mid">
                <div className="mid_na">{data.goods_name}</div>
                <div className="mid_Stock"></div>
                <div className="mid_pri">
                    <div className="mid_pri_k">{data.kb_price}</div>
                    <div className="mid_pri_unit">K</div>
                    <div className="mid_pri_m">原价{data.money}元</div>
                </div>
            </div>
        </div>
    );
}

const Classitem = (props) => {
    let data = props.data;
    const goods_rep = data.goods.map((goods) =>{
        return (
            <Goodsitem 
                key={goods.goods_name} 
                data={goods}
            />
        );
    });

    return (
        <div className="goodslistcss">
            <div className="classtitle">
                <img src={data.img} alt={data.class_name}/>
                <span>{data.class_name}</span>
            </div>
            {goods_rep}
        </div>
    );
}




class Goodslist extends Component{

    

    render(){
        var data = this.props;
        let goodsarr = data.goods;
        const item_rep = goodsarr.map((goods) =>{
            return (
                <Classitem 
                    key={goods.class_name} 
                    data={goods}
                />
            );
        });

        return (
            <div className="goodslistcss">
                {item_rep}
            </div>
        );
    }
}


export default Goodslist;