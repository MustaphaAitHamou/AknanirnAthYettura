import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from '../../assets/images/res-logo.png';

import '../../styles/footer.css';

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
          <h5>Temps de livraison</h5>
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
        <Col lg='3' md='4' sm='6'></Col>
        <Col lg='3' md='4' sm='6'></Col>

      </Row>
    </Container>
  </footer>
}

export default Footer