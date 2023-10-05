import Announcement from "../../Components/Announcement/Announcement";
import ClassesOverView from "../../Components/ClassesOverview/ClassesOverView";
import DoItYours from "../../Components/DIY/DoItYours";
import './home.css'

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
      <section id='doityours'>
        <DoItYours />
      </section>
      {/* DIY */}
    </>
  );
};

export default Home;
