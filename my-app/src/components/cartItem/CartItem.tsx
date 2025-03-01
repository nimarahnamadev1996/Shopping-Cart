
interface ICartItem {
  id: number,
  qty: number
}


import { useEffect, useState } from "react"
import Button from "../button/Button"
import { getProduct } from "../../services/api"
import { Products } from "../../types/servers"
import { useGlobalContext } from "../../context/ShoppingCartContext"
import { Link } from "react-router-dom"

const CartItem = ({id,qty} : ICartItem) => {

  const {handleIncreaseProductQty,handleDecreaseProductQty,handleRemoveProduct,} = useGlobalContext()

  const [product,setProduct] = useState<Products>()

    useEffect(() => {
        getProduct(id).then((data) =>{
         setProduct(data)
        })
      },[])
  

  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">

          <Link to={`/product/${id}`}>
              <img 
              className='rounded w-28'
              src={product?.image}/>
          </Link>

     <div className="mr-4">

      <h3 className="text-right">{product?.title}</h3>

      <div className="mt-2">
       <Button variant="danger" className="mr-2" onClick={() => handleRemoveProduct(id)}>حذف محصول</Button>
       <Button variant="primary" onClick={() => handleIncreaseProductQty(id)}>+</Button>
       <span className="mx-2">{qty}</span>
       <Button variant="primary" onClick={() => handleDecreaseProductQty(id)}>-</Button>
      </div>
     </div>

    </div>
  )
}

export default CartItem