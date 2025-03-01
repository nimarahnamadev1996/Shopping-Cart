import { Link } from "react-router-dom"
import Container from "../container/Container"
import { useGlobalContext } from "../../context/ShoppingCartContext"

const Navbar = () => {

  const {cartQty} = useGlobalContext()

  return (
    <>
     <div className="h-14 border-b shadow">
       <Container>
         <div className="flex justify-between flex-row-reverse items-center">
         <ul className="flex flex-row-reverse gap-5">
            <li className="ml-4">
                <Link to='/' >خانه</Link>
            </li>

            <li className="ml-4">
                <Link to='/store'>فروشگاه</Link>
            </li>
         </ul>


         <div>
            <Link to='/cart'>
             <button>سبد خرید</button>
             <span>{cartQty   !== 0  ?  cartQty : ''}</span>
            </Link>
         </div>
         </div>
       </Container>
     </div>
    </>
  )
}

export default Navbar