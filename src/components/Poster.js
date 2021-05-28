import React, {Component} from 'react';
import './Poster.css';

/*
    PROPS OU STATE OU PROPRIETES
    1) Est-ce que ma variable doit être défini par le composant parent ? Oui -> props
    2) Sinon, est-ce que ma variable à un impact direct ou indirect sur le rendu ? Oui -> state
    3) Sinon, si c'est aucun de ces 2 cas -> propriété classique
 */


class Poster extends Component {
    // On reprend le constructeur parent en lui refaisant passer les props en paramètres
    constructor(props) {
        super(props);
        this.state = {
            "size": 450,
            "index": 0
        }
    }

    // Mettre les évenements en fonction fléchés pour le scope
    posterClick = () => {
        this.setState({
            "size": this.state.size + 10
        });
    };

    posterEnter = () => {
        this.setState({
            "size": this.state.size + 30
        });
    };

    posterLeave = () => {
        this.setState({
            "size": 450
        });
    };


    /*posterPrev = () => {
        const length = this.props.urls.length;
        // if(this.state.index <= length - 1 && this.state.index > 0){
        //     this.setState({
        //         "index": this.state.index - 1
        //     });
        // }

        // OU BOUCLE
        this.setState({
            "index": this.state.index - 1
        });
        if(this.state.index === 0){
            this.setState({
                "index" : length - 1
            });
        }
    }*/
    
    /* posterNext = () => {
    //     const length = this.props.urls.length;
    //     // if(this.state.index < length - 1){
    //     //     this.setState({
    //     //         "index": this.state.index + 1
    //     //     });
    //     // }

    //     // OU BOUCLE
    //     this.setState({
    //         "index": this.state.index + 1
    //     });
    //     if(this.state.index === length -1){
    //         this.setState({
    //             "index" : 0
    //         });
           } */

    //     // OU MODULO
    //     // On peut se servir du modulo pour faire en sorte que ça ne dépasse pas la longueur du modulo donné (length)
    //     // "index": (this.state.index + 1) % this.props.urls.length
    // }

    // Pour regrouper Prev et Next en UNE fonction : on peut utiliser hasOwnProperty et un paramètre pour savoir si on se trouve dans l'intervalle
    // Et ajouter une fonction fléchée avec le paramètre qui change, dans les onClick des 2 boutons
    changeFrame = imgIndex => {
        // Pour destructurer :
        const {urls} = this.props;
        const {index} = this.state;

        if (urls.hasOwnProperty(index + imgIndex)) {
            this.setState({
                "index": index + imgIndex
            });
        }
    };


    // cycle de vie du composant
    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


    render() {

        return (
        <div className="poster">
            {/* Afficher le bouton selon si l'index est utilisable */}
            {/* Faire la condition && pour afficher le bouton si vrai */}
            {
                this.state.index > 0 &&
                    <button onClick={() => this.changeFrame(-1)}>&lt;</button>
            }

            {/* <button onClick={this.posterPrev}>&lt;</button> */}

            {/* OU Fonction fléchée avec le paramètre qui change 1 ou -1 */}
            {/* <button onClick={() => this.changeFrame(-1)}>&lt;</button> */}

            <img    className="poster-img"
                // Faire varier l'index pour changer les images
                    src={this.props.urls[this.state.index]}
                    alt="Image de film"
                    style={{"maxWidth": this.state.size}}
                    onClick={this.posterClick}
                    onMouseEnter={this.posterEnter} onMouseLeave={this.posterLeave}
            />

            {
                this.state.index < this.props.urls.length - 1 &&
                    <button onClick={() => this.changeFrame(1)}>&gt;</button>
            }

            {/* <button onClick={this.posterNext}>&gt;</button> */}

            {/* <button onClick={() => this.changeFrame(1)}>&gt;</button> */}
        </div>
        )
    }
}

export default Poster;