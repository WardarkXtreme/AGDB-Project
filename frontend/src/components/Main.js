import React, {useEffect, useState} from 'react';
import video1920 from './assets/video/gitevideo1920hd.mp4';
import video720 from './assets/video/gitevideo720hd.mp4';

function Main() {
    const [winSize, setWinSize] = useState();
    
    useEffect(() => {
        setWinSize(window.innerWidth)
    },[])
    let size = winSize;
    console.log(size)
    return (
        <section className='header-vids'>
            <div className='titleGroupe'>
                <h1 className='titleName'>Au Gîte Du Bois</h1>
            </div>
            <div className='textPresentation'>
                <p className='tp'>Réservez vos vacances dans un gîte quatre étoiles</p>
                <p className='tp'>au coeur de nombreuses destinations touristiques.</p>
                <p className='tp'>Un lieu remplie de charme, calme et reposant.</p>
                <p className='tp'>Entre mer et verdure, les amateurs d'escapades bucoliques,</p>
                <p className='tp'>seront sensibles au style moderne et à l'ambiance conviviale revendiquée.</p>
            </div>
            <div className='moviePresentation'>
                {size > 600 ?
                    <video className='video' controls controlsList='nodownload' width='100%'>
                        <source src={video1920} type="video/mp4"/>
                    </video>
                :
                    <video className='video' controls controlsList='nodownload' width='100%'>
                        <source src={video720} type="video/mp4"/>
                    </video>
                }
            </div>
        </section>
    )
};

export default Main;