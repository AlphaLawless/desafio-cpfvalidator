import styles from "@/styles/components/Button.module.css"

export default function Button() {
  return (
    <button className={styles.button}>
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.33398 23.3334V32.6667H30.334L22.1673 40.8334L27.814 46.48L46.294 28L27.814 9.52002L22.1673 15.1667L30.334 23.3334H9.33398Z" fill="white"/>
      </svg> 
    </button>
  )
}