let Data = {
    userdata: {
        tel:'13668074032'
    },
    testdata:''
}

export function Register(state = Data, action){
    switch (action.type) {
        case 'CLEAR_INPUT':
            state.userdata = action;
            return Object.assign({}, state, { type: action.type});
        case 'REDUX_TEST':
            state.testdata = action.data;
            return Object.assign({}, state, { type: action.status});
        default:
            return state;
    }
}