import React from 'react'
import car1 from '../../Images/marceds.jpg'
import car2 from '../../Images/car2.jpg'
import car3 from '../../Images/car3.jpg'
import car4 from '../../Images/car4.jfif'

import d1 from '../../Images/driver3.jpg'
import d2 from '../../Images/driver4.jpg'
import d3 from '../../Images/driver5.jpg'
import d4 from '../../Images/driver6.jpg'

import { Container, Row,Col } from 'react-bootstrap'

const OurCars = () => {
  return (
    <div>
      <Row>
        <p id='Our Cars' className='d-flex justify-content-center' style={{fontSize:'30px',fontWeight:'bold'}}>Our <span style={{color:'royalblue',marginLeft:'5px'}}> Cars</span> </p>
      </Row>

      <Row >
      <Col className="d-flex justify-content-center flex-wrap col-lg-6  col-12  mb-4 mb-lg-0 w-md-45 w-100" >

                            <div class="custom-block d-flex  my-1">
                                <div class="">
                                    <div class="custom-block-icon-wrap">
                                        <div class="section-overlay"></div>
                                        <a href="detail-page.html" class="custom-block-image-wrap">
                                            <img src={car1} class="custom-block-image img-fluid" alt=""/>

                                            
                                        </a>
                                    </div>

                                    <div style={{background:'#0066CC',borderRadius:'15px',}} className="mt-2">
                                        <a style={{color:"white"}} href="#" className="btn custom-btn">
                                            Subscribe
                                        </a>
                                    </div>



                                    <div  className=" d-flex justify-content-center flex-column w-100 ">
                                   <div className='d-flex justify-content-center '>
                                    <a  href="#" className="badge align-middle favbtn ">
                                        <i className="icon-heart mt-1 fs-4"></i>
                                    </a>

                                </div>

                                 <div className='d-flex justify-content-center '> 
                                    <a   href="#" class="badge align-middle  favbtn">
                                        <i className="icon-bookmarks mt-1 fs-4"></i>
                                    </a>
                                 </div> 
                               </div>

                                </div>

                                <div class="custom-block-info">
                                    <div class="custom-block-top d-flex mb-1">
                                        <small class="me-4">
                                            <i className="icon-phone custom-icon "></i>
                                            +20 01112134836
                                        </small>

                                        <small>Total previous orders <span class="badge">150</span></small>
                                    </div>

                                    <h5 style={{fontWeight:'bold'}} className="mb-2">
                                        <a style={{textDecoration:'none',color:'black'}} href="detail-page.html">
                                          Model:  Marceds 2024 
                                        </a>
                                    </h5>

                                    <div class="profile-block d-flex">
                                        <img src={d1} class="profile-block-image img-fluid" alt=""/>

                                        <p>
                                            Driver This Trucker
                                            <img src="images/verified.png" class="verified-image img-fluid" alt=""/>
                                            <strong>Jone</strong></p>
                                    </div>

                                    <p class="mb-0">Lorem Ipsum dolor sit amet consectetur</p>

                                    <div class="custom-block-bottom d-flex justify-content-between mt-3">
                                        <a style={{textDecoration:'none'}} href="#" className="icon-heart me-1">
                                            <span>120k</span>
                                        </a>

                                        <a style={{textDecoration:'none'}} href="#" className="icon-bubble2 me-1">
                                            <span>42.5k</span>
                                        </a>

                                        <a style={{textDecoration:'none'}} href="#" class="icon-bookmarks me-1">
                                            <span>11k</span>
                                        </a>

                                        <a style={{textDecoration:'none'}} href="#" class="icon-star-empty">
                                            <span>50k</span>
                                        </a>
                                    </div>
                                </div>
                                {/* <div  className="d-flex flex-column w-100" style={{border:'2px solid black'}}>
                                    <a style={{textDecoration:'none'}} href="#" className="badge ms-auto">
                                        <i className="icon-heart mt-1 fs-4"></i>
                                    </a>

                                    <a style={{textDecoration:'none'}} href="#" class="badge ms-auto ">
                                        <i className="icon-bookmarks mt-1 fs-4"></i>
                                    </a>
                                </div> */}
                            
                            </div>






                            <div class="custom-block d-flex mx-2 my-1 " >
                                <div class="">
                                    <div class="custom-block-icon-wrap">
                                        <div class="section-overlay"></div>
                                        <a href="detail-page.html" class="custom-block-image-wrap">
                                            <img src={car2} class="custom-block-image img-fluid" alt=""/>

                                            
                                        </a>
                                    </div>

                                    <div style={{background:'#0066CC',borderRadius:'15px',}} className="mt-2">
                                        <a style={{color:"white"}} href="#" className="btn custom-btn">
                                            Subscribe
                                        </a>
                                    </div>

                                    <div  className=" d-flex justify-content-center flex-column w-100 ">
                                   <div className='d-flex justify-content-center '>
                                    <a  href="#" className="badge align-middle favbtn ">
                                        <i className="icon-heart mt-1 fs-4"></i>
                                    </a>

                                </div>

                                 <div className='d-flex justify-content-center '> 
                                    <a   href="#" class="badge align-middle  favbtn">
                                        <i className="icon-bookmarks mt-1 fs-4"></i>
                                    </a>
                                 </div> 
                               </div>

                                </div>

                                <div class="custom-block-info">
                                    <div class="custom-block-top d-flex mb-1">
                                        <small class="me-4">
                                            <i className="icon-phone custom-icon mx-1"></i>
                                            +20 01112134836
                                        </small>

                                        <small>Total previous orders <span class="badge">250</span></small>
                                    </div>

                                    <h5 style={{fontWeight:'bold'}} className="mb-2">
                                        <a style={{textDecoration:'none',color:'black'}} href="detail-page.html">
                                          Model:  Man 2024 
                                        </a>
                                    </h5>

                                    <div class="profile-block d-flex">
                                        <img src={d2} class="profile-block-image img-fluid" alt=""/>

                                        <p>
                                            Driver This Trucker
                                            <img src="images/verified.png" class="verified-image img-fluid" alt=""/>
                                            <strong>Tony</strong></p>
                                    </div>

                                    <p class="mb-0">Lorem Ipsum dolor sit amet consectetur</p>

                                    <div class="custom-block-bottom d-flex justify-content-between mt-3">
                                        <a style={{textDecoration:'none'}} href="#" className="icon-heart me-1">
                                            <span>120k</span>
                                        </a>

                                        <a style={{textDecoration:'none'}} href="#" className="icon-bubble2 me-1">
                                            <span>42.5k</span>
                                        </a>

                                        <a style={{textDecoration:'none'}} href="#" class="icon-bookmarks me-1">
                                            <span>11k</span>
                                        </a>

                                        <a style={{textDecoration:'none'}} href="#" class="icon-star-empty">
                                            <span>50k</span>
                                        </a>
                                    </div>
                                </div>

                                {/* <div  className="d-flex flex-column ms-auto">
                                    <a style={{textDecoration:'none'}} href="#" class="badge ms-auto">
                                        <i className="icon-heart mt-1 fs-4"></i>
                                    </a>

                                    <a style={{textDecoration:'none'}} href="#" class="badge ms-auto ">
                                        <i className="icon-bookmarks mt-1 fs-4"></i>
                                    </a>
                                </div> */}
                            </div>








                            <div class="custom-block d-flex mx-2 my-1" >
                                <div class="">
                                    <div class="custom-block-icon-wrap">
                                        <div class="section-overlay"></div>
                                        <a href="detail-page.html" class="custom-block-image-wrap">
                                            <img src={car3} class="custom-block-image img-fluid" alt=""/>

                                            
                                        </a>
                                    </div>

                                    <div style={{background:'#0066CC',borderRadius:'15px',}} className="mt-2">
                                        <a style={{color:"white"}} href="#" className="btn custom-btn">
                                            Subscribe
                                        </a>
                                    </div>


                                    <div  className=" d-flex justify-content-center flex-column w-100 ">
                                   <div className='d-flex justify-content-center '>
                                    <a  href="#" className="badge align-middle favbtn ">
                                        <i className="icon-heart mt-1 fs-4"></i>
                                    </a>

                                </div>

                                 <div className='d-flex justify-content-center '> 
                                    <a   href="#" class="badge align-middle  favbtn">
                                        <i className="icon-bookmarks mt-1 fs-4"></i>
                                    </a>
                                 </div> 
                               </div>


                                </div>

                                <div class="custom-block-info">
                                    <div class="custom-block-top d-flex mb-1">
                                        <small class="me-4">
                                            <i className="icon-phone custom-icon mx-1"></i>
                                            +20 01112134836
                                        </small>

                                        <small>Total previous orders <span class="badge">1300</span></small>
                                    </div>

                                    <h5 style={{fontWeight:'bold'}} className="mb-2">
                                        <a style={{textDecoration:'none',color:'black'}} href="detail-page.html">
                                          Model:  BMW 2024 
                                        </a>
                                    </h5>

                                    <div class="profile-block d-flex">
                                        <img src={d3} class="profile-block-image img-fluid" alt=""/>

                                        <p>
                                            Driver This Trucker
                                            <img src="images/verified.png" class="verified-image img-fluid" alt=""/>
                                            <strong>Mark</strong></p>
                                    </div>

                                    <p class="mb-0">Lorem Ipsum dolor sit amet consectetur</p>

                                    <div class="custom-block-bottom d-flex justify-content-between mt-3">
                                        <a style={{textDecoration:'none'}} href="#" className="icon-heart me-1">
                                            <span>120k</span>
                                        </a>

                                        <a style={{textDecoration:'none'}} href="#" className="icon-bubble2 me-1">
                                            <span>42.5k</span>
                                        </a>

                                        <a style={{textDecoration:'none'}} href="#" class="icon-bookmarks me-1">
                                            <span>11k</span>
                                        </a>

                                        <a style={{textDecoration:'none'}} href="#" class="icon-star-empty">
                                            <span>50k</span>
                                        </a>
                                    </div>
                                </div>

                                {/* <div  className="d-flex flex-column ms-auto">
                                    <a style={{textDecoration:'none'}} href="#" class="badge ms-auto">
                                        <i className="icon-heart mt-1 fs-4"></i>
                                    </a>

                                    <a style={{textDecoration:'none'}} href="#" class="badge ms-auto ">
                                        <i className="icon-bookmarks mt-1 fs-4"></i>
                                    </a>
                                </div> */}
                            </div>






                            <div class="custom-block d-flex mx-2 my-2" >
                                <div class="">
                                    <div class="custom-block-icon-wrap">
                                        <div class="section-overlay"></div>
                                        <a href="detail-page.html" class="custom-block-image-wrap">
                                            <img src={car4} class="custom-block-image img-fluid" alt=""/>

                                            
                                        </a>
                                    </div>

                                    <div style={{background:'#0066CC',borderRadius:'15px',}} className="mt-2">
                                        <a style={{color:"white"}} href="#" className="btn custom-btn">
                                            Subscribe
                                        </a>
                                    </div>



                                    <div  className=" d-flex justify-content-center flex-column w-100 ">
                                   <div className='d-flex justify-content-center '>
                                    <a  href="#" className="badge align-middle favbtn ">
                                        <i className="icon-heart mt-1 fs-4"></i>
                                    </a>

                                </div>

                                 <div className='d-flex justify-content-center '> 
                                    <a   href="#" class="badge align-middle  favbtn">
                                        <i className="icon-bookmarks mt-1 fs-4"></i>
                                    </a>
                                 </div> 
                               </div>


                                </div>



                                <div className="custom-block-info ">
                                    <div className="custom-block-top d-flex mb-1">
                                        <small className="me-4">
                                            <i className="icon-phone custom-icon mx-1"></i>
                                            +20 01112134836
                                        </small>

                                        <small>Total previous orders <span class="badge">50</span></small>
                                    </div>

                                    <h5 style={{fontWeight:'bold'}} className="mb-2">
                                        <a style={{textDecoration:'none',color:'black'}} href="detail-page.html">
                                          Model:  Marceds 2023 
                                        </a>
                                    </h5>

                                    <div class="profile-block d-flex">
                                        <img src={d4} class="profile-block-image img-fluid" alt=""/>

                                        <p>
                                            Driver This Trucker
                                            <img src="images/verified.png" class="verified-image img-fluid" alt=""/>
                                            <strong>tovana</strong></p>
                                    </div>

                                    <p class="mb-0">Lorem Ipsum dolor sit amet consectetur</p>

                                    <div class="custom-block-bottom d-flex justify-content-between mt-3">
                                        <a style={{textDecoration:'none'}} href="#" className="icon-heart me-1">
                                            <span>120k</span>
                                        </a>

                                        <a style={{textDecoration:'none'}} href="#" className="icon-bubble2 me-1">
                                            <span>42.5k</span>
                                        </a>

                                        <a style={{textDecoration:'none'}} href="#" class="icon-bookmarks me-1">
                                            <span>11k</span>
                                        </a>

                                        <a style={{textDecoration:'none'}} href="#" class="icon-star-empty">
                                            <span>50k</span>
                                        </a>
                                    </div>
                                </div>

                                {/* <div  className="d-flex flex-column ms-auto">
                                    <a style={{textDecoration:'none'}} href="#" class="badge ms-auto">
                                        <i className="icon-heart mt-1 fs-4"></i>
                                    </a>

                                    <a style={{textDecoration:'none'}} href="#" class="badge ms-auto ">
                                        <i className="icon-bookmarks mt-1 fs-4"></i>
                                    </a>
                                </div> */}
                            </div>
      </Col>

      </Row>
    </div>
  )
}

export default OurCars
