import "./Superhero.css";
import { useState } from "react";

export default function Superhero({
  nom,
  description = "Pas de description pour l'instant.",
  films = ["Aucun film pour ce superhero"],
  photo = ["./inconnu.png"],
  details = "Aucun nouveau détail.",
  estLePrefere,
  superheroClique = () => {},
  ...props
}) {
  // State
  const [montrerLesDetails, setMontrerLesDetails] = useState(false);

  // let contenu = "";
  // if (montrerLesDetails) {
  //   contenu = details;
  // }

  return (
    <div
      className={`superhero ${estLePrefere && "superheroPrefere"}`}
      onClick={() => superheroClique(nom)}
    >
      {/* Carte */}
      <img alt={`${nom} photo`} src={photo} />
      <h2>{nom}</h2>
      <p>{description}</p>

      {/* Détails */}
      <div
        className="read-more"
        onClick={() =>
          setMontrerLesDetails((statePrecedent) => !statePrecedent)
        }
      >
        {montrerLesDetails ? "Masquer les détails" : "En savoir plus"}
      </div>
      {montrerLesDetails && (
        <div
          style={{
            whiteSpace: "pre-line",
          }}
        >
          {details}
        </div>
      )}

      {/* Films */}
      <div style={{ marginTop: 10 }}>
        <b>Films :</b>
        <ul>
          {films.map((film) => (
            <li key={film}>{film}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
