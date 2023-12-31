import ClassItem from "../ClassItem/ClassItem";
import "./classgrupe.css";

const ClassGrupe = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap space-x-4 px-3 my-8">
        {/* class item*/}
        <ClassItem classLevel={"দ্বাদশ"} />
        <ClassItem classLevel={"১০ম শ্রেণী"} />
        <ClassItem classLevel={"৯ম শ্রেণী"} />
        <ClassItem classLevel={" ৮ম শ্রেণী "} />
        <ClassItem classLevel={" ৭ শ্রেণী "} />
        <ClassItem classLevel={" ৬ঠ শ্রেণী "} />
      </div>
    </>
  );
};

export default ClassGrupe;
