import React, { useState, useEffect} from 'react'
import axios from 'axios';

function Ranks() {
   
    const [ranks, setRanks] = useState([])
    useEffect(() =>{
        getRanks()
    }, [])
    const getRanks = async () => {
        let url = 'https://179rj6bfe2.execute-api.us-east-2.amazonaws.com/dev/rankings'

        const response = await axios.get(url)
        console.log('response', response)
        setRanks(response.data)
    }
    
    const renderHeader = () => {
        let headerElement = ['Rank', 'player', 'wins']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        var counter = -1;
        return ranks && ranks.map(({ rank, player, wins}) => {
            counter ++;
            return (
                <tr key={rank}>
                    <td>{counter + 1}</td>
                    <td>{player}</td>
                    <td>{wins}</td>
                </tr>
           
            )
        })
    }
 
    return (
        <div>
            <h3> Overall Standings </h3>
            <table id='games'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </div>
    )
}


export default Ranks;
