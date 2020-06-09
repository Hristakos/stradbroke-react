import React from 'react';
import OrderForm from './OrderForm';
import "./Order.css"



export default function Order() {

    return (

        <div className="worko-tabs">

            <input className="state" type="radio" title="tab-four" name="tabs-state" id="tab-four" />
            <input className="state" type="radio" title="tab-three" name="tabs-state" id="tab-three" />
            <input className="state" type="radio" title="tab-two" name="tabs-state" id="tab-two" />
            <input className="state" type="radio" title="tab-one" name="tabs-state" id="tab-one" />

            <div className="tabs flex-tabs">
                <label htmlFor="tab-one" id="tab-one-label" className="tab">Business</label>
                <label htmlFor="tab-two" id="tab-two-label" className="tab">Schools</label>
                <label htmlFor="tab-three" id="tab-three-label" className="tab">Tradies</label>
                <label htmlFor="tab-four" id="tab-four-label" className="tab">Promotions</label>


                <div id="tab-four-panel" className="panel">
                    promotions
                </div>
                <div id="tab-three-panel" className="panel">
                    tradies
            </div>
                <div id="tab-two-panel" className="panel">
                    schools
            </div>
                <div id="tab-one-panel" className="panel">
                    <OrderForm />
                </div>
            </div>

        </div>

    )
}
