import React from "react";

import Pages from "./pages";

const {
  StronaGlowna,
  Logowanie,
  FAQ,
  FormularzKontaktowy,
  Kontakt,
  Newsletter,
  Odbior,
  Oferta,
  Profil,
  Rejestracja,
  Zamowienie
} = Pages;

const routes = {
  "/": () => <StronaGlowna />,
  "/logowanie": () => <Logowanie />,
  "/faq": () => <FAQ />,
  "/formularz": () => <FormularzKontaktowy />,
  "/kontakt": () => <Kontakt />,
  "/newsletter": () => <Newsletter />,
  "/odbior": () => <Odbior />,
  "/oferta": () => <Oferta />,
  "/profil": () => <Profil />,
  "/rejestracja": () => <Rejestracja />,
  "/zamowienie": () => <Zamowienie />
};

export default routes;
