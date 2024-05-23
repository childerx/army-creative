import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import { ABOUT, CONTACT, HOME } from "./constants/page-path";
import Layout from "./navigation/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={CONTACT} element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
