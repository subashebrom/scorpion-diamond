import { faBangladeshiTakaSign, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router';
import "../css/FreeFireDiamond.css";
import "../js/TopNav";

const FreeFireDiamond = () => {
    return (
        <div className='full bg-primarybg md:bg-mainbg text-white/90 font-Ubuntu border-b border-b-gray-700 mt-10   '>
            <section className='w-[90%] px-2 mx-auto pt-8  md:border-l md:border-l-gray-500 md:border-r md:border-r-gray-500 md:bg-primarybg pb-8'>
                <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                    <div className="triangle-one absolute left-0 top-0"></div>
                    <div className="triangle-two absolute right-0 top-0"></div>
                    <div className="triangle-three absolute left-0 bottom-0"></div>
                    <div className="triangle-four absolute right-0 bottom-0"></div>
                    <div className="nameBtn w-60 flex items-center justify-between px-4 bg-gmbtnbg cursor-pointer">
                        <NavLink to='/free-fire-server'><FontAwesomeIcon icon={faChevronLeft}/></NavLink>
                        <h2 className="py-2 text-lg">Bangladesh</h2>
                        <img className='size-8' src="/public/images/bangladesh.png" alt="" />
                    </div>
                </div>
                {/* === Headline === */}
                <div className='flex items-center justify-center mt-4 relative md:w-100 md:mx-auto '>
                    <div className='head-box bg-[#1c243a] w-full absolute py-6 top-2'></div>
                    <div className='head-box bg-primarybg w-full absolute py-6 top-0.5'></div>
                    <h1 className='head-box text-lg font-medium bg-pcbg w-full flex items-center justify-center py-2'>Free Fire Diamond Top Up Bangladesh</h1>
                </div>
                {/* === Free Fire UID Top Up === */}
                <div className='mt-8 grid grid-cols-1 gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5'>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-8 relative md:w-100 md:mx-auto'>
                    <div className='head-box bg-[#1c243a] w-full absolute py-6 top-2'></div>
                    <div className='head-box bg-primarybg w-full absolute py-6 top-0.5'></div>
                    <h1 className='head-box text-lg font-medium bg-pcbg w-full flex items-center justify-center py-2'>Special Package</h1>
                </div>
                {/* === Free Fire UID Top Up === */}
                <div className='mt-8 grid grid-cols-1 gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5'>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-center justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>Weekly Lite 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            40 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/weekly-lite.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>Weekly Lite 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-center justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>Weekly Pass 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            150 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/Weekly.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>Weekly Pass 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 150 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-center justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>Monthly Pass 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            760 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/monthly.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>Monthly Pass 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 760 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-center justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>Level Up Pass 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            160 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>Level Up Pass 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 160 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-center justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>Evo Access 3D 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            65 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/evo.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>Evo Access 3D 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 65 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-center justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>Evo Access 7D 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                        100 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/evo.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>Evo Access 7D 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 100 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-center justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>Evo Access 30D 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            300 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/evo.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>Evo Access 30D 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 300 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-8 relative md:w-100 md:mx-auto'>
                    <div className='head-box bg-[#1c243a] w-full absolute py-6 top-2'></div>
                    <div className='head-box bg-primarybg w-full absolute py-6 top-0.5'></div>
                    <h1 className='head-box text-lg font-medium bg-pcbg w-full flex items-center justify-center py-2'>UniPin Voucher Package</h1>
                </div>
                {/* === Free Fire UID Top Up === */}
                <div className='mt-8 grid grid-cols-1 gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5'>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div id='show_calculate' className='diamond-first-box w-full px-2 py-1'>
                            <div className='diamond-second-box w-full p-1'>
                                <div className='diamond-third-box flex items-start justify-between w-full px-2'>
                                    <h1 className='text-lg font-semibold'>25 Diamonds 
                                        <h2 className='text-md font-bold'>
                                            <FontAwesomeIcon className='mr-1' icon={faBangladeshiTakaSign}/>
                                            25 TK
                                        </h2>
                                    </h1>
                                    <span>
                                        <img className='size-8' src="/public/images/diamond.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* === Calculate Section === */}
                        <div id='calculate' className='hidden bg-pcbg absolute w-full z-10'>
                            <div className='flex items-center justify-between p-2'>
                                <h1>25 Diamonds 
                                    <h2 className='mt-1'><FontAwesomeIcon icon={faBangladeshiTakaSign}/>25TK</h2>
                                </h1>
                                <p>1</p>
                                <div className='flex items-center space-x-2.5'>
                                    <p className='bg-red-700 px-4'>-</p>
                                    <p className='bg-green-700 px-4'>+</p>
                                </div>
                            </div>
                            <hr className='border-gray-500' />
                            <div className='p-2'>
                                <h1>Total: 25 TK</h1>
                                <div className='flex items-center justify-center space-x-3 py-2'>
                                    <p className='bg-red-700 px-2 py-1 rounded-md'>Reset</p>
                                    <p className='bg-green-700 px-2 py-1 rounded-md'>Confirm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreeFireDiamond;