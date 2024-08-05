import React, { useEffect } from 'react'
import './styles/Parallax.css'
import stFigureA_L1 from '../../assets/images/hdrParallax_imgs/ST_tripp_figure-A-L1-RSCC.png'
import stFigureA_L4 from '../../assets/images/hdrParallax_imgs/ST_tripp_figure-A-L4-RSCC.png'
import stStar from '../../assets/images/hdrParallax_imgs/ST_star-RSCC.png'
import stPlanets_0C from '../../assets/images/hdrParallax_imgs/ST_planets_0C-RSCC.png'
import stPlanets_1D from '../../assets/images/hdrParallax_imgs/ST_planets_1D-RSCC.png'
import stLogo_PFG from '../../assets/images/hdrParallax_imgs/ST_logo-RSCC.png'
import stPlanets_2D from '../../assets/images/hdrParallax_imgs/ST_planets_2D-RSCC.png'
import stAsteroids from '../../assets/images/hdrParallax_imgs/ST_asteroids-RSCC.png'

const ForegroundFrame = () => {

    useEffect(() => {
        const parallaxTransform = () => {
            const scrollPosition = window.scrollY;
            // console.log('from parallaxtransform');
            // console.log(scrollPosition);

            document.getElementById('trippFigure').style.transform = `translate(0px, ${scrollPosition / 240}%)`;
            document.getElementById('star').style.transform = `translate(0px, ${scrollPosition / 30}%)`;
            document.getElementById('planetsG0').style.transform = `translate(${scrollPosition / 284}%, -${scrollPosition / 480}%)`;
            document.getElementById('planetsG1').style.transform = `translate(-${scrollPosition / 284}%, -${scrollPosition / 480}%)`;
            document.getElementById('trippLogo').style.transform = `translate(0px, -${scrollPosition / 960}%)`;
            document.getElementById('planetsG2').style.transform = `translate(0px, -${scrollPosition / 46}%)`;
            document.getElementById('asteroids3').style.transform = `translate(0px, -${scrollPosition / 13}%)`;

        };

        window.addEventListener('scroll', parallaxTransform);

        return() => {
            window.removeEventListener('scroll', parallaxTransform)
        }

    }, [])

  return (
    <div className='parallax-frame-holder-foreground' style={{overflowX: 'hidden', height: '8000px'}}>
        <div className='parallaxFrame figure-plx-frame'>
            <img src={stFigureA_L1} className='frameImage' alt='tripp_Figure' id='trippFigure' style={{transform: 'translate(0px, 0.833333%)'}}/>
            <img src={stFigureA_L4} className='frameImage frameImage-overlay' alt='tripp_Figure_Helmet' id='trippFigureHelmet' style={{transform: 'translate(0px, 0.833333%)'}}/>
        </div>
        <div className="parallaxFrame">
            <img src={stStar} className='frameImage' alt='star"' id='star' style={{transform: 'translate(0px, 6.66667%)'}}/>
        </div>
        <div className="parallaxFrame">
            <img src={stPlanets_0C} className='frameImage' alt='planetsG0' id='planetsG0' style={{transform: 'translate(0.704225%, -0.416667%)'}}/>
        </div>
        <div className="parallaxFrame">
            <img src={stPlanets_1D} className='frameImage' alt='planetsG1' id='planetsG1' style={{transform: 'translate(-0.704225%, -0.416667%)'}}/>
        </div>
        <div className="parallaxFrame">
            <img src={stLogo_PFG} className='frameImage' alt='trippLogo' id='trippLogo'/>
        </div>
        <div className="parallaxFrame">
            <img src={stPlanets_2D} className='frameImage' alt='planetsG2' id='planetsG2' style={{transform: 'translate(0px, -4.34783%)'}}/>
        </div>
        <div className="parallaxFrame">
            <img src={stAsteroids} className='frameImage' alt='asteroids3' id='asteroids3'/>
        </div>
    </div>
  )
 
}

export default ForegroundFrame