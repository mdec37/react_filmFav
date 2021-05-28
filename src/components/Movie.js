import React, {Component} from 'react';
import Poster from './Poster';
import './Movie.css';

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
          "expanded": false,
          "bookmark": false
        }
    }

    readMore = () => {
        this.setState({
            "expanded": true
        });
    };

    bookmarkIt = () => {
        this.setState({
            "bookmark": !this.state.bookmark
        });
    };
    
    render() {
        // On peut faire des constantes pour éviter de répéter this.props
        // const title = this.props.title;
        // const year = this.props.year;
        // const director = this.props.director;
        // const synopsis = this.props.synopsis;

        // Avec le système des objets destructurés, on peut faire la même chose en 1 ligne
        const {title, year, director, synopsis, posterUrl} = this.props;
        const {expanded, bookmark} = this.state;

        return (
            <div className={"movie" + (bookmark ? " bookmark" : "")} >
                <h2>{title} - {year}</h2>

                <Poster urls={posterUrl} />

                <p>Par le réalisateur : {director}</p>

                <p>
                    <strong>Synopsis : </strong>
                    {/* Condition pour synopsis en entier ou limité */}
                    {expanded ? synopsis : synopsis.substring(0, 50) + "..."}
                    {/* {expanded ? synopsis : synopsis.split(" ").slice(0, 20).join(" ") + "..."} */}
                </p>

                {
                    // Pour que ce soit si faux, afficher le bouton, on passe par un OU ||
                    expanded || 
                        <button onClick={this.readMore}>Plus d'info</button>
                }

                {/* Bouton favoris */}
                {/* <button onClick={this.bookmarkIt}>♥</button> */}
                {/* ou tout dans une fonction fléchée pour éviter de créer une fonction */}
                <button onClick={() => this.setState({"bookmark": !this.state.bookmark})}>♥</button>

            </div>
        )
    }
}

export default Movie;