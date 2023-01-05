import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './Input.module.css'

interface InputProps {
  onNewTask: (task: string) => void;
}

export function Input({ onNewTask }: InputProps) {
  const [newTask, setNewTask] = useState('');

  function handleNewTask(event: FormEvent) {
    event?.preventDefault();

    onNewTask(newTask);
    setNewTask('');
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event?.target.setCustomValidity('Obligatory field');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value);
  }

  return (
    <form onSubmit={handleNewTask}>
      <div className={styles.inputNewTask}>
        <input
          type="text"
          required
          placeholder="Enter new task"
          onInvalid={handleNewTaskInvalid}
          onChange={handleNewTaskChange}
          value={newTask}
        />
        <button>
        Add
          <PlusCircle size={20} />
        </button>
      </div>
    </form>
  )
}
