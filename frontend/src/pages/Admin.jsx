import { useState, useEffect } from "react";
import bgimg from "../../../backend/public/assets/images/photos/1689846917731-photo-246372629_232230742226278_522092092175206516_n.jpg";
import AdminCreateEvent from "../components/AdminCreateEvent";
import AdminCreateUser from "../components/AdminCreateUser";
import AdminAddPhotos from "../components/AdminAddPhotos";
import "../components/adminForms.scss";

export default function Admin() {
  const [events, setEvents] = useState();
  const [organizers, setOrganizers] = useState();

  const [eventForm, setEventForm] = useState("event-hidden");
  const [organizerForm, setOrganizerForm] = useState("organizer-hidden");
  const [photoForm, setPhotoForm] = useState("photo-hidden");
  const [isClicked, setIsClicked] = useState(false);

  const displayEventForm = () => {
    if (!isClicked) {
      setEventForm("event-visible");
      setIsClicked(!isClicked);
    } else {
      setEventForm("event-hidden");
      setIsClicked(!isClicked);
    }
  };

  const displayOrganizerForm = () => {
    if (!isClicked) {
      setOrganizerForm("organizer-visible");
      setIsClicked(!isClicked);
    } else {
      setOrganizerForm("organizer-hidden");
      setIsClicked(!isClicked);
    }
  };

  const displayPhotoForm = () => {
    if (!isClicked) {
      setPhotoForm("photo-visible");
      setIsClicked(!isClicked);
    } else {
      setPhotoForm("photo-hidden");
      setIsClicked(!isClicked);
    }
  };

  const getAllEvents = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`, {
      // credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  };

  const getAllOrganizers = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
      // credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setOrganizers(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllEvents();
    getAllOrganizers();
  }, []);

  if (!events || !organizers) {
    return <p>En cours de chargement...</p>;
  }

  return (
    <>
      <img
        src={bgimg}
        alt="background, foggy morning on camp"
        className="background-img"
      />
      <div className="vertically-centered">
        <h2>Admin</h2>
        <div className="component-with-bg">
          <div className="width-centered in-column">
            <button
              type="button"
              onClick={displayEventForm}
              className="admin-link"
            >
              Ajouter un nouvel évènement
            </button>
            <button
              type="button"
              onClick={displayOrganizerForm}
              className="admin-link"
            >
              Ajouter un nouvel utilisateur
            </button>
            <button
              type="button"
              onClick={displayPhotoForm}
              className="admin-link"
            >
              Ajouter une nouvelle photo
            </button>
          </div>
        </div>
      </div>

      <div className={eventForm}>
        <AdminCreateEvent
          displayEventForm={displayEventForm}
          getAllEvents={getAllEvents}
        />
      </div>
      <div className={organizerForm}>
        <AdminCreateUser
          displayOrganizerForm={displayOrganizerForm}
          getAllOrganizers={getAllOrganizers}
        />
      </div>
      <div className={photoForm}>
        <AdminAddPhotos displayPhotoForm={displayPhotoForm} />
      </div>
    </>
  );
}
