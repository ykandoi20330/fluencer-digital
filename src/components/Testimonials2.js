import React from 'react'
import quotePng from './quotes-3.png'
import image from '../components/Testimonial/Background-removebg-preview.png'
import image3 from '../components/Testimonial/AbabeelFounder-modified.png'

const Testimonials2 = () => {
    return (
        <div class="Testimonials card">  {/* key={item.id} */}
            <img className='quote' src={quotePng} alt="" />
            <img src={image3} class="card-img-top" alt=".." />  {/*{item.images} */}
            <div> 
                <img className='overlay-imgMain' id="customer-img" src={image} alt="" />
            </div>
            <div className="Testi card-body">
                <h5 class="Test-card-title" id="customer-name"><b>Mohammad S. Qureshi</b></h5>  {/*{item.name} */}
                <h5>(Founder and Director- Ababeel)</h5>  {/*{item.title} */}
                <p className='TestiPara' id="customer-text">Impressed with the website Fluencer Digital created for us. The team is truly exceptional, They transformed our vision into reality with their top-notch development.</p>  {/*{item.quote} */}
                <br/>
                <p class=""><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
    )
}

export default Testimonials2