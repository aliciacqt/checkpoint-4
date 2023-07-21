import { useState } from "react";
import PropTypes from "prop-types";
import "./adminForms.scss";

export default function AdminCreateUser({
  displayOrganizerForm,
  getAllOrganizers,
}) {
  const [role, setRole] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [assoName, setAssoName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  const roles = [
    { id: 1, role: "organizer", nameInFrench: "Organisateur" },
    { id: 2, role: "photograph", nameInFrench: "Photographe" },
    { id: 3, role: "admin", nameInFrench: "Admin" },
  ];

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  const handleChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleChangeAssoName = (e) => {
    setAssoName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!role || ((!firstname || !lastname) && !assoName)) {
      alert("Veuillez remplir tous les champs obligatoires.");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
        method: "POST",
        // credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role,
          firstname,
          lastname,
          assoName,
          email,
          password,
          description,
        }),
      })
        // .then((res) => res.json())
        .then(() => {
          getAllOrganizers();
          setRole("");
          setFirstname("");
          setLastname("");
          setAssoName("");
          setEmail("");
          setPassword("");
          setDescription("");
          alert("L'utilisateur a bien été enregistré.");
        })
        .catch((err) => {
          console.error(err);
          alert("Une erreur est survenue, veuillez réessayer.");
        });
    }
  };

  return (
    <div className="form-container">
      <h2 className="create-art">Enregistrer un nouvel utilisateur</h2>
      <p className="required-fields">
        * : champs obligatoires. Veuillez également remplir "prénom + nom" ou
        "nom de l'association.
      </p>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <p>
            Rôle <strong>*</strong>
          </p>
          <label htmlFor="role" className="label-with-link-to-add-data">
            <select name="role" value={role} onChange={handleChangeRole}>
              <option value="">Veuillez sélectionner un rôle</option>
              {roles.map((oneRole) => (
                <option value={oneRole.id} key={oneRole.id}>
                  {oneRole.nameInFrench}
                </option>
              ))}
            </select>
          </label>
          <p>Prénom</p>
          <label htmlFor="firstname">
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={handleChangeFirstname}
            />
          </label>
          <p>Nom</p>
          <label htmlFor="lastname">
            <input
              type="lastname"
              id="lastname"
              value={lastname}
              onChange={handleChangeLastname}
            />
          </label>
          <p>Nom de l'association</p>
          <label htmlFor="assoName">
            <input
              type="text"
              id="assoName"
              value={assoName}
              onChange={handleChangeAssoName}
            />
          </label>
          <p>Adresse mail</p>
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </label>
          <p>Mot de passe</p>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleChangePassword}
            />
          </label>
          <p>Description</p>
          <label htmlFor="description">
            <textarea
              type="text"
              id="description"
              value={description}
              placeholder="Parlez-nous un peu de votre association : quelle(s) époque(s) reconstituez-vous ? Dans quel coin de France vous trouvez-vous ? etc."
              onChange={handleChangeDescription}
            />
          </label>
          <div className="button-container">
            <button
              type="submit"
              onClick={displayOrganizerForm}
              className="general"
            >
              Enregistrer l'utilisateur
            </button>
            <button
              type="button"
              onClick={displayOrganizerForm}
              className="create-small-data cancel-form"
            >
              Annuler
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

AdminCreateUser.propTypes = {
  displayOrganizerForm: PropTypes.func,
  getAllOrganizers: PropTypes.func,
};

AdminCreateUser.defaultProps = {
  displayOrganizerForm: undefined,
  getAllOrganizers: undefined,
};
