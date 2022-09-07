import React, { useEffect, useState, useContext } from 'react'
import axios from "axios";
import NavNavbar from "../components/navbar";
import Cards from "../components/cards";
import { useLocation, useNavigate } from "react-router-dom";
import FavContext from "../context/FavContext";
import '../style/home.css';

const IMG_API = "https://image.tmdb.org/t/p/original/";
const movieApi = "https://api.themoviedb.org/3/movie/now_playing?api_key=6b9c2061fa118b2a8c8de24e04fa54f2&language=en-US&page=1";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {addFav} = useContext(FavContext);
  const [movie, setMovie] = useState([]);

  const getMovies = async () => {
    await axios
     .get (movieApi)
     .then((response) => {
      setMovie(response.data.results);
     })
  };

  const handleClickDetail = (item) => {
    navigate('/detail-page', {
      state: {
        image: IMG_API+item.poster_path,
        title: item.title,
        description: item.overview,
        realese_date: item.realese_date,
        rating: item.vote_average,
        original_title: item.original_title
      }
    });
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='page'>
        <NavNavbar />
        <div>
           <div className='list-movie'>
              {movie.map((item) => {
                return (
                  <Cards
                    image={IMG_API+item.poster_path}
                    title={item.title}
                    rating={item.vote_average}
                    onClickDetail={() => handleClickDetail(item)}
                    onClickFav={() => addFav(item)}
                  />
                )
              })}
           </div>
        </div>
    </div>
  )
}

export default Home;
