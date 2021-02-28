import React from 'react';
import data from '../../Data/teamData.json';
import {useState, useEffect} from 'react';
import './PlayerBoard.css';
import AddPlayer from '../AddPlayer/AddPlayer';
import Player from '../Player/Player';

const PlayerBoard = () => {
    const [teamData, setTeamData] = useState([]);
    useEffect(()=>{ 
        setTeamData(data);
        //console.log(data);
  },[])
  //console.log(teamData);
    return (
        <div className="playerBoard-container">
            <div className="player-container">
                <h1>For Players</h1>
                <h2>Total Players: {teamData.length}</h2>
                {
                teamData.map(td =>
                    <img src={td.image} alt=""/>
                )
                }
                <Player></Player>
            </div>

            <div className="AddPlayer-container">
                <h1>For AddPlayers</h1>
                <AddPlayer></AddPlayer>
            </div>
        </div>
    );
};

export default PlayerBoard;