import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import styles from './App.module.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <Form btnText='Criar tarefa'/>
        <List />
      </main>
      <Footer/>
    </div>    
  );
}

export default App;
