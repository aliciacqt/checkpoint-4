import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import fr from "date-fns/locale/fr";
import { useEffect, useState } from "react";

export default function ReenactmentCalendar() {
  const locales = { fr };

  const messages = {
    allDay: "Tous les jours",
    previous: "Précédent",
    next: "Suivant",
    today: "Aujourd'hui",
    month: "Mois",
    week: "Semaine",
    day: "Jour",
    agenda: "Agenda",
    date: "Date",
    time: "Heure",
    event: "Évènement",
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const [eventsList, setEventsList] = useState("");

  const getAllEvents = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`, {
      // credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setEventsList(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  if (!eventsList) {
    return <p>En cours de chargement...</p>;
  }

  return (
    <>
      <div id="calendar">
        <Calendar
          localizer={localizer}
          events={eventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          culture="fr"
          messages={messages}
        />
      </div>
      {eventsList.map((event) => (
        <p>{event.period}</p>
      ))}
    </>
  );
}
