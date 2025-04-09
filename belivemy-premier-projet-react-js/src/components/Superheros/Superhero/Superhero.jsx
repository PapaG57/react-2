import "./Superhero.css";

export default function Superhero({
  nom,
  description,
  films = ["Aucun film pour ce superhero"],
  photo = ["./inconnu.png"],
  details,
  ...props
}) {
  return (
    <div className="superhero">
      <img alt={`${nom} photo`} src={photo} />
      <h2>{nom}</h2>
      <p>{description}</p>
      <div className="read-more">En savoir plus</div>
      <div
        style={{
          whiteSpace: "pre-line",
        }}
      >
        {details}
      </div>
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
