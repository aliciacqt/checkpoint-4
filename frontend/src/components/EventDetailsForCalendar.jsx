import PropTypes from "prop-types";

export default function EventDetailsForCalendar({ event }) {
  const dateToDisplay = new Intl.DateTimeFormat("fr-FR").format(
    new Date(event.date)
  );

  return (
    <div className="flex-column">
      <p className="event-details">
        {/* <img
          src={
            `${import.meta.env.VITE_BACKEND_URL_IMAGES}/posters/${
              event.poster
            }` || null
          }
          alt={event.poster ? `${event.name}-attachment` : null}
        /> */}
        {dateToDisplay}, à {event.place} : {event.name}
        <br />
        {event.period}
        <br />
        organisé par{" "}
        {event.assoName
          ? event.assoName
          : `${event.firstname} ${event.lastname}`}
        <br />
        Entrée : {event.price === "gratuit" ? "gratuit" : `${event.price}€`}
        <br />
        <a href={event.link}>Plus d'informations ici</a>
      </p>
    </div>
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
    assoName: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  }).isRequired,
};
