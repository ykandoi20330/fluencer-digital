import React, { useState} from 'react'
import BGvideo from './BGVideo.mp4'
// import Logo from './Logo.png'
import Arrow from './icons8-down-arrow-100.png'
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';


const Home = () => {

    return (
        <>
            <div className="hero" id="home">
                <div className="contain">
                    <video className='back-video' autoPlay loop muted playsInline>
                        <source src={BGvideo} type='video/mp4' />
                    </video>
                    <div className="overlay">
                    </div>
                    <div className="overlay2">
                    </div>
                </div>

                <div className="content container" style={{ marginTop: '47px' }}>
                    {/* <span>WE CREATE</span><br /> */}
                    <h5>STRATEGIC WEB EXPERIENCES</h5>
                    <h1>
                        <TypeAnimation className='typeAnimation'
                            sequence={[
                                'WEBSITE DEVELOPMENT', // Types 'One'
                                1000, // Waits 1s
                                'SOFTWARE DEVELOPMENT', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                            ]}
                            wrapper="span"
                            cursor={false}
                        // repeat={Infinity}
                        />
                    </h1>
                    <h4>DRIVING <b>GROWTH</b> & <b>REVENUE</b></h4>
                    <h4>FOR YOUR BUSINESS<span className='dot' style={{ color: 'orangered', fontSize: '50px' }}>.</span></h4>
                    <Link to="/mainContact">Let's Build</Link>
                </div>
                <div>
                    <a href='#'><img className='arrow' src={Arrow} style={{ width: '60px', position: 'relative', bottom: '-300px' }} alt="" /></a>
                </div>
            </div>
        </>
    )
}

export default Home