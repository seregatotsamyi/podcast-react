import React, {useEffect} from 'react';
import './css/style.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import HeaderContainer from "./components/Header/HeaderContainer";
import Footer from "./components/Footer/Footer";
import Login from './components/Login/Login';
import Create from "./components/Create/Create";
import SceletonPage from "./components/SceletonPage/SceletonPage";
import MainPage from "./components/MainPage/MainPage";
import RecommendationsContainer from './components/Recommendations/RecommendationsContainer';
import {compose} from 'redux';
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";


type PropsType ={
    initialized: boolean,
    initializeApp: () => void
}

const App:React.FC<PropsType> =({initialized,initializeApp}) => {

    useEffect(() => {
        initializeApp();
    });

    if (!initialized) {
        return <Preloader/>
    }

    return (
        <div className="app">
            <HeaderContainer/>

            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Create/>}/>

                <Route path="/" element={<SceletonPage/>}>
                    <Route index element={<MainPage/>}/>
                    <Route path="recommendations" element={<RecommendationsContainer/>}/>
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
