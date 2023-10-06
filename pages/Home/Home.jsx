import Announcement from "../../Components/Announcement/Announcement";
import AnnuallyOnlineClass from "../../Components/AnnuallyOnlineClass/AnnuallyOnlineClass";
import ClassesOverView from "../../Components/ClassesOverview/ClassesOverView";
import DoItYours from "../../Components/DIY/DoItYours";
import SscAndHsc from "../../Components/SscAndHsc/SscAndHsc";
import "./home.css";

const Home = () => {
  return (
    <>
      {/* announcement start */}
      <section id={"announcement"}>
        <Announcement />
      </section>
      {/* announcement end */}

      {/* class lession start */}
      <section>
        <ClassesOverView />
      </section>
      {/* class lession end */}

      {/* DIY */}
      <section id="doityours" className="bg-[#f4f7fb]">
        <DoItYours />
      </section>
      {/* DIY */}

      {/* annually online class start */}
      <section>
        <AnnuallyOnlineClass />
      </section>
      {/* annually online class end*/}

      {/* hsc and ssc start */}
      <section id="sccandhsc" className="bg-[#f4f7fb]">
        <SscAndHsc />
      </section>
      {/* hsc and ssc end */}
    </>
  );
};

export default Home;
