import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <h1>Ajouter un nouvel évènement</h1>
      <Link to="/admin-create-event">Ajouter un nouvel évènement</Link>
      <Link to="/admin-create-user">Ajouter un nouvel utilisateur</Link>
      <Link to="/admin-add-photo">Ajouter une nouvelle photo</Link>
    </>
  );
}
