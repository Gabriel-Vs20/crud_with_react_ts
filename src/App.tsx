import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import styles from './App.module.css';
import Form from './components/Form';
import List from './components/List';
import {ITask} from './interfaces/Task';
import Modal from './components/Modal';

function App() {

  const [taskList, setTaskList] = React.useState<ITask[]>([]);
  const [taskUpdate, setTaskUpdate] = React.useState<ITask | null>(null);

  function deleteTask (id: number){
    setTaskList(
      taskList.filter((task => {
        return task.id !== id
      }))
    )
  }

  function hideOrShowModal(display: boolean):void{
      const modal = document.querySelector('#modal');
      if(display == true){
        modal!.classList.remove("hide")
      }else{
        modal!.classList.add("hide")
      }
  }

  function editTask(task: ITask){
    hideOrShowModal(true);
    setTaskUpdate(task)
  }

  function updateTask(id: number, title: string, difficulty: number){
      const updateTask: ITask = {id, title, difficulty}

      const updateItens = taskList.map((task)=>{
        return task.id === updateTask.id ? updateTask : task
      });

      setTaskList(updateItens);
      hideOrShowModal(false);
  }

  return (
    <div>
      <Modal>
        children = {<Form btnText="Editar Tarefa" taskList={taskList} setTaskList={setTaskList} task={taskUpdate} handleUpdate={updateTask}/>}
      </Modal>
      <Header/>
      <main className={styles.main}>
        <Form btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList}/>
        <List taskList={taskList} handleDelete={deleteTask} handleEditTask={editTask} />
      </main>
      <Footer/>
    </div>    
  );
}

export default App;
