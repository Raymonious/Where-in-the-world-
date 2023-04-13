import {useState, Suspense} from 'react'
import {createHashRouter, RouterProvider} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from "./game/gamePresenter.jsx";
import {RecoilRoot} from "recoil";
import Home from './react/homePresenter.jsx'
import Favourite from './react/favouritePresenter.jsx'
import FavDetail from './react/FavDetailPresenter';
import Results from './react/resultsPresenter';
import Sidebar from './sidebarPresenter.jsx';


function App() {
    // const [count, setCount] = useState(0)

    const routes = [
        {
            path: "/",
            element: <div className="homePage"><Home/></div>
        },
        {
            path: "/home",
            element: <div className="homePage"><Home/></div>
        },
        {
            path: "/game",
            element: <div><Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"/>}><Game/></Suspense></div>
        },
        {
            path: "/result",
            element: <div><Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"/>}><Results/></Suspense></div>
        },
        {
            path: "/favorites",
            element: <div><Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"/>}><Favourite/></Suspense></div>
        },
        {
            path: "/details",
            element: <div><Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"/>}><FavDetail/></Suspense></div>
        }
    ]

    return (
        <div>
            <RecoilRoot>
                <div className="flexParent">
                    <div className='sepPage'><Sidebar/></div>
                    <div><RouterProvider router ={createHashRouter(routes)}/></div>
                {/*    <div className="sepPage">HomePage<Home/></div>*/}
                {/*    <Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"/>}>*/}
                {/*        <Game/>*/}
                {/*        <Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"/>}>*/}
                {/*            <div className="sepPage">Results<Results/></div>*/}
                {/*        </Suspense>*/}
                {/*        <div className="sepPage">FavouritePage<Favourite/></div>*/}
                {/*    </Suspense>*/}
                {/*    <Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"/>}>*/}
                {/*        <div className="sepPage">DetailPage<FavDetail/></div>*/}
                {/*    </Suspense>*/}
                </div>
            </RecoilRoot>
        </div>
    )
}

export default App
