import React, { useState } from "react";
import { RiCloseLine, RiSaveLine } from "react-icons/ri";
import "./InputForm.css";

const InputForm = ({ handleClose, handleSave, type }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

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
    setDetail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSave(from, to, title, detail);
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
              value={detail}
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
