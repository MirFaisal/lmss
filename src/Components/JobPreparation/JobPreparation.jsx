import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Title from "../Titles/Title";
import CommonCardOne from "../Cards/CommonCard/CommonCardOne";
import Button from "../Extra/Button";

export const JobPreparation = () => {
  const settingsTwo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <p>next</p>,
  };
  return (
    <>
      <div>
        <div className=" pt-24  max-w-screen-xl mx-auto">
          <div className="text flex justify-center">
            <h3 className=" text-lg font-semibold flex items-center text-[#3b82f6]">
              <i className="fa-solid fa-briefcase text-xl text-[#7eaffd] mr-4"></i>
              চাকরি প্রস্তুতি
            </h3>
          </div>
          <div className="mb-10">
            <Title
              title={"সরকারি চাকরির সর্বোচ্চ প্রস্তুতি"}
              slogan={
                " বিসিএস কিংবা ব্যাংকে চাকরি - টার্গেট যেটাই হোক, সলিউশন এখানেই!"
              }
            />
          </div>
          <div>
            <Slider {...settingsTwo} className="dreamslider text-white">
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
            </Slider>
          </div>
          <Button text={"সকল কোর্স"} />
        </div>
      </div>
    </>
  );
};
