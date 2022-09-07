import React, { useContext } from 'react'
import NavNavbar from '../components/navbar'
import FavContext from "../context/FavContext";
import '../style/favmovie.css';
import { Button, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function FavMovie() {
  const {favMovie} = useContext(FavContext)
  const IMG_API = "https://image.tmdb.org/t/p/original/";
  console.log(favMovie)
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <div>
        <NavNavbar />
        <div className='body pb-5'>
          <h1>My Favorites</h1>
          <div className='body-card'>
            {favMovie.map((item) => (
              <div className='container-card'>
                <img className='image' src={IMG_API+item.item.poster_path} />
                <div >
                    <h6 className='titletext'>{item.item.title}</h6>
                </div>
              </div>
            ))}
          </div>
          <Container className='pt-5 d-flex justify-content-end'>
            <Button className='bg-secondary border-secondary' onClick={(value) => goBack(value)}>Go Back</Button>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default FavMovie;

