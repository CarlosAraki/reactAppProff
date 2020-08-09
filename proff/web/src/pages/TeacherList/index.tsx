import React from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


function TeacherList() {
    return(
      <div id="page-teacher-list" className='container'>
        <PageHeader title = "Esses Proffs disponíveis">
          <form id = 'search-teachers'>
            <div className = 'input-block'>
              <label htmlFor='subject'>Matéria</label>
              <input type='text' id ='subject' ></input>
            </div>

            <div className = 'input-block'>
              <label htmlFor='week-day'>Dia da Semana</label>
              <input type='text' id ='week-day' ></input>
            </div>

            <div className = 'input-block'>
              <label htmlFor='time'>Hora</label>
              <input type='text' id ='time' ></input>
            </div>
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