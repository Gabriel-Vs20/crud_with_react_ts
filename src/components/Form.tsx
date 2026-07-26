import * as React from 'react';

export interface IAppProps {
    btnText: string
}

export default function Form (props: IAppProps) {
  return (
        <div>
          <h2>O que você vai fazer? </h2>
          <form action="">
            <div>
                <label htmlFor="title">Título:</label>
                <input type="text" name = "title" placeholder='Título da tarefa' />
            </div>
            <div>
                <label htmlFor="dificulty">Dificuldade:</label>
                <input type="text" name = "title" placeholder='Dificuldade da tarefa' />
            </div>
            <input type="submit" value ={props.btnText}/>            
          </form>
        </div>
  );
}
