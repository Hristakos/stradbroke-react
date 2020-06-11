import React from 'react';
import "./Customers.css"
import customers from './lib/customers';
export default function Customers() {
    return (
        <div className="heading"><h1>Customers</h1>
            <div className="customers">

                {customers.map(customer => (
                    <div className="customer-detail" key={customer.id}>
                        <img src={customer.img}></img>
                        <p>{customer.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
