import React from "react";
import { A } from "hookrouter";
const Footer = () => {
  return (
    <div>
      <A href="/formularz" className="link">
        Formularz Kontaktowy
      </A>
      <A href="/newsletter" className="link">
        Newsletter
      </A>

      <address className="adres">
        <div>Nazwa Firmy: NaPożarcie.pl</div>
        <div>Adres: Firmowa 11, Warszawa</div>
        <div>Telefon: +48 112 112 112</div>
      </address>
    </div>
  );
};

export default Footer;
