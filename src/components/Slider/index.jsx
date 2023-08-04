import { useState } from "react";
import box1 from "../../assets/images/box1.png";
import box2 from "../../assets/images/box2.png";
import box3 from "../../assets/images/box3.png";
import box4 from "../../assets/images/box4.png";
import box5 from "../../assets/images/box5.png";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import "./slider.scss";

export const Slider = () => {
  const [activeSlide, setactiveSlide] = useState(2);
  const [touches, settouches] = useState({ xDown: null, xUp: null });
  const next = () => activeSlide < 5 - 1 && setactiveSlide(activeSlide + 1);
  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    settouches({
      ...touches,
      xDown: firstTouch.clientX,
    });
  }

  function handleTouchEnd(evt) {
    const firstTouch = evt.changedTouches[0];
    settouches({
      ...touches,
      xUp: firstTouch.clientX,
    });
    if (touches.xDown > touches.xUp) {
      next();
    } else {
      prev();
    }
  }

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-500px) translateZ(-400px) rotateY(0deg)",
        zIndex: 9,
        filter: "blur(3px)",
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(500px) translateZ(-400px) rotateY(-0deg)",
        zIndex: 9,
        filter: "blur(3px)",
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-1200px) translateZ(-1000px) rotateY(0deg)",
        zIndex: 8,
        filter: "blur(7px)",
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(1200px) translateZ(-1000px) rotateY(0deg)",
        zIndex: 8,
        filter: "blur(7px)",
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
        filter: "blur(7px)",
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
        filter: "blur(7px)",
      };
  };

  return (
    <>
      <div
        className="slideC"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button className="sliderBtn prev" onClick={prev}>
          <TfiArrowCircleLeft size="2x" />
        </button>
        <button className="sliderBtn next" onClick={next}>
          <TfiArrowCircleRight size="2x" />
        </button>

        <div className="slide" style={getStyles(0)}>
          <img src={box1} />
          <div className={activeSlide == 0 ? "visible" : "hidden"}>
            Бронзовый сундук
          </div>
        </div>
        <div className="slide" style={getStyles(1)}>
          <img src={box2} />
          <div className={activeSlide == 1 ? "visible" : "hidden"}>
            Серебряный сундук
          </div>
        </div>
        <div className="slide" style={getStyles(2)}>
          <img src={box3} />
          <div className={activeSlide == 2 ? "visible" : "hidden"}>
            Золотой сундук
          </div>
        </div>
        <div className="slide" style={getStyles(3)}>
          <img src={box4} />
          <div className={activeSlide == 3 ? "visible" : "hidden"}>
            Платиновый сундук
          </div>
        </div>
        <div className="slide" style={getStyles(4)}>
          <img src={box5} />
          <div className={activeSlide == 4 ? "visible" : "hidden"}>
            Алмазный сундук
          </div>
        </div>
      </div>
    </>
  );
};