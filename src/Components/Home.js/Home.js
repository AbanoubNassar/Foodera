import React, { Fragment } from "react";
import "./Home.css";
import prideimg from "../../Images/food2.png";
import ingredientsimg from "../../Images/food1.png";
import testimonials1 from "../../Images/person1.jpg";
import testimonials2 from "../../Images/person2.jpg";
import Data from "../../Data";
import {Carousel} from "react-bootstrap";
import { Form } from "react-bootstrap";

const Home = ()=>{

    const blogitem = Data.map((item)=>{
        return(
            <div className="col-md-4">
                <div className="box">
                    <img src={item.img}/> 
                    <h5>{item.title}</h5>
                    <span>{item.time}</span>
                    <h6>{item.price}</h6> 
                </div>
                <button><a href="#">order now</a></button>
            </div>
        )
    })

    return(
       <Fragment>
            <section className="Numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>1287+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>5786+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>1440+</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>7110+</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pride">
                <div className="container">
                    <div className="row">
                        <div className="image col-sm-12 col-md-6">
                           <img src = {prideimg} title = "Prideimg" /> 
                        </div>
                        <div className="content col-sm-12 col-md-6">
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button><a href="#">learn more</a></button>
                        </div>
                    </div>
                </div>
            </section>
 
            <section className="ingredients">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                           <h2>We make everything by hand with the best possible ingredients.</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                           <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                            <li>purus a odio finibus bibendum.</li>
                           </ul>
                           <button><a href="#">learn more</a></button>
                        </div>
                        <div className="col-md-6">
                            <img src = {ingredientsimg} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="paralex">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                           <h2>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                           <a href="#"><i className="fa fa-play"></i>watch our story</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blogs">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                           <h2>Explore Our Foods</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        </div>
                    </div>
                    <div className="row">
                        {blogitem}
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                           <h2>testimonials</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="content col-lg-12 col-md-12">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={testimonials1}
                                    alt="First slide"
                                    />
                                    <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                                    <h4>Simab Dave - Web Designer</h4>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={testimonials2}
                                    alt="Second slide"
                                    />
                                      <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                                        <h4>Johnthan Doe - UX Designer</h4>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={testimonials1}
                                    alt="Third slide"
                                    />
                                     <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."</p>
                                    <h4>Maccy Doe - Front End</h4>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Questions">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                           <h2>Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="question col-sm-12 col-md-6">
                           <h3><span>~</span> Is Foodera Bread really baked fresh each day?</h3>
                           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="question col-sm-12 col-md-6">
                           <h3><span>~</span> Do you bake breads containing animal fats or products?</h3>
                           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="question col-sm-12 col-md-6">
                           <h3><span>~</span> Can I order your products online?</h3>
                           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="question col-sm-12 col-md-6">
                           <h3><span>~</span> When are you opening a shop near me?</h3>
                           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="background3 col-lg-12 col-md-12">
                        <div className="overlay"></div>
                        <div className="content">
                        <span>Baked fresh daily by bakers with passion.</span>
                        <button><a href="#">learn more</a></button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                           <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
                           <p>Limited time offer for this month. No credit card required.</p>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col-md-7 col-sm-12">
                                <input class="e-mail" placeholder="Email Address here" name="email" id="eaddress" data-validate="validate(required, email)" type="email"/>
                            </div>
                            <div className="col-md-5 col-sm-12">
                            <button class="btn btn-primary btn-block" type="submit">Subscribe</button>
                            </div>
                        </div>
                </div>
            </section>
            
       </Fragment>
    )
}

export default Home