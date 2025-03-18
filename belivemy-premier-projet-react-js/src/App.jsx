import "./App.css";

export default function App() {
  return (
    <main className="superheros">
      <h1>Marvel</h1>
      {/* Superhero numéro 1 /> */}
      <Superhero />
      {/* Superhero numéro 2 /> */}
      <div className="superhero">
        <h2>Loki</h2>
        <p>
          Dieu du feu, de la glace, de la magie, du chaos, de la destruction, de
          la métamorphose et du changement · Il est musclé, beau, intelligent,
          et drôle.
        </p>
      </div>

      {/* Superhero numéro 3 /> */}
      <div className="superhero">
        <h2>Captain America</h2>
        <p>
          Captain America est un super-héros qui a fait ses débuts dans les
          comics en 1941. Depuis, il est devenu l'un des super-héros les plus
          populaires de l'univers Marvel.
        </p>
      </div>
    </main>
  );
}
