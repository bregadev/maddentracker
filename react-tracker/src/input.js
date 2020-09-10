import React, { useState} from 'react'
import Select from 'react-select'
import axios from 'axios';


const options = [
    { value: 'Sito', label: 'Sito' },
    { value: 'Kenton', label: 'Kenton' },
    { value: 'Akeel', label: 'Akeel' },
    { value: 'Malcolm', label: 'Malcolm' },
    { value: 'Evan', label: 'Evan' },
    { value: 'SB', label: 'SB' },
    { value: 'SVC', label: 'SVC' },
    { value: 'Noel', label: 'Noel' },
    { value: 'Showtime', label: 'Showtime' },
    { value: 'OP', label: 'OP' }
  ]
  

function Input (props) {
    const [winner,setWinner] = useState(" ");
    const [loser,setLoser] = useState(" ");
    const [winningScore,setWinningscore] = useState(0);
    const [losingScore,setLosingscore] = useState(0);


      
     const handleSubmit = evt => {
         const data = JSON.stringify( {
            "winner": winner.value,
            "loser": loser.value,
            "winning_score": winningScore,
            "losing_score": losingScore
         });
        let url = 'https://179rj6bfe2.execute-api.us-east-2.amazonaws.com/dev/newgame';
       
        alert('Game Recorded');
        axios.post(url,data
            )
        .then(function(response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);});
        
        
      }
    
    
       return (

        <form onSubmit={handleSubmit}>
            <h3>Enter Game results</h3>
            <label>Winner: 
            <Select options={options} value={winner} onChange={setWinner} />
            </label>
            <label> Loser: 
            <Select options={options} value={loser} onChange={setLoser} />
            </label>
            <label> Winning Score: 
            <input 
                type="number" value={winningScore} onChange={e => setWinningscore(e.target.value)} size="10" />
            </label>
            <label> Losing Score:   
            <input 
                type= "number" value={losingScore} onChange={e => setLosingscore(e.target.value)} size="10" />
            </label>
            <span>  </span>
            <input type="submit" id='submit' value="submit"/>
        </form>
       )
    
}

export default Input; 