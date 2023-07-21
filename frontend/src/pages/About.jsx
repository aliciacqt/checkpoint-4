import bgimg from "../../../backend/public/assets/images/photos/1689846917731-photo-246372629_232230742226278_522092092175206516_n.jpg";

export default function About() {
  return (
    <>
      <img
        src={bgimg}
        alt="background, foggy morning on camp"
        className="background-img"
      />
      <div className="about">
        <div id="about-text">
          <h1>À propos</h1>
          <p className="p-about">
            Vous trouverez sur ce site un calendrier des prochains évènements de
            reconstitution historique, en France métropolitaine, ainsi qu'une
            galerie présentant une sélection de photographies d'évènements
            passés. Toutes les époques sont disponibles.
          </p>
          <p className="p-about">
            Passionnée depuis de nombreuses années par cette activité, j'ai
            voulu proposer au plus grand nombre la possibilité de venir assister
            à nos rencontres, ainsi qu'aux recontitueurs et reconstitueuses un
            lieu où sont regroupées toutes les informations de leurs prochaines
            sorties.
          </p>
          <p className="p-about">
            Conçu de façon responsive et donc disponible sur mobile, nous vous
            recommandons néanmoins de consulter ce site depuis un ordinateur
            afin de profiter d'une expérience de navigation optimale.
          </p>
          <h3>Mention spéciale - Droits d'auteur des images</h3>
          <p className="p-about">
            Nous tenons à attirer votre attention sur le fait que toutes les
            images présentes sur notre site internet sont soumises aux droits
            d'auteur et ne sont pas libres de droit. Ces droits sont protégés
            par la législation en vigueur sur la propriété intellectuelle. En
            tant qu'utilisateur de notre site, vous êtes invité à consulter,
            partager et apprécier les images qui vous sont présentées.
            Cependant, il est strictement interdit de copier, reproduire,
            distribuer ou utiliser ces images à des fins commerciales ou non
            commerciales sans l'autorisation expresse des détenteurs des droits
            d'auteur.
          </p>
          <h3>Politique RGPD</h3>
          <p className="p-about">
            Nous collectons et utilisons vos données personnelles uniquement
            avec votre consentement et dans le respect du RGPD. Vos informations
            sont sécurisées et ne sont partagées avec des tiers que si cela est
            nécessaire pour fournir les services demandés ou en cas d'obligation
            légale. Nous conservons vos données pendant la durée nécessaire et
            vous avez le droit d'accéder, de rectifier, de supprimer ou de
            limiter leur traitement.
          </p>
        </div>
      </div>
    </>
  );
}
