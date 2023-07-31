import React from "react";
import {Outlet,} from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const SceletonPage = (props: any) => {
    return (
        <main className="main container">

            <Navbar/>

            <div className="main__inner _accent-bg">
               <Outlet/>
            </div>
        </main>
    )
}

export default SceletonPage