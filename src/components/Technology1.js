import React from 'react'
import image1 from '../components/Frontend/HTML.png'
import image2 from '../components/Frontend/CSS.png'
import image3 from '../components/Frontend/JAVASCRIPT.png'
import image4 from '../components/Frontend/TYPESCRIPT.png'
import image5 from '../components/Frontend/BOOTSTRAP.png'
import image6 from '../components/Frontend/REACT JS.png'
import image7 from '../components/Frontend/ANGULAR JS.png'
import image8 from '../components/Frontend/VUE JS.png'

const Technology1 = () => {
  return (
        <div className="technology">
          <img className="" data-aos="slide-up" src={image1} alt="" />   {/*{`${'hid2'} ${myElementIsVisible? 'show': 'hid2'}`} ref={myRef}   */}
          <img className="" data-aos="slide-down" src={image2} alt="" />   {/* {`${'hid3'} ${myElementIsVisible? 'show': 'hid3'}`} ref={myRef}*/}
          <img className="" data-aos="slide-up" src={image3} alt="" />    {/* {`${'hid2'} ${myElementIsVisible? 'show': 'hid2'}`}   ref={myRef} */}
          <img className="" data-aos="slide-down" src={image4} alt="" />              {/* {`${'hid3'} ${myElementIsVisible? 'show': 'hid3'}`}   ref={myRef}*/}
          <img className="" data-aos="slide-up" src={image5} alt="" />    {/* {`${'hid2'} ${myElementIsVisible? 'show': 'hid2'}`}   ref={myRef}*/}
          <img className="" data-aos="slide-down" src={image6} alt="" />              {/* {`${'hid3'} ${myElementIsVisible? 'show': 'hid3'}`}  ref={myRef}*/}
          <img className="" data-aos="slide-up" src={image7} alt="" />                {/* {`${'hid2'} ${myElementIsVisible? 'show': 'hid2'}`}  ref={myRef}*/}
          <img className="" data-aos="slide-down" src={image8} alt="" />              {/*  {`${'hid3'} ${myElementIsVisible? 'show': 'hid3'}`}  ref={myRef}*/}
        </div>
    
  )
}

export default Technology1