import React from 'react';
import preloaderSVG from "../../../assets/svg/preolader.svg"

const Preloader = (props) => {
    return (
        <div className="Preloader flexible jCenter aCenter">
            <img src={preloaderSVG} alt={preloaderSVG}/>
        </div>
        // <img src="../../../assets/svg/preolader.svg" alt=""/>
    )
}

export default Preloader;

