import React, { useState, useEffect } from 'react';
import products from '../assets/fake-data/products';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';

import '../styles/product-details.css';

import productImg from '../assets/images/product_01.1.jpg';

const FoodDetails = () => {

  const [tab, setTab] = useState('desc');
  const {id} = useParams();

  const [previewImg, setPreviewImg] = useState(product.image01);
  const product = products.find(product=> product.id === id);

  return <Helmet title='Product-details'>
    <CommonSection title='product 01'/>

      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
            <div className='product__images'>
              <div className="img__item" onClick={() => setPreviewImg(product.image01)}>
                <img src={product.image01} alt="" className='w-100' />
              </div>
              
              <div className="img__item" onClick={() => setPreviewImg(product.image02)}>
                <img src={product.image02} alt="" className='w-100' />
              </div>
              
              <div className="img__item" onClick={() => setPreviewImg(product.image02)}>
                <img src={product.image03} alt="" className='w-100' />
              </div>

              </div>
            </Col>

            <Col lg='4' md='4'>
              <div className="product__main-img">
                <img src={previewImg} alt="" className='w-100' />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="single__product-content">
                <h2 className='product__title'>Pizza with mushroom</h2>
                <span className='product__price'>{" "}€</span>
                <p>Catégorie: <span>Burger</span></p>

                <button className='addTOCart__btn'>Add to Cart</button>
              </div>
            </Col>

            <Col lg='12'>
              <div className="tabs d-flex align-items-center gap-3 py-2">
                <h6 className='tab__active'>Description</h6>
                <h6>Review</h6>
              </div>

              <div className="tab__content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat enim, sequi libero dicta ratione iure nulla vero qui incidunt tenetur omnis labore optio perspiciatis recusandae rerum sapiente molestias voluptatibus aspernatur ab, nihil placeat repellat est adipisci. Quos, deserunt temporibus?</p>
              </div>

              <div className="tab__form mb-3">
                <div className="review">
                  <p className="user__name mb-0">Mosmos</p>
                  <p className="user__email">mosmosbylka@gmail.com</p>
                  <p className='review__text'>Great Product</p>
                </div>

                <div className="review">
                  <p className="user__name mb-0">Mosmos</p>
                  <p className="user__email">mosmosbylka@gmail.com</p>
                  <p className='review__text'>Great Product</p>
                </div>
                
                <form className='form'>
                  <div className="form__group">
                    <input type="text" placeholder='Entrez votre nom'/>
                  </div>

                  <div className="form__group">
                    <input type="text" placeholder='Entrez votre nom'/>
                  </div>

                  <div className="form__group">
                    <textarea rows={5} type="text" placeholder='Entrez votre nom'/>
                  </div>

                  <button type='submit' className='addTOCart__btn'>Submit</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  </Helmet>
}

export default FoodDetails