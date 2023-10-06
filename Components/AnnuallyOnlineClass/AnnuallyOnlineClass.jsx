import { Link } from "react-router-dom";
import "./annuallyonlineClass.css";
const AnnuallyOnlineClass = () => {
  return (
    <>
      <div className="py-20">
        <div className="text flex justify-center">
          <h3 className=" text-lg font-semibold flex items-center text-[#fa5252]">
             <img
               className="me-2"
              width="25"
              height="25"
              src="https://img.icons8.com/fluency-systems-filled/48/FA5252/backpack.png"
              alt="backpack"
            />
            ক্লাস ৬-১০
          </h3>
        </div>
        <div className="max-w-screen-xl mx-auto h-full">
          <div className="text w-[600px] mx-auto">
            <h2 className="max-w-[600px] text-5xl font-semibold text-center pt-20 pb-8 leading-snug">
              বছর জুড়ে অনলাইন ব্যাচে কী কী থাকছে?
            </h2>
            <p className="text-center">
              সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক
              পড়াশুনার অগ্রযাত্রা
            </p>
          </div>
          <div className="flex justify-center py-10 space-x-5">
            {/* item 1 */}
            <Link>
              <div className="w-[400px] p-4 border rounded-md">
                <div className=" rounded-md overflow-hidden mb-4 relative">
                  <img
                    src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Flg%2Fimages%2Fthumb_01_1677411943238.jpeg&w=1080&q=75"
                    alt=""
                  />
                  <div className="play absolute w-20 h-20 flex justify-center items-center bg-neutral-100 rounded-full z-10">
                    <div className="w-10 h-10 bg-neutral-200 rounded-full flex justify-center items-center">
                      <i
                        className="fa-solid fa-play"
                        style={{ color: "#ff3333" }}
                      ></i>
                    </div>
                  </div>
                </div>
                <div className="text">
                  <h3 className="font-semibold text-lg pb-2">
                    সব বিষয়ের প্রতি অধ্যায়েই হবে ইচ্ছেমত অনুশীলন
                  </h3>
                  <p className="text-gray-600">
                    অনলাইন ব্যাচের লাইব্রেরীতে থাকছে সব বিষয়ের অধ্যায়-ভিত্তিক
                    প্রশ্ন অনুশীলনের সুযোগ।
                  </p>
                </div>
              </div>
            </Link>
            {/* item2 */}
            <Link>
              <div className="w-[400px] p-4 border rounded-md">
                <div className=" rounded-md overflow-hidden mb-4 relative">
                  <img
                    src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Flg%2Fimages%2Fthumb_01_1677411943238.jpeg&w=1080&q=75"
                    alt=""
                  />
                  <div className="play absolute w-20 h-20 flex justify-center items-center bg-neutral-100 rounded-full z-10">
                    <div className="w-10 h-10 bg-neutral-200 rounded-full flex justify-center items-center">
                      <i
                        className="fa-solid fa-play"
                        style={{ color: "#ff3333" }}
                      ></i>
                    </div>
                  </div>
                </div>
                <div className="text">
                  <h3 className="font-semibold text-lg pb-2">
                    সব বিষয়ের প্রতি অধ্যায়েই হবে ইচ্ছেমত অনুশীলন
                  </h3>
                  <p className="text-gray-600">
                    অনলাইন ব্যাচের লাইব্রেরীতে থাকছে সব বিষয়ের অধ্যায়-ভিত্তিক
                    প্রশ্ন অনুশীলনের সুযোগ।
                  </p>
                </div>
              </div>
            </Link>
            {/* item 3 */}
            <Link>
              <div className="w-[400px] p-4 border rounded-md">
                <div className=" rounded-md overflow-hidden mb-4 relative">
                  <img
                    src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Flg%2Fimages%2Fthumb_01_1677411943238.jpeg&w=1080&q=75"
                    alt=""
                  />
                  <div className="play absolute w-20 h-20 flex justify-center items-center bg-neutral-100 rounded-full z-10">
                    <div className="w-10 h-10 bg-neutral-200 rounded-full flex justify-center items-center">
                      <i
                        className="fa-solid fa-play"
                        style={{ color: "#ff3333" }}
                      ></i>
                    </div>
                  </div>
                </div>
                <div className="text">
                  <h3 className="font-semibold text-lg pb-2">
                    সব বিষয়ের প্রতি অধ্যায়েই হবে ইচ্ছেমত অনুশীলন
                  </h3>
                  <p className="text-gray-600">
                    অনলাইন ব্যাচের লাইব্রেরীতে থাকছে সব বিষয়ের অধ্যায়-ভিত্তিক
                    প্রশ্ন অনুশীলনের সুযোগ।
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <Link>
            <div className="flex justify-center mt-8">
              <div className="bg-green-500 py-3 w-56 flex justify-center items-center space-x-3 text-white rounded hover:bg-green-600">
                <span className="pt-1">আপনার ক্লাস বেছে নিন</span>
                <i className="fa-regular fa-chevron-right"></i>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AnnuallyOnlineClass;
