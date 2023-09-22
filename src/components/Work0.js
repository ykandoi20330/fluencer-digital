import React from 'react'
// import lady from './Garol Advisory.jpg'
import main from './AI5I4727 copy.jpg'
import {
  Link,
} from "react-router-dom";

const Work0 = () => {
  return (
    <div className="first">
      <div className='work' id='div1' data-aos="slide-right">  {/*  {`${'hid'} ${myElementIsVisible? 'show': 'hid'}`} ref={myRef}*/}
        <img className='SlideImage' style={{ width: '100%' }} src={main} alt="" />
      </div>
      <div className='work' id='div1' data-aos="slide-left">   {/*{`${'hid1 write container'} ${myElementIsVisible? 'show': 'hid1'}`} ref={myRef} */}  {/*hid1 */}
        <h3 style={{ color: '#fff' }}>Goral Advisory<span style={{ color: 'orangered' }}>.</span></h3>
        <p className='p1' style={{ color: 'gray' }}>
          Garol Advisory is a finance consulting platform.
          React was used for frontend with Vite to speed up deployment,Typescript was used to ensure bug free production,
          point buckets were used to store data, css animations were also incorporated.
        </p><br />
        <p className='p1' style={{ color: 'gray' }}>  Garol Advisory is a finance consulting platform.
          React was used for frontend with Vite to speed up deployment,Typescript was used to ensure bug free production,
          point buckets were used to store data, css animations were also incorporated!. </p>
        <br />
        <Link className='workbtn' to="/">Visit Site</Link>
      </div>
    </div>
  )
}

export default Work0