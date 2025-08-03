import { faUser } from '@fortawesome/free-regular-svg-icons';
import {  faBars, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router';
import "../js/TopNav";
import "../css/TopNav.css";

const TopNav = () => {
    return (
        <div className='fixed top-0 w-full sm:w-sm md:w-full bg-mainbg text-white/90 font-Ubuntu border-b border-b-gray-700 z-10'>
            <section className=''>
                {/* === Brand === */}
                <div className='w-[90%] sm:w-[100%] md:w-[90%] lg:w-[90%] xl:-w[90%] 2xl:w-[90%] md:border-r md:border-r-gray-500 md:border-l md:border-l-gray-500 md:px-2 mx-auto flex items-center justify-between py-2'>
                    <h1 className='text-xl font-bold flex items-center'> <img className='bg-blue-400 w-[30px] h-[30px] rounded-full mr-2' src="" alt="" />Scorpion Diamond</h1>
                    {/* === Desktop Menu Items === */}
                    <div className='md:space-x-8'>
                        <div className='hidden md:inline-block space-x-8 md:text-white/90 md:text-lg md:font-medium'>
                            <div className='desktop-Btn'>
                                <div className='active-Btn md:h-[40px] md:px-4 md:flex md:items-center md:bg-btnbg'>
                                    Home
                                </div>
                                <div className="top-triangle"></div>
                                <div className="btm-triangle"></div>
                            </div>
                        </div>
                        <div className='hidden md:inline-block space-x-8 md:text-white/90 md:text-lg md:font-medium'>
                            <div className='desktop-Btn'>
                                <div className='active-Btn md:h-[40px] md:px-4 md:flex md:items-center md:bg-btnbg'>
                                    About
                                </div>
                                <div className="top-triangle"></div>
                                <div className="btm-triangle"></div>
                            </div>
                        </div>
                        <div className='hidden md:inline-block space-x-8 md:text-white/90 md:text-lg md:font-medium'>
                            <div className='desktop-Btn'>
                                <div className='active-Btn md:h-[40px] md:px-4 md:flex md:items-center md:bg-btnbg'>
                                    Cotact
                                </div>
                                <div className="top-triangle"></div>
                                <div className="btm-triangle"></div>
                            </div>
                        </div>
                        <div className='hidden md:inline-block space-x-8 md:text-white/90 md:text-lg md:font-medium'>
                            <div className='desktop-Btn'>
                                <div className='active-Btn md:h-[40px] md:px-4 md:flex md:items-center md:bg-btnbg'>
                                    Reviews
                                </div>
                                <div className="top-triangle"></div>
                                <div className="btm-triangle"></div>
                            </div>
                        </div>
                    </div>
                    {/* === Menu Items === */}
                    <div className=''>
                        {/* ===Profile === */}
                        <div className='flex items-center space-x-2'>
                            <FontAwesomeIcon icon={faUser}/>
                            <span id='mobile' className='md:hidden'><FontAwesomeIcon icon={faBars} /></span>
                        </div>
                        <div className='hidden flex-col w-full items-center md:hidden'>
                            <div id='menu' className='absolute w-full flex flex-col  text-md font-medium top-11 text-white/90'>
                                <NavLink className=' bg-btnbg pl-4 py-2 border-b border-b-gray-500 group transition-all duration-150 delay-75 ease-initial hover:bg-mainbg' to='/'>Home</NavLink>
                                <NavLink className=' bg-btnbg pl-4 py-2 border-b border-b-gray-500 group transition-all duration-150 delay-75 ease-initial hover:bg-mainbg' to='/about'>About</NavLink>
                                <NavLink className=' bg-btnbg pl-4 py-2 border-b border-b-gray-500 group transition-all duration-150 delay-75 ease-initial hover:bg-mainbg' to='/contact'>Contact</NavLink>
                                <NavLink className=' bg-btnbg pl-4 py-2 border-b border-b-gray-500 group transition-all duration-150 delay-75 ease-initial hover:bg-mainbg' to='/reviews'>Reviews</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopNav;