import { createContext, useContext, useState, type ReactNode } from 'react';

export type Task = { id: string; title: string; done: boolean };

type TasksContextValue = {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: string) => void;
  importTasks: (newTasks: Task[]) => void;
};

const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Installer Node.js', done: true },
  { id: '2', title: 'Créer le projet Expo', done: true },
  { id: '3', title: 'Comprendre useState', done: false },
];

const TasksContext = createContext<TasksContextValue | null>(null);

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  function addTask(title: string) {
    setTasks((current) => [...current, { id: Date.now().toString(), title, done: false }]);
  }

  function toggleTask(id: string) {
    setTasks((current) => current.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function importTasks(newTasks: Task[]) {
    setTasks((current) => [
      ...current,
      ...newTasks.filter((task) => !current.some((t) => t.id === task.id)),
    ]);
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, toggleTask, importTasks }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks(): TasksContextValue {
  const value = useContext(TasksContext);
  if (value === null) {
    throw new Error('useTasks must be used inside TasksProvider');
  }
  return value;
}