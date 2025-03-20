import "./App.css";
import Superhero from "./components/Superheros/Superhero/Superhero";
import Superheros from "./components/Superheros/Superheros";

import ironman from "./assets/ironman.jpeg";
import loki from "./assets/loki.jpeg";
import captainamerica from "./assets/captainamerica.jpeg";

export default function App() {
  return (
    <main>
      <h1>Marvel</h1>
      <Superheros>
        {/* Superhero numéro 1 /> */}
        <Superhero
          nom="Iron Man"
          description="Anthony « Tony » Stark, alias Iron Man est un super-héros évoluant dans
        l'univers Marvel de la maison d'édition Marvel Comics."
          films={["Iron Man", "Iron Man 2", "Iron Man3"]}
          photo={ironman}
        />
        {/* Superhero numéro 2 /> */}
        <Superhero
          nom="Loki"
          description="Loki est un personnage de fiction évoluant dans l'univers Marvel de la maison d'édition Marvel Comics."
          photo={loki}
        />

        {/* Superhero numéro 3 /> */}
        <Superhero
          nom="Captain America"
          description="Captain America est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics."
          photo={captainamerica}
        />
      </Superheros>
    </main>
  );
}
