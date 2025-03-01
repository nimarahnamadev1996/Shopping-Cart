import { useParams } from "react-router-dom"
import Container from "../../components/container/Container"
import Button from "../../components/button/Button"
import { useEffect, useState } from "react"
import { getProduct } from "../../services/api"
import { Products } from "../../types/servers"
import { useGlobalContext } from "../../context/ShoppingCartContext"

const Product = () => {

    const {
      handleIncreaseProductQty,
      cartItems,
      handleDecreaseProductQty,
      getProductQty,
      handleRemoveProduct } = useGlobalContext()

    const params = useParams<{id: string}>()

    const [product,setProduct] = useState<Products>()

    useEffect(() => {
      getProduct(params.id as string).then((data) =>{
        setProduct(data)
      })
    },[])

    console.log(cartItems);
    

  return (
    <div>
        <Container>
         <div className=" h-96 shadow mt-4 grid grid-cols-12">

         <div className=" col-span-10 p-4">
           <h1 className="text-right">{product?.title}</h1>
           <div>
             <p className="text-right">{product?.price}</p>
             <p className="text-right">{product?.description}</p>
           </div>
         </div>

           <div className="col-span-2 p-4"> 
             <img 
              className='rounded'
              src={product?.image}/>


              {
              getProductQty(parseInt(params.id as string)) === 0 ? (
                <Button 
                 className="mt-2 w-full !py-4"
                 variant= 'primary'
                 onClick={() => handleIncreaseProductQty(parseInt(params.id as string))}>
                   Add to cart
                </Button>
              ) : (
                <div>
                   <Button 
                 className="mt-2 w-full !py-4"
                 variant= 'primary'
                 onClick={() => handleIncreaseProductQty(parseInt(params.id as string))}>
                   +
                </Button>
                <span>
                  {getProductQty(parseInt(params.id as string))}
                </span>

                 <Button 
                  className="mt-2 rounded-full w-full  !py-2"
                  variant= 'danger'
                  onClick={() => handleDecreaseProductQty(parseInt(params.id as string))}>
                  -
                </Button>

                <Button
                 className="mt-2 rounded-full w-full  !py-2"
                 variant= 'danger'
                 onClick={() => handleRemoveProduct(parseInt(params.id as string))}>
                   Remove
                </Button>

               </div>

              )
              }

            </div>

         </div>


        </Container>
    </div>
  )
}

export default Product