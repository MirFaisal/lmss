import "./annuallyonlineClass.css";
import TitleTag from "../Titles/TitleTag";
import Title from "../Titles/Title";
import CommonCard from "../Cards/CommonCard/CommonCard";
import Button from "../Extra/Button";
// import Button from "../Extra/button";
const AnnuallyOnlineClass = () => {
  return (
    <>
      <div className="py-20">
        <TitleTag
          tag={"ক্লাস ৬-১০"}
          icon={
            "https://img.icons8.com/fluency-systems-filled/96/228BE6/backpack.png"
          }
          color={"#228BE6"}
        />
        <div className="max-w-screen-xl mx-auto h-full">
          <Title
            title={"বছর জুড়ে অনলাইন ব্যাচে কী কী থাকছে?"}
            slogan={
              "সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক পড়াশুনার অগ্রযাত্রা"
            }
          />
          <div className="flex justify-center py-10 space-x-5">
            {/* item 1 */}
            <CommonCard />
            {/* item2 */}
            <CommonCard />
            {/* item 3 */}
            <CommonCard />
          </div>
        </div>
        <div>
          <Button text={"আপনার ক্লাস বেছে নিন"} />
        </div>
      </div>
    </>
  );
};

export default AnnuallyOnlineClass;