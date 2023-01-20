const CartReducer = (state,action)=>{
    if(action.type === 'ADD_TO_CART'){
let{id,name,image,price} = action.payload;
        console.log(name);
    }
return state;
}
export {CartReducer}