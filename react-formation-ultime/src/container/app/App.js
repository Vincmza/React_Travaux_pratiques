//Libraries
import './App.css';
import React, {Component} from 'react';

//Components
import Student from '../../components/students/Student';

class App extends Component {

//State est un objet dans lequel on stocke des données pour les injecter dynamiquement

  state = {
    students : [
      {
        nom: 'Eva Dupont', 
        moyenne: 15, 
        citation: "J'aime les salsifis"
      },
      {
        nom: 'Jacques Chirac', 
        moyenne: 11,
        citation: null
      },
    ],
    maintenance : false
  }

//buttonClicked est un fonction fléchée executant du code permettant
//de modifier le nom du premier élève au clic sur le bouton associé
//l'attribut onClick plus bas est l'évènement associé au bouton affiché sur l'interface visuel

  buttonClicked = ()=>{
    const newState = [...this.state.students];
    newState[0].nom = 'Agnès Buzyn'
    this.setState({
      ...this.state,
      students: newState
    });
  }
//render nous permet de retourner nos composants à l'image de l'instruction Return au sein
//d'une fonction classique ou fléchée

  render(){
    return (
      <div className="App">
        <h1>Bienvenue dans la classe Terre !</h1>

        <button onClick={this.buttonClicked}>Renommer le premier élève</button>

        <Student 
        name={this.state.students[0].nom} 
        moyenne={this.state.students[0].moyenne}>
          {this.state.students[0].citation}
        </Student>

        <Student 
        name={this.state.students[1].nom} 
        moyenne={this.state.students[1].moyenne}>
        </Student>
      </div>
    );
  }
}
//Exportation de la class App dans notre index.js
//Le fichier index.js injecte ensuite les données dans le fichier HTML

export default App;
