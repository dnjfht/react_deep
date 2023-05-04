import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
