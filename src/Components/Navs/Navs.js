import React from 'react'
import "./MyNavs.scss"
const Navs = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark"  data-bs-theme="dark">
    <div className="container">
      <a className="navbar-brand" href="#">مطعم جديد</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse me-auto my-3 my-lg-0" id="navbarSupportedContent">
     
     
        <form className="d-flex me-auto" role="search">
          <input className="form-control " type="search" placeholder="ابحث" aria-label="Search"/>
          <button className="btn   me-2" type="submit">ابحث</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navs
