import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Write from "../pages/Write";
import NotFoundPage from "../pages/NotFoundPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
