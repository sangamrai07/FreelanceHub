import React from 'react';
import "./css/Card.scss";
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <Link to='/gigs?category=e1'>
            <div className='card'>
                <img src={props.card.img} alt="" />
                <span className='description'>{props.card.desc}</span>
                <span className='title'>{props.card.title}</span>
            </div>
        </Link>
    );
}

export default Card;


