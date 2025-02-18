import { RouterProvider, createBrowserRouter } from 'react-router-dom';





import Home from './pages/home/Home';
import Store from './pages/store/Store';
import HomeLayout from './pages/homeLayout/HomeLayout';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';




const router = createBrowserRouter([
  
  {
    path: '/',
    element:<HomeLayout/>,

    children: [
      {
        index:true,
        element: <Home/>
      },

      {
        path:'/store',
        element: <Store/>
      },

      {
       path: '/product/:id',
       element: <Product/>
      },

      {
        path: '/cart',
        element: <Cart/>
      }
    ]
  }

])



const App = () => {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App