import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">React and node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="homeImg"
        src="https://images.pexels.com/photos/161950/skogafoss-waterfall-dinamet7-water-161950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}

export default Header;
