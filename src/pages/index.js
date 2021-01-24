//spis tresci
//wszystko w tym folderze wczytujemy i eksportujemy na zewnatrz

import Logowanie from "./Logowanie";
import StronaGlowna from "./StronaGlowna";
import FAQ from "./FAQ";
import FormularzKontaktowy from "./FormularzKontaktowy";
import Kontakt from "./Kontakt";
import Newsletter from "./Newsletter";
import Odbior from "./Odbior";
import Oferta from "./Oferta";
import Rejestracja from "./Rejestracja";
import Profil from "./Profil";
import Zamowienie from "./Zamowienie";

//default - nie musisz wymieniać obiektów które eksportuję, jeden obiekt który zawiera w sobie wszystkie rzeczy
export default {
  FAQ: FAQ,
  FormularzKontaktowy: FormularzKontaktowy,
  Kontakt: Kontakt,
  Logowanie: Logowanie,
  Newsletter: Newsletter,
  Odbior: Odbior,
  Oferta: Oferta,
  Profil: Profil,
  Rejestracja: Rejestracja,
  StronaGlowna: StronaGlowna,
  Zamowienie: Zamowienie
};
