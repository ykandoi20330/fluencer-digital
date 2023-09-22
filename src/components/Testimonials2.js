import React from 'react'
import quotePng from './quotes-3.png'
import image from '../components/Testimonial/Background-removebg-preview.png'
import image3 from '../components/Testimonial/Image 3.jpg'

const Testimonials2 = () => { {/*{item} */}
    return (
        <div class="Testimonials card">  {/* key={item.id} */}
            <img className='quote' src={quotePng} alt="" />
            <img src={image3} class="card-img-top" alt=".." />  {/*{item.images} */}
            <div> 
                <img className='overlay-imgMain' id="customer-img" src={image} alt="" />
            </div>
            <div className="Testi card-body">
                <h5 class="Test-card-title" id="customer-name">Aadam jons</h5>  {/*{item.name} */}
                <h5>(CTO Solutions)</h5>  {/*{item.title} */}
                <p class="card-text" id="customer-text"> This content is a little bit longer, This is a wider card with supporting text below as a natural lead-in to additional content.</p>  {/*{item.quote} */}
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
    )
}

export default Testimonials2