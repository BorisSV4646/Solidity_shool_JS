import styles from "./Price.module.css";

function Price() {
  return (
    <>
      <div>
        <h1 className={styles["demo-title"]}>
          Цены
          <br />
        </h1>
        <div className={styles["pricing-table"]}>
          <div className={styles["ptable-item"]}>
            <div className={styles["ptable-single"]}>
              <div className={styles["ptable-header"]}>
                <div className={styles["ptable-title"]}>
                  <h2>1 месяц</h2>
                </div>
                <div className={styles["ptable-price"]}>
                  <h2>
                    700<span>р.</span>
                  </h2>
                </div>
              </div>
              <div className={styles["ptable-body"]}>
                <div className={styles["ptable-description"]}>
                  <ul>
                    <li>Оплата один раз</li>
                    <li>Доступ ко всем функциям</li>
                    <li>Сохранение результатов</li>
                    <a href="/">Что вы изучите</a>
                  </ul>
                </div>
              </div>
              <div className={styles["ptable-footer"]}>
                <div className={styles["ptable-action"]}>
                  <a href="">Купить</a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles["ptable-item"]} ${styles["featured-item"]}`}
          >
            <div className={styles["ptable-single"]}>
              <div className={styles["ptable-header"]}>
                <div className={styles["ptable-status"]}>
                  <span>часто</span>
                </div>
                <div className={styles["ptable-title"]}>
                  <h2>3 месяца</h2>
                </div>
                <div className={styles["ptable-price"]}>
                  <h2>
                    1800<span>р.</span>
                  </h2>
                </div>
              </div>
              <div className={styles["ptable-body"]}>
                <div className={styles["ptable-description"]}>
                  <ul>
                    <li>Оплата один раз</li>
                    <li>Доступ ко всем функциям</li>
                    <li>Сохранение результатов</li>
                    <a href="/">Что вы изучите</a>
                  </ul>
                </div>
              </div>
              <div className={styles["ptable-footer"]}>
                <div className={styles["ptable-action"]}>
                  <a href="">Купить</a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles["ptable-item"]} ${styles["featured-item2"]}`}
          >
            <div className={styles["ptable-single"]}>
              <div className={styles["ptable-header"]}>
                <div className={styles["ptable-title"]}>
                  <h2>навсегда</h2>
                </div>
                <div className={styles["ptable-price"]}>
                  <h2>
                    3500<span>р.</span>
                  </h2>
                </div>
              </div>
              <div className={styles["ptable-body"]}>
                <div className={styles["ptable-description"]}>
                  <ul>
                    <li>Оплата один раз</li>
                    <li>Доступ ко всем функциям</li>
                    <li>Сохранение результатов</li>
                    <a href="/">Что вы изучите</a>
                  </ul>
                </div>
              </div>
              <div className={styles["ptable-footer"]}>
                <div className={styles["ptable-action"]}>
                  <a href="">Купить</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
