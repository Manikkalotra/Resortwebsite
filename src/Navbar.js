import React from "react";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
 return(<div className="manik">
 <nav  className="navbar navbar-expand-lg bg-body-tertiary">
  <div style={{backgroundColor:"#3c6382",marginTop:"0px",height:"50px",marginTop:"-10px",marginBottom:"-10px"}} className="container-fluid">
    <NavLink className="navbar-brand" to="/"><u><i><big>Haveli</big></i></u></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink  className="nav-link active" aria-current="page" to="/"><img src="https://t3.ftcdn.net/jpg/00/70/24/16/240_F_70241613_jLOBn0YkQfLGe7AnwagKEuh1DSymFJpp.jpg" height="30px"/><u>Home</u></NavLink >
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about"><img src="https://t4.ftcdn.net/jpg/01/96/17/61/240_F_196176147_MBqjW2zO9S69c99sNHEXq9h7MwZnStae.jpg" height="30px"/><u>About</u></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Service"><img src="https://t4.ftcdn.net/jpg/03/37/70/29/240_F_337702919_7HwBkriEpaiCzWUNnGCVKZhJJFKo7gh4.jpg" height="30px"/><u>Service</u></NavLink>
        </li>
        
      </ul>
    </div>


    
  </div>
</nav>
 
 </div>
 )
}

export default Navbar;