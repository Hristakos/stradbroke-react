import React from 'react';
import "./OrderFailure.css"
export default function OrderFailure(props) {
    return (
        <div className="order-failure center" style={{ display: props.navDisplay ? "none" : "block" }}>
            <h3><i class="fa fa-exclamation-triangle" aria-hidden="true" style={{ fontSize: "100px", color: "yellow" }}></i>Your request was not able to be placed at this time. Please give us a call on 03305 3111 and a member of our team will be able to assist you with your order.</h3>
        </div>
    )
}