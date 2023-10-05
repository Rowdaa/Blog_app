import { Link } from "react-router-dom";
import "./topbar.css";

function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topleft">
        <i className="topBarIcon fa-brands fa-facebook"></i>
        <i className="topBarIcon fa-brands fa-telegram"></i>
        <i className="topBarIcon fa-brands fa-twitter"></i>
        <i className="topBarIcon fa-brands fa-whatsapp"></i>
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/settings">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/WRITE">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <img
            className="topImage"
            src="https://images.pexels.com/photos/922962/pexels-photo-922962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/Register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="TopsearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
