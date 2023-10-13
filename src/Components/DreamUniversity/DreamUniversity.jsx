import { Link } from "react-router-dom";
import Slider from "react-slick";
import Title from "../Titles/Title";
import CommonCardOne from "../Cards/CommonCard/CommonCardOne";
import Button from "../Extra/Button";
import TitleTag from "../Titles/TitleTag";

const DreamUniversity = () => {
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
      <div className="dreamuniversity">
        <div className=" pt-24 pb-32 max-w-screen-xl mx-auto">
          <TitleTag
            tag={"ভর্তি পরীক্ষা"}
            icon={
              "https://img.icons8.com/ios-glyphs/30/c68de3/graduation-cap--v1.png"
            }
            color={"#c056f5"}
          />
          <Title
            title={"স্বপ্নের ভার্সিটির সম্পূর্ণ প্রস্তুতি"}
            slogan={
              "ইঞ্জিনিয়ারিং-মেডিকেল কিংবা ভার্সিটি-গুচ্ছ - লক্ষ্য যাই হোক, অর্জনের পথ এখানেই।"
            }
          />
          <div className="mt-7">
            <Slider {...settingsTwo} className="dreamslider text-white">
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
              <CommonCardOne />
            </Slider>
          </div>
          <div className="flex justify-center mt-12">
            <Button text={"সকল কোর্স"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DreamUniversity;