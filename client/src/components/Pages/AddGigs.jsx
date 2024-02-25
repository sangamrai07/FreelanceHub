import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/AddGigs.scss'

function AddGigs() {
  return (
    <div className='addGigs'>
      <div className="container">
        <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="">Category</label>
             <input type="text" placeholder="Category Name..." />
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea name="" id="" placeholder="Brief descriptions" cols="0" rows="16"></textarea>
            <button>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="Title.." />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" placeholder="Short description" cols="30" rows="10"></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" />
            <label htmlFor="">Price</label>
            <input type="number" />
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default AddGigs
