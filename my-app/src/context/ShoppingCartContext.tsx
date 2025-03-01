import {createContext, useContext} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ShoppingCartProvider{
    children: React.ReactNode
}

interface CartItem{
    id: number,
    qty: number
}



interface ShoppingCartContext{
    cartItems: CartItem[],
    handleIncreaseProductQty: (id: number) => void
    handleDecreaseProductQty: (id: number) => void
    handleRemoveProduct: (id: number) => void
    getProductQty: (id: number) => number
    cartQty: number
    
}



const ShoppingCartContext = createContext({} as ShoppingCartContext)


export const ShoppingCartProvider = ({children}: ShoppingCartProvider) => {

    const [cartItems,setCartItems] = useLocalStorage<CartItem[]>('ccartItems',[])

  
    const handleIncreaseProductQty = (id: number) => {
         setCartItems((currentItems) => {
            let selectedItem = currentItems.find((item) => item.id === id)

            if(selectedItem == null) {
                return [...currentItems, {id: id, qty: 1}]
            } else {
              return  currentItems.map((item) => {
                    if(item.id === id) {
                        return{...item,qty: item.qty +1}
                    } else{
                        return item
                }
                })
           }
         })
    }





    const handleDecreaseProductQty = (id: number) => {
        setCartItems((currentItems) => {
           let selectedItem = currentItems.find((item) => item.id === id)

           if(selectedItem?.qty === 1) {
               return currentItems.filter((item) => item.id !== id)
           } else {
             return  currentItems.map((item) => {
                   if(item.id === id) {
                       return{...item,qty: item.qty -1}
                   } else{
                       return item
               }
               })
          }
        })
   }



    const getProductQty = (id: number) => {
      return cartItems.find((item) => item.id === id)?.qty || 0
    }


   const handleRemoveProduct = (id: number) => {
     setCartItems((currentItems) => currentItems.filter((item) => item.id !== id))
   }


   const cartQty = cartItems.reduce((totalQty,item) => totalQty + item.qty, 0)



    return(
        <ShoppingCartContext.Provider 
         value={{
            handleIncreaseProductQty,
            cartItems,
            handleDecreaseProductQty,
            getProductQty,
            handleRemoveProduct,
            cartQty
         }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
 



export const useGlobalContext = () => {
    return useContext(ShoppingCartContext);
  };