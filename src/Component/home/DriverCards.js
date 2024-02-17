import React from 'react'
import {Container,Row,Col}from 'react-bootstrap'
import d1 from'./../../Images/driver1.jpg'
import d2 from'./../../Images/driver2.jpg'
import d3 from'./../../Images/driver3.jpg'
import d4 from'./../../Images/driver4.jpg'
import d5 from'./../../Images/driver5.jpg'
import d6 from'./../../Images/driver6.jpg'
const DriverCards = () => {

  return (
    <div>
    <Row >
      <div id='Drivers' className='d-flex justify-content-center my-2' style={{color:'black',fontSize:'35px',fontWeight:'bold'}}><span style={{color:'royalblue',marginRight:'5px'}}>Our</span> Truckers</div>
    </Row>
    <div className=' driverbackground'  >

    <Container className='my-2' >
<Row className=' ' >
<Col className='d-flex flex-wrap justify-content-center'>

<div className='card m-2'>

     <img src={d1} alt='d1' className='driver'/> 
 
  <div class="card__content">
    <p class="card__title">Driver Information</p>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>


<div className='card m-2'>
  <img src={d2} alt='d1' className='driver'/> 

  <div class="card__content">
    <p class="card__title">Driver Information</p>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>


<div className='card m-2'>
  <img src={d3} alt='d1' className='driver'/> 

  <div class="card__content">
    <p class="card__title">Driver Information</p>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>


<div className='card m-2'>
  <img src={d4} alt='d1' className='driver'/> 

  <div class="card__content">
    <p class="card__title">Driver Information</p>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>



<div className='card m-2'>
<img src={d5} alt='d1' className='driver'/> 

  <div class="card__content">
    <p class="card__title">Driver Information</p>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>



<div className='card m-2'>
<img src={d6} alt='d1' className='driver'/> 

  <div class="card__content">
    <p class="card__title">Driver Information</p>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</div>

</Col>
</Row>


    </Container>
    
</div>
</div>
  )
}

export default DriverCards
