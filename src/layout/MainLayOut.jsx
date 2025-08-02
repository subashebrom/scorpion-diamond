import { Outlet } from 'react-router';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

const MainLayOut = () => {
    return (
        <div>
            <TopNav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayOut;