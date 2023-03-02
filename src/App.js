import React, { useState } from 'react'
import CardList from './Components/CardList/CardList'
import Category from './Components/Category/Category'
import { Header } from './Components/Header/Header'
import Navs from "./Components/Navs/Navs";
import { data } from './Data';
const App = () => {
  const [itemsData , setItemsData] = useState(data);

 
  return (
 <>
    <Navs  setItemsData={setItemsData}/>
<div className='container'>
 <Header/>
 <Category  setItemsData={setItemsData} />
 <CardList itemsData={itemsData} />
 
 
</div>
</>
  )
}

export default App
