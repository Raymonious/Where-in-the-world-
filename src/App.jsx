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
            element: <div className="settingPage"><Setting/></div>
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
            element: <div><Suspense
            fallback={<Backdrop
                sx={{ color: 'white', zIndex: 10000 }}
                open={true}>
                <CircularProgress color="inherit" />
              </Backdrop>}><Leaderboard /></Suspense>
        </div>
        },
        {
            path: "/game",
            element: <div><Suspense
                fallback={<Backdrop
                    sx={{ color: 'white', zIndex: 10000 }}
                    open={true}>
                    <CircularProgress color="inherit" />
                  </Backdrop>}><Game /></Suspense>
            </div>
        },
        {
            path: "/favorites",
            element: <div><Suspense fallback={<Backdrop
                sx={{color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={true}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>}><Favourite/></Suspense></div>
        },
        {
            path: "/details",
            element: <div><Suspense fallback={<Backdrop
                sx={{color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={true}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>}><FavDetail/></Suspense></div>
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
