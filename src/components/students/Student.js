//Libraries
import React, {useEffect} from 'react';
import './Student.css';

function Student(props){

    //componentDidMount
    useEffect(()=>{
        console.log('[Student.js] componentDidMount')
    },[]);

    //componentDidUpdate
    useEffect(()=>{
        console.log('[Student.js] componentDidUpdate')
    },[]);

    //componentWillUnmount
    useEffect(()=>{
        return()=>{
            console.log('[Student.js] componentWillUnmount')
        }
    },[]);

    //Limiteur
    useEffect(()=>{
        return()=>{
            console.log('[Student.js] le nom a bien été modifié')
        }    
    },[props.name]);


    return (
        <div className="student">
            <h1 onClick={props.clic}>{props.name}</h1>
            <p>Moyenne Scolaire : {props.moyenne}/20</p>
            <p>Age : {Math.floor(Math.random()*100)}</p>
            <i>{props.children}</i> 
        </div>
    );
}

export default Student;