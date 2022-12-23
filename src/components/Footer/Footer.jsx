import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from '../../assets/images/res-logo.png';

import '../../styles/footer.css';

import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3' md='4' sm='6'>
          <div className="logo footer__logo text-start">
            <img src={logo} alt="logo" />
            <h5>La hesserie</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Temporibus, dolor corporis.</p>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <h5 className='footer__title'>Temps de livraison</h5>
          <ListGroup className='deliver__time-list'>
            <ListGroupItem className=' delivery__time-item border-0 ps-0'>
              <span>De Vendredi à Dimanche</span>
              <p>18h à 1h du matin</p>
            </ListGroupItem>

            <ListGroupItem className=' delivery__time-item border-0'>
              <span>De Lundi à Jeudi</span>
              <p>20h à 23h</p>
            </ListGroupItem>
          </ListGroup>

        </Col>

        <Col lg='3' md='4' sm='6'>
        <h5 className='footer__title'>Contact</h5>
          <ListGroup className='deliver__time-list'>
            
            <ListGroupItem className=' delivery__time-item border-0 ps-0'>
              <p>Localisation : Nice</p>
            </ListGroupItem>
            
            <ListGroupItem className=' delivery__time-item border-0 ps-0'>
              <span>Téléphone: 07-83-47-77-00</span>
            </ListGroupItem>

            <ListGroupItem className=' delivery__time-item border-0'>
              <span>Email: example@gmail.com</span>
            </ListGroupItem>
          </ListGroup>
        </Col>
        
        <Col lg='3' md='4' sm='6'>
        <h5 className='footer__title'>Newsletter</h5>
        <p>Abonnez-vous à notre newsletter !</p>
        <div className='newsletter'>
          <input type="email" placeholder='Entrez-votre email' />
          <span>
            <i className="ri-send-plane-line"></i>
          </span>
        </div>
        </Col>

      </Row>

      <Row>
        <Col lg='6' md='6'>
          <p>Copyright - 2022, Site web développé par Aknanir nAth Yettura. 
            Tous droits reservés.</p>
        </Col>

        <Col lg='6' md='6'>
        <div className='social__links'>
          <p>Follow: </p>
          <span> <Link to='www.facebook.com'>
            <i className="ri-facebook-line"></i></Link> </span>

            <span> <Link to='www.github.com'>
            <i className="ri-github-line"></i></Link> </span>

            <span> <Link to='www.youtube.com'>
            <i className="ri-youtube-line"></i></Link> </span>

        </div>
        </Col>
      </Row>


    </Container>
  </footer>
}

export default Footer