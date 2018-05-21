let Data = {
    tabaction:0,
    comer:{
        logo:'',
        comername:''
    },
    goods:[]

}

export function Mainpage(state = Data, action){
    switch (action.type) {
        case 'TAB_CHANGE':
            state.tabaction = action.tabaction;
            return Object.assign({}, state, { type: action.type});
        case 'GET_COMINFO':
            state.comer.logo = action.cominfo.logo;
            state.comer.comername = action.cominfo.comer_name;
            return Object.assign({}, state, { type: action.type});
        case 'GET_GOODS':
            state.goods = action.goods;
            return Object.assign({}, state, { type: action.type});
        default:
            return state;
    }
}