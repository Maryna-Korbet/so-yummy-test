import { useDispatch } from "react-redux";
import { deleteTask } from "redux/operations";
import { MdClose } from "react-icons/md";
import css from "../Task/Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
