import React from 'react'
import { Button } from '../Button'
import './Hero.css'
function Hero() {
    return (
        <div className='hero-container'>
            <video className='hero-video' src='/videos/bg.mp4' autoPlay loop muted/>

            <div className="hero-content">
                <div className="hero-info">
                    <h1>FLY ME TO THE MOON</h1>
                    <p>What are you waiting for ?</p>
                </div>

                <div className="hero-btns">
                    <Button 
                        className='btn'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        GET STARTED
                    </Button>


                    <Button 
                        className='btn'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                    >
                        Watch Trailer
                    </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Hero
