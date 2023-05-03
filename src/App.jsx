import { Suspense } from 'react'
import { createHashRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Game from "./game/gamePresenter.jsx";
import { RecoilRoot } from "recoil";
import Home from './react/homePresenter.jsx'
import Favourite from './react/favouritePresenter.jsx'
import FavDetail from './react/FavDetailPresenter';
import Results from './react/resultsPresenter';
import Sidebar from './sidebarPresenter.jsx';
import Login from './react/loginPresenter';
import Logout from './react/logoutPresenter';
import Setting from './react/settingPresenter';


function App() {

    const routes = [
        {
            path: "/",
            element: <div className="homePage"><Home /></div>
        },
        {
            path: "/login",
            element: <div className="loginPage"><Login /></div>
        },
        {
            path: "/create",
            element: <div className="loginPage"><Login /></div>
        },
        {
            path: "/logout",
            element: <div className="logoutPage"><Logout /></div>
        },
        {
            path: "/setting",
            element: <div className="settingPage"><Setting /></div>
        },
        {
            path: "/home",
            element: <div className="homePage"><Home /></div>
        },
        {
            path: "/game",
            element: <div><Suspense
                fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif" alt={"Loading gif"} />}><Game /></Suspense>
            </div>
        },
        {
            path: "/result",
            element: <div><Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"
                alt={"Loading gif"} />}><Results /></Suspense></div>
        },
        {
            path: "/favorites",
            element: <div><Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"
                alt={"Loading gif"} />}><Favourite /></Suspense></div>
        },
        {
            path: "/details",
            element: <div><Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"
                alt={"Loading gif"} />}><FavDetail /></Suspense></div>
        }
    ]
    return (
        <div>
            <RecoilRoot>
                <div className="flexParent">
                    {
                        !(window.location.href.includes('login') && !window.location.href.includes('create')) && <div className='sepPage'><Sidebar /></div>
                    }
                    <div><RouterProvider router={createHashRouter(routes)} /></div>
                </div>
            </RecoilRoot>
        </div>
    )
}

export default App
