import React from 'react'
// import Preloader from './../../../../IT-KAMASUTRA/src/common/components/Preloader/Preloader';
import preloaderSVG from '../../../assets/svg/preolader.svg'

const Preloader = (props) => {
    return (
        <div className = 'Preloader flexible jCenter aCenter'>
            <img src={preloaderSVG} alt={preloaderSVG}/>
        </div>

    )

}
export default Preloader;