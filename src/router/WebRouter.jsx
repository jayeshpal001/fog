import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { PAGES } from "./router";
import Navbar from "../components/layout/Navbar";
export default function WebRouter() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          {PAGES.map((e) => (
            <Route path={e?.URL} element={<e.PAGE />} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}
