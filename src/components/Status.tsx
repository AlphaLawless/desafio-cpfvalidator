import styles from "@/styles/components/Status.module.css"

type Status = {
  status?: boolean
}

export default function Status(props: Status) {
  const { status } = props
  const className = status ? styles.isValid : styles.isNotValid
  const value = status ? "CPF VALIDO" : "CPF INVÁLIDO"
  return status === undefined ? <div></div> : <div className={`${className}`}>{value}</div>
}