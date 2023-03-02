import React from 'react'
import CardItem from '../cardItem/CardItem';
import Isloaded from '../Isloaded';
import { Zoom } from 'react-reveal'

const CardList = ({itemsData}) => {
  return (
    <div className='card-list '>
      {
       itemsData.length===0?<Isloaded/>:   itemsData.map((item )=>{
        return(
         <Zoom  >

<CardItem key={item.id} item = {item}/>
         </Zoom>
        )
                })
      }
    </div>
  )
}

export default CardList
