import PropTypes from "prop-types";

export default function EventDetailsForCalendar({ event }) {
  const dateToDisplay = new Intl.DateTimeFormat("fr-FR").format(
    new Date(event.date)
  );

  return (
    <p>
      <img
        src={`${import.meta.env.VITE_BACKEND_URL_IMAGES}/posters/${
          event.poster
        }`}
        alt={`${event.name}-attachment`}
      />
      {event.name}, {event.period}, organisé par {event.organizerId}, le{" "}
      {dateToDisplay}, à {event.place},{" "}
      {event.price === "gratuit" ? "gratuit" : `${event.price}€`}
    </p>
  );
}

EventDetailsForCalendar.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    place: PropTypes.string,
    period: PropTypes.string,
    poster: PropTypes.string,
    price: PropTypes.string,
    usefulInformation: PropTypes.string,
    link: PropTypes.string,
    organizerId: PropTypes.number,
  }).isRequired,
};
