import axios from "axios";
import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  const [completed, setCompleted] = useState(0);
  const [notCompleted, setNotCompleted] = useState(0);
  const [title, setTitle] = useState("");
  const [searchResult, setSearchResult] = useState(post);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        setPost(res.data);
        // console.log("Data Recieved ==>", post);
        setCompleted(post.filter((item) => item.completed === true).length);
        setNotCompleted(post.filter((item) => item.completed === false).length);
      })
      .catch((err) => {
        console.log("Error occured while fetching");
      });
  }, []);

  useEffect(() => {
    if (title !== "") {
      const result = post.filter((data) => {
        return data.title.toLowerCase().startsWith(title.toLowerCase());
      });
      setSearchResult(result);
    } else {
      setSearchResult(post);
    }
  }, [title]);
  const filter = (e) => {
    const keyword = e.target.value;
    setTitle(keyword);
  };
  return (
    <>
      <div className="container my-5">
        <div>
          <input
            type="search"
            placeholder="Search"
            className="form-control"
            value={title}
            onChange={filter}
          />
        </div>
        <div className="row mt-2">
          <div className="col-6 text-success"> Completed - {completed}</div>
          <div className="col-6 text-danger">
            Not Completed - {notCompleted}
          </div>
        </div>
        <table className=" mt-3 table table-bordered">
          <thead>
            <tr>
              {/* {
              Object.keys(post[0]).map(data => (
                <th>{data}</th>
              ))
            } */}
              <th scope="col">#</th>
              <th scope="col">UserId</th>
              <th scope="col">Title</th>
              <th scope="col">Completed</th>
            </tr>
          </thead>
          <tbody>
            {searchResult && searchResult.length > 0
              ? searchResult.map((data, index) => (
                  <tr key={data.id}>
                    <td>{index + 1}</td>
                    <td>{data.userId}</td>
                    <td>{data.title}</td>
                    <td>
                      {data.completed === true ? (
                        <div className="p-3 bg-success"></div>
                      ) : (
                        <div className="p-3 bg-danger"></div>
                      )}
                    </td>
                  </tr>
                ))
              : post.map((data, index) => (
                  <tr key={data.id}>
                    <td>{index + 1}</td>
                    <td>{data.userId}</td>
                    <td>{data.title}</td>
                    <td>
                      {data.completed === true ? (
                        <div className="p-3 bg-success"></div>
                      ) : (
                        <div className="p-3 bg-danger"></div>
                      )}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
