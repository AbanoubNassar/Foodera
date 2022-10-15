import React from "react";
import "./Footer.css";

const Footer = () =>{
    return(
       <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ul className="ul-about">
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Forum</a></li>
                        <li><a href="#">affiliate</a></li>
                        <li><a href="#">faq</a></li>
                    </ul>
                </div>
                <div className="col-md-12">
                   <ul className="ul-social">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    </ul> 
                </div>
                <div className="col-md-12">
                    <p className="copyright">© 2021. Foodera. All rights reserved.</p>
                </div>
            </div>
        </div>
       </div> 
    )
}

export default Footer