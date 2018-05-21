import React , { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'; 
import Register from './register/Register';

import Bundle from './bundle';
const Login = (props) => (
    <Bundle load={() => import('./register/Login')}>
        {(Login) => <Login {...props}/>}
    </Bundle>
);

const Mainpage = (props) => (
  <Bundle load={() => import('./tabpage/Mainpage')}>
      {(Mainpage) => <Mainpage {...props}/>}
  </Bundle>
);

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/mainpage" component={Mainpage}/>
      </div>
    ); 
  }
} 
 
export default App;
