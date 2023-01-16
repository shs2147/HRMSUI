import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const ViewJobTitle = () => {
  const [show, setShow] = useState([]);
  const [data, setData] = useState({});

  const inputChangeHandler = (e) => {
    let newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };
  // let token;
  // useEffect(() => {
  //    token = sessionStorage.getItem("token");
    
  // }, [token]);
  const submitHandler = async(e) => {
    e.preventDefault();

    // console.log("token: " + token);
     fetch("http://localhost:8080/addjobtitle/getjob", {
      headers: {
        Accept: 'application/json',
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setShow(Object.values(res));
      })
      .catch((err) => console.log(err.message));

    console.log(show);
    console.log(JSON.stringify(data));
  };
  const viewHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <nav class="navbar bg-light">
        <label className="mx-3">Search Job Title</label>
        <br />
        <form onClick={submitHandler} class="d-flex" role="search">
          <input
            value={data.searchjobtitles}
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search "
            name="searchjobtitles"
            // onChange={inputChangeHandler}
          />
          <button
            onClick={submitHandler}
            className="btn btn-outline-success mx-1"
            type="submit"
          >
            Search
          </button>
          {/* <button
            onClick={viewHandler}
            className="btn btn-outline-success"
            type="submit"
          >
            View{" "}
          </button> */}
        </form>
      </nav>
      <Card className="table-responsive ">
        <table className="table table-success table-striped ">
          <thead>
            <tr>
              <th>JOb Title</th>
            </tr>
          </thead>

          <tbody>
            {show.map((item) => (
              <tr>
                <td>{item.jobTitles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ViewJobTitle;
