let Data = {
    userdata: {
        tel:'13668074032',
        password:''
    },
    testdata:''
}

export function Login(state = Data, action){
    switch (action.type) {
        case 'LOGIN_PASS':
            state.lp_result = action.data;
            return Object.assign({}, state, { type: action.type});
        case 'INPUT_CHANGE':
            state.userdata[action.key] = action.val;
            return Object.assign({}, state, { type: action.type});
        default:
            return state;
    }
}