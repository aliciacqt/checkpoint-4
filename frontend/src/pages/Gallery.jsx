// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import EventCarousel from "../components/EventCarousel";

export default function Gallery() {
  const [events, setEvents] = useState();

  const getAllEvents = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events/pastEvents`, {
      // credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        // console.log(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  if (!events) {
    return <p>En cours de chargement...</p>;
  }

  return (
    <div>
      {events.map((event) => (
        <div className="carousel">
          <EventCarousel event={event} key={event.id} />
        </div>
      ))}
    </div>
  );
}
