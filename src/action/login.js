/*
 * action 类型
 */
import { LOGIN_PASS , LOGIN_CODE ,INPUT_CHANGE} from '../actionConst'  // 引入action类型名常量
import axios from 'axios';
import {cac} from '../actionfun';

/*
 * action 创建函数
 */
// export const clear_input = (text) => {
//   return { type: CLEAR_INPUT, text }
// }
export const input_change = cac('INPUT_CHANGE','key','val');

const login_pass = cac('LOGIN_PASS','data','status');

export function login_passfunc() {
  return function (dispatch, getState) {
    var data = '';
    // dispatch(login_pass(data,'start'))
    var data = getState().Login.userdata;
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
      dispatch(login_pass(res.data,'success'))
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}


