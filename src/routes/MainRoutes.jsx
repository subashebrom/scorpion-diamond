import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from './../pages/About';
import Contact from './../pages/Contact';
import Reviews from './../pages/Reviews';
import FreeFireServer from "../pages/FreeFireServer";
import FreeFireDiamond from "../pages/FreeFireDiamond";
import Billing from "../pages/Billing";
import Payment from "../pages/Payment";
import PubgServer from "../pages/PubgServer";

const MainRoutes = createBrowserRouter([
    {
        path : '/',
        element: <MainLayOut/>,
        children: [
            {
                path: 'top-navbar',
                element: <TopNav/>
            },
            {
                path: '/footer',
                element: <Footer/>
            },
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/reviews',
                element: <Reviews/>
            },
            {
                path: '/free-fire-server',
                element: <FreeFireServer/>
            },
            {
                path: '/free-fire-diamond',
                element: <FreeFireDiamond/>
            },
            {
                path: '/billing',
                element: <Billing/>
            },
            {
                path: '/payment',
                element: <Payment/>
            },
            {
                path: '/pubg-server',
                element: <PubgServer/>
            },

        ]
    }
]);
export default MainRoutes;