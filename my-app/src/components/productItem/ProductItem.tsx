import React from 'react'

const ProductItem = () => {
  return (
    <div className='shadow border rounded pb-2'>
        <img 
         className='rounded-t'
         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSliAZJq11i0KBl11Knztrg6fH_e3w05vApUg&s'/>

        <div className='flex justify-between flex-row-reverse p-4'>
            <h3>
                عنوان محصول
            </h3>
            <span>$55</span>
        </div>

        <div className='px-4 mt-1'>
            <p className='line-clamp-2 text-right'>
            این محصول دارای ویژگی های جذابی میباشد و این متن برای تست است
            </p>
        </div>
    </div>
  )
}

export default ProductItem