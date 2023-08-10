import styles from "./Resources.module.css";

function Resources() {
  return (
    <>
      <div className={styles.div}>
        <div className={styles.div2}>
          <div>
            <img src="/youtube.jpg" alt="" className={styles.img} />
            <h2
              style={{ color: "black", margin: "20px" }}
              className={styles.h2}
            >
              Русскоязычные <span style={{ color: "#ff0000" }}>YouTube</span>{" "}
              каналы
            </h2>
            <ul className={styles.ulyt} style={{ textAlign: "center" }}>
              <li>
                <a href="https://www.youtube.com/@IlyaBodrovKrukowski">
                  Очень полезный канал про Solidity Ilya Krukowski
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@YuliyaBedrosova/featured">
                  Также полезный канал по Solidity Yuliya Bedrosova
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@PythononPapyrusRU/featured">
                  Канал про Python и Solidity
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@CRYPTUSMEDIA">
                  Перевод лекций MIT про основы работы блокчейна
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@Incryptednet">
                  Объяснение простым языком сложных вещей в области блокчейна
                </a>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/tg.jpg"
              alt=""
              style={{ width: "32%" }}
              className={styles.img}
            />
            <h2
              style={{ color: "black", margin: "20px" }}
              className={styles.h2}
            >
              Русскоязычные <span style={{ color: "#0d6dfd" }}>Telegram</span>{" "}
              каналы
            </h2>
            <ul className={styles.ultg} style={{ textAlign: "center" }}>
              <li>
                {" "}
                <a href="https://t.me/dev_in_ruby_colors">
                  https://t.me/dev_in_ruby_colors
                </a>
              </li>
              <li>
                <a href="https://t.me/dev_solidity">
                  https://t.me/dev_solidity
                </a>
              </li>
              <li>
                <a href="https://teletype.in/@maxycrypto/solidity_30days">
                  https://teletype.in/@maxycrypto/solidity_30days
                </a>
              </li>
              <li>
                <a href="https://t.me/newcryptoshit/453">
                  https://t.me/newcryptoshit/453
                </a>
              </li>
              <li>
                <a href="https://t.me/terncrypto">https://t.me/terncrypto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.div2}>
          <div>
            <img src="/youtube.jpg" alt="" className={styles.img} />
            <h2
              style={{ color: "black", margin: "20px" }}
              className={styles.h2}
            >
              Англоязычные <span style={{ color: "#ff0000" }}>YouTube</span>{" "}
              каналы
            </h2>
            <ul className={styles.ulyt} style={{ textAlign: "center" }}>
              <li>
                <a href="https://www.youtube.com/c/HashLipsNFT/videos">
                  Один из самых крупных каналов по Solidity
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@DappUniversity">
                  Классный канал, где много различных туториалов
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/PatrickCollins/videos">
                  Канал основателя криптовалюты Chainlink
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@smartcontractprogrammer">
                  Короткие видео о разных аспектах Solidity
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@daulathussain">
                  Небольшой канал с полезными видео
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <img src="/site.jpg" alt="" className={styles.img} />
            <h2
              style={{ color: "black", margin: "20px" }}
              className={styles.h2}
            >
              Полезные <span style={{ color: "#0d6dfd" }}>Сайты</span> на разных
              языках
            </h2>
            <ul className={styles.ultg} style={{ textAlign: "center" }}>
              <li>
                <a href="https://cryptozombies.io">https://cryptozombies.io</a>
              </li>
              <li>
                <a href="https://www.useweb3.xyz/code-challenges">
                  https://www.useweb3.xyz/code-challenges
                </a>
              </li>
              <li>
                <a href="https://capturetheether.com/challenges/">
                  https://capturetheether.com/challenges/
                </a>
              </li>
              <li>
                <a href="https://ethernaut.openzeppelin.com">
                  https://ethernaut.openzeppelin.com
                </a>
              </li>
              <li>
                <a href="https://speedrunethereum.com">
                  https://speedrunethereum.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
