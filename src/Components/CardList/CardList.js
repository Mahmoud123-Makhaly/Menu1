import React from 'react'
import CardItem from '../cardItem/CardItem';
const CardList = ({itemsData}) => {
  return (
    <div className='card-list '>
      {
       itemsData.length?(
        itemsData.map((item , index)=>{
return(
  <CardItem key={index} item = {item}/>
)
        })
       ) :null
      }
    </div>
  )
}

export default CardList
