import React from 'react'
//database images
import mg1 from '../components/Database/FIREBASE.png'
import mg2 from '../components/Database/GRAPH QL.png'
import mg3 from '../components/Database/MONGO DB.png'
import mg4 from '../components/Database/MY SQL.png'
import mg5 from '../components/Database/POSTGRE SQL.png'

const Technology3 = () => {
  return (
        <div className="technology"  > 
          <img className='' data-aos="slide-up" src={mg1} alt="" />
          <img className='' data-aos="slide-down" src={mg2} alt="" />
          <img className='' data-aos="slide-up" src={mg3} alt="" />
          <img className='' data-aos="slide-down" src={mg4} alt="" />
          <img className='' data-aos="slide-up" src={mg5} alt="" />
        </div>
  )
}

export default Technology3