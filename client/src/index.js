import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CatProfile from "./routes/CatProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="cat-profile" element={<CatProfile />}>
          <Route path=":profileId" element={<CatProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export default root;
