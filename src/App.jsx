import {Suspense} from 'react'
import {createHashRouter, RouterProvider, useNavigate} from "react-router-dom";
import './App.css'
import Game from "./presenter/gamePresenter.jsx";
import {RecoilRoot, useRecoilState} from "recoil";
import Home from './presenter/homePresenter.jsx'
import Favourite from './presenter/favouritePresenter.jsx'
import FavDetail from './presenter/FavDetailPresenter';
import Sidebar from './presenter/sidebarPresenter.jsx';
import Login from './presenter/loginPresenter';
import Logout from './presenter/logoutPresenter';
import Setting from './presenter/settingPresenter';
import About from "./presenter/aboutPresenter.jsx";
import Leaderboard from "./presenter/leaderboardPresenter.jsx";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { isGrantedAccess } from './model/atoms';
import SuspenseView from './view/suspenseView';

function App() {
    const routes = [
        {
            path: "/",
            element: <div className="homePage"><Home/></div>
        },
        {
            path: "/login",
            element: <div className="loginPage"><Login/></div>
        },
        {
            path: "/create",
            element: <div className="loginPage"><Login/></div>
        },
        {
            path: "/logout",
            element: <div className="logoutPage"><Logout/></div>
        },
        {
            path: "/setting",
            element: <div className="settingPage"><Suspense fallback={<SuspenseView/>}><Setting/></Suspense></div>
        },
        {
            path: "/about",
            element: <div className="aboutPage"><About/></div>
        },
        {
            path: "/home",
            element: <div className="homePage"><Home/></div>
        },
        {
            path: "/leaderboard",
            element: <div><Suspense fallback={<SuspenseView/>}><Leaderboard /></Suspense>
        </div>
        },
        {
            path: "/game",
            element: <div><Suspense fallback={<SuspenseView/>}><Game /></Suspense>
            </div>
        },
        {
            path: "/favorites",
            element: <div><Suspense fallback={<SuspenseView/>}><Favourite/></Suspense></div>
        },
        {
            path: "/details",
            element: <div><Suspense fallback={<SuspenseView/>}><FavDetail/></Suspense></div>
        }
    ]
    return (
        <div>
            <RecoilRoot>
                <div>
                    {
                        
                        <div><Sidebar /></div>
                    }
                    <div><RouterProvider router={createHashRouter(routes)}/></div>
                </div>
            </RecoilRoot>
        </div>
    )
}

export default App
