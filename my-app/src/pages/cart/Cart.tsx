import Button from "../../components/button/Button"
import CartItem from "../../components/cartItem/CartItem"
import Container from "../../components/container/Container"
import { useGlobalContext } from "../../context/ShoppingCartContext"

const Cart = () => {

  const {cartItems} = useGlobalContext()

  return (
    <div>

    <Container>
        <div>
        {
          cartItems.map((item) => (
            <CartItem  {...item}/>
          ))
        }
        </div>

        <div className="bg-gray-200 rounded p-6">
            <p className="text-right">1,000 :قیمت کل</p>
            <p className="text-right">100 : تخفیف شما</p>
            <p className="text-right">900 : مبلغ قابل پرداخت</p>
        </div>

        <Button variant='success' className="mt-2">
            ثبت سفارش
        </Button>
    </Container>
    </div>
  )
}

export default Cart