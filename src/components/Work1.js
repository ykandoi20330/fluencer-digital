import React from 'react'
import Bike from "./images/Myple update-min.jpg"
import {
  Link,
} from "react-router-dom";

const Work1 = () => {
  return (
    <div className="first">
      <div className='work' id='div2' data-aos="slide-right">{/*{`${'hid'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef}  */}
        <img className='work1-img SlideImage' style={{
          width: '100%',
          position: 'relative'
        }} src={Bike} alt="" />
      </div>
      <div className='work' data-aos="slide-left" s id='div2'>
        <h3 style={{ color: '#fff' }}>Myple<span style={{ color: 'orangered' }}>.</span></h3>
        <p className='p1' style={{ color: 'gray' }}>  Choose any bike you like, Are you ready to hit the road and experience the thrill of a two-wheeled adventure? Look no further than Myple, the leading platform connecting Bike owners and passionate riders like you.
 Whether you're seeking an exhilarating escape, affordable bike rental in your city, or bike rental for tourists, we've got you covered.!</p><br />
        <p className='p1' style={{ color: 'gray' }}> Experience the joy of riding without the commitment of ownership. At Myple, we offer a vast selection of well-maintained bikes for rent, catering to riders of all skill levels. Whether you're seasoned enthusiast or a curious beginner, 
              our diverse range of bikes ensures you'll find the perfect ride for any occasion.! </p>
        <br />
        {/* <Link className='workbtn' to="/">Read More</Link> */}
      </div>

    </div>
  )
}

export default Work1