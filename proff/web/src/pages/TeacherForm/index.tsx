import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warnigIcon from '../../assets/images/icons/warning.svg';

import './styles.css'

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
              </fieldset>
              <fieldset>
                <legend> Sobre a aula</legend>
                <Input  name="subject" label="Matéria"/>
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