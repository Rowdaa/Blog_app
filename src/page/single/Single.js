import "./single.css";
import SideBar from "../../componets/sidebar/SideBar";
import SinglePost from "../../componets/singlePost/SinglePost";

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
}

export default Single;
