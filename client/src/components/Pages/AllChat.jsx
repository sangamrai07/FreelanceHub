import React from 'react'
import '../Css/AllChat.scss'
import { Link } from 'react-router-dom'

function AllChat() {
   const activeUser = {
    id: 7,
    username: "Ramesh",
    isSeller: false,
   };
   const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam,.`;
  return (
  
    <div className='allChat'>
      <div className="container">
        <div className="title">
          <h1>All Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Recent Message</th>
            <th>Date</th>
             <th>Action</th>
          </tr>
          <tr>
            <td>Ramesh</td>
            <td>  <Link to="/singleChat/123" className="link">
                {message.substring(0, 100)}...
              </Link>.</td>
            <td>1 day ago</td>
            <td><button>Mark As Read</button></td>
          </tr>
           <tr>
            <td>Ramesh</td>
            <td> <Link to="/singleChat/123" className="link">
                {message.substring(0, 100)}...
              </Link> </td>
            <td>1 day ago</td>
            <td><button>Mark as Read</button></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default AllChat
