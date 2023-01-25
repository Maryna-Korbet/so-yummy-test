// Импортируем хук для отправки экшен
import { useDispatch } from "react-redux";
// Импортируем генератор экшена
import { deleteTask, toggleCompleted } from "../../redux/actions";
import { MdClose } from "react-icons/md";
import css from "../Task/Task.module.css";

export const Task = ({ task }) => {
  //Запускаем функцию отправки экшенов
  const dispatch = useDispatch();

  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен удаления задачи
  const handleDelete = () => dispatch(deleteTask(task.id));

  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен переключения статуса задачи
  const handleToggle = () => dispatch(toggleCompleted(task.id));
  
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
