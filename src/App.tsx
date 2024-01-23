import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Design from "./pages/Design";
import Software from "./pages/Software";


import Header from "./components/Header";
import Footer from "./components/Footer";

export const IsDesignContext = createContext(false);
export const DesignDecisionsContext = createContext(false);

export default function App() {  
  return (
    <HashRouter>
      <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/design" element={<Design />}></Route>
        <Route path="/software" element={<Software />}></Route>
      </Routes>
      <Footer />
      </div>
  </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));