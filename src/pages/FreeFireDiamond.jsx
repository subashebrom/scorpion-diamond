import { faBangladeshiTakaSign, faChevronLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router';
import "../css/FreeFireDiamond.css";
import "../js/TopNav";

const FreeFireDiamond = () => {
    return (
        <div className='w-full bg-primarybg md:bg-mainbg text-white/90 font-Ubuntu border-b border-b-gray-700 mt-10'>
            <section className='w-[90%] px-2 mx-auto pt-8  md:border-l md:border-l-gray-500 md:border-r md:border-r-gray-500 md:bg-primarybg pb-8'>
                <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                    <div className="triangle-one absolute left-0 top-0"></div>
                    <div className="triangle-two absolute right-0 top-0"></div>
                    <div className="triangle-three absolute left-0 bottom-0"></div>
                    <div className="triangle-four absolute right-0 bottom-0"></div>
                    <div className="nameBtn w-60 flex items-center justify-between px-4 bg-gmbtnbg cursor-pointer">
                        <NavLink to='/'><FontAwesomeIcon icon={faChevronLeft}/></NavLink>
                        <h2 className="py-2 text-lg">FREE FIRE</h2>
                        <img className='size-8' src="/public/images/bangladesh.png" alt="" />
                    </div>
                </div>
                {/* === Headline === */}
                <div className='flex items-center justify-center mt-4 relative md:w-100 md:mx-auto '>
                    <div className='head-box bg-[#1c243a] w-full absolute py-6 top-2'></div>
                    <div className='head-box bg-primarybg w-full absolute py-6 top-0.5'></div>
                    <h1 className='head-box text-lg font-medium bg-pcbg w-full flex items-center justify-center py-2'>Free Fire Diamond Top Up Bangladesh</h1>
                </div>
                {/* === Server Name === */}
                    <div className='server-section md:space-x-8 overflow-x-auto flex bg-pcbg px-2 py-4 mt-6'>
                        <div className='md:inline-block space-x-8 md:text-white/90 md:text-lg md:font-medium'>
                            <div className='desktop-Btn'>
                                <div className='serverBtn md:h-[40px] md:px-4 md:flex md:items-center md:justify-center md:bg-gmbtnbg'>
                                    Bangladesh
                                </div>
                                <div className="top-triangled"></div>
                                <div className="btm-triangled"></div>
                            </div>
                        </div>
                        <div className='md:inline-block space-x-8 md:text-white/90 md:text-lg md:font-medium'>
                            <div className='desktop-Btn'>
                                <div className='serverBtn md:h-[40px] md:px-4 md:flex md:items-center md:justify-center md:bg-gmbtnbg'>
                                    India
                                </div>
                                <div className="top-triangled"></div>
                                <div className="btm-triangled"></div>
                            </div>
                        </div>
                        <div className='md:inline-block space-x-8 md:text-white/90 md:text-lg md:font-medium'>
                            <div className='desktop-Btn'>
                                <div className='serverBtn md:h-[40px] md:px-4 md:flex md:items-center md:justify-center md:bg-gmbtnbg'>
                                    Pakistan
                                </div>
                                <div className="top-triangled"></div>
                                <div className="btm-triangled"></div>
                            </div>
                        </div>
                        <div className='md:inline-block space-x-8 md:text-white/90 md:text-lg md:font-medium'>
                            <div className='desktop-Btn'>
                                <div className='serverBtn md:h-[40px] md:px-4 md:flex md:items-center md:justify-center md:bg-gmbtnbg'>
                                    Indonesia
                                </div>
                                <div className="top-triangled"></div>

                                <div className="btm-triangled"></div>
                            </div>
                        </div>
                        <div className='md:inline-block space-x-8 md:text-white/90 md:text-lg md:font-medium'>
                            <div className='desktop-Btn'>
                                <div className='serverBtn md:h-[40px] md:px-4 md:flex md:items-center md:justify-center md:bg-gmbtnbg'>
                                    Brazil
                                </div>
                                <div className="top-triangled"></div>

                                <div className="btm-triangled"></div>
                            </div>
                        </div>
                        <div className='md:inline-block space-x-8 md:text-white/90 md:text-lg md:font-medium'>
                            <div className='desktop-Btn'>
                                <div className='serverBtn md:h-[40px] md:px-4 md:flex md:items-center md:justify-center md:bg-gmbtnbg'>
                                    Mena
                                </div>
                                <div className="top-triangled"></div>

                                <div className="btm-triangled"></div>
                            </div>
                        </div>
                        <div className='md:inline-block space-x-8 md:text-white/90 md:text-lg md:font-medium'>
                            <div className='desktop-Btn'>
                                <div className='serverBtn md:h-[40px] md:px-4 md:flex md:items-center md:justify-center md:bg-gmbtnbg'>
                                    Malaysia
                                </div>
                                <div className="top-triangled"></div>

                                <div className="btm-triangled"></div>
                            </div>
                        </div>
                        <div className='md:inline-block space-x-8 md:text-white/90 md:text-lg md:font-medium'>
                            <div className='desktop-Btn'>
                                <div className='serverBtn md:h-[40px] md:px-4 md:flex md:items-center md:justify-center md:bg-gmbtnbg'>
                                    Singapur
                                </div>
                                <div className="top-triangled"></div>

                                <div className="btm-triangled"></div>
                            </div>
                        </div>
                    </div>
                <div className='flex items-center justify-center mt-8 relative md:w-100 md:mx-auto'>
                    <div className='head-box bg-[#1c243a] w-full absolute py-6 top-2'></div>
                    <div className='head-box bg-primarybg w-full absolute py-6 top-0.5'></div>
                    <h1 className='head-box text-lg font-medium bg-pcbg w-full flex items-center justify-center py-2'>UID Top Up</h1>
                </div>
                {/* === Free Fire UID Top Up === */}
                <div className='border border-gray-700 shadow-xl/10 shadow-blue-500/90 p-2 mt-8 grid grid-cols-1 gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5'>
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
                <div className='border border-gray-700 shadow-xl/10 shadow-blue-500/90 mt-8 p-2 grid grid-cols-1 gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5'>
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
                <div className='border border-gray-700 shadow-xl/10 shadow-blue-500/90 p-2 mt-8 grid grid-cols-1 gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5'>
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
                <div className='flex items-end justify-end mt-4'>
                    <button className=' head-box text-md font-semibold bg-gmbtnbg inset-shadow-sm inset-shadow-blue-500 hover:bg-mainbg hover:inset-shadow-sm hover:inset-shadow-blue-500 group transition-all duration-400 delay-75 ease-in-out px-6 py-2'>Add to Card</button>
                </div>
                {/* === Rules And Payment Section === */}
                <div className='md:flex md:gap-4'>
                    {/* === Payment Methode === */}
                    <div className='md:order-2 md:w-md'>
                        <div>
                            <div className='border border-gray-700 shadow-xl/10 shadow-blue-500/90 p-2 mt-6'>
                                <div className='flex items-center justify-center relative md:w-100 md:mx-auto'>
                                    <div className='head-box bg-[#1c243a] w-full absolute py-6 top-2'></div>
                                    <div className='head-box bg-primarybg w-full absolute py-6 top-0.5'></div>
                                    <h1 className='head-box text-lg font-medium bg-pcbg w-full flex items-center justify-center py-2'>Enter Your Game User ID</h1>
                                </div>
                                <div>
                                    <div className='mt-6 relative md:w-100 md:mx-auto'>
                                        <input className='head-box outline-none text-md bg-gmbtnbg inset-shadow-sm inset-shadow-blue-500 hover:bg-mainbg hover:inset-shadow-sm hover:inset-shadow-blue-500 w-full group transition-all duration-400 delay-75 ease-in-out  p-2' type="text" placeholder='Enter Your Game User ID' />
                                    </div>
                                    <div className='mt-4 relative md:w-100 md:mx-auto'>
                                        <p className='head-box text-md font-semibold text-green-600 bg-gmbtnbg inset-shadow-sm inset-shadow-green-500 w-full p-2'>Subas Hebrom</p>
                                        <button type=''></button>
                                    </div>
                                    <div className='flex items-end justify-end'>
                                        <button className=' head-box text-md font-semibold bg-gmbtnbg inset-shadow-sm inset-shadow-blue-500 hover:bg-mainbg hover:inset-shadow-sm hover:inset-shadow-blue-500 group transition-all duration-400 delay-75 ease-in-out px-6 py-2'>Confirm</button>
                                    </div>
                                </div>
                            </div>
                            <div className='border border-gray-700 shadow-xl/10 shadow-blue-500/90 p-2 mt-6'>
                                <div className='flex items-center justify-center mt- relative md:w-100 md:mx-auto'>
                                    <div className='head-box bg-[#1c243a] w-full absolute py-6 top-2'></div>
                                    <div className='head-box bg-primarybg w-full absolute py-6 top-0.5'></div>
                                    <h1 className='head-box text-lg font-medium bg-pcbg w-full flex items-center justify-center py-2'>Your Order Items</h1>
                                </div>
                                <div className='bg-pcbg mt-6'>
                                    <div className='p-1'>
                                        <div className='flex items-start justify-between py-1'>
                                            <div>
                                                <p>BD Server</p>
                                            </div>
                                            <div className='text-end'>
                                                <p>User ID: 2189788657</p>
                                                <p>Subas Hebrom</p>
                                            </div>
                                        </div>
                                        <hr className='border-gray-500 ' />
                                        <div className='flex items-center justify-between py-2'>
                                            <div className=''>
                                                <p className='flex items-center space-x-2'>5,000 Diamonds <img className='size-5' src="/public/images/diamond.png" alt="" /><p>X2</p></p>
                                                <p className='flex gap-3.5 mt-1'>3,100 TK <p>X2</p></p>
                                            </div>
                                            <div className='flex items-center space-x-2.5'>
                                                <p className='bg-red-700 px-3'>-</p>
                                                <p className='bg-gmbtnbg px-2'>2X</p>
                                                <p className='bg-green-700 px-3'>+</p>
                                            </div>
                                        </div>
                                        <hr className='border-gray-500 ' />
                                        <div className='flex items-center justify-center bg-gmbtnbg my-2 py-1 space-x-2'>
                                            <p>10,000 </p>
                                            <img className='size-5' src="/public/images/diamond.png" alt="" /> 
                                        </div>
                                        <hr className='border-gray-500 ' />
                                        <span className='flex items-end justify-end my-2 text-red-700'><FontAwesomeIcon icon={faTrash}/></span>
                                    </div>
                                </div>
                                <div className='bg-pcbg mt-4'>
                                    <div className='p-1'>
                                        <div className='flex items-start justify-between py-1'>
                                            <div>
                                                <p>BD Server</p>
                                            </div>
                                            <div className='text-end'>
                                                <p>User ID: 2189788657</p>
                                                <p>Subas Hebrom</p>
                                            </div>
                                        </div>
                                        <hr className='border-gray-500 ' />
                                        <div className='flex items-center justify-between py-2'>
                                            <div className=''>
                                                <p className='flex items-center space-x-2'>5,000 Diamonds <img className='size-5' src="/public/images/diamond.png" alt="" /><p>X2</p></p>
                                                <p className='flex gap-3.5 mt-1'>3,100 TK <p>X2</p></p>
                                            </div>
                                            <div className='flex items-center space-x-2.5'>
                                                <p className='bg-red-700 px-3'>-</p>
                                                <p className='bg-gmbtnbg px-2'>2X</p>
                                                <p className='bg-green-700 px-3'>+</p>
                                            </div>
                                        </div>
                                        <hr className='border-gray-500 ' />
                                        <div className='flex items-center justify-center bg-gmbtnbg my-2 py-1 space-x-2'>
                                            <p>10,000 </p>
                                            <img className='size-5' src="/public/images/diamond.png" alt="" /> 
                                        </div>
                                        <hr className='border-gray-500 ' />
                                        <span className='flex items-end justify-end my-2 text-red-700'><FontAwesomeIcon icon={faTrash}/></span>
                                    </div>
                                </div>
                                <div className=''>
                                    <p className='bg-gmbtnbg text-end p-2 mt-2'><b>Total:</b> <FontAwesomeIcon className='text-sm' icon={faBangladeshiTakaSign}/> 6,200 TK</p>
                                </div>
                                <div className='flex items-end justify-end mt-4'>
                                    <button className='w-full head-box text-md font-semibold bg-gmbtnbg inset-shadow-sm inset-shadow-blue-500 hover:bg-mainbg hover:inset-shadow-sm hover:inset-shadow-blue-500 group transition-all duration-400 delay-75 ease-in-out px-6 py-2'>Procced to Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* === Details Section === */}
                    <div className='border border-gray-700 shadow-xl/10 shadow-blue-500/90 p-2 mt-6 md:order-1 md:w-full'>
                        <div className='flex items-center justify-center relative md:w-100 md:mx-auto'>
                            <div className='head-box bg-[#1c243a] w-full absolute py-6 top-2'></div>
                            <div className='head-box bg-primarybg w-full absolute py-6 top-0.5'></div>
                            <h1 className='head-box text-lg text-red-600 text-shadow-md text-shadow-white/50 font-medium bg-pcbg w-full flex items-center justify-center py-2'>Know before the payment process</h1>
                        </div>
                        {/* === Rules === */}
                        <div className='mt-6 font-hind-siliguri max-h-dvh overflow-auto'>
                            <h1 className='head-box text-lg font-medium bg-pcbg  flex items-center justify-center py-2 md:items-start md:justify-start md:pl-2 md:w-100'>Rules: (Step One)</h1>
                            <div className='text-sm md:text-lg mt-2 space-y-2'>
                                <p>১* শুধুমাত্র Bangladesh সার্ভারে Top Up হবে।</p>
                                <p>২* অর্ডার করার পূর্বে নিয়মগুলো একবার পড়ার জন্য বিশেষ ভাবে অনুগ্রহ করা হচ্ছে।</p>
                                <p>৩* Step by step নিয়মগুলা পড়ে নিবেন।</p>
                                <p>৪* অর্ডার করার সাথে সাথে ডেলিভারি দেওয়া হবে, ব্যতিক্রম বসত নির্ধারিত সময়ের মধ্যে ডেলিভারি না পেলে অনুগ্রহ করে আমাদের সাপোর্ট সেন্টারে যোগাযোগ করবেন।</p>
                                <p>৫* User ID ভুল দিয়ে (নিজস্ব ভুলের কারনে) Diamond না পেলে কর্তৃপক্ষ দায় ভার নিবে না।</p>
                                <p>৬* অর্ডার কমপ্লিট হওয়ার পরেও ID তে Diamond যায়নি এ রকম কিছু দাবি করলে কর্তৃপক্ষ আপনার ID Check করতে বাধ্য থাকিবে। (সত্যতা যাচাই করার জন্য, আপনাকে প্রথমে Game Lobby বা Diamond Section এর স্ক্রিনশট দিতে বাধ্য থাকিতে হবে, দ্বিতীয়ত Game Profile এর স্ক্রিনশট , তৃতীয়ত আপনার Game ID Pass (বাধ্যতামূলক)। আপনি ভুল প্রমাণিত হলে কর্তৃপক্ষ আপনার Aginsg এ যেকোনো ধরনের Statement নিতে পারবে।)</p>
                                <div className='grid space-y-4 md:grid md:grid-cols-3 md:gap-4 sm:grid sm:grid-cols-2 sm:gap-x-4'>
                                    <img className='w-full h-40 md:h-60' src="" alt="" />
                                    <img className='w-full h-40 md:h-60' src="" alt="" />
                                    <img className='w-full h-40 md:h-60' src="" alt="" />
                                </div>
                                    <p>৭* সাধারণত ১০ মিনিটের ভিতরে Order Complete করা হয়। সর্বোচ্চ ১ ঘন্টা সময় লাগতে পারে।</p>
                                    <p>৮* ১ ঘন্টার বেশি সময় অতিক্রম হলে Support Team এর সাথে যোগাযোগ করবেন।</p>
                                    <h1 className='head-box text-lg font-medium bg-pcbg  flex items-center justify-center py-2 mt-4 md:items-start md:justify-start md:pl-2 md:w-100'>Top-Up: (Step Two)</h1>
                                    <h1 className='mt-2'>Diamond কিভাবে Top-Up করবো?</h1>
                                    <p>১* আপনার পছন্দের প্যাকেজ টি Select করুন।</p>
                                    <p>২* Select করলেই নিচে একটা Option পাবেন যেখানে আপনি চাইলেই আপনার পছন্দকৃত প্যাকেজ টি একের অধিক নিতে পারবেন।</p>
                                    <h1 className='head-box text-lg font-medium bg-pcbg  flex items-center justify-center py-2 mt-4 md:items-start md:justify-start md:pl-2 md:w-100'>Game ID: (Step Three)</h1>
                                    <h1 className='mt-2'>Game User ID কিভাবে পাবো?</h1>
                                    <p>১* আপনার ডিভাইসে থাকা Free Fire Game টি ওপেন করুন।</p>
                                    <p>২* Profile এ ক্লিক করুন (ঠিক ছবিতে যেভাবে দেওয়া আছে)।</p>
                                    <p>৩* আপনার User ID Copy করুন। (ঠিক ছবিতে যেভাবে দেওয়া আছে)।</p>
                                    <div className='grid space-y-4 md:grid md:grid-cols-3 md:gap-4 sm:grid sm:grid-cols-2 sm:gap-x-4'>
                                        <img className='w-full h-40 md:h-60' src="" alt="" />
                                        <img className='w-full h-40 md:h-60' src="" alt="" />
                                        <img className='w-full h-40 md:h-60' src="" alt="" />
                                    </div>
                                    <h1 className='mt-2'>User ID Confirmation</h1>
                                    <p>১* আপনার User ID Paste করুন।</p>
                                    <p>২* আপনার User ID Match করলে আপনার Game এর নামটি দেখাবে।</p>
                                    <p>৩* Confirm বাঁটন এ ক্লিক করুন।</p>
                                    <h1 className='head-box text-lg font-medium bg-pcbg  flex items-center justify-center py-2 mt-4 md:items-start md:justify-start md:pl-2 md:w-100'>Payment: (Step Four)</h1>
                                    <h1 className='mt-2 text-lg'>বিকাশ Auto Payment</h1>
                                    <p>১* বিকাশ Auto Payment চিহ্নিত করুন</p>
                                    <p>২* বিকাশ নাম্বারটি দিন।</p>
                                    <p>৩* আপনার ফোনে একটি OTP ম্যাসেজ যাবে তা Allow করে দিন।</p>
                                    <p>৪* আপনার পিন টি দিন।</p>
                                    <h1 className='head-box text-lg font-medium bg-pcbg  flex items-center justify-center py-2 mt-4 md:items-start md:justify-start md:pl-2 md:w-100'>Payment Second Step:</h1>
                                    <h1 className='mt-2 text-lg'>Bkash, Nagad, Rocket Personal</h1>
                                    <p>১* আপনার পরিশোধ পদ্ধতিটি চিহ্নিত করুন (বিকাশ, নগদ, রকেট)।</p>
                                    <p>২* বিকাশ, নগদ, রকেট নিচে দেওয়া আমাদের নাম্বারটি Copy করুন।</p>
                                    <p>৩* কপি করা নাম্বারে টাকা সেন্ডমানি করুন।</p>
                                    <p>৪* ট্রান্সজেকশন আইডি টি কপি করে নিন।</p>
                                    <p>৫* আপনি কোন নাম্বার দিয়ে টাকা পাঠিয়েছেন সেটি লিখুন।</p>
                                    <p>৬* কপি করা ট্রান্সজেকশন আইডিটি পেস্ট করে দিন।</p>
                                    <p>৭* Verify Now এ ক্লিক করুন।</p>
                                    <h1 className='head-box text-lg font-medium bg-pcbg  flex items-center justify-center py-2 mt-4 md:items-start md:justify-start md:pl-2 md:w-100'>ওয়ালেট</h1>
                                    <p>১* Profile এ যান , Select করুন Deposit Money.</p>
                                    <p>২* বিকাশ, নগদ, রকেট চিহ্নিত করুন।</p>
                                    <p>৩* বিকাশ, নগদ, রকেট আমাদের নাম্বারটি Copy করুন।</p>
                                    <p>৪* কপি করা নাম্বারে টা্রুন।সেন্ডমানি করুন।</p>
                                    <p>৫* ট্রান্সজেকশন আইডি টি কপি করে নিন।</p>
                                    <p>৬* আপনি কোন নাম্বার দিয়ে টাকা পাঠিয়েছেন সেটি লিখুন।</p>
                                    <p>৭* কপি করা ট্রান্সজেকশন আইডিটি পেস্ট করে দিন।</p>
                                    <p>৮* Verify Now এ ক্লিক করুন।</p>
                                    <p>৯* ওয়ালেটে টাকা জমা হলে, আপনার প্যাকেজ টি নির্বাচন করুন।</p>
                                    <p>১০* পেমেন্ট এ Wallet Payment Select করুন।</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreeFireDiamond;