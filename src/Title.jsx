import React from "react";

function Title(props) {
  let { data, index } = props;
  return (
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
  );
}

export default Title;
