import React from 'react';
import "./OrderSuccess.css"
export default function OrderSuccess(props) {
    return (
        <div className="order-success-wrapper">
            <div className="order-success" style={{ display: props.navDisplay ? "none" : "grid" }}>

                <div class="screenAlert-icon screenAlert-success animate">
                    <span class="screenAlert-line screenAlert-tip animateSuccessTip"></span>
                    <span class="screenAlert-line screenAlert-long animateSuccessLong"></span>
                    <div class="screenAlert-placeholder"></div>
                    <div class="screenAlert-fix"></div>
                </div>
                <div className="order-success-message">
                    Your request has been received. A member of the team contact you shortly to assist you with your enquiry.

                 </div>
            </div>
        </div>

    )
}