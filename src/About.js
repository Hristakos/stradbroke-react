import React from 'react';
import Products from './Products';
import "./About.css"
export default function About(props) {
    return (
        <div className="middle-section">
            <div className="products-scrollable">
                <Products />
            </div >
            <div className="about-wrapper">
                <h1>About</h1>
                <section>
                    <h2>Heading 1</h2>
                    <p>We, at Stradbroke Printing Group are a family owned business and have been in the printing industry for more than 15 years.
                    During this time, we have progressed from a very small print shop to our new larger factory here in Somerton, Victoria.
                    Our clients, many of whom have been with us right throughout the decade, vary from the very small one-man businesses to very large corporate companies. Most of our dedicated staff have been with us for many of those years and they are all experienced people in their fields.</p>

                </section>
                <section>
                    <h2>Our Graphic Art / Design Department offers</h2>
                    <p>Our Graphics Staff are fully conversant with all the latest technology, boasting cs4 technology, along with CTP and High Speed Digital Equipment.
                    We are able to work with you from scratch - hard copy or disk we can typeset, layout and design your document.
                    This is Stradbroke Printing Group's Graphics Department and we are here to help you.</p>
                </section>
                <section>
                    <h2>Heading 3</h2>
                    <p>lkfdsalsfdklsfdklkdflkldka'kdnvknvkdvndkdanvdkdks
                    sdvlknjdnlkknlvklk'''andvkldnnlnnlnlknkknnakkk
            </p>
                </section>
                <section>
                    <h2>Heading 4</h2>
                    <p>lkfdsalsfdklsfdklkdflkldka'kdnvknvkdvndkdanvdkdks
                    sdvlknjdnlkknlvklk'''andvkldnnlnnlnlknkknnakkk
            </p>
                </section>
            </div>
        </div >

    )
}


