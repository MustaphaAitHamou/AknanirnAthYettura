import React, {useState, useEffect} from 'react'

import Helmet from '../components/Helmet/Helmet.js';
import { Container, Row, Col } from "reactstrap";

import heroImg from '../assets/images/hero.png'
import '../styles/hero-section.css';

import { Link } from 'react-router-dom';

import Category from '../components/UI/category/Category.jsx';

import '../styles/home.css';

import featureImg01 from '../assets/images/service-01.png'
import featureImg02 from '../assets/images/service-02.png'
import featureImg03 from '../assets/images/service-03.png'

import products from '../assets/fake-data/products.js';

import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg03 from '../assets/images/bread.png';

import ProductCard from '../components/UI/product-card/ProductCard.jsx';




const featureData = [
    {
        title: 'Quick Delivery',
        imgUrl: featureImg01,
        desc: "Lorem ipsum",
    },

    {
        title: 'Super Dine In',
        imgUrl: featureImg02,
        desc: "Lorem ipsum",
    },

    {
        title: 'Easy Pick Up',
        imgUrl: featureImg03,
        desc: "Lorem ipsum",
    }
]

const Home = () => {

    const [category, setCategory] = useState('ALL')
    const [allProducts, setAllProducts] = useState(products)

    useEffect(()=>{
        if(category === 'ALL'){
            setAllProducts(products)
        }
        if(category === 'BURGER'){
            const filteredProducts = products.filter(item=> item.category === 'Burger')

            setAllProducts(filteredProducts)
        }
        if(category === 'PIZZA'){
            const filteredProducts = products.filter(item=> item.category === 'Pizza')

            setAllProducts(filteredProducts)
        }
        if(category === 'BREAD'){
            const filteredProducts = products.filter(item=> item.category === 'Burger')

            setAllProducts(filteredProducts)
        }
    },[category])

return <Helmet title='Home'>
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <h5 className='mb-3'>Le moyen le plus facile pour passer commande</h5>
                            <h1 className='mb-4 hero__title'><span>T'as faim et t'as pas beaucoup d'argent ?</span> La Hesserie est là pour toi ! <span>Des repas pas chers à ta porte</span></h1>

                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veniam sequi eos, temporibus voluptatibus accusamus dicta </p>

                            <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                                <button className='order__btn d-flex align-items-center justify-content-between'>
                                    Commander maintenant
                                    <i className="ri-arrow-right-s-line"></i>
                                </button>

                                <button className='all__foods-btn'><Link to="/foods">See all foods</Link></button>
                            </div>

                            <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                                <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i className="ri-car-line"></i></span>
                                    No shipping charge</p>

                                <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i className="ri-shield-check-line"></i></span>
                                    Paiement 100% sécurisé</p>
                            </div>

                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt="hero-img" className='w-100' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='pt-0'>
            <Category />
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12' className='text-center' >
                        <h5 className='feature__subtitle mb-4'>Ce que nous servons</h5>
                        <h2 className='feature__title'>Reste juste chez toi</h2>
                        <h2 className='feature__title'>On va 
                        <span>s'en occuper</span>
                        </h2>
                        <p className='mb-1 mt-4 feature__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, nemo!</p>
                        <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, est.{" "}</p>
                    </Col>

                    {
                        featureData.map((item, index)=>(
                            <Col lg='4' md='4' key={index} className='feature__item text-center'>
                                <div className="feature__item text-center px-5 py-3">
                                    <img src={item.imgUrl} alt="feature__img" className='w-25 mb-3' />
                                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))
                    }

                    <Col lg='4' md='4'>
                        <div className="feature__item">


                        </div>
                    </Col>

                  
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h2>Popular Foods</h2>
                    </Col>

                    <Col lg='12'>
                        <div className="food__category d-flex align-items-center justify-content-center gap-4">
                            <button className='all_btn foodBtnActive' onClick={()=>
                            setCategory('ALL')}>All</button>

                            <button className='d-flex align-items-center gap-2' onClick={()=>
                            setCategory('BURGER')}><img src={foodCategoryImg01} alt="" />Burger</button>
                            
                            <button className='d-flex align-items-center gap-2'onClick={()=>
                            setCategory('PIZZA')}><img src={foodCategoryImg02} alt="" />Pizza</button>
                            
                            <button className='d-flex align-items-center gap-2'onClick={()=>
                            setCategory('BREAD')}><img src={foodCategoryImg03} alt="" />Pain</button>
                        </div>
                    </Col>

                {allProducts.map(item=>(
                    <Col lg='3' md='4' key={item.id} className='mt-5'>
                        <ProductCard item={item}/>
                    </Col> 
                    ))}

                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Home;