import React from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';


function TeacherList() {
    return(
      <div id="page-teacher-list" className='container'>
        <PageHeader title = "Esses Proffs disponíveis">
          <form id = 'search-teachers'>
           <Input name = 'subject' label = 'Matéria' />
           <Input name = 'week-day' label = 'Dia da Semana' />
           <Input type = 'time' name = 'time' label = 'Hora' />
          </form>
        </PageHeader>

        <TeacherItem title='Olá' content = "Viva para sempre capivaraaaaa!"></TeacherItem>
        <TeacherItem title='Olá' content = "Viva para sempre capivaraaaaa!"></TeacherItem>
        <TeacherItem title='Olá' content = "Viva para sempre capivaraaaaa!"></TeacherItem>
        <TeacherItem title='Olá' content = "Viva para sempre capivaraaaaa!"></TeacherItem>
            
      </div>
    );
}

export default TeacherList;