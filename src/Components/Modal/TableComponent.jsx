import React, { useEffect, useState } from "react";
import "./TableComponent.css";
import {
  getAcademic,
  getAchievements,
  getAwards,
  getEducation,
  getFundings,
  getJobs,
} from "../../axios/Axios";

const TableComponent = ({ apiCheck }) => {
  const [data, setData] = useState();

  const apiCall = async () => {
    if (apiCheck === 1) {
      let res = await getEducation();
      setData(res);
    } else if (apiCheck === 2) {
      let res = await getAcademic();
      setData(res);
    } else if (apiCheck === 3) {
      let res = await getAwards();
      setData(res);
    } else if (apiCheck === 4) {
      let res = await getAchievements();
      setData(res);
    } else if (apiCheck === 7) {
      let res = await getJobs();
      setData(res);
    } else if (apiCheck === 9) {
      let res = await getFundings();
      setData(res);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);
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
          {/* <tr>
            <td>2000</td>
            <td>2023</td>
            <td>FYP</td>
            <td>Done</td>
          </tr> */}
          {data?.data?.map((item, index) => (
            <tr>
              <td>{item?._from}</td>
              <td>{item?._to}</td>
              <td>{item?.title}</td>
              <td>{item?.description}</td>
            </tr>
          ))}
          {/* Add more table rows here as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
