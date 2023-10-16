import React from "react";
import DesktopCard from "../Cards/DesktopCard/DesktopCard";
import SubjectCard from "../Cards/SubjectCard/SubjectCard";

const Subjects = () => {
  return (
    <div className="max-w-screen-xl mx-auto pb-4">
      <div className="text text-center">
        <h2 className="font-semibold text-3xl">বিষয়ভিত্তিক ফ্রি ভিডিও</h2>
      </div>
      <div>
        <div className="mt-4 flex gap-2 flex-wrap justify-center">
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
          <SubjectCard />
        </div>
        <div className="flex gap-5 mt-20 flex-col md:flex-row">
          <DesktopCard />
          <DesktopCard />
        </div>
      </div>
    </div>
  );
};

export default Subjects;