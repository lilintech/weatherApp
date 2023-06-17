import React from "react";
import "./home.css"
import In from "./components/In"
import Out from "./components/Out"

function Home () {
    return(
        <div className="main">
            <div className="in">
                <In></In>
            </div>
            <div className="out">
                <Out></Out>
            </div>
        </div>
    )
}

export default Home;
