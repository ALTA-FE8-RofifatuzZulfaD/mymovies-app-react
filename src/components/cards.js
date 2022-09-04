import React from 'react';
import '../style/cards.css';
import { Button } from "react-bootstrap";

const Cards = (props) => {
  return (
    <div className='container'>
      <div className='container-card'>
          <img className='image' src={props.image} />
          <div >
              <h6 className='titletext'>{props.title}</h6>
          </div>
          <div className='button-rate'>
            <Button onClick={props.onClick}>Info</Button>
            <p>{props.rating}/10</p>
          </div>
      </div>
    </div>
  )
}

export default Cards;
