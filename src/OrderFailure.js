import React from 'react';
import "./OrderFailure.css"
export default function OrderFailure(props) {
    return (

        <div className="order-failure-wrapper">


            {/* 
            <div class="screenAlert-icon screenAlert-warning scaleWarning">
                <span class="screenAlert-body pulseWarningIns"></span>
                <span class="screenAlert-dot pulseWarningIns"></span>
            </div>

            <div class="screenAlert-icon screenAlert-info scaleInfo">
                <span class="screenAlert-dot pulseInfoIns"></span>
                <span class="screenAlert-body pulseInfoIns"></span>
            </div>

            <div class="screenAlert-icon screenAlert-success animate">
                <span class="screenAlert-line screenAlert-tip animateSuccessTip"></span>
                <span class="screenAlert-line screenAlert-long animateSuccessLong"></span>
                <div class="screenAlert-placeholder"></div>
                <div class="screenAlert-fix"></div>
            </div> */}

            <div className="order-failure" style={{ display: props.navDisplay ? "none" : "grid" }}>

                <div class="screenAlert-icon screenAlert-error animate">
                    <span class="screenAlert-x-mark">
                        <span class="screenAlert-line screenAlert-left animateXLeft"></span>
                        <span class="screenAlert-line screenAlert-right animateXRight"></span>
                    </span>
                    <div class="screenAlert-placeholder"></div>
                    <div class="screenAlert-fix"></div>
                </div>
                <div className="order-failure-message">
                    Your request was not able to be processed at this time.
                    Please call <a href="tel:03 9305 3111">03 9305 3111 </a>
                    and a member of the team will be able to assist you with your enquiry.

                </div>
            </div>
        </div>
    )
}