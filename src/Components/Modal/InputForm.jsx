import React, { useState } from "react";
import { RiCloseLine, RiSaveLine } from "react-icons/ri";
import "./InputForm.css";
import {
  createEducation,
  createAcademicExp,
  createAwards,
  createAchievements,
  createJobs,
  createFunding,
} from "../../axios/Axios";

const InputForm = ({ handleClose, handleSave, type }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDetailChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleSave === "1") {
      createEducation(from, to, title, description);
    } else if (handleSave === "2") {
      createAcademicExp(from, to, title, description);
    } else if (handleSave === "3") {
      createAwards(from, to, title, description);
    } else if (handleSave === "4") {
      createAchievements(from, to, title, description);
    } else if (handleSave === "7") {
      createJobs(from, to, title, description);
    } else if (handleSave === "9") {
      createFunding(from, to, title, description);
    }
    handleClose();
  };

  return (
    <div className="input-form-overlay">
      <div className="input-form-container">
        <button className="input-form-close" onClick={handleClose}>
          <RiCloseLine />
        </button>
        <form className="input-form" onSubmit={handleSubmit}>
          <p style={{ marginBottom: "40px" }}>Add your {type}</p>
          <div className="input-wrapper">
            <label className="input-label" htmlFor="from-input">
              From:
            </label>
            <input
              className="input-field"
              type="text"
              id="from-input"
              value={from}
              onChange={handleFromChange}
            />
          </div>

          <div className="input-wrapper">
            <label className="input-label" htmlFor="to-input">
              To:
            </label>
            <input
              className="input-field"
              type="text"
              id="to-input"
              value={to}
              onChange={handleToChange}
            />
          </div>

          <div className="input-wrapper">
            <label className="input-label" htmlFor="title-input">
              Title:
            </label>
            <input
              className="input-field"
              type="text"
              id="title-input"
              value={title}
              onChange={handleTitleChange}
            />
          </div>

          <div className="input-wrapper">
            <label className="input-label" htmlFor="detail-input">
              Detail:
            </label>
            <textarea
              className="text-area-field"
              id="detail-input"
              value={description}
              onChange={handleDetailChange}
            />
          </div>

          <div className="input-form-buttons">
            <button type="submit" className="input-form-button save">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
