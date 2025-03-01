import { Products } from "../../types/servers"



type TProductItem = Products


const ProductItem = ({title,price,description,image} : TProductItem)  => {
  return (
    <div className='shadow border rounded pb-2'>
        <img 
         className='rounded-t'
         src={image}/>

        <div className='flex justify-between p-4'>
            <h3 className="line-clamp-1 font-bold w-52">
               {title}
            </h3>
            <span>${price}</span>
        </div>

        <div className='px-4 mt-1'>
            <p className='line-clamp-2 text-right text-gray-500'>
             {description}
            </p>
        </div>
    </div>
  )
}

export default ProductItem