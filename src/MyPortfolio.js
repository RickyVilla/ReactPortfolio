// Create Home Page Scripting
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// importing page links
import Layout from "./components/Layout"
import AboutMe from "./components/aboutMe/AboutMe"
import HomePage from "./components/homePage/HomePage"
import Background from "./components/background/Background"
import SkillsAndExperience from "./components/skills&Experience/Skills&Experience"
import ContactMe from "./components/contactMe/ContactMe"
// 
export default function MyPortfolio () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage/>}/>
            <Route path="AboutMe" element={<AboutMe />} />
            <Route path="Skills&Experience" element={<SkillsAndExperience />} />
            <Route path="Background" element={<Background />} />
            <Route path="ContactMe" element={<ContactMe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}