import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ProjectDetails } from "./components/ProjectDetails/ProjectDetails";
import { AboutMe } from "./routes/AboutMe/AboutMe";
import { Contact } from "./routes/Contact/Contact";
import { Home } from "./routes/Home/Home";
import { Projects } from "./routes/Projects/Projects";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};
