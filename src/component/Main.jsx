import React from "react";
import Home from "./page/home/Home";
import Who from "./page/who/Who";
import OurServices from "./page/outServices/OurServices";
import OutProjects from "./page/OurProjects/OutProjects";
import Contact from "./page/contact/Contact";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import ScrollToTop from "./ScrollToTop";
const Main = () => {
  return (
    <main>
      <ScrollToTop>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/Who" element={<Who />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/OurProjects" element={<OutProjects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </main>
  );
};

export default Main;
