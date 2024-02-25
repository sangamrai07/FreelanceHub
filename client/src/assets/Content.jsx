import React from 'react'
import './css/Content.scss'
import contentImg from './clothes.png'

function Content() {
  return (
    <div>
       <div className="row">
          <div className="col-2">
            <h1>
              Connect, Create, <span>Succeed!</span><br />Your Freelance Journey Starts Here.
            </h1>
            <p>
              Experience freelance freedom like never before, with our platform connecting you to projects that match your expertise and passion. Join a dynamic community of freelancers and clients, where collaboration thrives, and every project is an opportunity for growth.
            </p>
            <a href="" className="btn">Explore More &#8594;</a>
          </div>
          <div className="col-2">
            <img src={contentImg} alt="Image" />
          </div>
        </div>
    </div>
  )
}

export default Content
