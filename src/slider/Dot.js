//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { memo } from "react";
import Spacer from "./Spacer";

const dotColor = (dotId, slideId) => {
    let dotColor = "dot ";
    if (slideId === dotId) {
        if (dotId === 0) {
            dotColor += "red";
        }
        if (dotId === 1) {
            dotColor += "green";
        }
        if (dotId === 2) {
            dotColor += "blue";
        }
        if (dotId === 3) {
            dotColor += "yellow";
        }
    } else {
        dotColor += "white50"
    }
    return dotColor;
}
//===========================================
// DOT FUNCTIONAL COMPONENT
//===========================================
const Dot = ({ slideId, dotId }) => (

    <div className="row">
        {console.log("dot id = " + dotId)}
        <Spacer w={5} />
        <div className={dotColor(dotId, slideId)} />
        <Spacer w={5} />
    </div>
);

export default memo(Dot);
