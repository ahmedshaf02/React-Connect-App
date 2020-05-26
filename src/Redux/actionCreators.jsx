
import {ADD_PRODUCT_DATA,ADD_TO_CART,ADD_TO_ORDERED,REMOVE_PRODUCT_DATA,MODIFY_PRODUCT_DATA,SUBMIT_MODIFY_DATA,}  from "./actionTypes"


export const addToCart = (payload)=>({
      type:ADD_TO_CART,
      payload
})
export const removeProductData = (payload)=>({
      type:REMOVE_PRODUCT_DATA,
      payload
})
export const modifyProductData = (payload)=>({
      type:MODIFY_PRODUCT_DATA,
      // payload:{title:payload, status:false,id:uuidv4()}
})
export const submitModifyData = (payload)=>({
      type:SUBMIT_MODIFY_DATA,
      payload:payload
})
export const addProduct = (payload)=>({
      type:ADD_PRODUCT_DATA,
      payload:payload
})
export const addOrderProduct = (payload)=>({
      type:ADD_TO_ORDERED,
      payload:payload
})