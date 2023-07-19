import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsCalendar from "./pages/EventsCalendar";
import Admin from "./pages/Admin";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" /* element={<Home />} */ />
          <Route path="/calendar" element={<EventsCalendar />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
