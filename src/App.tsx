import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AboutMe } from "./routes/AboutMe/AboutMe";
import { Home } from "./routes/Home/Home";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
      <Footer />
    </>
  );
};
