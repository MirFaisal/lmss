import { Link } from "react-router-dom";
import "./announcement.css";
const Announcement = () => {
  return (
    <div className="announcement mb-8">
      <Link to={"/announcement"}>
        <div className="thumbnail">
          <img src="/thumbnails/announcement.jpg" />
        </div>
      </Link>
    </div>
  );
};

export default Announcement;
