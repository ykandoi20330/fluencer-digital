import React from 'react'
import ken from "./images/Kanmart update-min.jpg"
import {
    Link,
} from "react-router-dom";

const Work4 = () => {
    return (
        <div className="first">
            <div className='work' id='div1' data-aos="slide-right">  {/*  {`${'hid'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef}*/}
                <img className='SlideImage' style={{ width: '100%' }} src={ken} alt="" />
            </div>
            <div className='work' id='div1' data-aos="slide-left">   {/*{`${'hid1 write container'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef} */}  {/*hid1 */}
                <h3 style={{ color: '#fff' }}>Kanmart(Refurbished india)<span style={{ color: 'orangered' }}>.</span></h3>
                <p className='p1' style={{ color: 'gray' }}>  As a e-commerce Brand, we are hopeful of making a big impact in the refurbished products market, starting off with smartphones and laptops as our star categories.
               we have all types of categories for our customers to buy anything from kanmart,we provides best products experience to customers, We will be adding new product segments in the future.! </p><br />
                <p className='p1' style={{ color: 'gray' }}> Customers can visit the e-store to buy refurbished products and accessories for their smartphones, laptos and other products as the brand has also launched a range of accessories from smartphone covers, Headphones, chairs, daily essentail and laptops , tablets etc.! </p>
                <br />
                {/* <Link className='workbtn' to="/">Read More</Link> */}
            </div>
        </div>
    )
}

export default Work4