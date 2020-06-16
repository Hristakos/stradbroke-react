//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { memo } from "react";
import Dot from "./Dot";

//===========================================
// STYLE OBJECT
//===========================================
const s = {
    containerBottom: "fullW height70 abs bot0 fCenter black50",
    containerTop: "fullW height70 abs top0 fCenter black50"
};

//===========================================
// DOTS FUNCTIONAL COMPONENT
//===========================================
const Dots = ({ slideId, slides, position }) => {
    return (
        <div className={position === "top" ? s.containerTop : s.containerBottom}>
            <div className="row">
                {slides.map((slide, id) => (
                    <Dot slideId={slideId} dotId={id} key={id} />
                ))}
            </div>
        </div>
    );
};

export default memo(Dots);
