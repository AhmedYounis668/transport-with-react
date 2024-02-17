import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <Container  style={{minHeight:'200px'}}>
    <Link style={{textDecoration:'none'}} to='/'>
<Row className='fs-4 pt-3' style={{fontWeight:'bold',cursor:'pointer',color:'royalblue'}}>Lets Go</Row>
</Link>
      <Row className='d-flex justify-content-center fs-3' style={{marginTop:'10px',fontWeight:'bold'}}>Contact With Us</Row>

      <Row className=' w-100 ' >

        <Col className='d-flex justify-content-center col-12 col-md-6 '>
        <div className="form-container w-100 my-3 "  style={{height:'100%'}}>
      <form className="form w-100">
        <div class="form-group">
          <label for="email">Company Email</label>
          <input required="" name="email" id="email" type="text"/>
        </div>
        <div class="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea"></textarea>
        </div>
        <button type="submit" className="form-submit-btn w-100 ">Submit</button>
      </form>
    </div>
        </Col>




        <Col className='d-flex justify-content-center col-12 col-md-6 '>
        <div className="card w-100 my-3" style={{height:'100%'}}>
    <div class="chat-header">Chat</div>
      <div class="chat-window">
        <ul class="message-list"></ul>
      </div>
      <div class="chat-input w-100">
          <input type="text" className="message-input w-100" placeholder="Type your message here"/>
          <button class="send-button">Send</button>
      </div>
    </div>
          </Col>
      </Row>
    </Container>
  )
}

export default Contact
