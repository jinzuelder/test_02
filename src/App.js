import React , { Component } from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'; 
import Register from './register/Register';

import Bundle from './bundle';
const Login = (props) => (
    <Bundle load={() => import('./register/Login')}>
        {(Login) => <Login {...props}/>}
    </Bundle>
);

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Register}/>
          <Route exact path="/login" component={Login}/>
      </div>
    ); 
  }
} 
 
export default App;
