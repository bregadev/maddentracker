import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './index.css'
import Input from './input.js'
import Ranks from './ranks.js'
import Last7 from './last7.js'
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



return (

    <div>
        <AmplifySignOut />
        <Input />
        <div class="container">
            <div class="left">
            <Ranks />
            </div>
            <div class="right">
                <Last7 />
            </div>
        </div>
        
        <div>
            <h1 id='title'>Madden 21 Game Log </h1>
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
  
  