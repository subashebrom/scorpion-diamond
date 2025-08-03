import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../css/Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Home = () => {
    return (
        <div className="w-full bg-primarybg md:bg-mainbg text-white/90 font-Ubuntu border-b border-b-gray-700 mt-10">
            <section className="w-[90%] px-2 mx-auto pt-8  md:border-l md:border-l-gray-500 md:border-r md:border-r-gray-500 md:bg-primarybg">
                {/* === Search Box === */}
                <div className="search-box-one px-2 py-2 md:w-2xl md:mx-auto">
                    <div className="search-box-two w-full px-1">
                        <input className="search-box-three w-full outline-none px-2" type="search" placeholder="Find Your Own Games" />
                        <span><FontAwesomeIcon icon={faSearch} /></span>
                    </div>
                </div>
                {/* ==== Game Cards === */}
                <div className="mt-4 grid gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4">
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/free-fire.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/free-fire.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/free-fire.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/free-fire.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/free-fire.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">FREE FIRE</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;