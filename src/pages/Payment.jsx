import { faDotCircle } from '@fortawesome/free-solid-svg-icons/faDotCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Payment = () => {
    return (
        <div className='w-full bg-primarybg md:bg-mainbg text-white/90 font-Ubuntu border-b border-b-gray-700 mt-10'>
            <section className='w-[90%] px-2 mx-auto pt-8  md:border-l md:border-l-gray-500 md:border-r md:border-r-gray-500 md:bg-gmbtnbg pb-8'>
                <div className='border border-gray-500 bg-gmbtnbg p-2'>
                    <div className='flex items-center justify-center bg-gray-300 w-50 h-[70px] mx-auto my-2 rounded-md'>
                        <img className='' src="/public/images/bkash.png" alt="" />
                    </div>
                    <div className='grid gap-2'>
                        <div>
                            <p className='text-lg font-semibold'>Transaction ID</p>
                            <input className='w-full focus:border-sky-500 bg-pcbg outline-none p-2 rounded border border-[#E2136E] mt-1' type="text" placeholder='Enter your transaction ID' />
                        </div>
                        <div>
                            <p className='text-lg font-semibold'>Phone Number</p>
                            <input className='w-full focus:border-sky-500 bg-pcbg outline-none p-2 rounded border border-[#E2136E] mt-1' type="text" placeholder='Enter your phone number' />
                        </div>
                        <div>
                            <p className='text-lg font-semibold'>Amount</p>
                            <input className='w-full focus:border-sky-500 bg-pcbg outline-none p-2 rounded border border-[#E2136E] mt-1' type="text" placeholder='Enter your enter amount' />
                        </div>
                    </div>
                </div>
                <div className='border border-gray-500 bg-gmbtnbg p-2 mt-4 font-hind-siliguri grid gap-2.5'>
                    <p><span> <FontAwesomeIcon icon={faDotCircle}/></span> *247# ডায়াল করে আপনার bKash মোবাইল মেনুতে যান অথবা অ্যাপে যান।</p>
                    <p><span> <FontAwesomeIcon icon={faDotCircle}/></span> Send Money - এ ক্লিক করুন।</p>
                    <p><span> <FontAwesomeIcon icon={faDotCircle}/></span> প্রাপক নম্বর হিসেবে নিচের এই নম্বরটি লিখুন</p>
                    <p className='pointer-copy'>01315291293</p>
                    <p><span> <FontAwesomeIcon icon={faDotCircle}/></span> নিশ্চিত করতে এখন আপনার bKash মোবাইল মেনু পিন লিখুন।</p>
                    <p><span> <FontAwesomeIcon icon={faDotCircle}/></span>  এরপর উপরের বক্সে আপনার Transaction ID এবং Amount দিন আর নিচের VERIFY বাটনে ক্লিক করুন।</p>
                </div>
                <div className='flex md:w-full items-end justify-end mt-4'>
                    <button className='head-box text-md font-semibold bg-gmbtnbg inset-shadow-sm inset-shadow-blue-500 hover:bg-mainbg hover:inset-shadow-sm hover:inset-shadow-blue-500 group transition-all duration-400 delay-75 ease-in-out px-6 py-2'>Verify Now</button>
                </div>
            </section>
        </div>
    );
};

export default Payment;