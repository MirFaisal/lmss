import { Link } from "react-router-dom";

const SscAndHsc = () => {
  return (
    <>
      <div className="py-20">
        <div className="text flex justify-center">
          <h3 className=" text-lg font-semibold flex items-center text-[#228BE6]">
            <img
              className="me-2"
              width="25"
              height="25"
              src="https://img.icons8.com/fluency-systems-filled/96/228BE6/backpack.png"
              alt="backpack"
            />
            SSC & HSC
          </h3>
        </div>
        <div className="max-w-screen-xl mx-auto h-full">
          <div className="text w-[600px] mx-auto">
            <h2 className="max-w-[600px] text-5xl font-semibold text-center pt-20 pb-8 leading-snug">
              SSC ও HSC শিক্ষার্থীদের জন্য
            </h2>
          </div>
          <div className="flex justify-center py-10 space-x-7">
            {/* item 1 */}
            <Link>
              <div className="w-[300px] p-4 border rounded-md hover:border-green-500">
                <div className=" rounded-md overflow-hidden mb-4 relative">
                  <img
                    src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
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
                <div className="text mt-5 h-[100px] flex flex-col justify-between">
                  <h3 className="font-semibold text-lg pb-2">
                    HSC 25 অনলাইন ব্যাচ
                  </h3>
                  <p className="text-green-600 font-semibold text-xl">
                    <span>$</span> 4500
                  </p>
                </div>
              </div>
            </Link>
            {/* item2 */}
            <Link>
              <div className="w-[300px] p-4 border rounded-md hover:border-green-500">
                <div className=" rounded-md overflow-hidden mb-4 relative">
                  <img
                    src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
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
                <div className="text mt-5 h-[100px] flex flex-col justify-between">
                  <h3 className="font-semibold text-lg pb-2">
                    HSC 25 অনলাইন ব্যাচ
                  </h3>
                  <p className="text-green-600 font-semibold text-xl">
                    <span>$</span> 4500
                  </p>
                </div>
              </div>
            </Link>
            {/* item 3 */}
            <Link>
              <div className="w-[300px] p-4 border rounded-md  hover:border-green-500">
                <div className=" rounded-md overflow-hidden mb-4 relative">
                  <img
                    src="https://10minuteschool.com/_next/image/?url=https%3A%2F%2Fcdn.10minuteschool.com%2Fmd%2Fimages%2Fk-12-courses%2Fhsc_25_ob.jpeg&w=384&q=75"
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
                <div className="text mt-5 h-[100px] flex flex-col justify-between">
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
        </div>
        {/* button */}
        {/* <div>
          <Link>
            <div className="flex justify-center mt-8">
              <div className="bg-green-500 py-3 w-56 flex justify-center items-center space-x-3 text-white rounded hover:bg-green-600">
                <span className="pt-1">আপনার ক্লাস বেছে নিন</span>
                <i className="fa-regular fa-chevron-right"></i>
              </div>
            </div>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default SscAndHsc;
