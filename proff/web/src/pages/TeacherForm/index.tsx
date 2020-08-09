import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import warnigIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

function TeacherForm() {
  const [scheduleItems,setScheduleItems] = useState([
    {
      week_day:0,
      from:'8:00 AM',
      to:'4:00 PM'
    },
    {
      week_day:2,
      from:'10:00 AM',
      to:'2:00 PM'
    },
  ]);

  function newScheduleItem(){
    setScheduleItems(
      [
        ...scheduleItems,
        {
          week_day:0,
          from:'',
          to:''
        }
      ]
    );
    console.log('aaa');
  }



  return (
    <div id="page-teacher-form">
      <PageHeader
        title="Formulário de Inscricao"
        description="Preencher formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend> Dados do Usuário</legend>
          <Input name="name" label="Nome" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend> Sobre a aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              {
                value: "Artes",
                label: "Artes",
              },
              {
                value: "Math",
                label: "Matematica",
              },
              {
                value: "MC",
                label: "MC",
              },
              {
                value: "Port",
                label: "Português",
              },
            ]}
          />
          <Input name="cost" label="Custo da aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários Disponíveis
            <button type="button" onClick={newScheduleItem}>+ Novo Horário</button>
          </legend>

          {scheduleItems.map((scheduleItem) => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="week-day"
                  label="Dia da Semana"
                  options={[
                    {
                      value: "1",
                      label: "Domingo",
                    },
                    {
                      value: "2",
                      label: "Segunda",
                    },
                    {
                      value: "3",
                      label: "Terça",
                    },
                    {
                      value: "4",
                      label: "Quarta",
                    },
                    {
                      value: "5",
                      label: "Quinta",
                    },
                    {
                      value: "6",
                      label: "Sexta",
                    },
                    {
                      value: "7",
                      label: "Sábado",
                    },
                  ]}
                />
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            );
          })}
        </fieldset>

        <footer>
          <p>
            <img src={warnigIcon} alt="Aviso Importante" />
            Importante ! <br />
            Preencha todos os dados !
          </p>
          <button type="button">Salvar formulário</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
