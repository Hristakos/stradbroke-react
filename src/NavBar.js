import React from 'react';
import "./NavBar.css"

export default function NavBar(props) {

    return (
        <div className="nav-container">
            <img src="stradbroke-printing-logo.svg" />
            <a className="phone" href="tel:03 9305 3111">03 9305 3111</a>
            <input type="checkbox" id="check" onClick={props.onClick} />
            <label htmlFor="check" className="check-btn">
                <i className="fas fa-bars"></i>
            </label>

            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Order?type=Business&id=1" > Order</a></li>
                <li><a href="/Newsletter">Newsletter</a></li>
            </ul>

        </div>

    )

}
