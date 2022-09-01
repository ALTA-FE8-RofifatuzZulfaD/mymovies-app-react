import React, { Component } from 'react'
import axios from 'axios';
import NavNavbar from "../components/navbar";
import Cards from "../components/cards";
import { withRouter } from '../withRouter';
import { Container, Row, Col } from "react-bootstrap";
import '../style/home.css';

const IMG_API = "https://image.tmdb.org/t/p/original/";

class Home extends Component {
  
  state = {
    listMovie: [],
  };

  componentDidMount () {
    const self = this;
    axios
        .get('https://api.themoviedb.org/3/movie/now_playing?api_key=6b9c2061fa118b2a8c8de24e04fa54f2&language=en-US&page=1')
        .then(function (response) {
            self.setState({
                listMovie: response.data.results,
            });
        })
        .catch(function (error) {
            alert(error);
        });
  }

  handleDetailPage (item) {
    this.props.navigate("/detail-page", {
        state: {
            image: IMG_API+item.poster_path,
            title: item.title,
            description: item.overview,
            release_date: item.release_date,
            rating: item.vote_average,
            original_title: item.original_title,
        },
    });
  }
  
  render() {
    const {listMovie} = this.state;
    return (
      <div className='page'>
        <NavNavbar />
        <div>
           <div className='list-movie'>
                {listMovie.map((item) => {
                    return (<Cards 
                    image= {IMG_API+item.poster_path} 
                    title={item.title} 
                    rating={item.vote_average}
                    onClick={() => this.handleDetailPage(item)}
                    />);
                })}
           </div>
        </div>
      </div>
    )
  }
}

export default withRouter (Home);
