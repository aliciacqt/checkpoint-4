import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import fr from "date-fns/locale/fr";
import { useEffect, useState } from "react";
import EventDetailsForCalendar from "./EventDetailsForCalendar";

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
    noEventsInRange: "Pas d'évènements.",
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const [eventsList, setEventsList] = useState("");
  const [period, setPeriod] = useState("Tout");

  const allPeriods = [
    "Préhistoire",
    "Antiquité",
    "Moyen-Âge",
    "Renaissance",
    "XVIIe siècle",
    "XVIIIe siècle",
    "Directoire, Consulat",
    "Ier Empire",
    "Période Romantique",
    "Second Empire",
    "IIIe République",
    "Belle Époque",
    "1re GM",
    "Entre deux guerres",
    "2nde GM",
    "1945 et plus",
    "autre",
  ];

  const handleChangePeriod = (e) => {
    setPeriod(e.target.value);
  };

  const getAllEvents = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events/nextEvents`, {
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
    <div className="component-with-bg">
      <div className="width-centered">
        <select name="period" value={period} onChange={handleChangePeriod}>
          <option value="Tout">Toutes les époques</option>
          {allPeriods.map((periodSelected) => (
            <option value={periodSelected} key={periodSelected}>
              {periodSelected}
            </option>
          ))}
        </select>
        <div id="calendar">
          <Calendar
            localizer={localizer}
            events={eventsList}
            startAccessor="start"
            endAccessor="end"
            culture="fr"
            messages={messages}
          />
        </div>
        {period === "Tout"
          ? eventsList.map((event) => (
              <EventDetailsForCalendar event={event} key={event.id} />
            ))
          : eventsList
              .filter((event) => event.period === period)
              .map((event) => (
                <EventDetailsForCalendar event={event} key={event.id} />
              ))}
      </div>
    </div>
  );
}
