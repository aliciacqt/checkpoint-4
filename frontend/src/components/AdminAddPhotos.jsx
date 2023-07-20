import { useEffect, useState } from "react";
import AdminCreateEvent from "./AdminCreateEvent";
import "./adminForms.scss";

export default function AdminAddPhotos() {
  const [events, setEvents] = useState();

  const [fileName, setFileName] = useState("");
  const [eventId, setEventId] = useState("");

  const [eventForm, setEventForm] = useState("event-hidden");
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

  const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

  const getAllEvents = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`, {
      // credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  if (!events) {
    return <p>En cours de chargement...</p>;
  }

  const handleChangeFileName = (e) => {
    const fileSelected = e.target.files[0];

    if (imageTypes.includes(fileSelected.type)) {
      setFileName(e.target.files[0]);
    } else {
      alert("Votre image doit être au format .jpeg, .jpg ou .png.");
    }
  };

  const handleChangeEventId = (e) => {
    const eventIdToUpdate = parseInt(e.target.value, 10);

    if (
      !Number.isNaN(eventIdToUpdate)
      /* && voir pour le bloquer entre 0 et artType.length */
    ) {
      setEventId(eventIdToUpdate);
    } else {
      alert(
        'Le champ "Évènement" est requis, veuillez sélectionner un évènement.'
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fileName || !eventId) {
      alert("Veuillez remplir tous les champs obligatoires.");
    } else {
      const modelData = new FormData();
      modelData.append("fileName", fileName);
      modelData.append("eventId", eventId);

      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/photos`, {
        method: "POST",
        // credentials: "include",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: modelData,
      })
        // .then((res) => res.json())
        .then(() => {
          setFileName("");
          setEventId("");
          alert("La photo a été ajoutée à la base de données !");
        })
        .catch((err) => {
          console.error(err);
          alert("Une erreur est survenue, veuillez réessayer.");
        });
    }
  };

  return (
    <>
      <div className="form-container">
        <h2 className="create-art">Ajouter une photo</h2>
        <p className="required-fields">* : champs obligatoires</p>
        <section className="form">
          <form onSubmit={handleSubmit}>
            <p>
              Photo <strong>*</strong>
            </p>
            <label htmlFor="fileName">
              <input
                type="file"
                id="fileName"
                onChange={handleChangeFileName}
              />
            </label>
            <p>
              Évènement <strong>*</strong>
            </p>
            <label htmlFor="event">
              <select
                name="event"
                value={eventId}
                onChange={handleChangeEventId}
              >
                <option value="" className="label-with-link-to-add-data">
                  Veuillez sélectionner un évènement
                </option>
                {events.map((event) => (
                  <option value={event.id} key={event.id}>
                    {event.name}, {event.place} - {event.date}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={displayEventForm}
                className="to-add-data"
              >
                +
              </button>
            </label>
            <button type="submit" className="general">
              Ajouter la photo
            </button>
          </form>
        </section>
      </div>
      <div className={eventForm}>
        <AdminCreateEvent
          displayEventForm={displayEventForm}
          getAllEvents={getAllEvents}
        />
      </div>
    </>
  );
}
