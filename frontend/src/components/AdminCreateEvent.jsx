import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AdminCreateUser from "./AdminCreateUser";
import "./adminForms.scss";

export default function AdminCreateEvent({ displayEventForm, getAllEvents }) {
  const [organizers, setOrganizers] = useState();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [period, setPeriod] = useState("");
  const [poster, setPoster] = useState("");
  const [price, setPrice] = useState("");
  const [usefulInformation, setUsefulInformation] = useState("");
  const [link, setLink] = useState("");
  const [organizerId, setOrganizerId] = useState("");

  const [organizerForm, setOrganizerForm] = useState("organizer-hidden");
  const [isClicked, setIsClicked] = useState(false);

  const displayOrganizerForm = () => {
    if (!isClicked) {
      setOrganizerForm("organizer-visible");
      setIsClicked(!isClicked);
    } else {
      setOrganizerForm("organizer-hidden");
      setIsClicked(!isClicked);
    }
  };

  const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

  const periods = [
    {
      id: 1,
      name: "Préhistoire",
    },
    {
      id: 2,
      name: "Antiquité",
    },
    {
      id: 3,
      name: "Moyen-Âge",
    },
    {
      id: 4,
      name: "Renaissance",
    },
    {
      id: 5,
      name: "XVIIe siècle",
    },
    {
      id: 6,
      name: "XVIIIe siècle",
    },
    {
      id: 7,
      name: "Directoire, Consulat",
    },
    {
      id: 8,
      name: "Ier Empire",
    },
    {
      id: 9,
      name: "Période Romantique",
    },
    {
      id: 10,
      name: "Second Empire",
    },
    {
      id: 11,
      name: "IIIe République",
    },
    {
      id: 12,
      name: "Belle Époque",
    },
    {
      id: 13,
      name: "1re GM",
    },
    {
      id: 14,
      name: "Entre deux guerres",
    },
    {
      id: 15,
      name: "2nde GM",
    },
    {
      id: 16,
      name: "1945 et plus",
    },
  ];

  const getAllOrganizers = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
      // credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setOrganizers(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllOrganizers();
  }, []);

  if (!organizers) {
    return <p>En cours de chargement...</p>;
  }

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangePlace = (e) => {
    setPlace(e.target.value);
  };

  const handleChangePeriod = (e) => {
    setPeriod(e.target.value);
  };

  const handleChangePoster = (e) => {
    const fileSelected = e.target.files[0];

    if (imageTypes.includes(fileSelected.type)) {
      setPoster(e.target.files[0]);
    } else {
      alert("Votre image doit être au format .jpeg, .jpg ou .png.");
    }
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
    // const priceToUpdate = parseFloat(e.target.value);

    // if (!Number.isNaN(priceToUpdate)) {
    //   setPrice(priceToUpdate);
    // } else {
    //   alert("Veuillez vérifier votre saisie.");
    // }
  };

  const handleChangeUsefulInformation = (e) => {
    setUsefulInformation(e.target.value);
  };

  const handleChangeLink = (e) => {
    setLink(e.target.value);
  };

  const handleChangeOrganizerId = (e) => {
    const organizerIdToUpdate = parseInt(e.target.value, 10);

    if (
      !Number.isNaN(organizerIdToUpdate)
      /* && voir pour le bloquer entre 0 et artType.length */
    ) {
      setOrganizerId(organizerIdToUpdate);
    } else {
      alert(
        'Le champ "Organisateur" est requis, veuillez sélectionner un organisateur.'
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !date || !place || !period || !organizerId) {
      alert("Veuillez remplir tous les champs obligatoires.");
    } else {
      const modelData = new FormData();
      modelData.append("name", name);
      modelData.append("date", date);
      modelData.append("place", place);
      modelData.append("period", period);
      modelData.append("price", price || "gratuit");
      modelData.append("organizerId", organizerId);
      if (poster) {
        modelData.append("poster", poster);
      }
      // if (price) {
      // }
      if (usefulInformation) {
        modelData.append("usefulInformation", usefulInformation);
      }
      if (link) {
        modelData.append("link", link);
      }

      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`, {
        method: "POST",
        // credentials: "include",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: modelData,
      })
        // .then((res) => res.json())
        .then(() => {
          getAllEvents();
          setName("");
          setDate("");
          setPlace("");
          setPeriod("");
          setPoster("");
          setPrice("");
          setUsefulInformation("");
          setLink("");
          setOrganizerId("");
          alert("L'évènement a été ajouté au calendrier !");
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
        <h2 className="create-art">Enregistrer un nouvel évènement</h2>
        <p className="required-fields">* : champs obligatoires</p>
        <section className="form">
          <form onSubmit={handleSubmit}>
            <p>
              Nom de l'évènement <strong>*</strong>
            </p>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleChangeName}
              />
            </label>
            <p>
              Date <strong>*</strong>
            </p>
            <label htmlFor="date">
              <input
                type="date"
                id="date"
                value={date}
                onChange={handleChangeDate}
              />
            </label>
            <p>
              Lieu <strong>*</strong>
            </p>
            <label htmlFor="place">
              <input
                type="text"
                id="place"
                value={place}
                onChange={handleChangePlace}
              />
            </label>
            <p>
              Période représentée <strong>*</strong>
            </p>
            <label htmlFor="period" className="label-with-link-to-add-data">
              <select
                name="period"
                value={period}
                onChange={handleChangePeriod}
              >
                <option value="">Veuillez sélectionner une période</option>
                {periods.map((onePeriod) => (
                  <option value={onePeriod.id} key={onePeriod.id}>
                    {onePeriod.name}
                  </option>
                ))}
              </select>
            </label>
            <p>Affiche</p>
            <label htmlFor="poster">
              <input type="file" id="poster" onChange={handleChangePoster} />
            </label>
            <p>Prix, en €</p>
            <label htmlFor="price">
              <input
                type="text"
                // min="0"
                // max="2000"
                // step="0.01"
                id="price"
                value={price}
                placeholder="gratuit"
                onChange={handleChangePrice}
              />
            </label>
            <p>Informations pratiques</p>
            <label htmlFor="usefulInformation">
              <textarea
                type="text"
                id="usefulInformation"
                value={usefulInformation}
                onChange={handleChangeUsefulInformation}
              />
            </label>
            <p>Lien</p>
            <label htmlFor="link">
              <input
                type="text"
                id="link"
                value={link}
                onChange={handleChangeLink}
              />
            </label>
            <p>
              Organisateur <strong>*</strong>
            </p>
            <label
              htmlFor="organizerId"
              className="label-with-link-to-add-data"
            >
              <select
                name="organizerId"
                value={organizerId}
                onChange={handleChangeOrganizerId}
              >
                <option value="">Veuillez sélectionner un organisateur</option>
                {organizers.map((organizer) => (
                  <option value={organizer.id} key={organizer.id}>
                    {organizer.assoName} {organizer.firstname}{" "}
                    {organizer.lastname}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={displayOrganizerForm}
                className="to-add-data"
              >
                +
              </button>
            </label>

            <div className="button-container">
              <button
                type="submit"
                onClick={displayEventForm}
                className="general"
              >
                Enregistrer l'évènement
              </button>
              <button
                type="button"
                onClick={displayEventForm}
                className="create-small-data cancel-form"
              >
                Annuler
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className={organizerForm}>
        <AdminCreateUser
          displayOrganizerForm={displayOrganizerForm}
          getAllOrganizers={getAllOrganizers}
        />
      </div>
    </>
  );
}

AdminCreateEvent.propTypes = {
  displayEventForm: PropTypes.func,
  getAllEvents: PropTypes.func,
};

AdminCreateEvent.defaultProps = {
  displayEventForm: undefined,
  getAllEvents: undefined,
};
