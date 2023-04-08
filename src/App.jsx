import {useState, Suspense} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from "./testPresenter.jsx";
import {RecoilRoot} from "recoil";
import Home from './react/homePresenter.jsx'
import Favourite from './react/favouritePresenter.jsx'
import FavDetail from './react/FavDetailPresenter';


function App() {


    return (
        <div>
            <RecoilRoot>
                <Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"/>}>
                    <div className="flexParent">
                    <div className="sepPage">HomePage<Home/></div>
                    <div className="sepPage">FavouritePage<Favourite /></div>
                    <div className="sepPage">DetailPage<FavDetail /></div>
                    </div>
                </Suspense>
            </RecoilRoot>
        
        </div>
    )
}

export default App
