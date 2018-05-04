/*
 * action 类型
 */
import { CLEAR_INPUT , REDUX_TEST } from '../actionConst'  // 引入action类型名常量
import axios from 'axios';
/*
 * action 创建函数
 */
export const clear_input = (text) => {
  return { type: CLEAR_INPUT, text }
}

const redux_test = (data,status) =>{
  return {
    'type':REDUX_TEST,
    'data':data,
    'status':status
  }
}

export function redux_textfunc() {
  return function (dispatch, getState) {
    // var data = '';
    // dispatch(redux_test(data,'start'))
    axios({
      method: 'post',
      url: '/mobile/mobile/getcomer', 
      data: {
        c:320 
      }
    })
    .then(function(res) {
      dispatch(redux_test(res.data,'success')) 

    })
    .catch(function (error) {
      console.log(error);
    });
  }
}


