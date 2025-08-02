import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

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

        ]
    }
]);
export default MainRoutes;