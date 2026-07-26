import * as React from 'react';
import style from './Form.module.css'
import {ITask} from '../interfaces/Task'

export interface IAppProps {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function Form (props: IAppProps) {

    const[id, setId] = React.useState<number>(0)
    const[title, setTitle] = React.useState<string>("")
    const[difficulty, setDifficulty] = React.useState<number>(0)

    function addTask(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        const id = Math.floor(Math.random() * 1000)
        const newTask: ITask = {id, title, difficulty}
        if(props.setTaskList){
        props.setTaskList([...props.taskList, newTask])
        }
        setTitle(" ")
        setDifficulty(0)

        console.log(props.taskList)
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        if(e.target.name == 'title'){
            setTitle(e.target.value)
        }else{
            setDifficulty(parseInt(e.target.value))
        }
    }

  return (
        <div>
          <h2>O que você vai fazer? </h2>
          <form onSubmit ={addTask} className = {style.form} action="">
            <div className={style.input_container}>
                <label htmlFor="title">Título:</label>
                <input type="text" name = "title" placeholder='Título da tarefa' onChange={handleChange} value = {title} />
            </div>
            <div className={style.input_container}>
                <label htmlFor="difficulty">Dificuldade:</label>
                <input type="text" name = "difficulty" placeholder='Dificuldade da tarefa' onChange={handleChange} value = {difficulty}/>
            </div>
            <input type="submit" value ={props.btnText}/>            
          </form>
        </div>
  );
}
