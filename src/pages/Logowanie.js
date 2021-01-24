import React, { useState } from "react";
import { message } from "antd";

const Logowanie = () => {
  const [inputLogin, setLogin] = useState("haha");
  const [inputPassword, setPassword] = useState("hoho");

  let handlerSubmit = async e => {
    e.preventDefault();

    const oferta = await fetch(
      "https://react-sii-napozarcie.stackblitz.io/api/oferta.json"
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const formularz = document.getElementById("formularz-logowania");
        formularz.insertAdjacentHTML("beforeend", data);
        message.success("success");
      })
      .catch(error => {
        message.error("fetch error");
      });

    console.log(oferta);

    const formData = new FormData(e.target);
    formData.append("login", "pwd");

    sessionStorage.setItem("login", formData.get("login"));
    sessionStorage.setItem("password", formData.get("password"));

    console.log(formData.get("login")); //getuje po name
    console.log(formData.get("password"));
    console.log(sessionStorage.getItem("login"));
    console.log(sessionStorage.getItem("password"));
    let login = e.target.login;
    let password = e.target.password;
    console.log(e);
    console.log(login.value);
    console.log(password.value);
  };
  return (
    <div>
      <h1>Logowanie</h1>
      <form
        className="logowanie"
        id="formularz-logowania"
        onSubmit={handlerSubmit}
      >
        <label htmlFor="login">Login:</label>
        <input id="login" type="text" name="login" />
        <label htmlFor="password">Hasło:</label>
        <input id="password" type="password" name="password" />
        <button type="submit">Zaloguj</button>
      </form>
    </div>
  );
};

export default Logowanie;
