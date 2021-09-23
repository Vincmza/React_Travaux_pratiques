//Libraries
import './App.css';
import React, {useEffect, useState} from 'react';

//Components
import Student from '../../components/students/Student';

function App(){

//State

  const [students, setStudents]=useState([
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
    {maintenance: false}
  ]);

//Etats

  useEffect(()=>{
    
  });

//Fonctions

  const buttonClicked = newName =>{
    const newStudent = [...students];
    newStudent[0].nom = newName;
    setStudents(newStudent); 
    };

//JSX

  return (
    <div className="App">
      <h1>Bienvenue dans la classe Terre !</h1>

      {/*onClick est l'attribut dans la balise bouton qui déclenche l'execution du code 
      contenu dans la fonction fléchée buttonClicked*/}

      <button onClick={buttonClicked.bind(this, "Jeanne d'Arc")}>Renommer le premier élève</button>

      <Student 
        name={students[0].nom} 
        moyenne={students[0].moyenne}
        clic={()=>buttonClicked('Ken le survivant')}
      >
        {students[0].citation}
        
      </Student>

      <Student 
        name={students[1].nom} 
        moyenne={students[1].moyenne}
        clic={()=>buttonClicked('Jean Marie Le Pen')}
      >
      </Student>
    </div>
  );
}
//Exportation de la class App dans notre index.js
//Le fichier index.js injecte ensuite les données dans le fichier HTML

export default App;
