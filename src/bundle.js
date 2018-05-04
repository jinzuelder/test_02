/**
 * Created by yongyuehuang on 2017/3/29.
 */
import { Component } from 'react'
/*
代码分割模型，调用该模型的方式如下。
 const Login = (props) => (
    <Bundle load={() => import('./register/Login')}>
        {(Login) => <Login {...props}/>}
    </Bundle>
);
 */

class Bundle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mod: null
        };
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        
        this.setState({
            mod: null
        });
        props.load().then((mod) => {
            this.setState({
                mod: mod.default ? mod.default : mod
            });
        });
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null;
    }
  }
  
  export default Bundle