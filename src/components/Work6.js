import React from 'react'
import JIT from "./images/JIT update-min.png"
import {
    Link,
} from "react-router-dom";

const Work6 = () => {
    return (
        <div className="first">
            <div className='work' id='div1' data-aos="slide-right">  {/*  {`${'hid'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef}*/}
                <img className='SlideImage' style={{ width: '100%' }} src={JIT} alt="" />
            </div>
            <div className='work' id='div1' data-aos="slide-left">   {/*{`${'hid1 write container'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef} */}  {/*hid1 */}
                <h3 style={{ color: '#fff' }}>Jaipur Institute of Technology<span style={{ color: 'orangered' }}>.</span></h3>
                <p className='p1' style={{ color: 'gray' }}>  Our website for Jaipur Institute of Technology boasts a
                    modern design that prioritizes user-friendliness,
                    ensuring a seamless browsing experience
                    It serves as an engagement hub with features like
                    virtual campus tours, event calendars, and news
                    updates, keeping stakeholders informed and engaged. </p><br />
                <p className='p1' style={{ color: 'gray' }}>  The website is fully responsive and accessible across
                    devices, including mobile phones, tablets, and
                    desktops </p>
                <br />
                <Link className='workbtn' to="https://jitjaipur.onrender.com/">Visit Site</Link>
            </div>
        </div>
    )
}

export default Work6