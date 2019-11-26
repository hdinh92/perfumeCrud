import * as Types from './../constants/ActionTypes'

var initialState = {
    by: 'name',
    value: 1 //1 : tăng,  -1 giảm,
}

const sortProduct = (state=initialState,action) =>{
    switch(action.type ){
        case Types.SORT:
            return {
                by : action.sort.by,
                value : action.sort.value
            };
            
        default : return state
    }
}

export default sortProduct