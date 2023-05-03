import {Suspense} from 'react'
import {createHashRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Game from "./game/gamePresenter.jsx";
import {RecoilRoot} from "recoil";
import Home from './react/homePresenter.jsx'
import Favourite from './react/favouritePresenter.jsx'
import FavDetail from './react/FavDetailPresenter';
import Results from './react/resultsPresenter';
import Sidebar from './sidebarPresenter.jsx';
import About from "./react/aboutPresenter.jsx";


function App() {

    const routes = [
        {
            path: "/",
            element: <div className="homePage"><Home/></div>
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
            path: "/game",
            element: <div><Suspense
                fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif" alt={"Loading gif"}/>}><Game/></Suspense>
            </div>
        },
        {
            path: "/result",
            element: <div><Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"
                                                   alt={"Loading gif"}/>}><Results/></Suspense></div>
        },
        {
            path: "/favorites",
            element: <div><Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"
                                                   alt={"Loading gif"}/>}><Favourite/></Suspense></div>
        },
        {
            path: "/details",
            element: <div><Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"
                                                   alt={"Loading gif"}/>}><FavDetail/></Suspense></div>
        }
    ]

    return (
        <div>
            <RecoilRoot>
                <div className="flexParent">
                    <div className='sepPage'><Sidebar/></div>
                    <div><RouterProvider router={createHashRouter(routes)}/></div>
                </div>
            </RecoilRoot>
        </div>
    )
}

export default App
