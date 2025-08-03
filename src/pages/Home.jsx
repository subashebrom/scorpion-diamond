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
                <div className="mt-4 grid gap-6 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-5">
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
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/pubg.png" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">PUBG MOBILE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/call-of-duty.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">CALL OF DUTY</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/valorant.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">VALORANT</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/apex-legend.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">APEX LEGEND</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/warezone.webp" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">WARZONE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/blood-strike.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">BLOOD STRIKE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/doom-eternal.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">DOOM ETERNAL</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/elden.webp" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">ELDER RING</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/cyberpunk.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">CYBER PUNK 2077</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/fortnite.webp" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">FORTNITE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/delta-force.jpeg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">DELTA FORCE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/far-light.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">FAR LIGHT 84</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/ganshin-impact.jpeg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">GANSHIN IMPACT</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/league-of-legends.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">LEAGUE OF LEGEND'S</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/mobile-legend.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">ML: BANG BANG</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/sausage-man.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">SAUSAGE MAN</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/solo-leveling.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">SOLO LEVELING: ARISE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/call-of-duty-mobile.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">CALL OF DUTY MOBILE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/roblox.jpeg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">ROBLOX</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/brawal-stars.jpeg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">BRAWL STARS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/devil-may-cry.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">DEVIL MAY CRY</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/clash-royale.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">CLASH ROYALE</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/mortal-kombat.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">MORTAL KOMBAT</h2>
                            </div>
                        </div>
                    </div>
                    <div className="game-card">
                        <img className="image h-45 md:h-55 w-full object-cover" src="./images/brawl-halla.jpg" alt="" />
                        <div className="relative mt-2 mb-2 w-62 mx-auto flex items-center justify-center cursor-pointer">
                            <div className="triangle-one absolute left-0 top-0"></div>
                            <div className="triangle-two absolute right-0 top-0"></div>
                            <div className="triangle-three absolute left-0 bottom-0"></div>
                            <div className="triangle-four absolute right-0 bottom-0"></div>
                            <div className="nameBtn w-60 flex items-center justify-center bg-gmbtnbg cursor-pointer">
                                <h2 className="py-2">BRAWL HALLA</h2>
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