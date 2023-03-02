import React from 'react'
import "./Category.scss";
import { data } from '../../Data';
const Category = ( {setItemsData}) => {
// filtered Category
const filteredCategory = (cat)=>{
  if(cat==="الكل"){
    setItemsData(data)
  }
else{
  const newArr = data.filter((i)=>i.category===cat);
setItemsData(newArr)
}
}
//show All Category
const showAllCategory = ["الكل" , ...new Set(data.map((cat)=>cat.category))];

  return (
    <div className='category-btns'>
 
       {
        showAllCategory.length?(showAllCategory.map((item)=>{
return(
  <button    onClick={()=>{filteredCategory(item)}}  type="button" class="btn   mx-2">{item}</button>

)
        })):null
       }
    </div>
  )
}

export default Category