import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const {name, age, country, salary, image} = props.playerDetail;
    //console.log(name,salary);
    return (
        <div className="player-card">
            <div className="player-pic">
                <img src={image} alt=""/>
            </div>
            <div className="player-info">
                <h4>{name}</h4>
                <p>Age: {age}</p>
                <p>Country: {country}</p>
                <p>Salary: $ {salary}</p>
                <button onClick={()=> props.handleAddPlayer(props.playerDetail)} className="btn btn-success"> <FontAwesomeIcon icon={faPlus} /> Add</button>
            </div>
        </div>
    );
};

export default Player;