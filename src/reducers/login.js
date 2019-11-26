import * as Types from '../constants/ActionTypes'
const initialState = {
    currentUser:{}
}

const login = (state=initialState,action) =>{
    switch(action.type) {
        case Types.LOGIN_USER :
            return {...state,currentUser:action.payload}
        default : return state;
    }
}

export default login