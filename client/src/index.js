import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CatProfile from "./routes/CatProfile";
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="cat-profile" element={<CatProfile />}>
            <Route path=":profileId" element={<CatProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  </React.StrictMode>
);

export default root;
