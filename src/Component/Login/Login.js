import React from 'react'
import { Container, Row ,Col, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Register } from '../Login/Register'

const Login = () => {
  return (
    <Container >
    <Link style={{textDecoration:'none'}} to='/'>
<Row className='fs-4 pt-3' style={{fontWeight:'bold',cursor:'pointer',color:'royalblue'}}>Lets Go</Row>
</Link>
      <Row className='w-100' style={{marginTop:'60px'}}>
        <Col className='d-flex justify-content-center  my-4'>
        <div className="form_main ">
    <p class="heading">Login</p>
    <div class="inputContainer">
       
    <input type="text" class="inputField" id="username" placeholder="Username"/>
    </div>
    
<div class="inputContainer">
   
    <input type="password" class="inputField" id="password" placeholder="Password"/>
</div>
              
           
<button id="button">Submit</button>
    <a class="forgotLink" href="../Login/Register.js">Forgot your password?</a>
               
             <Link to="/register">
                <button className="btn btn-primary btn-rounded w-100"><i class="ti-printer pr-2"></i>Register</button>
                </Link>


</div>



    



        </Col>
      </Row>
    </Container>
  )
}

export default Login
