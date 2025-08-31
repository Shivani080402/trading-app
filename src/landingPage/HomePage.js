import React from "react";
import '../landingPage/SideNavbar.css';
import UpperHome from "./UpperHome";
import LatestPost from "./LatestPost";

function HomePage() {
    return ( 
       <div>
            <UpperHome />
            <LatestPost />
        </div>
           
     );
}

export default HomePage;