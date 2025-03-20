import Superhero from "../../Superhero/Superhero";
import "./Superheros.css";

export default function Superheros() {
  return (
    <div className="superheros">
      {/* Superhero numéro 1 /> */}
      <Superhero
        nom="Iron Man"
        description="Anthony « Tony » Stark, alias Iron Man est un super-héros évoluant dans
        l'univers Marvel de la maison d'édition Marvel Comics."
        films={["Iron Man", "Iron Man 2", "Iron Man3"]}
      />
      {/* Superhero numéro 2 /> */}
      <Superhero
        nom="Loki"
        description="Loki est un personnage de fiction évoluant dans l'univers Marvel de la maison d'édition Marvel Comics."
      />

      {/* Superhero numéro 3 /> */}
      <Superhero
        nom="Captain America"
        description="Captain America est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics."
      />
    </div>
  );
}
