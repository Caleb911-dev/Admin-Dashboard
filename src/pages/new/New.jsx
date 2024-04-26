import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUpload";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./New.css";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topNew">
          <h1 className="newTitle">{title}</h1>
        </div>
        <div className="bottomNew">
          <div className="leftNew">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
              className="imgNew"
            />
          </div>
          <div className="rightNew">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="fileIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    className="input"
                  />
                </div>
              ))}

              <button className="sendButton">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
