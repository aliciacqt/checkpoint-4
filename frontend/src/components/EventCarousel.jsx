import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";

export default function EventCarousel({ event }) {
  const dateToDisplay = new Intl.DateTimeFormat("fr-FR").format(
    new Date(event.date)
  );

  return (
    <Carousel
      // onChange={onChange}
      // onClickItem={onClickItem}
      showThumbs={false}
      dynamicHeight={false}
    >
      {event.photos.map((photo) => (
        <div>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL_IMAGES}/photos/${
              photo.fileName
            }`}
            alt={`${photo.fileName}-attachment`}
            key={photo.fileName}
          />
          <p className="legend">
            {event.name}, {dateToDisplay} à {event.place}
          </p>
        </div>
      ))}
    </Carousel>
  );
}

EventCarousel.propTypes = {
  event: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      link: PropTypes.string,
      organizerId: PropTypes.number.isRequired,
      period: PropTypes.string.isRequired,
      photos: PropTypes.arrayOf(PropTypes.string.isRequired),
      place: PropTypes.string.isRequired,
      poster: PropTypes.string,
      price: PropTypes.string.isRequired,
      usefulInformation: PropTypes.string,
    })
  ),
};

EventCarousel.defaultProps = {
  event: [],
};
