import React, { useState } from 'react'
import "./MyNavs.scss";
import { data } from '../../Data';
const Navs = ({setItemsData}) => {
  const[searchVal , setSearchVal] = useState("")

  const onSearch = (word)=>{
    if(word!=""){
      const newArr = data.filter((item)=>item.title===word);
      setItemsData(newArr)
      setSearchVal("")
     }
    else{
      setItemsData(data);

    }
 
  }
 
  return (
    <nav className="navbar navbar-expand-lg  bg-dark"  data-bs-theme="dark"  >
   
    <div className="container">
      <a className="navbar-brand" href="#">مطعم جديد</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse me-auto my-3 my-lg-0" id="navbarSupportedContent">
     
     
        <form className="d-flex me-auto" onSubmit={(e)=>{e.preventDefault()}} >
 
   
          <input value={searchVal}   onChange={(e)=>{setSearchVal(e.target.value)}} className="form-control " type="search" placeholder="ابحث" aria-label="Search"  />
          <button onClick={()=>{onSearch(searchVal)}}   className="btn   me-2"  >ابحث</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navs
