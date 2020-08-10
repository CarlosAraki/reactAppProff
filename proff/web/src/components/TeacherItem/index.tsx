import React from "react";
import { Link } from "react-router-dom";

import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";

import "./styles.css";
import wppIcon from "../../assets/images/icons/whatsapp.svg";

export interface Teacher {
  id:number;
  avatar:string;
  name:string;
  bio:string;
  cost:number;
  subject:string;
  whatsapp:string;
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
  return (
    <main>
      <article className="teacher-item">
        <header>
          <img src={teacher.avatar}></img>
        </header>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>

        <p>
          {teacher.bio}
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ {teacher.cost}</strong>
          </p>
          <a href = {`https://wa.me/${teacher.whatsapp}`}>
            Contato
            <img src={wppIcon} alt="Wpp" />
          </a>
        </footer>
      </article>
    </main>
  );
};

export default TeacherItem;
