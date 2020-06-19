import React from 'react';
import "./ContactDetails.css"
export default function ContactDetails() {

    return (
        <div className="contact-details-wrapper">

            <div className="contact-details">

                <div className="contact-phone"><a href="tel:03 9305 3111">9305 3111</a></div>
                <div className="contact-email"><a href="mailto:admin@stradbrokeprinting.com.au">admin@stradbrokeprinting.com.au</a></div>
                <div className="contact-address">76 Hume Highway Somerton vic 3062</div>
            </div>
        </div>
    )
}
