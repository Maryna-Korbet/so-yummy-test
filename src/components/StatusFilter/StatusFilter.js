// Импортируем хук, хук для отправки экшен
import { useSelector, useDispatch } from "react-redux";
// Импортируем объект значений фильтра
import { statusFilters } from "redux/constants";
// Импортируем функцию-селектор
import { getStatusFilter } from "redux/selector";
import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  // Получаем значение фильтра из состояния Redux. добавляем функцию-селектор
  const filter = useSelector(getStatusFilter);
  //Запускаем функцию отправки экшенов
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};