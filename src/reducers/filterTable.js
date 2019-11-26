import * as Types from './../constants/ActionTypes'

var initialState = {
    name: '',
    code : '',
    status : -1,
}

const filterTable = (state=initialState,action) =>{
    switch(action.type) {
        case Types.FILTER_TABLE :
            return {
                name : action.filter.name,
                code : action.filter.code,
                status : parseInt(action.filter.status)
            }
        default : return state;
    }
}

export default filterTable