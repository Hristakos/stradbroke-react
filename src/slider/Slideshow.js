//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { Component } from "react";
import Slide from "./Slide";
import Dots from "./Dots";



//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
    container: "fullW fullH rel overflowH",
    onScreen: "left0",
    offScreenRight: "left100vw",
    offScreenLeft: "leftM100vw",
    transition: "transition1l"
};

//===========================================
// SLIDESHOW COMPONENT
//===========================================
class Slideshow extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         slide1: {
    //             id: 0,
    //             position: s.onScreen,
    //             transition: true
    //         },
    //         slide2: {
    //             id: 1,
    //             position: s.offScreenRight,
    //             transition: true
    //         },
    //         currentId: 0
    //     };
    // }

    // componentDidMount() {
    //     this.startCarousel();
    // }

    // componentWillUnmount() {
    //     clearInterval(this.carouselInterval);
    // }

    // startCarousel = () => {
    //     this.carouselInterval = setInterval(() => {
    //         this.transitionSlides();
    //     }, 8000);
    // };

    // setSlideState = (slide1, slide2, currentId) => {
    //     this.setState({
    //         slide1: slide1,
    //         slide2: slide2,
    //         currentId: currentId
    //     });
    // };

    // transitionSlides = () => {
    //     const { slide1, slide2 } = this.state;
    //     let currentId;
    //     if (slide1["position"] === s.onScreen) {
    //         slide1["position"] = s.offScreenLeft;
    //         slide2["position"] = s.onScreen;
    //         currentId = slide2.id;
    //     } else {
    //         slide1["position"] = s.onScreen;
    //         slide2["position"] = s.offScreenLeft;
    //         currentId = slide1.id;
    //     }
    //     this.setSlideState(slide1, slide2, currentId);
    //     setTimeout(() => {
    //         this.resetSlideOffScreen();
    //     }, 1000);
    // };

    // resetSlideOffScreen = () => {
    //     const { slide1, slide2, currentId } = this.state;
    //     const { slides } = this.props;
    //     if (slide1["position"] === s.offScreenLeft) {
    //         slide1["transition"] = false;
    //         slide1["position"] = s.offScreenRight;
    //         slide1["id"] = slide2.id + 1 === slides.length ? 0 : slide2.id + 1;
    //     } else {
    //         slide2["transition"] = false;
    //         slide2["position"] = s.offScreenRight;
    //         slide2["id"] = slide1.id + 1 === slides.length ? 0 : slide1.id + 1;
    //     }
    //     this.setSlideState(slide1, slide2, currentId);
    //     this.resetSlideTransitions(slide1, slide2, currentId);
    // };

    // resetSlideTransitions = (slide1, slide2, currentId) => {
    //     setTimeout(() => {
    //         slide1["transition"] = true;
    //         slide2["transition"] = true;
    //         this.setSlideState(slide1, slide2, currentId);
    //     }, 500);
    // };

    render() {
        const { slide1, slide2, currentId } = this.props;
        const { slides } = this.props;
        return (
            <div className={"printer-container"}>


                <div className="printer">

                    <div className={s.container}>
                        <Dots position="top" slideId={currentId} slides={slides} />
                        <Slide
                            image={slides[slide1.id]}
                            position={slide1.position}
                            transition={slide1.transition ? s.transition : ""}
                            link={slide1.link}
                        />
                        <Slide
                            image={slides[slide2.id]}
                            position={slide2.position}
                            transition={slide2.transition ? s.transition : ""}
                            link={slide2.link}
                        />
                        <Dots position="bottom" slideId={currentId} slides={slides} />
                    </div>
                    <div className="printer-head-container">

                        <div className={`roller-top spin${currentId}`}>
                            <div className="semi-cirlce-top">

                            </div>
                            <div className="semi-cirlce-bottom">

                            </div>
                            <div className="roller-pin">

                            </div>
                        </div>

                        <div className={`roller-bottom spin${currentId}`}>
                            <div className="semi-cirlce-top">

                            </div>
                            <div className="semi-cirlce-bottom">

                            </div>
                            <div className="roller-pin">

                            </div>
                        </div>
                        <div className="printer-head">
                            <div className="display">
                                <div className={`display-text flip${currentId}`}>
                                    <div className="text-rotate">
                                        <p>Printing Page</p>
                                        <p>{currentId + 1} of 4</p>

                                    </div>
                                </div>
                            </div>
                            <div className="keypad">
                                <div className="button">1</div>
                                <div className="button">2</div>
                                <div className="button">3</div>
                                <div className="button">4</div>
                                <div className="button">5</div>
                                <div className="button">6</div>
                                <div className="button">7</div>
                                <div className="button">8</div>
                                <div className="button">9</div>
                                <div className="button">*</div>
                                <div className="button">0</div>
                                <div className="button">#</div>
                                <div className="button red"></div>
                                <div className="button yellow"></div>
                                <div className="button green"></div>


                            </div>
                        </div>



                    </div>
                </div>
            </div>
        );
    }
}

export default Slideshow;
