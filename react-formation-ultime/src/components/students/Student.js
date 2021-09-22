//Libraries
import React, {Component} from 'react';
import './Student.css';

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