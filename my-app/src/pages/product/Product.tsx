import { useParams } from "react-router-dom"
import Container from "../../components/container/Container"
import Button from "../../components/button/Button"

const Product = () => {

    const params = useParams()

  return (
    <div>
        <Container>
         <div className=" h-96 shadow mt-4 grid grid-cols-12">

         <div className=" col-span-10 p-4">
           <h1 className="text-right">عنوان محصول</h1>
           <div>
             <p className="text-right">قیمت: 200</p>
             <p className="text-right">این محصول برای تست میباشد لطفا توجه فرمایید</p>
           </div>
         </div>

           <div className="col-span-2 p-4"> 
             <img 
              className='rounded'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSliAZJq11i0KBl11Knztrg6fH_e3w05vApUg&s'/>

            <Button 
             className="mt-2 w-full !py-4"
             variant= 'primary'
             onClick={() => {alert('here')}}>
                Add to cart
            </Button>

            </div>

         </div>


        </Container>
    </div>
  )
}

export default Product