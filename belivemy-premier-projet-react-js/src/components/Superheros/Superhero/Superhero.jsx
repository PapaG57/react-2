import "./Superhero.css";

export default function Superhero({
  nom,
  description,
  films = ["Aucun film pour ce superhero"],
  photo = ["./inconnu.png"],
}) {
  return (
    <div className="superhero">
      <img alt={`${nom} photo`} src={photo} />
      <h2>{nom}</h2>
      <p>{description}</p>
      <div>
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
