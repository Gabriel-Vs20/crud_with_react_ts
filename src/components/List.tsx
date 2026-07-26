import * as React from 'react';
import { ITask } from '../interfaces/Task';
import styles from './List.module.css';

export interface IAppProps {
    taskList: ITask[]
    handleDelete(id: number): void
}

export default function List (props: IAppProps) {
  return (
    <>
    {props.taskList.length > 0 ?(
        props.taskList.map((task) =>
        (
            <div className={styles.task}>
                <div className={styles.details}>
                    <h4>{task.title}</h4>
                    <p>Dificuldade: {task.difficulty}</p>
                </div>
                <div className={styles.actions}>
                    <i className="bi bi-pencil"></i>
                    <i className="bi bi-trash" onClick={() => props.handleDelete(task.id)}></i>
                </div>
            </div>
        ))
    ): (
        <p>Não tem tarefas cadastradas, ainda</p>
    )}
    </>
  );
}
