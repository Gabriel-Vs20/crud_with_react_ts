import * as React from 'react';
import { ITask } from '../interfaces/Task';

export interface IAppProps {
    taskList: ITask[]
}

export default function List (props: IAppProps) {
  return (
    <>
    {props.taskList.length > 0 ?(
        props.taskList.map((task) =>
        (
            <div>
                <p>{task.title}</p>
            </div>
        ))
    ): (
        <p>Não tem tarefas cadastradas, ainda</p>
    )}
    </>
  );
}
