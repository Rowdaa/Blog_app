import "./write.css";

function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />

      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="formIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="inputWrite"
            autoFocus={true}
          />
        </div>
        <div className="writeformInput">
          <textarea
            placeholder="Tell yout story..."
            type="text"
            className="inputWrite writeText"
          ></textarea>
        </div>
        <button className="submitButton">Publish</button>
      </form>
    </div>
  );
}

export default Write;
