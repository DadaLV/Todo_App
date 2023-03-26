import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from "./TodosActions.module.css";
import Button from "../UI/Button";

function TodosActions() {
  return (
    <>
      <Button title="Reset Todos">
        <RiRefreshLine />
      </Button>
      <Button title="Clear Complited Todos">
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosActions;
