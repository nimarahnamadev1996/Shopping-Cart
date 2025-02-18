import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"


const HomeLayout = () => {
  return (
    <>

   <main>
   <Navbar/>
   </main>

   <div>
    <Outlet/>
   </div>

    </>
  )
}

export default HomeLayout