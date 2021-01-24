import React from "react";

const Zamowienie = () => {
  return (
    <section className="zamowienie">
      <h1>Zamówienie</h1>
      <form action="/zamowienia" method="post">
      <fieldset>
        <legend>Pozycje:</legend>
        <section class="danie">
          <h1>Zupa pomidorowa</h1>
          <p>Cena: 10pln</p>
          <p>Ilość: 1</p>
        </section>
        <section class="danie">
          <h1>Zupa pomidorowa</h1>
          <p>Cena: 10pln</p>
          <p>Ilość: 1</p>
        </section>
      </fieldset>
      <fieldset>
        <legend>Podsumowanie:</legend>
        <section class="podsumowanie">
          <h1>Do zapłaty: 20pln</h1>
        </section>
      </fieldset>
      <fieldset>
        <legend>Odbiór:</legend>
        <section class="odbior">
          <input type="date"></input>
          <input type="time"></input>
        </section>
      </fieldset>
      <button type="submit" class="zamowButton">Zamów</button>
      </form>
    </section>
  );
};

export default Zamowienie;
