import React from 'react'
import './css/SingleGig.scss'
import myImg from './clothes.png'
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import newRequest from '../utils/newRequest';

function SingleGig() {

    const { id } = useParams();

    const { isPending, error, data } = useQuery({
        queryKey: ['singleGig'],
        queryFn: () =>
            newRequest.get(`/gigs/singleGig/${id}`).then((res) => {
                return res.data;
            })
    });

     const userID = data?.userID;

    const { isPending: isPendingUser, error: errorUser, data: dataUser } = useQuery({
        queryKey: ['user'],
        queryFn: () =>
           newRequest.get(`/users/${userID}`).then((res) => {
                return res.data;
           }),
        enabled: !!userID
    })


    return (
        <div className='singleGig'>
            {isPending ? "Loading" : error ? "Error Occured." : <div className="container">
                <div className="left">
                    <span className="catName"> Category : {data.category}</span>
                    <h1>{data.title}</h1>
                    {isPendingUser ? "Loading" : errorUser ? "Error Occured." :
                        <div className="user">
                            <img className='prf' src={dataUser.image} alt="" />
                            <span>{dataUser.username}</span>
                            {!isNaN(data.ratingStars / data.starNumber) &&
                                <div className="stars">
                                    {Array(Math.round(data.ratingStars / data.starNumber)).fill().map((item, i) => (
                                        <img src={myImg} alt="" key={i} />
                                    ))}
                                    <span>{Math.round(data.ratingStars / data.starNumber)}</span>
                                </div>}
                        </div>}
                    <div className="CoverImg">
                         <img src={data.coverImg} alt="Cover" />
                    </div>
                    <h2>Description</h2>
                    <p>{data.description}</p>
                    {isPendingUser ? "Loading" : errorUser ? "Error Occured." :
                        <div className="seller">
                            <h2>About the Seller</h2>
                            <div className="user">
                                <img className='prf' src={dataUser.image} alt="X" />
                                <div className="info">
                                    <span>{dataUser.username}</span>
                                    {!isNaN(data.ratingStars / data.starNumber) && <div className="stars">
                                        {Array(Math.round(data.ratingStars / data.starNumber)).fill().map((item, i) => (
                                            <img src={myImg} alt="" key={i} />
                                        ))}
                                        <span> {Math.round(data.ratingStars / data.starNumber)}</span>
                                    </div>}
                                    <button>Contact Me</button>
                                </div>
                            </div>
                        </div>}
                    <div className="reviews">
                        <h2>Reviews</h2>
                        <div className="item">
                            <div className="user">
                                <img className='prf' src="https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                                <div className="info">
                                    <span>Ramesh</span>
                                </div>
                            </div>
                        </div>
                        {!isNaN(data.ratingStars / data.starNumber) && <div className="stars">
                            <img src={myImg} alt="" className='revStars' />
                            <img src={myImg} alt="" className='revStars' />
                            <img src={myImg} alt="" className='revStars' />
                            <span className='revStarCount'>{Math.round(data.ratingStars / data.starNumber)}</span>
                        </div>}
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae doloribus laudantium expedita alias numquam enim consequuntur distinctio vel tempora consequatur.</p>
                    </div>
                </div>
                <div className="shortTitle">
                    <div className="price">
                        <h3>{data.serviceTitle}</h3>
                        <h3>$ {data.price}</h3>
                    </div>
                    <p>{data.shortDesc}</p>
                    <br />
                    <button>Order</button>
                </div>
            </div>}
        </div>

    )
}

export default SingleGig;

