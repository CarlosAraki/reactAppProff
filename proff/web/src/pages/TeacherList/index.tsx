import React from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';


function TeacherList() {
    return(
      <div id="page-teacher-list" className='container'>
        <PageHeader title = "Esses Proffs disponíveis">
          <form id = 'search-teachers'>
           <Input name = 'subject' label = 'Matéria' />
           <Select  
                  name="week-day" 
                  label="Dia da Semana"
                  options={
                    [
                      {
                        value:'1',label:'Domingo'
                      },
                      {
                        value:'2',label:'Segunda'
                      },
                      {
                        value:'3',label:'Terça'
                      },
                      {
                        value:'4',label:'Quarta'
                      },
                      {
                        value:'5',label:'Quinta'
                      },
                      {
                        value:'6',label:'Sexta'
                      },
                      {
                        value:'7',label:'Sábado'
                      },
                    ]
                  }
                  />
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