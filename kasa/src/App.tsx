import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Nav } from "./Nav";
import { PageNotFound } from "./pages/PageNotFound";

export default function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
