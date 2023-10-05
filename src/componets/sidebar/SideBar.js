import "./sideBar.css";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img
          className="sideBarImg"
          src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vero
          ipsam repellendus dolorum quibusdam earum.hfufuyfisghfgjryd
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">CATAGORIES</span>
        <ul className="sideBarlists">
          <li className="sideBarlistItem">Life</li>
          <li className="sideBarlistItem">style</li>
          <li className="sideBarlistItem">Tech</li>
          <li className="sideBarlistItem">Music</li>
          <li className="sideBarlistItem">Sport</li>
          <li className="sideBarlistItem">Cinema</li>
        </ul>
      </div>

      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <i className="sideBarIcon fa-brands fa-facebook"></i>
          <i className="sideBarIcon fa-brands fa-telegram"></i>
          <i className="sideBarIcon fa-brands fa-twitter"></i>
          <i className="sideBarIcon fa-brands fa-whatsapp"></i>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
