import { Link } from "react-router-dom";
import Slider from "react-slick";
import ClassItem from "../ClassItem/ClassItem";
import ClassGrupe from "../ClasssGrupe/ClassGrupe";
import "./classoverview.css";
const ClassesOverView = () => {
  // slider config

  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="class-wrapper max-w-screen-xl mx-auto py-16 md:rounded-2xl text-white">
          <h2 className="text-4xl text-center pb-5">
            অনলাইন ব্যাচে ভর্তি চলছে!
          </h2>
          <p className="text-center pb-5">
            শ্রেনি অনুযায়ী সপ্তাহে ৬-১০টি লাইভ ক্লাস, সাথে লেকচার শিট এবং নিয়মিত
            পরীক্ষার সুবিধা
          </p>

          {/* class grupe */}
          <ClassGrupe />

          <div className="text-center">
            <Link className="text-sm text-green-600" to={"/"}>
              অনলাইন ব্যাচ সম্পর্কে আরও জানুন{" "}
              <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </div>

          {/* skill development classes start*/}
          <div className="text my-10">
            <h2 className="my-4 text-5xl font-semibold text-center ">
              স্কিল ডেভেলপমেন্টের নির্দিষ্ট কোর্সে দারুণ ছাড়!
            </h2>
            <p className="my-3 text-center">
              পুরো মাস জুড়ে টেন মিনিট স্কুলের নির্দিষ্ট কোর্সসমূহ পেয়ে যান
              বিশেষ মূল্যে। এবার শেখার শুরু হোক টেন মিনিট স্কুলের সাথে!
            </p>
          </div>

          {/* skill development slider */}

          <div className="max-w-screen-lg mx-auto">
            <Slider {...config} className="skill-slider">
              <div className="card sm:px-2 md:px-3 lg:px-5">
                <ClassItem />
              </div>
              <div className="card">
                <ClassItem />
              </div>
              <div className="card">
                <ClassItem />
              </div>
              <div className="card">
                <ClassItem />
              </div>
              <div className="card">
                <ClassItem />
              </div>
              <div className="card">
                <ClassItem />
              </div>
            </Slider>
          </div>

          {/* skill development classes end*/}
        </div>
      </div>
    </>
  );
};

export default ClassesOverView;
