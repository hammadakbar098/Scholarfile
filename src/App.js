import "./App.css";
import { Template1Edit } from "./Components/Template1/Template1Edit";
import { Template1Preview } from "./Components/Template1/Template1Preview";
import { Template2Edit } from "./Components/Template2/Template2Edit";
import { Template2Preview } from "./Components/Template2/Template2Preview";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import { Routing } from "./Components/Routes/Route";
import { TemplateSelection } from "./Components/TemplateSelection/TemplateSelection";
import TableComponent from "./Components/Modal/TableComponent";
import { Template1SelectionPreview } from "./Components/TemplateSelection/Template1SelectionPreview";
import { Template2SelectionPreview } from "./Components/TemplateSelection/Template2SelectionPreview";
import { useEffect } from "react";
import InputForm from "./Components/Modal/InputForm";

function App() {
  useEffect(() => {}, []);
  return (
    <>
      {/* <Template1Preview /> */}
      {/* <Template1Edit /> */}
      {/* <Template2Preview /> */}
      {/* <Signup /> */}
      <Routing />
      {/* <TemplateSelection /> */}
      {/* <TableComponent /> */}
      {/* <Template1SelectionPreview /> */}
      {/* <Template2SelectionPreview /> */}
      {/* <InputForm /> */}
    </>
  );
}

export default App;
