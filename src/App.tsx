import React, {Suspense, useEffect} from 'react';
import './css/style.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import HeaderContainerMemo from "./components/Header/HeaderContainer";
import Footer from "./components/Footer/Footer";
import SceletonPage from "./components/SceletonPage/SceletonPage";
import {compose} from 'redux';
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import Login from './components/Login/Login';
const MainPage = React.lazy(() => import('./components/MainPage/MainPage'));
const Create = React.lazy(() => import('./components/Create/Create'));
const RecommendationsContainer = React.lazy(() => import('./components/Recommendations/RecommendationsContainer'));

type PropsType = {
    initialized: boolean,
    initializeApp: () => void
}

const App: React.FC<PropsType> = ({initialized, initializeApp}) => {

    useEffect(() => {
        initializeApp();
    }, []);

    if (!initialized) {
        return <Preloader/>
    }

    return (
        <div className="app">
            <HeaderContainerMemo/>

            <Routes>
                <Route path="/login" element={(
                    <Suspense fallback={<Preloader/>}>
                        <Login/>
                    </Suspense>
                )}/>
                <Route path="/register" element={(
                    <Suspense fallback={<Preloader/>}>
                        <Create/>
                    </Suspense>
                )}/>

                <Route path="/" element={<SceletonPage/>}>
                    <Route index element={(
                        <Suspense fallback={<Preloader/>}>
                            <MainPage/>
                        </Suspense>
                    )}/>
                    <Route path="recommendations" element={(
                        <Suspense fallback={<Preloader/>}>
                            <RecommendationsContainer/>
                        </Suspense>
                    )}/>
                </Route>

                <Route path="*" element={<div><br/><br/><br/><br/><br/>404 NOT FOUND</div>}/>
            </Routes>

            <Footer/>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized,
})

let AppContainer = compose(
    connect(mapStateToProps, {initializeApp})(App)
)

const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp
