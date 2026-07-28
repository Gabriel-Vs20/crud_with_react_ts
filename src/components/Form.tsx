import * as React from 'react';
import style from './Form.module.css'
import {ITask} from '../interfaces/Task'

export interface IAppProps {
    btnText: string
    taskList: ITask[]
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
    task? :ITask | null;
    handleUpdate? (id: number, title: string, difficulty: number): void
}

export default function Form (props: IAppProps) {

    const[id, setId] = React.useState<number>(0)
    const[title, setTitle] = React.useState<string>("")
    const[difficulty, setDifficulty] = React.useState<number>(0)

    React.useEffect(()=>{
        if(props.task){
            setId(props.task.id);
            setTitle(props.task.title);
            setDifficulty(props.task.difficulty);
        }
    }, [props.task])

    function addTask(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        if(props.handleUpdate){
            props.handleUpdate(id, title, difficulty)
        }else{
            const id = Math.floor(Math.random() * 1000);

            const newTask: ITask = {id, title, difficulty};

            props.setTaskList!([...props.taskList, newTask]);
            setTitle("");
            setDifficulty(0);
        }
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
