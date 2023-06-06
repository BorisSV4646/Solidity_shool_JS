import Home from "./components/screens/home/Home.jsx";
import Price from "./components/screens/price/Price.jsx";
import Resources from "./components/screens/resources/Resources.jsx";
import Tasks from "./components/screens/tasks/Tasks.jsx";
import Leaderboard from "./components/screens/leaderboard/Leaderboard.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Webpages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="price" element={<Price />} />
        <Route path="resources" element={<Resources />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Webpages;
