import React , {Component} from 'react';
import './slideboxcss.css';
import {iconfont} from '../iconfont/iconfont.css';


const SliderSlide = () => {
    return (
        <div className="slider-slide">

        </div>
    );
}

const SliderPager = () => {
    return (
        <div className="slider-pager">

        </div>
    );
}


class SlideBox extends Component{
    static defaultProps = {
        reparr:[1,1,1,1],
        change:()=>{console.log('未设定')},
        keyval:''
    }
    state = {
        reparr:this.props.reparr
    }

    componentWillMount=()=>{
        let arr = this.props.reparr;
        this.setState({
            arrlength:arr.length
        });
    }

    render() {
        let state = this.state;
        let data = state.reparr;
        const SliderSlides = data.map((silde) =>{
            return (
                <SliderSlide
                    
                />
            );
        });

        const SliderPagers = data.map((pager) =>{
            return (
                <SliderPager />
            );
        });

        const pagersCss = {
            width:state.arrlength * 20 + 'px'
        };

        const slidesCss = {
            width:'300%'
        };

        return (
            <div className="slidebox-par">
                <div className="slider-slides" style={slidesCss}>
                    {SliderSlides}
                </div>

                <div className="slider-pagers" style={pagersCss}>
                    {SliderPagers}
                </div>
            </div>
        )
    };
}

export default SlideBox;