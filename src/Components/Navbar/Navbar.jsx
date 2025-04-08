import React from 'react';

const Navbar = ({claimCoins}) => {
    return (
        <div className='max-w-[1320px] w-full mx-auto'>
            <div className='flex justify-between pt-6 items-center mb-8'>
                <img src="public/assets/logo.png" alt="" />
                <div className='flex gap-6 items-center'>
                    <nav className='flex gap-4'>
                        <a href="#" className='text-[#131313b8]'>Home</a>
                        <a href="#" className='text-[#131313b8]'>Fixture</a>
                        <a href="#" className='text-[#131313b8]'>Teams</a>
                        <a href="#" className='text-[#131313b8]'>Schedules</a>
                    </nav>
                    <button className='btn font-semibold text-base'><span>$ {claimCoins ? claimCoins : 0}</span> Coin</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;