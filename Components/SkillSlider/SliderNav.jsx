import Slider from "react-slick";
import "./slicks-theme.css";
import "./slicks.css";

const SliderNav = () => {
  const settingsOne = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  const settingsTwo = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  //   const innerSlider = {
  //     dots: false,
  //     infinite: false,
  //     arrows: true,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //   };
  //   const sliderFor = {
  //     dots: false,
  //     infinite: false,
  //     arrows: false,
  //     speed: 500,
  //     fade: true,
  //   };
  return (
    <>
      <div>
        <h2> Multiple items </h2>
        <Slider {...settingsOne} className="text-white">
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
      <div>
        <h2> Multiple items </h2>
        <Slider {...settingsTwo} className="text-white">
          <div className="h-[200px]">
            <h3 className="h-full bg-red-600">1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default SliderNav;
