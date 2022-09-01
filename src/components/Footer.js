import React from 'react'
import Container from 'react-bootstrap/Container';
import './Footer.css';
function Footer() {
  return (
    <footer className='footer footer-transparent d-print-none'>
       <Container fluid>
          <p className='mb-0 text-center'>Copyright &copy; 2022 Sunware  Technologies. All rights reserved</p>
        </Container>
    </footer>
  )
}

export default Footer;