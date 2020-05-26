
import {ADD_PRODUCT_DATA,ADD_TO_CART,ADD_TO_ORDERED,REMOVE_PRODUCT_DATA,MODIFY_PRODUCT_DATA,SUBMIT_MODIFY_DATA,}  from "./actionTypes"


export default (state, {type,payload})=>{

  switch(type){
    case ADD_PRODUCT_DATA:
      return{
        ...state,
        // productData:[...state.productData,payload]
      }

    case REMOVE_PRODUCT_DATA:
      return{
        ...state,
        // productData: state.productData.filter(ele=>ele.id!==payload)
      }
    case MODIFY_PRODUCT_DATA:
      return{
        ...state,
        // modifyData:state.productData.find(ele=>ele.id === payload)
      }
    case SUBMIT_MODIFY_DATA:
      return{
        ...state,
        // productData:state.productData.map(ele=>ele.id === state.modifyData.id?{...payload}:ele),
        // nonComplete:state.todo.filter(ele=>ele.status === payload)
      }
    case ADD_TO_CART:
      return{
        ...state,
        // cartArrData:[...state.cartArrData, payload]
      }
    case ADD_TO_ORDERED:
      return{
        ...state,
        // ordereArrData:[...state.ordereArrData,payload]
      }
    // case ADD_PRODUCT_CATEGORY:
    //   return{
    //     ...state,
    //     productData:[...state.productData,category:{...productData.category,payload}]
    //   }
    default:
      return state
  }

}