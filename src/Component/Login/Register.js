import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <Container style={{minHeight:'300px'}}>

<Link style={{textDecoration:'none'}} to='/'>
<Row className='fs-4 pt-3' style={{fontWeight:'bold',cursor:'pointer',color:'royalblue'}}>Lets Go</Row>
</Link>
     <Row style={{marginTop:'70px'}} className=' d-flex justify-content-center w-100'>
        <Col className='w-100 d-flex justify-content-center' >
        <div className="form ">
    <p class="title">Register </p>
    <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
        <label>
            <input class="input" type="text" placeholder="" required=""/>
            <span>Firstname</span>
        </label>

        <label>
            <input className="input" type="text" placeholder="" required=""/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input class="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <label>
        <input class="input" type="password" placeholder="" required=""/>
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <Link style={{textDecoration:'none'}} to="/login">

    <p class="signin">Already have an acount ? <span style={{color:'white'}}>Signin</span> </p>
    </Link>
</div>
        </Col>
     </Row>
    </Container>
  )
}

export default Register
