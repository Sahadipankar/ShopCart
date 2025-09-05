import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const ResponsiveMenu = ({ openNav, setOpenNav }) => {
    const { user } = useUser()
    return (
        <div className={`${openNav ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
            <div>
                <SignedIn>
                    <div className='flex items-center justify-start gap-3'>
                        <UserButton size={50} />
                        <div>
                            <h1>Hello, {user?.firstName}</h1>
                            <h1 className='text-sm text-slate-500'>Premium User</h1>
                        </div>
                    </div>
                </SignedIn>
                <SignedOut>
                    <div className='flex items-center justify-start gap-3'>
                        <FaUserCircle size={50} />
                        <div>
                            <h1>Hello, Guest</h1>
                            <h1 className='text-sm text-slate-500'>Welcome to ShopCart</h1>
                        </div>
                    </div>
                </SignedOut>
                <nav className='mt-12'>
                    <ul className='flex flex-col gap-7 text-2xl font-semibold'>
                        <Link to={'/'} onClick={() => setOpenNav(false)} className="cursor-pointer"><li>Home</li></Link>
                        <Link to={"/products"} onClick={() => setOpenNav(false)} className="cursor-pointer"><li>Products</li></Link>
                        <Link to={"/about"} onClick={() => setOpenNav(false)} className="cursor-pointer"><li>About</li></Link>
                        <Link to={"/contact"} onClick={() => setOpenNav(false)} className="cursor-pointer"><li>Contact</li></Link>
                        <SignedOut>
                            <Link to={"/signin"} onClick={() => setOpenNav(false)} className="cursor-pointer">
                                <li className='text-red-500'>Sign In</li>
                            </Link>
                        </SignedOut>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ResponsiveMenu
