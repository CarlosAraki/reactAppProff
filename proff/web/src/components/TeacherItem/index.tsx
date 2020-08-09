import React from "react";
import { Link } from "react-router-dom";

import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

import "./styles.css";
import wppIcon from "../../assets/images/icons/whatsapp.svg";

interface TeacherItemProps {
  title: string;
  content?: string;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <main>
      <article className="teacher-item">
        <header>
          <img src="https://www.infoescola.com/wp-content/uploads/2008/05/capivara-119654188-600x400.jpg"></img>
        </header>

        <p>
          {props.title}
          <br />
          <br />
          {props.content}
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 80,00</strong>
          </p>
          <button>
            {" "}
            Contato
            <img src={wppIcon} alt="Wpp" />
          </button>
        </footer>
      </article>
    </main>
  );
};

export default TeacherItem;
