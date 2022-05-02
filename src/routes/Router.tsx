import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "../App";
import Main from "../features/Main";
import Feedback from "../features/Feedback";
import NotFound from "../features/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
