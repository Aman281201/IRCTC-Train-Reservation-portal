

import React from 'react'
import PassengerCard from '../Passenger/PassengerCard';
import Card from '../Passenger/Card'
import Pass from '../Screens/Passenger.css'
const Passenger = () => {
  const [cardData,setCardData] = React.useState([]);
  function addData(newData) {
    setCardData((prevData)=>{
      return [
        ...prevData,newData
      ]
    })
  }

  function deleteData(pid){
    setCardData((prevData) => {
      return prevData.filter((item,index)=>{
        return index != pid;
      })
    })
  }

  return (
    <div className='relative'>
    <h1 className='text-[40px] mb-10 bg-[#0F4C75] py-3 pl-2 text-[white]' >Book Passenger Tickets</h1>
    

    <div className='m-0 absolute   '>
    <PassengerCard addingPassenger = {addData}/>
    {cardData.map((item,index)=>{
       return (<Card
        key = {index}
        id = {index}
        name = {item.name}
        age = {item.age}
        gender = {item.gender}
        onDelete = {deleteData}

      />);
    })}
    </div>
   
    </div>
  )
}

export default Passenger;