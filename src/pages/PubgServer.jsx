import { faChevronLeft, faGamepad, } from "@fortawesome/free-solid-svg-icons";
import "../css/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router';
const PubgServer = () => {
    return (
        <div className="w-full bg-primarybg md:bg-mainbg text-white/90 font-Ubuntu border-b border-b-gray-700 mt-10">
            <section className="w-[90%] px-2 mx-auto pt-8  md:border-l md:border-l-gray-500 md:border-r md:border-r-gray-500 md:bg-primarybg pb-8">
                {/* === Search Box === */}
                <div className="search-box-one px-2 py-2 md:w-2xl md:mx-auto">
                    <div className="search-box-two w-full px-1 gap-2">
                        <NavLink to='/'>
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </NavLink>
                        <h1 className="search-box-three px-2 w-full flex items-center justify-center text-lg font-semibold">Find Your Own Game Server</h1>
                        <span><FontAwesomeIcon icon={faGamepad}/></span>
                    </div>
                </div>
                {/* === Adds Sliders for Mobile === */}
                <div>
                </div>
                {/* ==== Game Cards === */}
                <div className="mt-4 grid gap-6 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5">
                    <div className="game-card relative justify-items-center cursor-pointer hover:scale-105 transition-all duration-300 delay-75 hover:w-full ease-in-out">
                        <span className="relative">
                            <img className="image h-45 md:h-55 w-full object-cover" src="./images/pubg.png" alt="" />
                        </span>
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">PUBG</h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-center absolute top-0 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full">
                            <img className="size-10" src="/public/images/bd-flag.png" alt="" />
                            <p className="text-md">Bangladesh</p>
                        </div>
                        <div className="flex items-center justify-center absolute top-25 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full py-1 text-lg">
                            <p>Coming Soon</p>
                        </div>
                    </div>
                    <div className="game-card relative justify-items-center cursor-pointer hover:scale-105 transition-all duration-300 delay-75 ease-in-out">
                        <span className="relative">
                            <img className="image h-45 md:h-55 w-full object-cover" src="./images/free-fire.jpg" alt="" />
                        </span>
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-center absolute top-0 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full space-x-1">
                            <img className="size-10" src="/public/images/india.png" alt="" />
                            <p className="text-md">India</p>
                        </div>
                        <div className="flex items-center justify-center absolute top-25 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full py-1 text-lg">
                            <p>Coming Soon</p>
                        </div>
                    </div>
                    <div className="game-card relative justify-items-center cursor-pointer hover:scale-105 transition-all duration-300 delay-75 ease-in-out">
                        <span className="relative">
                            <img className="image h-45 md:h-55 w-full object-cover" src="./images/free-fire.jpg" alt="" />
                        </span>
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-center absolute top-0 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full space-x-1">
                            <img className="size-10" src="/public/images/pakistan-flag.png" alt="" />
                            <p className="text-md">Pakistan</p>
                        </div>
                        <div className="flex items-center justify-center absolute top-25 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full py-1 text-lg">
                            <p>Coming Soon</p>
                        </div>
                    </div>
                    <div className="game-card relative justify-items-center cursor-pointer hover:scale-105 transition-all duration-300 delay-75 ease-in-out">
                        <span className="relative">
                            <img className="image h-45 md:h-55 w-full object-cover" src="./images/free-fire.jpg" alt="" />
                        </span>
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-center absolute top-0 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full space-x-1">
                            <img className="size-10" src="/public/images/indonesia-flag.png" alt="" />
                            <p className="text-md">Indonesia</p>
                        </div>
                        <div className="flex items-center justify-center absolute top-25 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full py-1 text-lg">
                            <p>Coming Soon</p>
                        </div>
                    </div>
                    <div className="game-card relative justify-items-center cursor-pointer hover:scale-105 transition-all duration-300 delay-75 ease-in-out">
                        <span className="relative">
                            <img className="image h-45 md:h-55 w-full object-cover" src="./images/free-fire.jpg" alt="" />
                        </span>
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-center absolute top-0 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full">
                            <img className="size-10" src="/public/images/brazil-flag.png" alt="" />
                            <p className="text-md">Brazil</p>
                        </div>
                        <div className="flex items-center justify-center absolute top-25 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full py-1 text-lg">
                            <p>Coming Soon</p>
                        </div>
                    </div>
                    <div className="game-card relative justify-items-center cursor-pointer hover:scale-105 transition-all duration-300 delay-75 ease-in-out">
                        <span className="relative">
                            <img className="image h-45 md:h-55 w-full object-cover" src="./images/free-fire.jpg" alt="" />
                        </span>
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-center absolute top-0 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full space-x-1">
                            <img className="size-10" src="/public/images/dubai-flag.png" alt="" />
                            <p className="text-md">Mena</p>
                        </div>
                        <div className="flex items-center justify-center absolute top-25 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full py-1 text-lg">
                            <p>Coming Soon</p>
                        </div>
                    </div>
                    <div className="game-card relative justify-items-center cursor-pointer hover:scale-105 transition-all duration-300 delay-75 ease-in-out">
                        <span className="relative">
                            <img className="image h-45 md:h-55 w-full object-cover" src="./images/free-fire.jpg" alt="" />
                        </span>
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-center absolute top-0 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full space-x-1">
                            <img className="size-10" src="/public/images/malaysia-flag.png" alt="" />
                            <p className="text-md">Malaysia</p>
                        </div>
                        <div className="flex items-center justify-center absolute top-25 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full py-1 text-lg">
                            <p>Coming Soon</p>
                        </div>
                    </div>
                    <div className="game-card relative justify-items-center cursor-pointer hover:scale-105 transition-all duration-300 delay-75 ease-in-out">
                        <span className="relative">
                            <img className="image h-45 md:h-55 w-full object-cover" src="./images/free-fire.jpg" alt="" />
                        </span>
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-center absolute top-0 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full space-x-1">
                            <img className="size-10" src="/public/images/singapure-flag.png" alt="" />
                            <p className="text-md">Singapur</p>
                        </div>
                        <div className="flex items-center justify-center absolute top-25 bg-gray-900/50 backdrop-opacity-90 backdrop-blur-sm w-full py-1 text-lg">
                            <p>Coming Soon</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PubgServer;