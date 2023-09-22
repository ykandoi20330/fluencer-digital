import React from 'react'
import Keith from "./Keithston main.jpg"
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
                <p className='p1' style={{ color: 'gray' }}> The website is well-designed and easy to navigate. The
                    homepage has a clear and concise call to action, inviting
                    visitors to learn more about the organization, It provides website owners and admins
                    with a simplified interface for inputting and organizing
                    their product related information. </p><br />
                <p className='p1' style={{ color: 'gray' }}> The website is mobile-friendly, so it can be easily
                    accessed on smartphones and tablets. This is important,
                    as more and more people are using their mobile devices! </p>
                <br />
                <Link className='workbtn' to="/">Visit Site</Link>
            </div>
        </div>
    )
}

export default Work5