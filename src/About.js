import React from 'react';
import Products from './Products';
import "./About.css"
export default function About(props) {
    return (
        <div className="middle-section">
            <div className="products-scrollable">
                <Products />
            </div >
            <div className="about-container">

                <div className="about-wrapper">

                    <section>
                        <h1>ABOUT STRADBROKE PRINTING GROUP</h1>
                        <p>We are an Australian owned and operated printing company.</p>
                        <p>We pride ourselves on our customer service and our professional attention to detail.</p>
                        <p>Our policy is simple – we strive to provide</p>
                        <p> The BIG 4</p>
                        <p><span>Quality Products</span></p>
                        <p><span>Personal Service</span></p>
                        <p><span>Competitive Pricing</span></p>
                        <p><span>On Time Delivery</span></p>


                    </section>
                    <section>
                        <h2>PRINTING SERVICES PROVIDED</h2>
                        <ul>
                            <li>General Offset Printing</li>
                            <li>Letterpress</li>
                            <li>Continuous</li>
                            <li>Raised – Embossing  - Foiling</li>
                            <li>High Speed Digital Printing</li>
                            <li>Artwork & Graphic Design</li>
                            <li>Full Range of Promotional Products</li>
                        </ul>

                    </section>
                    <p>100% Money Back Guarantee on all our goods and services.</p>

                    <p>YES WE PRINT IT</p>


                </div>
            </div >
        </div>
    )
}


