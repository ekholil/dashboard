import React from 'react';
import {HiMenu, HiArchive, HiOutlineLogout} from 'react-icons/hi'
import {FaBoxes, FaCaravan, FaBuilding, FaChartLine} from 'react-icons/fa'
const Menu = () => {
    return (
        <div className='flex justify-between items-center py-3'>
            <div className='flex items-center gap-3'>
                <div className='bg-gray-600 text-white rounded p-2 cursor-pointer '>
                <HiMenu className='text-2xl' />
                </div>
                <h3 className='flex gap-1 text-white items-center bg-green-500 p-2 rounded cursor-pointer'>
                    <HiArchive className='text-2xl' />
                   API Status
                </h3>
            </div>
            <div className='flex gap-2'>
                <h1 className='flex bg-gray-600 text-white gap-2 p-2 rounded items-center cursor-pointer'>
                    <FaBoxes />
                    ECOM
                </h1>
                <h1 className='flex bg-gray-600 text-white gap-2 p-2 rounded items-center cursor-pointer'>
                    <FaCaravan />
                    Couriar
                </h1>
                <h1 className='flex bg-gray-600 text-white gap-2 p-2 rounded items-center cursor-pointer'>
                    <FaBuilding />
                    WMS
                </h1>
                <h1 className='flex bg-gray-600 text-white gap-2 p-2 rounded items-center cursor-pointer'>
                    <FaChartLine />
                    Finance
                </h1>
            </div>
            <div>
                <h3 className='flex items-center bg-gray-500 rounded text-white p-2 cursor-pointer'>
                    <HiOutlineLogout className='text-2xl' />
                    Log out
                </h3>
            </div>
        </div>
    );
};

export default Menu;