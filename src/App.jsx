import {useState, Suspense} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
import Sidebar from './sidebarPresenter.jsx'

export default function App() {

  //useEffect(lifeACB, [])

  return (
        <Sidebar className = "navBar"></Sidebar>
  );

  function lifeACB(){
      resolvePromise(firebaseModelPromise(myModel), promiseState)
      updateOnPromise(forceRerenderACB)
  }

  function updateOnPromise(rerender) {
      if (promiseState.promise) {
          promiseState.promise.then(rerender).catch(rerender)
          rerender()
      }
  }

  function forceRerenderACB(){
      rerender(new Object())
  }
}

/*
=======
import Test from "./testPresenter.jsx";
import {RecoilRoot} from "recoil";
import Home from './react/homePresenter.jsx'
import Favourite from './react/favouritePresenter.jsx'
import FavDetail from './react/FavDetailPresenter';

>>>>>>> 99512f54fe63a2c4bab3b2a962fa0fe6c80af680

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
*/