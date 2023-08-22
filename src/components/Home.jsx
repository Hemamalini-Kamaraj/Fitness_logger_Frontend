import React from 'react';
import NavBar from '../components/NavBar';
import Footer from './Footer';
import { Container, Image, Row } from 'react-bootstrap';
import poster from '../assets/poster1.png'
import { Link } from 'react-router-dom';


function Home() {

  return (
      <div className='bg-white d-flex flex-column justify-content-between min-vh-100'>  
          <NavBar />
          <Container fluid className='justify-content-center text-center '>
            <Row className='mt-5'>
              <Link to='/recordActivity'><Image src={poster} style={{width:"90rem"}} className='img-fluid'></Image></Link>
            </Row>
          </Container>
        <Footer /> 
      </div>
  )
}

export default Home