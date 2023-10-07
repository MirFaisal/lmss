import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const FirstChoice = () => {
  const settingsTwo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <p>next</p>,
  };
  return (
    <>
      <div>
        <div className=" pt-24 max-w-screen-xl mx-auto">
          <div className="mb-10">
            <h2 className="text-5xl font-semibold text-center pt-10 pb-4 max-w-2xl mx-auto leading-[68px]">
              কেন আমরাই শিক্ষার্থী ও অভিভাবকগণের প্রথম পছন্দ?
            </h2>
          </div>
          <div>
            <Slider {...settingsTwo} className="dreamslide">
              <div>
                <Link className="flex justify-center w-full">
                  <div className="mx-3">
                    <div className="relative rounded-md bg-whitepy-10 py-8 px-6 border border-slate-200">
                      <i className="fa-solid fa-quote-left h-10 w-10 bg-red-100 flex justify-center items-center rounded-full text-red-500 absolute top-0 left-5 translate-y-[-50%]"></i>
                      <p className="text-[#444444]">
                        কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ
                        করে, “Reading” এবং “Writing” সেকশন এতটাই informative ছিল
                        যা আমার জন্য Mock Test এবং Real Exam কে সহজ করে তুলেছিল।
                        আমার সবচেয়ে ভালো লেগেছে “Writing Part”।
                      </p>
                      <div className="mt-6">
                        <h4 className="text-xl text-slate-900 font-bold ">
                          Mir Faisal
                        </h4>
                        <p className="text-sm text-slate-600">
                          Teaching Assistant, Innova Infoys
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="flex justify-center w-full">
                  <div className="mx-3">
                    <div className="relative rounded-md bg-whitepy-10 py-8 px-6 border border-slate-200">
                      <i className="fa-solid fa-quote-left h-10 w-10 bg-red-100 flex justify-center items-center rounded-full text-red-500 absolute top-0 left-5 translate-y-[-50%]"></i>
                      <p className="text-[#444444]">
                        কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ
                        করে, “Reading” এবং “Writing” সেকশন এতটাই informative ছিল
                        যা আমার জন্য Mock Test এবং Real Exam কে সহজ করে তুলেছিল।
                        আমার সবচেয়ে ভালো লেগেছে “Writing Part”।
                      </p>
                      <div className="mt-6">
                        <h4 className="text-xl text-slate-900 font-bold ">
                          Mir Faisal
                        </h4>
                        <p className="text-sm text-slate-600">
                          Teaching Assistant, Innova Infoys
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="flex justify-center w-full">
                  <div className="mx-3">
                    <div className="relative rounded-md bg-whitepy-10 py-8 px-6 border border-slate-200">
                      <i className="fa-solid fa-quote-left h-10 w-10 bg-red-100 flex justify-center items-center rounded-full text-red-500 absolute top-0 left-5 translate-y-[-50%]"></i>
                      <p className="text-[#444444]">
                        কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ
                        করে, “Reading” এবং “Writing” সেকশন এতটাই informative ছিল
                        যা আমার জন্য Mock Test এবং Real Exam কে সহজ করে তুলেছিল।
                        আমার সবচেয়ে ভালো লেগেছে “Writing Part”।
                      </p>
                      <div className="mt-6">
                        <h4 className="text-xl text-slate-900 font-bold ">
                          Mir Faisal
                        </h4>
                        <p className="text-sm text-slate-600">
                          Teaching Assistant, Innova Infoys
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="flex justify-center w-full">
                  <div className="mx-3">
                    <div className="relative rounded-md bg-whitepy-10 py-8 px-6 border border-slate-200">
                      <i className="fa-solid fa-quote-left h-10 w-10 bg-red-100 flex justify-center items-center rounded-full text-red-500 absolute top-0 left-5 translate-y-[-50%]"></i>
                      <p className="text-[#444444]">
                        কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ
                        করে, “Reading” এবং “Writing” সেকশন এতটাই informative ছিল
                        যা আমার জন্য Mock Test এবং Real Exam কে সহজ করে তুলেছিল।
                        আমার সবচেয়ে ভালো লেগেছে “Writing Part”।
                      </p>
                      <div className="mt-6">
                        <h4 className="text-xl text-slate-900 font-bold ">
                          Mir Faisal
                        </h4>
                        <p className="text-sm text-slate-600">
                          Teaching Assistant, Innova Infoys
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Slider>
          </div>

          <div className="bg-slate-950 flex justify-between py-8 px-16 rounded-2xl mt-10">
            <div>
              <h2 className="text-white text-3xl font-bold max-w-[500px] mt-5 leading-[48px]">
                সেরা শিক্ষকের তৈরি ক্লাস নোট এবং লেকচার শিট প্রয়োজন?
              </h2>
              <div className="bg-green-500 mt-4 py-3 w-56 flex justify-center items-center space-x-3 text-white rounded hover:bg-green-600">
                <span className="pt-1">ফ্রি ডাউনলোড করুন</span>
                <i class="fa-solid fa-download"></i>
              </div>
            </div>
            <div>
              <img
                className="h-44"
                src="./customAssets/notemain.png"
                alt="notemain.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstChoice;
