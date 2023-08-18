import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import { Container, Image, Row } from 'react-bootstrap';
import poster from '../assets/poster1.png'
import { Link } from 'react-router-dom';


function Home() {

  return (
      <div className='bg-white'>  
          <NavBar />
          <Container fluid className='justify-content-center text-center min-vh-100'>
            <Row className='mt-5'>
              <Link to='/recordActivity'><Image src={poster} style={{width:"90rem"}}></Image></Link>
            </Row>
          </Container>
        <Footer /> 
      </div>
  )
}

export default Home