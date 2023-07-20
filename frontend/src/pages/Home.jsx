import bgimg from "../../../backend/public/assets/images/photos/1689846917731-photo-246372629_232230742226278_522092092175206516_n.jpg";

export default function Home() {
  return (
    <>
      <img
        src={bgimg}
        alt="background, foggy morning on camp"
        className="background-img"
      />
      <div className="home">
        <div id="home-text">
          <h1>Calendrier de la reconstitution historique</h1>
          <p>
            Retrouvez, regroupés en un seul et même endroit, tous les évènements
            de reconstitution historique de France, toutes époques.
          </p>
        </div>
      </div>
    </>
  );
}
