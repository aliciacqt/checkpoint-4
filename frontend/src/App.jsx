import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import EventsCalendar from "./pages/EventsCalendar";
import Gallery from "./pages/Gallery";
import Admin from "./pages/Admin";
import AdminCreateEvent from "./components/AdminCreateEvent";
import AdminCreateUser from "./components/AdminCreateUser";
import AdminAddPhotos from "./components/AdminAddPhotos";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<EventsCalendar />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-create-event" element={<AdminCreateEvent />} />
          <Route path="/admin-create-user" element={<AdminCreateUser />} />
          <Route path="/admin-add-photo" element={<AdminAddPhotos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
