// import images
import { images } from '../assets/slide/slideData';
// import style
import '../assets/styles/Components/Slider.scss';
// import rest
import { useState } from 'react';

export default function Slider(): JSX.Element {
  const [current, setCurrent] = useState<number>(0);

  const handelClick = (): void => {
    if ((current + 1) === images.length) {
      setCurrent(0);
    }
    else {
      setCurrent(current + 1);
    }
  }

  return (
    <div className="slider">
      <div className="slider__inner">
        <div className="container">
          <div className="slider__row">
            {
              images.map((prop, index) => {
                if (index === current) {
                  return prop;
                }
              })
            }
            <img src="./img/arrow.png" alt="arrow button" onClick={handelClick} height={35} width={35} className="slider__button" />
          </div>
        </div>
      </div>
    </div>
  )
}
