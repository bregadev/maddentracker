import React, { useState, useEffect} from 'react'
import axios from 'axios';

function Last7() {
   
    const [last7, setLast7] = useState([])
    useEffect(() =>{
        getLast7()
    }, [])
    const getLast7 = async () => {
        let url = 'https://179rj6bfe2.execute-api.us-east-2.amazonaws.com/dev/last7ranks'

        const response = await axios.get(url)
        console.log('response', response)
        setLast7(response.data)
    }
    
    const renderHeader = () => {
        let headerElement = ['Rank', 'player', 'wins']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        var counter = -1;
        return last7 && last7.map(({ rank, player, wins}) => {
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
            <h3>Last Seven Days </h3>
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


export default Last7;
