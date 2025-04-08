import React from 'react';

const Newsletter = () => {
    return (
        <div className='max-w-[1320px] w-full mx-auto border border-white rounded-2xl p-4 mt-36 -mb-42 relative z-10'>
            
        <div className='bg-white border border-[#ebebeb] flex flex-col gap-5 justify-center items-center p-16 rounded-2xl'
        style={{backgroundImage: "url('public/assets/bg-shadow.png')",
                backgroundPosition: "center"
        }}>
            <h2 className='text-3xl font-bold text-[#131313]'>Subscribe to our Newsletter</h2>
            <p className='text-xl font-medium text-[rgba(19,19,19,0.7)]'>Get the latest updates and news right in your inbox</p>
            <div className='flex items-center w-full justify-center'>
            <input type="text" placeholder="Enter your email" className="input "/>
            <button className="btn text-black font-semibold btn-secondary">Subscribe</button>
            </div>
        </div>
        </div>
    );
};

export default Newsletter;