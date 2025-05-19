import { CommonContext } from '@/context';
import  { useContext } from 'react'
import { Link } from 'react-router-dom';




export default function Header() {

   const { user} =
      useContext(CommonContext);

   
  return (
     <div className="bg-white  p-3 md:p-5 flex justify-between items-center"> 
            <span className="text-lg font-semibold">Welcome {user?.firstName}</span> 
            
                 <Link to={"/profile"}>
                           <img src="https://picsum.photos/200/300" className='w-12 h-12 rounded-full object-cover' alt="" />
                 </Link></div>
  )
}
