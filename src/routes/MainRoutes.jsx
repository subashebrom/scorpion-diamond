import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from './../pages/About';
import Contact from './../pages/Contact';
import Reviews from './../pages/Reviews';

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

        ]
    }
]);
export default MainRoutes;