import { Link } from "react-router-dom";
import Slider from "react-slick";

const SliderNav = () => {
  const settingsOne = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
  };
  const settingsTwo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
            <div className="py-4 px-3 bg-slate-800 rounded-lg mx-2 border border-transparent hover:border-green-500 duration-300">
              <p className="text-lg text-slate-200">
                Language Learning Courses
              </p>
              <p className="text-xs text-slate-400">10 Courses</p>
            </div>
          </div>
          <div>
            <div className="py-4 px-3 bg-slate-800 rounded-lg mx-2 border border-transparent hover:border-green-500 duration-300">
              <p className="text-lg text-slate-200">Language Courses</p>
              <p className="text-xs text-slate-400">10 Courses</p>
            </div>
          </div>
          <div>
            <div className="py-4 px-3 bg-slate-800 rounded-lg mx-2 border border-transparent hover:border-green-500 duration-300">
              <p className="text-lg text-slate-200">Language Courses</p>
              <p className="text-xs text-slate-400">10 Courses</p>
            </div>
          </div>
          <div>
            <div className="py-4 px-3 bg-slate-800 rounded-lg mx-2 border border-transparent hover:border-green-500 duration-300">
              <p className="text-lg text-slate-200">
                Language Learning Courses
              </p>
              <p className="text-xs text-slate-400">10 Courses</p>
            </div>
          </div>
          <div>
            <div className="py-4 px-3 bg-slate-800 rounded-lg mx-2 border border-transparent hover:border-green-500 duration-300">
              <p className="text-lg text-slate-200">Courses</p>
              <p className="text-xs text-slate-400">10 Courses</p>
            </div>
          </div>
          <div>
            <div className="py-4 px-3 bg-slate-800 rounded-lg mx-2 border border-transparent hover:border-green-500 duration-300">
              <p className="text-lg text-slate-200">
                Language Learning Courses
              </p>
              <p className="text-xs text-slate-400">10 Courses</p>
            </div>
          </div>
          <div>
            <div className="py-4 px-3 bg-slate-800 rounded-lg mx-2 border border-transparent hover:border-green-500 duration-300">
              <p className="text-lg text-slate-200">
                Language Learning Courses
              </p>
              <p className="text-xs text-slate-400">10 Courses</p>
            </div>
          </div>
        </Slider>
      </div>
      <div>
        <h2> Multiple items </h2>
        <Slider {...settingsTwo} className="text-white">
          <div>
            <Link className="flex justify-center w-full">
              <div className="w-[300px] overflow-hidden   border border-transparent rounded-md hover:border-green-500">
                <div className=" relative">
                  <img
                    src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
                    alt=""
                  />
                </div>
                <div className="text h-[100px] flex flex-col justify-between bg-slate-800 p-4">
                  <h3 className="font-semibold text-lg pb-2">
                    HSC 25 অনলাইন ব্যাচ
                  </h3>
                  <p className="text-green-600 font-semibold text-xl">
                    <span>$</span> 4500
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link className="flex justify-center w-full">
              <div className="w-[300px] overflow-hidden   border border-transparent rounded-md hover:border-green-500">
                <div className=" relative">
                  <img
                    src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
                    alt=""
                  />
                </div>
                <div className="text h-[100px] flex flex-col justify-between bg-slate-800 p-4">
                  <h3 className="font-semibold text-lg pb-2">
                    HSC 25 অনলাইন ব্যাচ
                  </h3>
                  <p className="text-green-600 font-semibold text-xl">
                    <span>$</span> 4500
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link className="flex justify-center w-full">
              <div className="w-[300px] overflow-hidden   border border-transparent rounded-md hover:border-green-500">
                <div className=" relative">
                  <img
                    src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
                    alt=""
                  />
                </div>
                <div className="text h-[100px] flex flex-col justify-between bg-slate-800 p-4">
                  <h3 className="font-semibold text-lg pb-2">
                    HSC 25 অনলাইন ব্যাচ
                  </h3>
                  <p className="text-green-600 font-semibold text-xl">
                    <span>$</span> 4500
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link className="flex justify-center w-full">
              <div className="w-[300px] overflow-hidden   border border-transparent rounded-md hover:border-green-500">
                <div className=" relative">
                  <img
                    src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
                    alt=""
                  />
                </div>
                <div className="text h-[100px] flex flex-col justify-between bg-slate-800 p-4">
                  <h3 className="font-semibold text-lg pb-2">
                    HSC 25 অনলাইন ব্যাচ
                  </h3>
                  <p className="text-green-600 font-semibold text-xl">
                    <span>$</span> 4500
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link className="flex justify-center w-full">
              <div className="w-[300px] overflow-hidden   border border-transparent rounded-md hover:border-green-500">
                <div className=" relative">
                  <img
                    src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
                    alt=""
                  />
                </div>
                <div className="text h-[100px] flex flex-col justify-between bg-slate-800 p-4">
                  <h3 className="font-semibold text-lg pb-2">
                    HSC 25 অনলাইন ব্যাচ
                  </h3>
                  <p className="text-green-600 font-semibold text-xl">
                    <span>$</span> 4500
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
      <div>
        <Link>
          <div className="flex justify-center mt-8">
            <div className="bg-green-500 py-3 w-56 flex justify-center items-center space-x-3 text-white rounded hover:bg-green-600">
              <span className="pt-1">সকল কোর্স</span>
              <i className="fa-regular fa-chevron-right"></i>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SliderNav;
