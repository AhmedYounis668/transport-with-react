import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import companylogo from '../../Images/car2.jpg'
const CustomersOpinion = () => {
  return (
      <div className='my-4'>
    <Row><div id='client opinion' className='d-flex justify-content-center my-4  fs-4' style={{fontWeight:'bold'}}>Our Customer<span style={{color:'royalblue',marginRight:'5px',marginLeft:'5px'}}>Opinion</span> </div></Row>
    <div className="my-2 sectionbg" >


      <Row  className=''>
      <Col className='d-flex justify-content-center w-100' >
      <Carousel  data-bs-theme="dark" className='Carouselstyle' >
      <Carousel.Item>
      <div className='d-flex justify-content-center'>
        <img  src={companylogo} alt='BMW' className='Clientlogo '/>
          </div>

          <div className='d-flex justify-content-center my-2'>

          <h3>BMW Company </h3>
          </div>
          <div className='mx-3 '  style={{color:'white'}}>Nulla vitae eliqweqwewt libero, a pharetra augue mollis interdum Nulla vitae eliqweqwewt libero, a pharetra augue mollis interdum.</div>
      </Carousel.Item>


      <Carousel.Item>
      <div className='d-flex justify-content-center'>
        <img  src={companylogo} alt='BMW' className='Clientlogo my-1'/>
          </div>

          <div className='d-flex justify-content-center my-2'>

          <h3>BMW Company </h3>
          </div>
          <div className='mx-3 '  style={{color:'white'}}>Nulla vitae eliqweqwewt libero, a pharetra augue mollis interdum Nulla vitae eliqweqwewt libero, a pharetra augue mollis interdum.</div>
      </Carousel.Item>


      <Carousel.Item>
      <div className='d-flex justify-content-center'>
        <img  src={companylogo} alt='BMW' className='Clientlogo my-1'/>
          </div>

          <div className='d-flex justify-content-center my-2'>

          <h3>BMW Company </h3>
          </div>
          <div className='mx-3 '  style={{color:'white'}}>Nulla vitae eliqweqwewt libero, a pharetra augue mollis interdum Nulla vitae eliqweqwewt libero, a pharetra augue mollis interdum.</div>
      </Carousel.Item>
      
    </Carousel>
    </Col>
      </Row>
    </div>
    </div>
  )
}

export default CustomersOpinion
