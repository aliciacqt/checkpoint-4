import ReenactmentCalendar from "../components/ReenactmentCalendar";
import bgimg from "../../../backend/public/assets/images/posters/1689855906290-poster-244678741_232216962227656_7762310731968420238_n.jpg";

export default function EventsCalendar() {
  return (
    <>
      <img
        src={bgimg}
        alt="background, foggy morning on camp"
        className="background-img"
      />
      <div className="vertically-centered">
        <h2>Évènements à venir</h2>
        <ReenactmentCalendar />
      </div>
    </>
  );
}
