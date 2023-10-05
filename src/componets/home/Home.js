import Header from "../../page/header/Header";
import SideBar from "../sidebar/SideBar";
import Posts from "../posts/Posts";
import "./home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </div>
  );
}

export default Home;
