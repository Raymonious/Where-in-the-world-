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
<<<<<<< HEAD

=======
    // const [count, setCount] = useState(0)
>>>>>>> 74e48caa673f9c5a57d4a7bc569cc92487781b64

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
<<<<<<< HEAD
        
=======


            {/*<div>*/}
            {/*    <a href="https://vitejs.dev" target="_blank">*/}
            {/*        <img src={viteLogo} className="logo" alt="Vite logo"/>*/}
            {/*    </a>*/}
            {/*    <a href="https://reactjs.org" target="_blank">*/}
            {/*        <img src={reactLogo} className="logo react" alt="React logo"/>*/}
            {/*    </a>*/}
            {/*</div>*/}
            {/*<h1>Vite + React</h1>*/}
            {/*<div className="card">*/}
            {/*    <button onClick={() => setCount((count) => count + 1)}>*/}
            {/*        count is {count}*/}
            {/*    </button>*/}
            {/*    <p>*/}
            {/*        Edit <code>src/App.jsx</code> and save to test HMR*/}
            {/*    </p>*/}
            {/*</div>*/}
            {/*<p className="read-the-docs">*/}
            {/*    Click on the Vite and React logos to learn more*/}
            {/*</p>*/}
>>>>>>> 74e48caa673f9c5a57d4a7bc569cc92487781b64
        </div>
    )
}

export default App
*/