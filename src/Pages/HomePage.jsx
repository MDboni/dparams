
import Marqueeee from '../Components/Marqueeee'
import LeftBar from '../Components/LeftBar'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const HomePage = () => {
  return (
    <div className='w-10/12 mx-auto'>
        <Marqueeee/>
        <Navbar/>
        <main className='grid grid-cols-12'>
            <aside className='col-span-3'>
                <LeftBar/>
            </aside>
            <section className='col-span-6 mx-3'>
               <Outlet/>
            </section>
            <aside className='col-span-3'>v</aside>
        </main>
    </div>
  )
}

export default HomePage