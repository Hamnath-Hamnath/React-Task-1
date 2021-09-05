import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("");
  }, []);

  return (
    <>
      <h1>Working</h1>
    </>
  );
}

export default App;
