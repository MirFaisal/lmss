import DiyCard from "../Cards/DiyCard/DiyCard";
import Title from "../Titles/Title";
const DoItYours = () => {
  return (
    <>
      <div className="pb-40">
        <div className="max-w-screen-xl mx-auto">
          <Title
            title={" নিজের শেখা নিজেই গুছিয়ে নেয়ার যাত্রা শুরু হোক"}
            slogan={
              "যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের সেকশনে"
            }
          />
          <div className="flex pt-10 flex-wrap justify-center gap-9">
            <DiyCard title={"ক্লাস ৫-১২"} subtitle={"ফ্রি ভিডিও, লাইভ ক্লাস"} />
            <DiyCard title={"ক্লাস ৫-১২"} subtitle={"ফ্রি ভিডিও, লাইভ ক্লাস"} />
            <DiyCard title={"ক্লাস ৫-১২"} subtitle={"ফ্রি ভিডিও, লাইভ ক্লাস"} />
            <DiyCard title={"ক্লাস ৫-১২"} subtitle={"ফ্রি ভিডিও, লাইভ ক্লাস"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DoItYours;
