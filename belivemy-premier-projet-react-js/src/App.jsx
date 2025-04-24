import "./App.css";
import Superhero from "./components/Superheros/Superhero/Superhero";
import Superheros from "./components/Superheros/Superheros";

import ironman from "./assets/ironman.jpeg";
import loki from "./assets/loki.jpeg";
import captainamerica from "./assets/captainamerica.jpeg";
import { useState } from "react";

export default function App() {
  // State
  const [superHerosPrefere, setSuperheroPrefere] = useState();
  const [nomDuSuperhero, setNomDuSuperhero] = useState("Anonyme");
  const [descriptionDuSuperhero, setDescriptionDuSuperhero] = useState(
    "Pas de description définis"
  );
  const [photoDuSuperhero, setPhotoDuSuperhero] = useState("");

  // Fonction
  const superheroClique = (nom) => {
    setSuperheroPrefere(nom);
  };

  return (
    <main>
      <h1>Marvel</h1>
      <Superheros>
        {/* Superhero numéro 1 /> */}
        <Superhero
          nom="Iron Man"
          description="Anthony « Tony » Stark, alias Iron Man est un super-héros évoluant dans
        l'univers Marvel de la maison d'édition Marvel Comics."
          details="À partir de 1968, le personnage a son propre comic, The Invincible Iron Man, publié par Marvel jusqu'en 1996 avec le no 332.

Au début de sa carrière de super-héros, Tony Stark avait pour principale occupation de lutter contre les communistes dans le contexte de la guerre froide, de manière beaucoup plus systématique que les autres personnages de Marvel Comics. Ce cadre historique a progressivement disparu, au profit d'aventures de science-fiction. Le contexte de la série Iron Man a ensuite continué d'évoluer avec les années, le personnage affrontant en majorité des menaces de type technologique.

Le corps d'Iron Man est celui d'un homme normal, sans pouvoir surnaturel ou surhumain, mais rendu surpuissant quand il revêt l'une des nombreuses armures de haute technologie conçues à l'aide des impressionnantes compétences scientifiques de Stark. L'armure, pouvant voler à des vitesses supersoniques, confère à Tony Stark une force et une résistance surhumaines et est équipée de multiples armes, capteurs et systèmes électroniques."
          films={["Iron Man", "Iron Man 2", "Iron Man3"]}
          photo={ironman}
          estLePrefere={superHerosPrefere == "Iron Man"}
          superheroClique={superheroClique}
        />
        {/* Superhero numéro 2 /> */}
        <Superhero
          nom="Loki"
          description="Loki est un personnage de fiction évoluant dans l'univers Marvel de la maison d'édition Marvel Comics."
          details="Loki est une divinité et un super-vilain évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par les scénaristes Stan Lee et Larry Lieber, ainsi que le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Journey into Mystery #85 en octobre 1962.

Le personnage est inspiré de son homologue de la mythologie nordique. Une première adaptation de Loki, différente de celle du personnage actuel, était apparue dans Venus (en) #6, publié par Timely Comics en août 1949.

Loki tient le rôle du pire ennemi de son demi-frère Thor. À la base un super-vilain, il est parfois dépeint comme un anti-héros. Dieu de la tromperie et manipulateur remarquable, c'est un puissant sorcier qui a été adopté par Odin, Loki appartenant à la race des géants des glaces de Jötunheim.

Le personnage a été adapté à l'univers cinématographique Marvel où il est interprété par l'acteur Tom Hiddleston."
          photo={loki}
          estLePrefere={superHerosPrefere == "Loki"}
          superheroClique={superheroClique}
        />

        {/* Superhero numéro 3 /> */}
        <Superhero
          nom="Captain America"
          description="Captain America est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics."
          details="Steven « Steve » Rogers, alias Captain America est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Joe Simon et le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Captain America Comics #1, paru en décembre 1940[n 3] mais avec la date de mars 1941 inscrite sur la couverture[3].
          
          Conçu à l'origine comme une figure patriotique américaine en réaction au régime nazi, le personnage devient actif avant même l'entrée en guerre officielle des États-Unis dans la Seconde Guerre mondiale, en décembre 1941. Dès le début de sa publication, il est perçu comme le porte-drapeau des valeurs démocratiques de son pays et comme un défenseur du monde libre contre les totalitarismes, notamment le Troisième Reich[4].

Doté d'une condition physique au summum du potentiel humain, Captain America est un combattant hors pair, un chef-né et un stratège militaire accompli. Il porte un costume reconnaissable entre tous, inspiré du drapeau américain et est équipé d'un bouclier quasi indestructible, composé d'un alliage d'acier et du fictif vibranium, qu'il utilise comme une protection ainsi que comme une arme.

Depuis les années 1960, Captain America fait partie de l'équipe de super-héros les Vengeurs (Avengers, et ses diverses versions) dont il est devenu au fil des ans l’un des piliers."
          photo={captainamerica}
          estLePrefere={superHerosPrefere == "Captain America"}
          superheroClique={superheroClique}
        />

        <Superhero
          nom={nomDuSuperhero}
          description={
            descriptionDuSuperhero != "" ? descriptionDuSuperhero : undefined
          }
          photo={photoDuSuperhero != "" ? photoDuSuperhero : undefined}
        />

        {/* Paramétrage de notre superhero */}
        <div
          style={{
            border: "1px solid black",
            padding: "15px",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Crée ton propre superhero</h3>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="nom">Photo</label>
            <input
              type="text"
              name="photo"
              id="photo"
              value={photoDuSuperhero}
              onChange={(event) => {
                setPhotoDuSuperhero(event.target.value);
              }}
              style={{
                padding: 5,
                fontSise: 14,
                display: "block",
                width: "100%",
              }}
            />
          </div>
          <div>
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              name="nom"
              id="nom"
              value={nomDuSuperhero}
              onChange={(event) => {
                setNomDuSuperhero(event.target.value);
              }}
              style={{
                padding: 5,
                fontSise: 14,
                display: "block",
                width: "100%",
              }}
            />
          </div>
          <div style={{ marginTop: 10 }}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={descriptionDuSuperhero}
              onChange={(event) => {
                setDescriptionDuSuperhero(event.target.value);
              }}
              style={{
                padding: 5,
                fontSise: 14,
                display: "block",
                width: "100%",
              }}
            />
          </div>
        </div>
      </Superheros>
    </main>
  );
}
