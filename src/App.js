import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Cards from "./components/cards";
import { Component } from 'react';

export default class App extends Component {
  
  
  
  render() {
    const listMovie = [
      {
        image: "https://image.tmdb.org/t/p/original/yCyv9inVfwdZa0DyFAEEElqNgNn.jpg",
        title: "Harry Potter And The Sorcerer's Stone"
      },  
      {
        image: "https://image.tmdb.org/t/p/original/303T1dizM8Hgdh8zwPDIjsMp7d4.jpg",
        title: "Harry Potter And The Chamber of Secret"
      },
      {
        image: "https://image.tmdb.org/t/p/original/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
        title: "Harry Potter And The Prisoner of Azkaban"
      },
      {
        image: "https://image.tmdb.org/t/p/original/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
        title: "Harry Potter And The Goblet of Fire"
      },
      {
        image: "https://image.tmdb.org/t/p/original/g6n8G0xPnBVUIKKK41sNmbZB5h4.jpg",
        title: "Harry Potter And The Order Of The Phoenix"
      },
      {
        image: "https://i.pinimg.com/originals/2f/bb/34/2fbb34efd8790e9f9a5e01e8ae2834e1.jpg",
        title: "Harry Potter And The Half-Blood Prince"
      },
      {
        image: "https://image.tmdb.org/t/p/original/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
        title: "Harry Potter And The Deathly Hallows Part 1"
      },
      {
        image: "https://image.tmdb.org/t/p/original/c54HpQmuwXjHq2C9wmoACjxoom3.jpg",
        title: "Harry Potter And The Deathly Hallows Part 2"
      }
    ]
    return (
      <div className="App">
        <Navbar />
        <div >
          <div className='container'>
            {listMovie.map((item) => {
              return (<Cards image={item.image} title={item.title} />);
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
