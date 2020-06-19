import React from 'react';
import Slider from "./slider/Slider.js"
import Products from './Products';

export default function Home(props) {

    return (
        <div className="middle-section">
            <Products />


            <div className="slider" style={props.hideSlider ? { display: "none" } : { display: "block" }}>
                <Slider
                    slide1={props.slide1}
                    slide2={props.slide2}
                    slides={props.slides}
                    currentId={props.currentId}
                    handleMount={props.handleMount}
                    handleUnmount={props.handleUnmount} />

            </div>
        </div>

    )
}