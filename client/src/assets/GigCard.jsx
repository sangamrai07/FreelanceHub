import React from 'react'
import './css/GigCard.scss'
import {Link} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../utils/newRequest';

function GigCard({ item }) {

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['gigOwner'],
    queryFn: () =>
       newRequest.get(`/users/${item.userID}`).then((res) => {
      return res.data;
      })
  });

    return (
      <Link to={ `/singleGig/${item._id}`} className='link'>
    <div className='gigCard'>
                <img src={item.coverImg} alt="X" />
                <div className="info">
                {isPending ? "Extracting" : error ? "Error Occured" : <div className="user">
                        <img src={data.image} alt="" />
                        <span>{ data.username}</span>
                    </div>}
                    <p>{item.desc}</p>
                    <div className="star">
                        <img src="" alt="X" />
                        <span>{!isNaN (item.ratingStars/item.starNumber) && Math.round(item.ratingStars/item.starNumber)}</span>
                    </div>
                </div>
                <div className="details">
                    <div className="price"> <span>Price:</span>
                    <h2>{ item.price}</h2></div>                 
                </div>
            </div>
            </Link>
  )
}

export default GigCard
