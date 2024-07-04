'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const linkList = [{
    name: 'Home',
    url: '/'
}, {
    name: 'Project',
    url: '/'
}, {
    name: 'Blog',
    url: '/'
}, {
    name: 'sign-in',
    url: '/'
}];

const Menus: React.FC = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button onClick={showDrawer}>
                <img src="/icons/bars_3.svg" alt="menu" width={28} height={28} />
            </button>

            <div>
                <ul>
                    {linkList.map((link, index) => (
                        <li key={index} className='py-3 border-b text-center'>
                            <Link className='text-[#333]' href={link.url}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Menus;
