import React from 'react';
import './AddPlayer.css';
import * as ReactBootstrap from 'react-bootstrap';

const AddPlayer = (props) => {
    console.log(props.player);
    const player = props.player;
    const renderPlayer =(player, index) =>{
        return(
            <tr key={index}>
                <td>{player.name}</td>
                <td>{player.salary}</td>
            </tr>
        )
    }
    const totalSalary =player.reduce((sum,pSalary) => sum + pSalary.salary,0);
    return (
        <div className="addPlayer-style">
            <h2>Jobeda Club</h2>
            <br/>
            <h5>Total Selected Players: {player.length}</h5>
            <br/>
            <ReactBootstrap.Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Salary ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {player.map(renderPlayer)}
                </tbody>
            </ReactBootstrap.Table>
            <h5>Total Salary: $ {totalSalary}</h5>
        </div>
    );
};

export default AddPlayer;