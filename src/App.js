import axios from "axios";
import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [post, setPost] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [notCompleted, setNotCompleted] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos#")
      .then((res) => {
        setPost(res.data);
        console.log("Data Recieved ==>", post);
      })
      .catch((err) => {
        console.log("Error occured while fetching");
      });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
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
              {/* <th scope="col">#</th> */}
              <th scope="col">UserId</th>
              <th scope="col">Title</th>
              <th scope="col">Completed</th>
            </tr>
          </thead>
          <tbody>
            {post.map((data) => (
              <tr key={data.id}>
                {/* <td>{data.id}</td> */}
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
