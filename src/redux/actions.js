//Добавляем библиотеку генерации id
import { nanoid } from "nanoid";

//Добавляем объекты, которые передают данные из компонентов в стор
export const addTask = text => {
  return {
    type: "tasks/addTask",
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};
export const deleteTask = taskId => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};
export const toggleCompleted = taskId => {
  return {
    type: "tasks/toggleCompleted",
    payload: taskId,
  };
};
export const setStatusFilter = value => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};