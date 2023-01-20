import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/CartReducer";

const initState = {
    cart:[],
    total_item: '',
    total_amount: '',
    shippingFee : 50000,
};


export const CartContext = createContext();
 const  CartContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,initState)
    const addToCart = (id,name,image,price)=>{
        dispatch({type:'ADD_TO_CART',payload:{id,name,image,price}})
    }
return <CartContext.Provider value={{...state,addToCart}}>
{children}
</CartContext.Provider>
}

const useCartContext = ()=>{
    return useContext(CartContext);
}
export {CartContextProvider,useCartContext}