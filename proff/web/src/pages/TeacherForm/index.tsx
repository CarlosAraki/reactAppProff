import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warnigIcon from '../../assets/images/icons/warning.svg';

import './styles.css'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    return(
      
      <div id="page-teacher-form">
            <PageHeader 
              title = "Formulário de Inscricao"
              description = "Preencher formulário de inscrição"/>
            <main>
              <fieldset>
                <legend> Dados do Usuário</legend>
                <Input  name="name" label="Nome"/>
                <Input  name="avatar" label="Avatar"/>
                <Input  name="whatsapp" label="Whatsapp"/>
                <Textarea name='bio' label="Biografia"/>
              </fieldset>
              <fieldset>
                <legend> Sobre a aula</legend>
                <Select  
                  name="subject" 
                  label="Matéria"
                  options={
                    [
                      {
                        value:'Artes',label:'Artes'
                      },
                      {
                        value:'Math',label:'Matematica'
                      },
                      {
                        value:'MC',label:'MC'
                      },
                      {
                        value:'Port',label:'Português'
                      },
                    ]
                  }
                  />
                <Input  name="cost" label="Custo da aula"/>
              </fieldset>
              <footer>
                <p>
                  <img 
                    src = {warnigIcon} alt ="Aviso Importante"
                  />
                  Importante ! <br />
                  Preencha todos os dados !
                </p>
                <button type='button'>Salvar formulário</button>
              </footer>
            </main>
      </div>
    );
}

export default TeacherForm;