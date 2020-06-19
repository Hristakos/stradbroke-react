import React from 'react';
import "./NavBar.css"

export default function NavBar(props) {

    return (

        <div className="nav-container">

            <input type="checkbox" id="check" onClick={props.onClick} />
            <label htmlFor="check" className="check-btn">
                <i className="fas fa-bars"></i>
            </label>

            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact Us</a></li>
                <li><a href="/Order?type=Business&id=Brochures&image=/business/brochures.jpg" > Order</a></li>
                <li><a href="/Newsletter">Newsletter</a></li>
                <li><a href="/Customers">Customers</a></li>
            </ul>
            <div className="flip-x"><img src="/stradbroke-printing-logo.svg" /></div>





            <a className="phone" href="tel:03 9305 3111">9305 3111
            </a>
        </div>

    )

}
