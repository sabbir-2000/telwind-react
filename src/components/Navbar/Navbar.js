import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XCircleIcon, } from '@heroicons/react/solid'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [

        { id: 1, name: 'home', link: '/home' },
        { id: 2, name: 'shop', link: '/home' },
        { id: 3, name: 'deals', link: '/home' }


    ]
    return (

        <nav className='bg-indigo-300'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XCircleIcon></XCircleIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static bg-indigo-300 w-full duration-500 ease-in ${open ? `top-6` : `top-[-120px]`}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav >
    );
};

export default Navbar;