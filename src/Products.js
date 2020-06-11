import React from 'react';
import { Link } from 'react-router-dom'
import "./Products.css"

const products = [
    { name: "Business", imageName: "business.png" },
    { name: "Schools", imageName: "school.png" },
    { name: "Tradies", imageName: "tradie.png" },
    { name: "Promotions", imageName: "promotions.png" }
]
function Product(props) {
    console.log(props.type === props.name);

    return (
        <div className={props.type === props.name ? "product-wrapper selected" : "product-wrapper"}>
            <section className="icon">
                <div className="icon-product-image-size">
                    <img src={`/${props.imageName}`} />
                </div>
                <div className="icon-product-name">
                    <h1>{props.name}</h1>

                </div>
            </section>
        </div>
    )
}
export default function Products(props) {
    return (
        <div className="products-scrollable">
            {
                products.map((product, index) => (
                    <Link key={index} to={`/${product.name}`}>
                        <Product
                            name={product.name}
                            imageName={product.imageName}
                            type={props.type}
                        />
                    </Link>
                ))
            }
        </div>


    )
}
