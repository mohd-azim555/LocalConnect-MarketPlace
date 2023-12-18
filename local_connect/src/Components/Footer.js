import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer_container">
      <Container>
        <Row>
          <Col md={6} xs={12}>
            <div className="footer_logo_container">
              <h4 className="footer_logo">LOGO HERE</h4>
              <p className="footer_description">
                Local Connect Maket Place is E-commerce social media for local vendors an users.
              </p>
            </div>
          </Col>
          <Col md={3} xs={4}>
            <h5 className="about_us_heading">About Us</h5>
            <ul className="navlinks">
              <li className="navlink">
                <a href="#/">Home</a>
              </li>
              <li className="navlink">
                <a href="#/">Services</a>
              </li>
              <li className="navlink">
                <a href="#/">Online Booking</a>
              </li>
              <li className="navlink">
                <a href="#/">About</a>
              </li>
              <li className="navlink">
                <a href="#/">Blog</a>
              </li>
              <li className="navlink">
                <a href="#/">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3} xs={8}>
            <h5 className="about_us_heading">About Us</h5>
            <ul className="navlinks">
              <li className="nav_li">
                <p className="navlink">+123456789</p>
              </li>
              <li className="nav_li">
                <p className="navlink">
                Local Connect Maket Place is E-commerce social media for local vendors an users.
                </p>
              </li>
              <li className="nav_li">
                <p className="navlink">moazim555@gmail.com</p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer