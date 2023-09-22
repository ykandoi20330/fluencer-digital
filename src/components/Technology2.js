import React from 'react'
//backend images
import img1 from '../components/Backend/DJANGO.png'
import img2 from '../components/Backend/express.png'
import img3 from '../components/Backend/flask.png'
import img4 from '../components/Backend/NODE JS.png'

const Technology2 = () => {
  return (
        <div className="technology"  >
          <img className='' data-aos="slide-up" src={img1} alt="" />
          <img className='' data-aos="slide-down" src={img2} alt="" />
          <img className='' data-aos="slide-up" src={img3} alt="" />
          <img className='' data-aos="slide-down" src={img4} alt="" />
        </div> 
  )
}

export default Technology2