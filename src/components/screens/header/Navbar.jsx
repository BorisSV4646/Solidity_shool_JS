import styles from "./Navbar.module.css";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

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
        <CustomLink href="/tasks">Упражнения</CustomLink>
        <CustomLink href="/leaderboard">Лидеры</CustomLink>
        <CustomLink href="/resources">Ресурсы</CustomLink>
        <CustomLink href="/price">Цены</CustomLink>
      </ul>
      <div className={styles.buttonContainer}>
        <button className={styles.button} href="/login">
          Войти
        </button>
      </div>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === href ? styles.active : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
}

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
