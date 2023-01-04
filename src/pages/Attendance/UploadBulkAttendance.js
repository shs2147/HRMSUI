import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);

  const UPLOAD_ENDPOINT =
    "http://localhost/react-js-file-upload/backend/upload.php";

  const handleSubmit = async e => {
    e.preventDefault();
  
    let res = await uploadFile(file);
    console.log(res.data);
  };

  const uploadFile = async file => {
    const formData = new FormData();
    formData.append("avatar", file);

    return await axios.post(UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data"
      }
    });
  };

  const handleOnChange = e => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <div className="container">
  <h4>Import Attendance</h4>
  <hr />
  <div className="bg-light">
  <div className="row "></div>
  
    <form onSubmit={handleSubmit}>
      <h1>Browse File</h1>
      <input className="form-control mt-4 " type="file" onChange={handleOnChange} />
      <button className="btn btn-outline-success mt-4" type="submit">Upload File</button>
    </form>
    
    </div>
    
    </div>
  );
}

export default App;