import Announcement from "../../Components/Announcement/Announcement";
import ClassesOverView from "../../Components/ClassesOverview/ClassesOverView";

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
    </>
  );
};

export default Home;
