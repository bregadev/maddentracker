import React, { useState} from 'react'
import Select from 'react-select'


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
    const [winningScore,setWinningscore] = useState();
    const [losingScore,setLosingscore] = useState();

    
      
      const handleSubmit = (evt) => {
       

        fetch('https://179rj6bfe2.execute-api.us-east-2.amazonaws.com/dev/newgame', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify( {
                winner: winner.value,
                loser: loser.value,
                winning_Score: winningScore.value,
                losing_score: losingScore.value
            })
        }).then(function(response) {
            console.log(response)
            return response.json();
        });

        evt.preventDefault();
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
                type="number" value={winningScore} onSeeked={setWinningscore} size="10" />
            </label>
            <label> Losing Score:   
            <input 
                type= "number" value={losingScore} onSeeked={setLosingscore} size="10" />
            </label>
            <span>  </span>
            <input type="submit" id='submit' value="submit"/>
        </form>
       )
    
}

export default Input; 