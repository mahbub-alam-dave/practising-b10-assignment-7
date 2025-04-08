import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black w-full p-4'>
            <div className='max-w-[1320px] w-full mx-auto flex justify-center items-center flex-col gap-10 mt-46'>
                <img src="public/assets/logo-footer.png" alt="" />
                <div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-12 text-white mt-24 border-b border-[#3b3a3a] pb-8 lg:pb-16'>
                    <div className='flex flex-col gap-4 '>
                        <h4>About Us</h4>
                        <p className='text-[rgba(255,255,255,0.6)]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className='flex flex-col gap-4 justify-center lg:ml-16'>
                        <h4 className='font-semibold text-lg'>Quick Links</h4>
                        <ul className=''>
                            <li className='mb-2 list-disc text-[rgba(255,255,255,0.6)]'>Home</li>
                            <li className='mb-2 list-disc text-[rgba(255,255,255,0.6)]'>Services</li>
                            <li className='mb-2 list-disc text-[rgba(255,255,255,0.6)]'>About</li>
                            <li className='mb-2 list-disc text-[rgba(255,255,255,0.6)]'>Contact</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4 '>
                        <h4 className='font-semibold text-lg'>Subscribe</h4>
                        <p className='text-[rgba(255,255,255,0.6)]'>Subscribe to our newsletter for the latest updates</p>
                        <div className='flex items-center '>
                        <input type="text" placeholder="Enter your email" className="input w-[60%]"/>
                        <button className="btn text-black font-semibold btn-secondary">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-white mb-6'>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;