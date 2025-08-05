import { faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Billing = () => {
    return (
        <div className='w-full bg-primarybg md:bg-mainbg text-white/90 font-Ubuntu border-b border-b-gray-700 mt-10'>
            <section className='w-[90%] md:grid md:grid-cols-2 md:gap-4 md:items-start px-2 mx-auto pt-8 md:border-l md:border-l-gray-500 md:border-r md:border-r-gray-500 md:bg-primarybg pb-8'>
                {/* === Billing Details Section === */}
                <div className='bg-gmbtnbg p-2'>
                    <div className='flex items-center justify-center relative md:w-100 md:mx-auto '>
                        <div className='head-box bg-pcbg w-full absolute py-6 top-2'></div>
                        <div className='head-box bg-primarybg w-full absolute py-6 top-0.5'></div>
                        <h1 className='head-box text-lg font-medium bg-pcbg w-full flex items-center justify-center py-2'>Your Billing Details</h1>
                    </div>
                    <h1 className='mt-4'>We Sent You, Your Billing Details WhatsApp Number or Your Email Address</h1>
                    <div className='space-y-2'>
                        <div>
                            <p className='text-md font-medium'>WhatsApp Number</p>
                            <input className='outline-1 outline-hoverbdr hover:outline-mainbg transition-all duration-200 delay-75 ease-in-out rounded-md w-full p-2 mt-1' type="text" placeholder='Enter Your WhatsApp Number' />
                        </div>
                        <div>
                            <p className='text-md font-medium'>Email Address</p>
                            <input className='outline-1 outline-hoverbdr hover:outline-mainbg transition-all duration-200 delay-75 ease-in-out rounded-md w-full p-2 mt-1' type="mail" placeholder='Enter Your Mail Address' />
                        </div>
                    </div>
                    <hr className=' my-2 border-gray-500' />
                    <div className='flex items-center justify-between'>
                        <div>
                            <p>Bangladesh Server</p>
                            <p>2189788657</p>
                            <p>Subas Hebrom</p>
                        </div>
                        <div>
                            <p className='flex'>50,000 Diamonds ,<p>2x</p></p>
                            <p className='flex justify-end'>3,100 TK ,<p>2x</p></p>
                        </div>
                    </div>
                    <hr className=' my-2 border-gray-500' />
                    <div>
                        <p className='flex items-center justify-between'><b>SubTotal</b> <span><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 6,200 TK</span></p>
                        <hr className=' my-2 border-gray-500' />
                        <p className='flex items-center justify-between'><b>Total</b> <span><FontAwesomeIcon icon={faBangladeshiTakaSign}/> 6,200 TK</span></p>
                    </div>
                    <div className='mt-4'>
                        <div className='space-x-2'>
                            <input name='yes' id='remember' type="checkbox" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <div className='space-x-2'>
                            <input name='yes' id='old' type="checkbox" />
                            <label htmlFor="old">I confirm that I am 18+ years old</label>
                        </div>
                        <div className='space-x-2'>
                            <input name='yes' id='agree' type="checkbox" />
                            <label htmlFor="agree">I agree to receive news and promo from--</label>
                        </div>
                    </div>
                </div>
                {/* ===Payment Methode === */}
                <div className='mt-4 md:mt-0 bg-gmbtnbg p-2'>
                    <div>
                        <div className='flex items-center justify-center mt-4 md:mt-0 relative md:w-100 md:mx-auto '>
                            <div className='head-box bg-pcbg w-full absolute py-6 top-2'></div>
                            <div className='head-box bg-primarybg w-full absolute py-6 top-0.5'></div>
                            <h1 className='head-box text-lg font-medium bg-pcbg w-full flex items-center justify-center py-2'>Payment System</h1>
                        </div>
                    </div>
                    <div className='mt-8 grid grid-cols-2 gap-3 md:grid-cols-3'>
                        <div className='bg-gray-300 flex items-center justify-center min-h-20 max-h-20 md:max-h-30 md:min-h-30 rounded-lg p-2 border border-[#E2136E] hover:border-2 group transition-all duration-200 delay-75 ease-in-out'>
                            <img className='object-cover hover:scale-90 group transition-all duration-200 delay-75 ease-in-out' src="/public/images/bkash.png" alt="" />
                        </div>
                        <div className='bg-gray-300 flex items-center justify-center min-h-20 max-h-20 md:max-h-30 md:min-h-30 rounded-lg p-2 border border-[#ED1C24] hover:border-2 group transition-all duration-200 delay-75 ease-in-out'>
                            <img className='object-cover hover:scale-90 group transition-all duration-200 delay-75 ease-in-out' src="/public/images/nagad.png" alt="" />
                        </div>
                        <div className='bg-gray-300 flex items-center justify-center min-h-20 max-h-20 md:max-h-30 md:min-h-30 rounded-lg p-2 border border-[#8A288F] hover:border-2 group transition-all duration-200 delay-75 ease-in-out'>
                            <img className='object-cover hover:scale-90 group transition-all duration-200 delay-75 ease-in-out' src="/public/images/rocket.png" alt="" />
                        </div>
                        <div className='bg-gray-300 flex items-center justify-center min-h-20 max-h-20 md:max-h-30 md:min-h-30 rounded-lg p-2 border border-[#0054A6] hover:border-2 group transition-all duration-200 delay-75 ease-in-out'>
                            <img className='object-cover hover:scale-90 group transition-all duration-200 delay-75 ease-in-out' src="/public/images/upay.png" alt="" />
                        </div>
                        <div className='bg-gray-300 flex items-center justify-center min-h-20 max-h-20 md:max-h-30 md:min-h-30 rounded-lg p-2 border border-[#1434CB] hover:border-2 group transition-all duration-200 delay-75 ease-in-out'>
                            <img className='object-cover hover:scale-90 group transition-all duration-200 delay-75 ease-in-out' src="/public/images/visa-card.png" alt="" />
                        </div>
                        <div className='bg-gray-300 flex items-center justify-center min-h-20 max-h-20 md:max-h-30 md:min-h-30 rounded-lg p-2 border border-[#FF5F00] hover:border-2 group transition-all duration-200 delay-75 ease-in-out'>
                            <img className='object-cover hover:scale-90 group transition-all duration-200 delay-75 ease-in-out' src="/public/images/mastercard.png" alt="" />
                        </div>
                        <div className='bg-gray-300 flex items-center justify-center min-h-20 max-h-20 md:max-h-30 md:min-h-30 rounded-lg p-2 border border-[#2ED876] hover:border-2 group transition-all duration-200 delay-75 ease-in-out'>
                            <img className='object-cover hover:scale-90 group transition-all duration-200 delay-75 ease-in-out' src="/public/images/payoneer.png" alt="" />
                        </div>
                    </div>
                    <div className='flex md:w-full items-end justify-end mt-4'>
                        <button className='head-box w-full text-md font-semibold bg-gmbtnbg inset-shadow-sm inset-shadow-blue-500 hover:bg-mainbg hover:inset-shadow-sm hover:inset-shadow-blue-500 group transition-all duration-400 delay-75 ease-in-out px-6 py-2'>Place Your Order</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Billing;