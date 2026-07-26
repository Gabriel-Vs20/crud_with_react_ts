import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import styles from './App.module.css';
import Form from './components/Form';
import List from './components/List';
import {ITask} from './interfaces/Task'

function App() {

  const [taskList, setTaskList] = React.useState<ITask[]>([]);

  function deleteTask (id: number){
    setTaskList(
      taskList.filter((task => {
        return task.id !== id
      }))
    )
  }

  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <Form btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList}/>
        <List taskList={taskList} handleDelete={deleteTask}/>
      </main>
      <Footer/>
    </div>    
  );
}

export default App;
