import styles from "./Filter.module.css"

import { useDispatch } from "react-redux";
import { phonebookFilter } from "../../redux/phonebookActions";

const Filter = () => {

  const dispatch = useDispatch();

  return (
    <>
      <p className={styles.title}>Find contacts by Name</p>
      <input
        type="text"
        onChange={(event) => dispatch(phonebookFilter(event))}
        className={styles.input}
      />
    </>
  )
}

export default Filter;