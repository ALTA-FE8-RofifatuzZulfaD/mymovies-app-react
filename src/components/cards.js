import React, { Component } from 'react'
import '../style/cards.css';
import { Button } from "react-bootstrap";

export default class Cards extends Component {
  render() {
    return (
      <div className='container'>
        <div className='container-card'>
            <img className='image' src={this.props.image} />
            <div >
                <h6 className='titletext'>{this.props.title}</h6>
            </div>
            <div className='button-rate'>
              <Button onClick={this.props.onClick}>Info</Button>
              <p>{this.props.rating}/10</p>
            </div>
        </div>
      </div>
    )
  }
}
