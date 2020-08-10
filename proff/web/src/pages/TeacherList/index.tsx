import React, { useState, FormEvent } from "react";

import "./styles.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem,{Teacher} from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";


function TeacherList() {
  const[teachers,setTeachers] = useState([])

  const [subject, setSubject] = useState();
  const [week_day, setWeekDay] = useState();
  const [time, setTime] = useState();

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();
   const resp = await api.get('classes',{
      params:{
        subject,
        week_day,
        time,
      }
    });

    setTeachers(resp.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses Proffs disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            
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
          <Select
            name="week_day"
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
          <Input 
            type="time" 
            name="time" 
            label="Hora" />

          <button type='submit'>
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {
          teachers.map( (teacher:Teacher) =>{
            return <TeacherItem key={teacher.id} teacher = {teacher}/>
          })
        }
      </main>
     
    </div>
  );
}

export default TeacherList;
