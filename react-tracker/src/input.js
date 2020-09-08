import React, {Component} from 'react'
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
  

class Input extends React.Component{
    render() {
       return (

        <form>
            <h3>Enter Game results</h3>
            <label>Winner: </label>
            <Select options={options} />
            <span> Loser: </span>
            <Select options={options} />
            <span> Winning Score: </span>
            <input 
                type="number" size="10" />
            <span> Losing Score: </span>
            <input 
                type= "number"  size="10" />
            <span>  </span>
            <button id='submit' >  Submit  </button>
        </form>
       )
    }
}

export default Input; 