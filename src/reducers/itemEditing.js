import * as Types from './../constants/ActionTypes'
const initialState = {
    id : '',
    name : '',
    price : '',
    description : '',
    status : false,
    image : ''
}

 const itemEditing = (state = initialState,action) =>{
    switch (action.type){
        case Types.EDIT_PRODUCTS :
            return action.product
        default : return state
    }

}

export default itemEditing