import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../home/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
