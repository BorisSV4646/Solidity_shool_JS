import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="/">
        <img src="/logo.png" alt="" className={styles.image} />
      </a>
      <a href="/" className={styles.title}>
        SolidityShool
      </a>
      <ul>
        <li>
          <a href="/tasks">Упражнения</a>
        </li>
        <li>
          <a href="/leaderboard">Лидеры</a>
        </li>
        <li>
          <a href="/resources">Ресурсы</a>
        </li>
        <li>
          <a href="/price">Цены</a>
        </li>
      </ul>
      <div className={styles.buttonContainer}>
        <button className={styles.button} href="/login">
          Войти
        </button>
      </div>
    </nav>
  );
}
