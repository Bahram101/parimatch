import { useState } from "react";
import box1 from "../assets/images/box1.png";
import box2 from "../assets/images/box2.png";
import box3 from "../assets/images/box3.png";
import box4 from "../assets/images/box4.png";
import box5 from "../assets/images/box5.png";
import "./styles.css";

const data = [
  { imgUrl: `${box1}` },
  { imgUrl: `${box2}` },
  { imgUrl: `${box3}` },
  { imgUrl: `${box4}` },
  { imgUrl: `${box5}` },
];
export const Slider = () => {
  const [activeSlide, setactiveSlide] = useState(2);
  const [touches, settouches] = useState({ xDown: null, xUp: null });

  const next = () =>
    activeSlide < data.length - 1 && setactiveSlide(activeSlide + 1);

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
        transform: "translateX(-400px) translateZ(-400px) rotateY(0deg)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(400px) translateZ(-400px) rotateY(-0deg)",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-900px) translateZ(-900px) rotateY(0deg)",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(900px) translateZ(-700px) rotateY(0deg)",
        zIndex: 8,
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };
  };

  return (
    <>
      <div
        className="slideC"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {data.map((item, i) => (
          <div className="slide" style={getStyles(i)} key={item}>
            <img src={item.imgUrl} />
          </div>
        ))}
      </div>

      <div style={{ paddingTop: 80 }} />
      <button onClick={next}>NEXT</button>
      <button onClick={prev}>PREV</button>
    </>
  );
};
