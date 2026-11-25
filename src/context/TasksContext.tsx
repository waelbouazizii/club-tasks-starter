import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

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

const STORAGE_KEY = 'club-tasks';

const TasksContext = createContext<TasksContextValue | null>(null);

export function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json !== null) {
          setTasks(JSON.parse(json) as Task[]);
        }
      } catch (error) {
        console.warn('Lecture impossible', error);
      } finally {
        setLoaded(true);
      }
    }
    load();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)).catch((error) => {
      console.warn('Sauvegarde impossible', error);
    });
  }, [tasks, loaded]);

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