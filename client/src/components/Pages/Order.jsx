import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Orders.scss'

function Order() {
    const activeUser = {
    id: 7,
    username: "Ramesh",
    isSeller: false,
  };

  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>My Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{activeUser?.isSeller? "Buyer": "Seller"}</th>
             <th>Contact</th>
          </tr>
          <tr>
            <td><img className='img' src="https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
            <td>Title 1</td>
            <td>$20</td>
            <td>Ramesh</td>
            <td><button>Chat</button></td>
          </tr>
           <tr>
            <td><img className='img' src="https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></td>
            <td>Title 1</td>
            <td>$20</td>
            <td>Ramesh</td>
            <td><button>Chat</button></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Order
