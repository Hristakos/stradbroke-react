import React from 'react';
import "./NavBar.css"

export default function NavBar(props) {

    return (
        <div className="nav-container">
            <input type="checkbox" id="check" onClick={props.onClick} />
            <label htmlFor="check" className="check-btn">
                <i className="fas fa-bars"></i>
            </label>
            <img src="stradbroke-printing-logo.svg" />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Order">Order</a></li>
                <li><a href="/Newsletter">Newsletter</a></li>
            </ul>

        </div>

    )

}
