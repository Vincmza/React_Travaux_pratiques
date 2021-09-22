//Libraries
import React, {Component} from 'react';
import './Student.css';

//props est inhérent à Component qui met à disposition un
//objet des différentes propriétés déclarées dans App.js
//la propriété children fait directement référence à la citation 
//dans la déclaration du composant Student dans App.js

class Student extends Component {
    render(){
        return (
            <div className="student">
                <h1>{this.props.name}</h1>
                <p>Moyenne Scolaire : {this.props.moyenne}/20</p>
                <p>Age : {Math.floor(Math.random()*100)}</p>
                <i>{this.props.children}</i> 
            </div>
        );
    }
}

export default Student;