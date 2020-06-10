import React from 'react';
import OrderForm from './OrderForm';
import "./Order.css"
import { useLocation } from 'react-router-dom'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
export default function Order(props) {
    let query = useQuery();
    const type = query.get("type")
    const id = query.get("id")
    console.log(type)
    return (

        <div className="worko-tabs">

            <input className="state" type="radio" title="tab-four" name="tabs-state" id="tab-four" defaultChecked={type === "Promotions" ? true : false} />
            <input className="state" type="radio" title="tab-three" name="tabs-state" id="tab-three" defaultChecked={type === "Tradies" ? true : false} />
            <input className="state" type="radio" title="tab-two" name="tabs-state" id="tab-two" defaultChecked={type === "Schools" ? true : false} />
            <input className="state" type="radio" title="tab-one" name="tabs-state" id="tab-one" defaultChecked={type === "Business" ? true : false} />

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
                    <OrderForm id={id} />
                </div>
            </div>

        </div>

    )
}
