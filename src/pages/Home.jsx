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
            </section>
        </div>
    );
};

export default Home;