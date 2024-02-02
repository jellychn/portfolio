import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Design from "./pages/Design";
import MBTI from "./pages/projects/MBTI";
import Software from "./pages/Software";


import Header from "./components/Header";
import Agency from "./pages/projects/Agency";
import ScrollToTop from "./tools/ScrollToTop";

export const IsDesignContext = createContext(false);
export const DesignDecisionsContext = createContext(false);

export default function App() {  
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/design" element={<Design />}></Route>
        <Route path="/design/MBTI" element={<MBTI />}></Route>
        <Route path="/design/Agency" element={<Agency />}></Route>
        <Route path="/software" element={<Software />}></Route>
      </Routes>
      {/* <Footer /> */}
      </div>
  </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));