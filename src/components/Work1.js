import React from 'react'
import Bike from "./Myple.jpg"
import {
  Link,
} from "react-router-dom";

const Work1 = () => {
  return (
    <div className="first">
      <div className='work' id='div2' data-aos="slide-right">{/*{`${'hid'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef}  */}
        <img className='work1-img SlideImage' style={{
          width: '100%',
          height: '70vh',
          // left: '-445px',
          position: 'relative'
        }} src={Bike} alt="" />
      </div>
      <div className='work' data-aos="slide-left" s id='div2'>
        <h3 style={{ color: '#fff' }}>Myple<span style={{ color: 'orangered' }}>.</span></h3>
        <p className='p1' style={{ color: 'gray' }}>  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consectetur consequatur, libero nobis assumenda debitis laudantium corrupti veniam dignissimos rerum dolorum.
          Atque iure blanditiis odio ipsum nisi natus consectetur, sunt debitis!</p><br />
        <p className='p1' style={{ color: 'gray' }}>  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consectetur consequatur, libero nobis assumenda debitis laudantium corrupti veniam dignissimos rerum dolorum.
          Atque iure blanditiis odio ipsum nisi natus consectetur, sunt debitis! </p>
        <br />
        <Link className='workbtn' to="/">Visit Site</Link>
      </div>

    </div>
  )
}

export default Work1