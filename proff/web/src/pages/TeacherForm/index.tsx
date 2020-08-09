import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

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
            </main>
      </div>
    );
}

export default TeacherForm;