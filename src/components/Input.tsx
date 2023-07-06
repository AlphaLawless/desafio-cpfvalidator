import { useState } from "react";
import styles from "@/styles/components/Input.module.css";

export default function Input() {
  const [val, setVal] = useState("")

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal((prev) => e.target.validity.valid ? e.target.value : prev)
  }
  return (
    <input
      className={styles.input} 
      value={val}
      type="number"
      placeholder="ex.: 538.883.950-89" 
      onChange={handleInput}
    />
  )
}