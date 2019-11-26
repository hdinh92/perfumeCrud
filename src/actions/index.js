import * as Types from './../constants/ActionTypes'
import callAPI from './../utils/callAPI'

export const actFecthProductsRequest = () =>{
    return dispatch =>{
        return callAPI ('products','GET',null).then(res=>{
            dispatch(actFetchProducts(res.data))
        })
    }
}
export const actFetchProducts = products =>{
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest =id =>{
    return dispatch=>{
        return callAPI (`products/${id}`,'DELETE',null).then(res=>{
            dispatch(actDeleteProduct(id))
        })
    }
}
export const actDeleteProduct = id =>{
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductRequest = (product) =>{
    return dispatch =>{
        return callAPI('products','POST',product).then(res=>{
            dispatch(actAddProduct(res.data))
        })
    }
}
export const actAddProduct = product =>{
    return {
        type : Types.ADD_PRODUCT,
        product
    }
}
export const actGetProductRequest = id =>{
    return dispatch =>{
        return callAPI(`products/${id}`,'GET',null).then(res=>{
            dispatch(actGetProduct(res.data))
        })
    }
}
export const actGetProduct = product =>{
    return {
        type : Types.EDIT_PRODUCTS,
        product
    }
}
export const actUpdateProductRequest = product =>{
    return dispatch =>{
        return callAPI(`products/${product.id}`,'GET',product).then(res=>{
            dispatch(actUpdateProduct(product))
        })
    }
}
export const actUpdateProduct = product =>{
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }
}

export const actFilter = filter =>{
    return {
        type : Types.FILTER_TABLE,
        filter
    }
}

export const actSortProduct = sort =>{
    return {
        type : Types.SORT,
        sort
    }
}

export const userLoginFetch = user =>{
    return dispatch =>{
        return callAPI('users','POST',user).then(res=>{
            localStorage.setItem("token",res.jwt)
            dispatch(loginUser(res.data))
        })
    }
}


export const loginUser = user =>{
    return {
        type : Types.LOGIN_USER,
        user
    }
}