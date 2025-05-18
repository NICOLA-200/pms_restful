import React from 'react'
import { useNavigate } from "react-router-dom";


export default function Header() {

    const navigate  = useNavigate()
  return (
     <div className="bg-white p-8 flex justify-between items-center"> 
            <span className="text-lg font-semibold">Welcome {user?.firstName}</span> 
            
                 <button onClick={() => navigate('/profile')} className='flex items-center rounded-lg p-3 hover:bg-slate-300/60'>
                         
                          <CgProfile  size={30} className='text-black min-h-6 min-w-6' />
                         <span className='ml-2 text-lg truncate whitespace-nowrap overflow-hidden hidden mlg:block text-black'>profile</span>
                     </button></div>
  )
}
