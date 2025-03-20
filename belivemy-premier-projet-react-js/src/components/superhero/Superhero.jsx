import "./Superhero.css";

export default function Superhero({
  nom,
  description,
  films = ["Aucun film pour ce superhero"],
}) {
  return (
    <div className="superhero">
      <h2>{nom}</h2>
      <p>{description}</p>
      <div>
        <b>Films :</b>
        <ul>
          {films.map((film) => (
            <li>{film}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
