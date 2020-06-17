import React from 'react';
import "./OrderSuccess.css"
export default function OrderSuccess(props) {
    return (
        <div className="order-success" style={{ display: props.navDisplay ? "none" : "block" }}>

            <h3><i class="fa fa-check-circle" aria-hidden="true" style={{ fontSize: "100px" }}>Success</i>Your request has been successfully placed. A member of the team will contact you shortly to discuss your request.</h3>
        </div>
    )
}