import React from 'react';

const Banner = ({handleClaimCreditBtn}) => {
    return (
        <div className='bg-black rounded-2xl max-w-[1320px] w-full mx-auto' style={{backgroundImage: "url('public/assets/bg-shadow.png')",
            backgroundBlendMode: "normal",
            backgroundPosition: "center top"

        }}>
            <div className='w-full flex justify-center items-center flex-col gap-6 py-16' 
            >
                <img src="public/assets/banner-main.png" alt="" />
                <div className='flex flex-col gap-3 justify-center items-center'>
                <h1 className='text-white text-[40px] font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h4 className='text-white text-2xl font-medium'>Beyond Boundaries Beyond Limits</h4>
                </div>
                <div className='border border-yellow-400 p-1 rounded-lg bg-transparent'>
                    <button onClick={handleClaimCreditBtn} className='bg-yellow-400 btn'>Claim Free Credit</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;