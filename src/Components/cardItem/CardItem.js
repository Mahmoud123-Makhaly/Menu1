import React from 'react'
import img from "../../images/1.png"

const CardItem = ({item}) => {
  return (
 
<div class="card mb-2 d-flex flex-row"  >


<img src={item.url} class="img-fluid rounded-start w-90" alt="..." />


<div class="card-body">
  <h5 class="card-title" style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}><span> {item.title}  </span> <span style={{color:"#B45B35"}}>{item.price}</span></h5>
  <p class="card-text">{item.desc}</p>

</div>

</div>
   )
}

export default CardItem