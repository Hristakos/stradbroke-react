import React from 'react';
import ProductDetail from './ProductDetail';
export default function ProductDisplay(props) {

    return (

        <ProductDetail navDisplay={props.navDisplay} type={props.type} id={props.id} img={props.img} name={props.name} />

    )
}