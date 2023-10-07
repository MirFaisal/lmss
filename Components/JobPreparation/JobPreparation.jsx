import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

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
            <h2 className="text-5xl font-semibold text-center pt-10 pb-4">
              সরকারি চাকরির সর্বোচ্চ প্রস্তুতি
            </h2>
            <p className="text-center text-base text-slate-600">
              বিসিএস কিংবা ব্যাংকে চাকরি - টার্গেট যেটাই হোক, সলিউশন এখানেই!
            </p>
          </div>
          <div>
            <Slider {...settingsTwo} className="dreamslider text-white">
              <div>
                <Link className="flex justify-center w-full">
                  <div className="w-[300px] overflow-hidden rounded-md ">
                    <div className=" relative">
                      <img
                        src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
                        alt=""
                      />
                    </div>
                    <div className="text h-[100px] flex flex-col justify-between bg-white p-4  border-x border-b border-gray-300 rounded-ee-md ">
                      <h3 className="font-bold text-lg pb-2 text-slate-950">
                        ব্যাংক জবস প্রশ্ন সমাধান
                      </h3>
                      <p className="text-green-600 text-sm">
                        বিস্তারিত{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="flex justify-center w-full">
                  <div className="w-[300px] overflow-hidden rounded-md ">
                    <div className=" relative">
                      <img
                        src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
                        alt=""
                      />
                    </div>
                    <div className="text h-[100px] flex flex-col justify-between bg-white p-4  border-x border-b border-gray-300 rounded-ee-md ">
                      <h3 className="font-bold text-lg pb-2 text-slate-950">
                        ব্যাংক জবস কোর্স
                      </h3>
                      <p className="text-green-600 text-sm">
                        বিস্তারিত{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="flex justify-center w-full">
                  <div className="w-[300px] overflow-hidden rounded-md ">
                    <div className=" relative">
                      <img
                        src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
                        alt=""
                      />
                    </div>
                    <div className="text h-[100px] flex flex-col justify-between bg-white p-4  border-x border-b border-gray-300 rounded-ee-md ">
                      <h3 className="font-bold text-lg pb-2 text-slate-950">
                        HSC 25 অনলাইন ব্যাচ
                      </h3>
                      <p className="text-green-600 text-sm">
                        বিস্তারিত{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="flex justify-center w-full">
                  <div className="w-[300px] overflow-hidden rounded-md ">
                    <div className=" relative">
                      <img
                        src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
                        alt=""
                      />
                    </div>
                    <div className="text h-[100px] flex flex-col justify-between bg-white p-4  border-x border-b border-gray-300 rounded-ee-md ">
                      <h3 className="font-bold text-lg pb-2 text-slate-950">
                        ব্যাংক জবস কোর্স
                      </h3>
                      <p className="text-green-600 text-sm">
                        বিস্তারিত{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="flex justify-center w-full">
                  <div className="w-[300px] overflow-hidden rounded-md ">
                    <div className=" relative">
                      <img
                        src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
                        alt=""
                      />
                    </div>
                    <div className="text h-[100px] flex flex-col justify-between bg-white p-4  border-x border-b border-gray-300 rounded-ee-md ">
                      <h3 className="font-bold text-lg pb-2 text-slate-950">
                        HSC 25 অনলাইন ব্যাচ
                      </h3>
                      <p className="text-green-600 text-sm">
                        বিস্তারিত{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="flex justify-center w-full">
                  <div className="w-[300px] overflow-hidden rounded-md ">
                    <div className=" relative">
                      <img
                        src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
                        alt=""
                      />
                    </div>
                    <div className="text h-[100px] flex flex-col justify-between bg-white p-4  border-x border-b border-gray-300 rounded-ee-md ">
                      <h3 className="font-bold text-lg pb-2 text-slate-950">
                        ব্যাংক জবস কোর্স
                      </h3>
                      <p className="text-green-600 text-sm">
                        বিস্তারিত{" "}
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </Slider>
          </div>
          <div className="flex justify-center mt-12">
            <div className="bg-green-500 py-3 w-56 flex justify-center items-center space-x-3 text-white rounded hover:bg-green-600">
              <span className="pt-1">সকল কোর্স</span>
              <i className="fa-regular fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
