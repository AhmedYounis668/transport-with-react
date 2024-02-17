import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
  return (
    <div>
       <header class="header">
        <div class="container">
           
            <div class="header-content">
                <h4 className="header-subtitle " id='Home'>Welcome</h4>
                <h1 className="header-title ">Lets Go Transport, </h1>
                <h6 class="header-mono" style={{color:'white'}}>We  Helps Companies To Transfer Everythink .</h6>
                
                
                <Link to="/register">
                <button class="btn btn-primary btn-rounded"><i class="ti-printer pr-2"></i>Sign up</button>
            
                </Link>
            
            
            
            
            
            
            
            
            
            </div>
        </div>
    </header>
    </div>
  )
}

export default Slider
