import SideBar from "../../componets/sidebar/SideBar";
import "./settings.css";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="updateSetting">Update your Account</span>
          <span className="deleteSetting">Delete your Account </span>
        </div>
        <form className="settingsForm">
          <label>Settings Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6936400/pexels-photo-6936400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <label htmlFor="inputFile">
              <i className="settingsppIcon fa-solid fa-user"></i>
            </label>
          </div>
          <input type="file" id="inputFile" style={{ display: "none" }} />
          <label>Users name</label>
          <input type="text" placeholder="type your name" />
          <label>Users Email</label>
          <input type="email" placeholder="type your email address" />
          <label>Users password</label>
          <input type="password" />
          <button className="settingsButton">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}

export default Settings;
