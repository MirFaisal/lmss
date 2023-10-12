import React from "react";

export default function HelpDeskCard() {
  return (
    <>
      <div className="informationBg flex justify-between py-8 px-16 rounded-2xl mt-10">
        <div>
          <h2 className="text-white text-3xl font-bold mt-5 leading-[48px]">
            কোর্স সম্পর্কিত যেকোনো তথ্যের জন্য কল করুন
          </h2>
          <p className="text-base text-slate-200">
            সকাল ৮টা থেকে রাত ১১টা পর্যন্ত
          </p>
        </div>
        <div>
          <div className="bg-green-500 mt-4 py-3 w-40 flex justify-center items-center space-x-3 text-white rounded hover:bg-green-600">
            <i className="fa-solid fa-phone"></i>
            <span className="pt-1">16524</span>
          </div>
        </div>
      </div>
    </>
  );
}
