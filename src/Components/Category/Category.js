import React from 'react'
import "./Category.scss"
const Category = () => {
  return (
    <div className='category-btns'>
        <button type="button" class="btn   mx-2">الكل</button>
        <button type="button" class="btn   mx-2">فطار</button>
        <button type="button" class="btn   mx-2">غداء</button>
        <button type="button" class="btn   mx-2">عشاء</button>
       
    </div>
  )
}

export default Category