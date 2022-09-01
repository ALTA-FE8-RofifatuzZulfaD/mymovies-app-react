import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { withRouter } from '../withRouter'
import '../style/detailpage.css';

class DetailPage extends Component {

    goBack() {
        this.props.navigate(-1);
    }

  render() {
    return (
      <div>
        <div className='header'>
            <h1>Movie Overview</h1>
        </div>
        <div className='content'>
            <div className='content-image'>
                <img src={this.props.location.state.image} />
            </div>
            <div className='content-overview'>
                <div className='movie-title'>
                    <h2>{this.props.location.state.title}</h2>
                    <p>Original Title : {this.props.location.state.original_title}</p>
                </div>
                <p>Release Date : {this.props.location.state.release_date}</p>
                <p>Rating : {this.props.location.state.rating}/10</p>
                <h5>Overview :</h5>
                <p>{this.props.location.state.description}</p>
                <Button onClick={(value) => this.goBack(value)}>Back to home</Button>
            </div>
        </div>
      </div>
    )
  }
}

export default withRouter(DetailPage);
