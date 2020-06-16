//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { memo } from "react";
import { Link } from 'react-router-dom'

//===========================================
// STYLES OBJECT
//===========================================
const s = {
    container: "abs fullW fullH",
    slideImage: "fullH fullW imgCover"
};

//===========================================
// SLIDE FUNCTIONAL COMPONENT
//===========================================
const Slide = ({ position, transition, image, link }) => {
    return (
        <div className={s.container + " " + position + " " + transition}>
            <Link to={`${link}`}><img src={image} className={s.slideImage} alt="slide" /></Link>
        </div>
    );
};

export default memo(Slide);
