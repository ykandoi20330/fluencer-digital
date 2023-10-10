import React from 'react'
import sand from "./images/Sandesh Foundation update-min.jpg"
import {
    Link,
} from "react-router-dom";

const Work3 = () => {
    return (
        <div className="first">
            <div className='work' id='div1' data-aos="slide-right">  {/*  {`${'hid'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef}*/}
                <img className='SlideImage' style={{ width: '100%' }} src={sand} alt="" />
            </div>
            <div className='work' id='div1' data-aos="slide-left">   {/*{`${'hid1 write container'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef} */}  {/*hid1 */}
                <h3 style={{ color: '#fff' }}>Sandesh Foundation<span style={{ color: 'orangered' }}>.</span></h3>
                <p className='p1' style={{ color: 'gray' }}>Sandesh Foundation is a not for profit organization registered under Indian Trust Act 1882 in Delhi (NCT), registered in 2014. 
              Sandesh Foundation also has 80G & 124 Certifications under Income Tax Act as well as registered for undertaking CSR Activities CSR 01 (MCA) and NITI Aayog Since last 8 years, 
              Sandesh Foundation is working on Education, Sanitation, Health & Nutrition, Women Empowerment, Relief Activities like Food and Cloths distribution to needed especially at the time of Disaster and Pandemic like Covid-19.!  </p><br />
                <p className='p1' style={{ color: 'gray' }}> And we are also working with different Govt. activities and schemes like Immunization, Polio, Vaccination, Legal Aid Health Camps and Health Checkups. 
              We are also working with Govt Schools for supporting disadvantaged community and supporting education Working with Apollo Tyres Foundation (CSR Project CMTN) Delhi! </p>
                <br />
                <Link className='workbtn' to="https://sandeshfoundation.in/">Visit Site</Link>
            </div>
        </div>
    )
}

export default Work3