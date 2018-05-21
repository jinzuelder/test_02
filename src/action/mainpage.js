/*
 * action 类型
 */
import {TAB_CHANGE , GET_COMINFO ,GET_GOODS} from '../actionConst'  // 引入action类型名常量
import axios from 'axios';
import {cac} from '../actionfun';

/*
 * action 创建函数
 */
// export const clear_input = (text) => {
//   return { type: CLEAR_INPUT, text }
// }
export const tab_change = cac('TAB_CHANGE','tabaction');

const get_cominfo = cac('GET_COMINFO','cominfo');

const get_goods = cac('GET_GOODS','goods');


export function get_cominfofunc() 
{
    return function (dispatch, getState) {
      // dispatch(login_pass(data,'start'))
      axios({
        method: 'post',
        url: '/mobile/mobile/getcomer', 
        data: {
          c:320
        }
      })
      .then(function(res) {
        dispatch(get_cominfo(res.data.data))
      })
      .catch(function (error) {
        console.log(error);
      });
    }
}

export function get_goodsfunc() 
{
    return function (dispatch, getState) {
      // dispatch(login_pass(data,'start'))
      axios({
        method: 'post',
        url: '/mobile/user_interface/goodsinfo', 
      })
      .then(function(res) {
        dispatch(get_goods(res.data.data))
      })
      .catch(function (error) {
        console.log(error);
      });
    }
}



