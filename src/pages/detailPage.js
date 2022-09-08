import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import '../style/detailpage.css';

const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div>
        <div className='header'>
            <h1>Movie Overview</h1>
        </div>
        <div className='content'>
            <div className='content-image'>
                <img src={location.state.image} />
            </div>
            <div className='content-overview'>
                <div className='movie-title'>
                    <h2>{location.state.title}</h2>
                    <p>Original Title : {location.state.original_title}</p>
                </div>
                <p>Release Date : {location.state.release_date}</p>
                <p>Rating : {location.state.rating}/10</p>
                <h5>Overview :</h5>
                <p>{location.state.description}</p>
                <Button onClick={(value) => goBack(value)}>Back to home</Button>
            </div>
        </div>
      </div>
  )
}

export default DetailPage;
