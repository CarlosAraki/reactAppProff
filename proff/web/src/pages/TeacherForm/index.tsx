import React, { useState, FormEvent } from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import warnigIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

function TeacherForm() {
  const [name,setName] = useState('');
  const [avatar,setAvatar] = useState('');
  const [whatsapp,setWhatsapp] = useState('');
  const [bio,setBio] = useState('');
  const [subject,setSubject] = useState('');
  const [cost,setCost] = useState('');

  const [scheduleItems,setScheduleItems] = useState([
    {
      week_day:0,
      from:'',
      to:''
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

  function handleCreateClass(e: FormEvent){
    e.preventDefault();
    console.log('aaa');
  }

  function setScheduleItemValue(position:number,field:string,value:string){
    const newArray = scheduleItems.map((scheduleItem,index)=>{
      if(index === position ){
        return {...scheduleItem, [field]:value}
      }else{
        return scheduleItem        
      }
    })
  }


  return (
    <div id="page-teacher-form">
      <PageHeader
        title="Formulário de Inscricao"
        description="Preencher formulário de inscrição"
      />
      <main>
        <form onSubmit = {handleCreateClass}>
          <fieldset>
            <legend> Dados do Usuário</legend>
            <Input 
              name="name" 
              label="Nome" 
              value = {name} 
              onChange ={(e)=>{setName(e.target.value)}}/>
            <Input 
              name="avatar" 
              label="Avatar"
              value = {avatar}
              onChange ={(e)=>{
                setAvatar(e.target.value)
              }}     />
            <Input 
              name="whatsapp" 
              label="Whatsapp"
              value = {whatsapp}
              onChange ={(e)=>{
                setWhatsapp(e.target.value)
              }}     />
            <Textarea
              name="bio" 
              label="Biografia"
              value = {bio}
              onChange ={(e)=>{
                setBio(e.target.value)
              }}     />
          </fieldset>
          <fieldset>
            <legend> Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value)
              }}
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
            <Input 
              name="cost" 
              label="Custo da aula" 
              value={cost}
              onChange={(e) => {
                setCost(e.target.value)
              }}/>
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis
              <button type="button" onClick={newScheduleItem}>+ Novo Horário</button>
            </legend>

            {scheduleItems.map((scheduleItem,index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    onChange={e=> setScheduleItemValue(index,'week_day',e.target.value)}
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
                  name="from" 
                  label="Das"
                  type="time"
                  value = {scheduleItem.from}
                  onChange = {(e)=>setScheduleItemValue(index,'from',e.target.value)}
                  />
                  <Input 
                  name="to" 
                  label="Até"
                  type="time"
                  value = {scheduleItem.to}
                  onChange = {(e)=>setScheduleItemValue(index,'to',e.target.value)}
                  />
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
            <button type="submit">Salvar formulário</button>
          </footer>

        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
