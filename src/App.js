import React, {Component} from 'react';
import Movie from './components/Movie';
import Search from './components/Search';
import films from './data/movieData';
import './App.css';

class App extends Component {
  render() { 
    return (
      <div className="App">
        {/* <Movie  title={films[0].title} 
                director={films[0].director} 
                year={films[0].year}
                synopsis={films[0].synopsis}
        /> */}
        
        {/* Autre façon d'afficher avec le spread operator */}
        {/* <Movie {...films[1]} /> */}

        {/* Pour éviter de devoir répéter chaque éléments, on peut faire une constante pour y entrer pour utiliser la fonction map pour faire une boucle avec la première façon d'afficher avec chaque props*/}
        {/* {
          films.map(f =>
            <Movie
                title={f.title}
                director={f.director}
                year={f.year}
                synopsis={f.synopsis}
            />
        )} */}

        {/* Avec l'affichage du spead operator */}
        <h1>Some movies you must watch !</h1>

        <div className="search-form">
            <Search 
              onSubmit={event => {
                event.preventDefault();
              }}
            />
        </div>

        <div className="movie-list">
            {
                films.map((film) => <Movie key={film.title} {...film} />)
            }
        </div>

      </div>
    );
  }
}

export default App;
