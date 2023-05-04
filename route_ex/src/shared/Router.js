import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cat from "../pages/Cat";
import NotFoundPage from "../pages/NotFoundPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cat" element={<Cat />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
