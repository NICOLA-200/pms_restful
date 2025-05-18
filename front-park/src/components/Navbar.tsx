import { CommonContext } from '@/context'
import React, { useContext } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {

    const { setShowSidebar } = useContext(CommonContext)

    return (
        <div className='w-full flex items-center justify-between bg-white px-14 py-2'>
            <div className='flex items-center'>
                <button className='w-12 h-12 rounded-full bg-slate-200 smlg:hidden flex items-center justify-center' onClick={() => setShowSidebar(true)}>
                    <BiMenu size={25} className='text-slate-900' />
                </button>
            </div>
            <Link to={"/student/profile"}>
            <img src="https://picsum.photos/200/300" className='w-12 h-12 rounded-full object-cover' alt="" />
            </Link>
        </div>
    )
}

export default Navbar