import ConnectedBrand from "../ConnectedBrand/ConnectedBrand";
import SliderNav from "../SkillSlider/SliderNav";

const Skills = () => {
  return (
    <>
      <div className="max-w-screen-xl py-20 mx-auto">
        <div className="text flex justify-center">
          <h3 className=" text-lg font-semibold flex items-center text-[#FAB005]">
            <img
              className="me-2"
              width="28"
              height="28"
              src="https://img.icons8.com/ios-filled/28/FAB005/rocket.png"
              alt="rocket"
            />
            স্কিলস
          </h3>
        </div>
        <div className="text w-[700px] mx-auto text-center py-2 text-white">
          <h2 className="text-4xl font-semibold py-2">
            দেশসেরা স্কিল ডেভেলপমেন্ট প্লাটফর্ম
          </h2>
        </div>
        <div className="flex justify-between w-[600px] mx-auto px-7">
          <div className="flex items-center">
            <i
              className="fa-solid fa-circle-check me-3"
              style={{ color: "#6d9cee" }}
            ></i>
            <p className="text-white">দেশসেরা শিক্ষক</p>
          </div>
          <div className="flex items-center">
            <i
              className="fa-solid fa-circle-check me-3"
              style={{ color: "#6d9cee" }}
            ></i>
            <p className="text-white">দেশসেরা শিক্ষক</p>
          </div>
          <div className="flex items-center">
            <i
              className="fa-solid fa-circle-check me-3"
              style={{ color: "#6d9cee" }}
            ></i>
            <p className="text-white">দেশসেরা শিক্ষক</p>
          </div>
        </div>
        <div>
          <SliderNav />
        </div>
        <div>
          <ConnectedBrand />
        </div>
      </div>
    </>
  );
};

export default Skills;
