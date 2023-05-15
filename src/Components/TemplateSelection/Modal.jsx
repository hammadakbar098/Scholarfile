import React from "react";

const TableComponent = () => {
  return (
    <div className="tableWrapper">
      <table className="customTable">
        <thead>
          <tr>
            <th> From</th>
            <th> To</th>
            <th> Title</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2000</td>
            <td>2023</td>
            <td>FYP</td>
            <td>Done</td>
          </tr>
          {/* Add more table rows here as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
