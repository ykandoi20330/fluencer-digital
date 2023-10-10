import React from 'react'
import Keith from "./images/Keithston update-min.jpg"
import {
    Link,
} from "react-router-dom";

const Work5 = () => {
    return (
        <div className="first">
            <div className='work' id='div1' data-aos="slide-right">  {/*  {`${'hid'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef}*/}
                <img className='SlideImage' style={{ width: '100%' }} src={Keith} alt="" />
            </div>
            <div className='work' id='div1' data-aos="slide-left">   {/*{`${'hid1 write container'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef} */}  {/*hid1 */}
                <h3 style={{ color: '#fff' }}>Keithston<span style={{ color: 'orangered' }}>.</span></h3>
                <p className='p1' style={{ color: 'gray' }}> We champion continual progress for athletes and sport by taking action to help athletes reach their potential. Every job at Keithston, Inc. is grounded in a team-first mindset,
               cultivating a culture of innovation and a shared purpose to leave an enduring impact.s!</p><br />
                <p className='p1' style={{ color: 'gray' }}> At Keithston we craft shoes with care for everyone- men, women and kids, with an equal attention to detail, letting each shoe speak for itself. 
              The world-class quality, trendy designs and affordable prices have captured the imagination of millions of people, across the country- making Keithston, an aspirational brand especially for - young adults, everyday performers and fashionistas.! </p>
                <br />
                {/* <Link className='workbtn' to="/">Read More</Link> */}
            </div>
        </div>
    )
}

export default Work5