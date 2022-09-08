import React, { useContext } from 'react';
import '../style/cards.css';
import { Button } from "react-bootstrap";
import { BsFillHeartFill, BsFillStarFill } from "react-icons/bs";

const Cards = ({image, title, rating, onClickDetail, onClickFav}) => {

  return (
    <div className='container'>
      <div className='container-card'>
          <img className='image' src={image} />
          <div >
              <h6 className='titletext'>{title}</h6>
          </div>
          <div className='button-rate'>
            <Button onClick={onClickDetail}>Info</Button>
            <div className='d-flex gap-3'>
              <p>{rating}/10</p>
            </div>
            <BsFillHeartFill type='button' className='fav' onClick={onClickFav}/>
          </div>
      </div>
    </div>
  )
}

export default Cards;
