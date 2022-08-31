import React, { Component } from 'react'
import '../style/cards.css';

export default class Cards extends Component {
  render() {
    return (
      <div className='container'>
        <div className='container-card'>
            <img className='image' src={this.props.image} alt=''/>
            <div className='title'>
                <h4>{this.props.title}</h4>
            </div>
        </div>
      </div>
    )
  }
}
