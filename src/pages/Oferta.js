import React from "react";
import {
  Input,
  AutoComplete,
  Menu,
  Dropdown,
  Button,
  message,
  Space,
  Tooltip,
  Card
} from "antd";
// import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from "@ant-design/icons";

function handleButtonClick(e) {
  message.info("Click on left button.");
  console.log("click left button", e);
}

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Dania Główne</Menu.Item>
    <Menu.Item key="2">Wegetariańskie</Menu.Item>
    <Menu.Item key="3">Mięsko</Menu.Item>
  </Menu>
);

const Oferta = () => {
  return (
    <div>
      <h1>Oferta</h1>;
      <AutoComplete className="autocomplete">
        <Input.Search size="large" placeholder="input here" enterButton />
      </AutoComplete>
      <Dropdown overlay={menu} className="component-filter">
        <Button>
          Filtrowanie <DownOutlined />
        </Button>
      </Dropdown>
      <section className="oferta">
        <div className="menu-oferta">
          <button>
            <a href="/oferta#oferta-dostepna" className="menu-oferta-item">
              Oferta dostępna
            </a>
          </button>
          <button>
            <a href="/oferta#oferta-najutro" className="menu-oferta-item">
              Oferta na jutro
            </a>
          </button>
        </div>
        <section id="oferta-dostepna">
          <h2>Na dzisiaj</h2>
          <div className="licznik">
            <h3>Czas na złożenie zamówienia</h3>
            <p>2:00</p>
          </div>
          <Card title="Pomidorowa" className="menuItem" bordered={false}>
            <p>Cena: 10pln</p>
            <p>Opis: Zupa pomidorowa z makaronem</p>
            <p>
              <a href="/sklad/1">Skład</a>
            </p>
            <label for="ilosc" class="iloscLabel">
              Ilość
            </label>
            <input id="ilosc" type="number" />
            <button type="submit">Zamów</button>
          </Card>
        </section>
        <section id="oferta-najutro">
          <h2>Na jutro</h2>
          <div className="licznik">
            <h3>Czas na złożenie zamówienia</h3>
            <p>10:00</p>
          </div>
          <Card title="Pomidorowa" className="menuItem" bordered={false}>
            <p>Cena: 10pln</p>
            <p>Opis: Zupa pomidorowa z makaronem</p>
            <p>
              <a href="/sklad/1">Skład</a>
            </p>
            <label for="ilosc" class="iloscLabel">
              Ilość
            </label>
            <input id="ilosc" type="number" />
            <button type="submit">Zamów</button>
          </Card>
        </section>
      </section>
    </div>
  );
};

export default Oferta;
