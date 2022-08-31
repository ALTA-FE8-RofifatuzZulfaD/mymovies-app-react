import logo from './logo.svg';
import './App.css';
import NavNavbar from "./components/navbar";
import Cards from "./components/cards";
import { Component } from 'react';
import axios from "axios";

// const baseUrl = "https://api.themoviedb.org/3/movie/";
// const urlHeadline = 
//     baseUrl + "now_playing?" + `apiKey=${process.env.REACT_APP_API_KEY}` + "&language=en-US&page=1";
const IMG_API = "https://image.tmdb.org/t/p/original/";

export default class App extends Component {
  
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

  render() {
    const { listMovie } = this.state;
    return (
      <div className="App">
        <NavNavbar className="navbar" />
        <div >
          <div className='container'>
            {listMovie.map((item) => {
              return (<Cards image= {IMG_API+item.poster_path} title={item.title} />);
            })}
          </div>
        </div>
      </div>
    )
  }
}

// function App() {
//   
//   return (
    
//     
//   );
// }

// export default App;
