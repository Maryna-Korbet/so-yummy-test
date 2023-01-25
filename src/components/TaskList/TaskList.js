// Импортируем хук
import { useSelector } from "react-redux";
// Импортируем объект значений фильтра
import { statusFilters } from "redux/constants";
// Импортируем функциu-селекторы
import { getTasks, getStatusFilter } from "redux/selector";
import { Task } from "components/Task/Task";
import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // Получаем массив задач из состояния Redux, добавляем функцию-селектор
  const tasks = useSelector(getTasks);
  // Получаем значение фильтра из состояния Redux, добавляем функцию-селектор
  const statusFilter = useSelector(getStatusFilter);
  // Вычисляем массив задач которые необходимо отображать в интерфейсе
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
