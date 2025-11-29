import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilities 
            buying and selling of products or services over the internet adipisicing
            as servies as Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Sed maxime blanditiis cupiditate animi debitis, nostrum quidem ipsa expedita,
             porro laborum exercitationem quo adipisci, quia incidunt recusandae voluptatum. 
        </p>
        <p>E-commerce typically dislay products and services
           detailed description, images, prices, and any available varaiety
           (e.g.,sizes,colors) 
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
