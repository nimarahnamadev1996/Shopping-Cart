import Button from "../button/Button"

const CartItem = () => {
  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">

          <img 
              className='rounded w-28'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSliAZJq11i0KBl11Knztrg6fH_e3w05vApUg&s'/>

     <div className="mr-4">

      <h3 className="text-right">عنوان محصول</h3>

      <div className="mt-2">
       <Button variant="danger" className="mr-2">حذف محصول</Button>
       <Button variant="primary">+</Button>
       <span className="mx-2">{2}</span>
       <Button variant="primary">-</Button>
      </div>
     </div>

    </div>
  )
}

export default CartItem