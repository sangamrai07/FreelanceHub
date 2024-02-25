import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/MyGigs.scss'

function MyGigs() {
  return (
    <div className='myGigs'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to='/addGigs'>
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
             <th>Action</th>
          </tr>
          <tr>
            <td><img className='img' src="https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
            <td>Title 1</td>
            <td>$20</td>
            <td>5</td>
            <td><button>Delete</button></td>
          </tr>
           <tr>
            <td><img className='img' src="https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
            <td>Title 1</td>
            <td>$20</td>
            <td>5</td>
            <td><button>Delete</button></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs
