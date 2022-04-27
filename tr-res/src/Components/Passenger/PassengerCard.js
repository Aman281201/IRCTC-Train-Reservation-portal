import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Passenger from '../Screens/Passenger.css'
import userEvent from '@testing-library/user-event';
const PassengerCard = (props) => {

    const [card,setCardDetail] = React.useState({
        name: "",
        age : "",
        gender : "",
        
    })

    function handleChange(event) {
        const { name, value} = event.target;
        setCardDetail((prevData) =>{
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function onAdd(event){
      props.addingPassenger(card);
      setCardDetail({
        name:"",
        age:"",
        gender:""
      })
      event.preventDefault();
    }

  return (

    <div className='card bg-[#BBE1FA]'  >
        <input

        name='name' 
        typeof='text' 
        placeholder='Passenger Name'
        onChange={handleChange} 
        value = {card.name} >
        </input>
        <input 
        name='age' 
        typeof='text' 
        placeholder='Age'
        value={card.age}    
        onChange={handleChange}>
        </input>
        <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">GENDER</InputLabel>
        <Select
          name='gender'
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="GENDER"
          value={card.gender}
          onChange={handleChange}
        >
          <MenuItem value="MALE" >MALE</MenuItem>
          <MenuItem value = "FEMALE">FEMALE</MenuItem>
          <MenuItem value = "OTHER ">OTHER</MenuItem>
        </Select>
      </FormControl>
    
    </div>
    
    <button onClick = {onAdd} className='add'>+ ADD PASSENGER</button>
    </div>
  )
}

export default PassengerCard