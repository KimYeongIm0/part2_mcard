import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@pages/Home";
import TestPage from "@pages/Test";
import CardPage from "@pages/Card";
import ScrollToTop from "./components/shared/scrollToTop";
import Signin from "@pages/Signin";
import Signup from "@pages/Signup";

import Navbar from "@shared/Navbar";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/signin" Component={Signin} />
        <Route path="/signup" Component={Signup} />

        <Route path="/card/:id" Component={CardPage} />
        <Route path="/test" Component={TestPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
