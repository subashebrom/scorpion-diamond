import { faDiscord, faFacebook, faInstagram, faSnapchat, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router';
import "../css/Footer.css";

const Footer = () => {
    return (
        <div className='w-full bg-primarybg md:bg-mainbg text-white/90 font-Ubuntu border-b border-b-gray-700 border-t border-t-gray-500'>
            <footer className="w-[90%] px-2 mx-auto pt-8  md:border-l md:border-l-gray-500 md:border-r md:border-r-gray-500 md:bg-primarybg">
                <section className=''>
                    {/* === Brand Name === */}
                    <div className='justify-items-center'>
                        <NavLink className='flex items-center space-x-2 ' to=''>
                            <img className='w-10 h-10 rounded-full bg-blue-400' src="" alt="" />
                            <h1 className='text-2xl font-bold'>SCORPION DIAMOND</h1>
                        </NavLink>
                    </div>
                    <div className='md:w-full sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-3 md:justify-items-center'>
                            <div>
                                <h1 className='mb-2 mt-2 text-lg font-semibold md:text-2xl'>Contact Us</h1>
                                <div className='grid gap-1.5'>
                                    <a className='text-sm md:text-lg hover:text-hoverbdr transition-all duration-200 delay-75 ease-in-out ' href="">
                                        <span className='mr-2'> <FontAwesomeIcon icon={faDiscord}/></span>
                                        Join Our Discord Server
                                    </a>
                                    <a className='text-sm md:text-lg hover:text-hoverbdr transition-all duration-200 delay-75 ease-in-out ' href="">
                                        <span className='mr-2'> <FontAwesomeIcon icon={faWhatsapp}/></span>
                                        Chat With Us!
                                    </a>
                                    <a className='text-sm md:text-lg hover:text-hoverbdr transition-all duration-200 delay-75 ease-in-out ' href="">
                                        <span className='mr-2'> <FontAwesomeIcon icon={faPhone}/></span>
                                        +880 13152-91293
                                    </a>
                                    <a className='text-sm md:text-lg hover:text-hoverbdr transition-all duration-200 delay-75 ease-in-out ' href="">
                                        <span className='mr-2'> <FontAwesomeIcon icon={faEnvelope}/></span>
                                        subashebrom@gmail.com
                                    </a>
                                </div>
                            </div>
                            {/* === Policy === */}
                            <div>
                                <h1 className='mb-2 mt-2 text-lg font-semibold md:text-2xl'>Security</h1>
                                <div className='grid gap-1.5'>
                                    <NavLink to='' className='text-sm md:text-lg hover:text-hoverbdr transition-all duration-200 delay-75 ease-in-out '>
                                        Privecy Policy
                                    </NavLink>
                                    <NavLink to='' className='text-sm md:text-lg hover:text-hoverbdr transition-all duration-200 delay-75 ease-in-out '>
                                        Refund Policy
                                    </NavLink>
                                    <NavLink to ='' className='text-sm md:text-lg hover:text-hoverbdr transition-all duration-200 delay-75 ease-in-out '>
                                        Terms & Conditions
                                    </NavLink>
                                </div>
                            </div>
                        {/* === Social Link === */}
                        <div className='pb-8'>
                            <h1 className='mb-2 mt-2 text-lg font-semibold md:text-2xl'>Social</h1>
                            <div>
                                <div className="relative mt-2 mb-2 w-62 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 delay-75 ease-in-out">
                                    <div className="triangle-one absolute left-0 top-0"></div>
                                    <div className="triangle-two absolute right-0 top-0"></div>
                                    <div className="triangle-three absolute left-0 bottom-0"></div>
                                    <div className="triangle-four absolute right-0 bottom-0"></div>
                                    <div className="nameBtn w-60 flex items-center justify-evenly bg-gmbtnbg  hover:text-hoverbdr transition-all duration-400 delay-75 ease-in-out cursor-pointer">
                                        <span><FontAwesomeIcon icon={faFacebook}/></span>
                                        <a className='py-2' href="">FACEBOOK</a>
                                    </div>
                                </div>
                                <div className="relative mt-2 mb-2 w-62 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 delay-75 ease-in-out">
                                    <div className="triangle-one absolute left-0 top-0"></div>
                                    <div className="triangle-two absolute right-0 top-0"></div>
                                    <div className="triangle-three absolute left-0 bottom-0"></div>
                                    <div className="triangle-four absolute right-0 bottom-0"></div>
                                    <div className="nameBtn w-60 flex items-center justify-evenly bg-gmbtnbg  hover:text-hoverbdr transition-all duration-400 delay-75 ease-in-out cursor-pointer">
                                        <span><FontAwesomeIcon icon={faYoutube}/></span>
                                        <a className='py-2' href="">YOUTUBE</a>
                                    </div>
                                </div>
                                <div className="relative mt-2 mb-2 w-62 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 delay-75 ease-in-out">
                                    <div className="triangle-one absolute left-0 top-0"></div>
                                    <div className="triangle-two absolute right-0 top-0"></div>
                                    <div className="triangle-three absolute left-0 bottom-0"></div>
                                    <div className="triangle-four absolute right-0 bottom-0"></div>
                                    <div className="nameBtn w-60 flex items-center justify-evenly bg-gmbtnbg  hover:text-hoverbdr transition-all duration-400 delay-75 ease-in-out cursor-pointer">
                                        <span><FontAwesomeIcon icon={faTwitter}/></span>
                                        <a className='py-2' href="">TWITTER</a>
                                    </div>
                                </div>
                                <div className="relative mt-2 mb-2 w-62 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 delay-75 ease-in-out">
                                    <div className="triangle-one absolute left-0 top-0"></div>
                                    <div className="triangle-two absolute right-0 top-0"></div>
                                    <div className="triangle-three absolute left-0 bottom-0"></div>
                                    <div className="triangle-four absolute right-0 bottom-0"></div>
                                    <div className="nameBtn w-60 flex items-center justify-evenly bg-gmbtnbg  hover:text-hoverbdr transition-all duration-400 delay-75 ease-in-out cursor-pointer">
                                        <span><FontAwesomeIcon icon={faInstagram}/></span>
                                        <a className='py-2' href="">INSTAGRAM</a>
                                    </div>
                                </div>
                                <div className="relative mt-2 mb-2 w-62 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 delay-75 ease-in-out">
                                    <div className="triangle-one absolute left-0 top-0"></div>
                                    <div className="triangle-two absolute right-0 top-0"></div>
                                    <div className="triangle-three absolute left-0 bottom-0"></div>
                                    <div className="triangle-four absolute right-0 bottom-0"></div>
                                    <div className="nameBtn w-60 flex items-center justify-evenly bg-gmbtnbg  hover:text-hoverbdr transition-all duration-400 delay-75 ease-in-out cursor-pointer">
                                        <span><FontAwesomeIcon icon={faSnapchat}/></span>
                                        <a className='py-2' href="">SNAPCHAT</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Footer;