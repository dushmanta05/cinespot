import { useState } from "react";
import Navbar from "./components/Navbar";
import TopMovies from "./components/TopMovies";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <TopMovies />
      <TopMovies />
      <TopMovies />
      <TopMovies />
      <TopMovies />
      <Footer />
    </>
  );
}

export default App;
