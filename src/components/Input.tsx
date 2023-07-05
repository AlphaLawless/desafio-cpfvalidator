import styles from "@/styles/components/Input.module.css";

export default function Input() {
  return (
    <input className={styles.input} type="number" placeholder="ex.: 538.883.950-89" maxLength={11} ></input>
  )
}