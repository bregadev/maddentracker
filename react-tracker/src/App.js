import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './index.css'
import Input from './input.js'
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
   
function App() {
   
    const [games, setGames] = useState([])
    useEffect(() =>{
        getGames()
    }, [])
    const getGames = async () => {
        let url = 'https://179rj6bfe2.execute-api.us-east-2.amazonaws.com/dev/allGames'

        const response = await axios.get(url)
        console.log('response', response)
        setGames(response.data)
    }
    
    const renderHeader = () => {
        let headerElement = ['id', 'winner', 'loser', 'winning score', 'losing score','game date','dub']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return games && games.map(({ id, winner, loser, winning_score,losing_score,game_date,dub}) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{winner}</td>
                    <td>{loser}</td>
                    <td>{winning_score}</td>
                    <td>{losing_score}</td>
                    <td>{game_date}</td>   
                    <td>{dub}</td>            
                    
                </tr>
            )
        })
    }



    // function newGame() {
    //   let winner = prompt('Enter winner');
    //   let loser = prompt('Enter loser');
    //   let winning_score = prompt('enter winning score')
    //   let losing_score = prompt('enter losing score');
    //   fetch('http://localhost:3001/games', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({winner,loser,winning_score,losing_score}),
    //   })
    //     .then(response => {
    //       return response.text();
    //     })
    //     .then(data => {
    //       alert(data);
    //       newGame();
    //     });
    // }
    // function deleteGame() {
    //   let id = prompt('Enter game id');
    //   fetch(`http://localhost:3001/games/${id}`, {
    //     method: 'DELETE',
    //   })
    //     .then(response => {
    //       return response.text();
    //     })
    //     .then(data => {
    //       alert(data);
    //       getGame();
    //     });
    // }



return (

    <div>
        <AmplifySignOut />
        <Input />
        <div>
            <h1 id='title'>Madden 21 Games </h1>
            <table id='games'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </div>
    </div>
)
}

  
export default withAuthenticator(App, true);
  
  