import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import { Template1Edit } from "../Template1/Template1Edit";
import { Template1Preview } from "../Template1/Template1Preview";
import { Template2Edit } from "../Template2/Template2Edit";
import { Template2Preview } from "../Template2/Template2Preview";
import { Template1SelectionPreview } from "../TemplateSelection/Template1SelectionPreview";
import { Template2SelectionPreview } from "../TemplateSelection/Template2SelectionPreview";
import { TemplateSelection } from "../TemplateSelection/TemplateSelection";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/template1" element={<Template1Preview />} />
        <Route path="/template2" element={<Template2Preview />} />
        <Route path="/template1-edit" element={<Template1Edit />} />
        <Route path="/template2-edit" element={<Template2Edit />} />
        <Route path="/template-select" element={<TemplateSelection />} />

        <Route
          path="/template1-select-preivew"
          element={<Template1SelectionPreview />}
        />
        <Route
          path="/template2-select-preivew"
          element={<Template2SelectionPreview />}
        />
      </Routes>
    </>
  );
};
