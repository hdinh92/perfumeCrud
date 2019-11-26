import {combineReducers} from 'redux'
import products from './products'
import  itemEditing  from './itemEditing'
import filterTable from './filterTable'
import sortProduct from './sortProduct'

const appReducers = combineReducers({
    products,
    itemEditing,
    filterTable,
    sortProduct,
 })

export default appReducers