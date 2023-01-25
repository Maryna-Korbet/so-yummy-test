// Импортируем хук, хук для отправки экшен
import { useSelector, useDispatch } from "react-redux";
// Импортируем объект значений фильтра
import { statusFilters } from "redux/constants";
// Импортируем функцию-селектор
import { getStatusFilter } from "redux/selector";
// Импортируем генератор экшена
import { setStatusFilter } from "redux/actions";
import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  // Получаем значение фильтра из состояния Redux. добавляем функцию-селектор
  const filter = useSelector(getStatusFilter);
  //Запускаем функцию отправки экшенов
  const dispatch = useDispatch();

  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен переключения статуса задачи
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button 
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
        >All</Button>
      <Button 
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
        >Active</Button>
      <Button 
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
        >Completed</Button>
    </div>
  );
};