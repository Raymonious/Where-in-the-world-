import {useState, Suspense} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from "./testPresenter.jsx";
import {RecoilRoot} from "recoil";
import Home from './react/homePresenter.jsx'
import Favourite from './react/favouritePresenter.jsx'
import FavDetail from './react/FavDetailPresenter';
import Results from './react/resultsPresenter';


function App() {


    return (
        <div>
            <RecoilRoot>
               
                    <div className="flexParent">
                    <Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"/>}>
                    <div className="sepPage">Results<Results/></div>
                    </Suspense>

                    <div className="sepPage">HomePage<Home/></div>
                    <Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"/>}>
                    <div className="sepPage">FavouritePage<Favourite /></div>
                    </Suspense>
                    <Suspense fallback={<img src="http://www.csc.kth.se/~cristi/loading.gif"/>}>
                    <div className="sepPage">DetailPage<FavDetail /></div>
                    </Suspense>
                    </div>
            </RecoilRoot>
        
        </div>
    )
}

export default App
