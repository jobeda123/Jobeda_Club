import React from 'react';
import data from '../../Data/teamData.json';
import {useState, useEffect} from 'react';
import './PlayerBoard.css';
import AddPlayer from '../AddPlayer/AddPlayer';
import Player from '../Player/Player';

const PlayerBoard = () => {
    const [teamData, setTeamData] = useState([]);
    const [addPlayer, setAddPlayer] = useState([]);

    useEffect(()=>{ 
        setTeamData(data);
    },[]);

    const handleAddPlayer = (newPlayer) =>{
        //console.log("Added player properly",newPlayer);
        const newAddPlayer = [...addPlayer, newPlayer];
        setAddPlayer(newAddPlayer);
    }
    return (
        <div>
            <div className="header">
                <h1>International Football Players</h1>
            </div>
            <div className="playerBoard-container">
                <div className="player-container d-flex align-content-start flex-wrap">
                    {
                        teamData.map(player =><Player handleAddPlayer={handleAddPlayer} key={player.id} playerDetail={player}></Player>)
                    }
                </div>

                <div className="AddPlayer-container">
                    <AddPlayer player={addPlayer}></AddPlayer>
                </div>
            </div>
        </div>
    );
};

export default PlayerBoard;