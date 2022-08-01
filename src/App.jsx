import React from "react";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <main className="flex flex-col justify-center bg-black text-white font-sans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </main>
  );
}

export default App;
