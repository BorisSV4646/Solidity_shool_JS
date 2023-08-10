import styles from "./Home.module.css";

function Home() {
  return (
    <div className="container text-center firstcontainer">
      <div
        className="row align-items-center"
        style={{ backgroundColor: "#2b3035" }}
      >
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <img src="../../../../public/for_slide.png" alt="" />
        </div>
        {/*
        <div className="col">
          <div className="row">
            <div className="col-1 my-3" style={{ marginRight: "10px" }}>
              <img
                src="../static/img/smart.png"
                alt=""
                className="small_image"
              />
            </div>
            <div className="col-10 my-3">
              <p className="my_p">
                Это объектно-ориентированный язык программирования для{" "}
                <span style={{ color: "#0d6dfd" }}>умных контрактов</span>{" "}
                (смарт-контрактов)
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-1 my-3" style={{ marginRight: "10px" }}>
              <img
                src="../static/img/without_people.png"
                alt=""
                className="small_image"
              />
            </div>
            <div className="col-10 my-3">
              <p className="my_p">
                Смарт-контракты - это компьютерный алгоритм, который выполняет
                определенные действия{" "}
                <span style={{ color: "#0d6dfd" }}>без участия людей</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-1 my-3" style={{ marginRight: "10px" }}>
              <img
                src="../static/img/chain.png"
                alt=""
                className="small_image"
              />
            </div>
            <div className="col-10 my-3">
              <p className="my_p">
                Solidity используется в самых крупных блокчейнах, таких как:{" "}
                <span style={{ color: "#0d6dfd" }}>Ethereum</span>,{" "}
                <span style={{ color: "#ff2bff" }}>Polygon</span>,{" "}
                <span style={{ color: "#ffce46" }}>BNB</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-1 my-3" style={{ marginRight: "10px" }}>
              <img
                src="../static/img/popular.png"
                alt=""
                className="small_image"
              />
            </div>
            <div className="col-10 my-3">
              <p className="my_p">
                Появился только в <span style={{ color: "#0d6dfd" }}>2014</span>{" "}
                году и уже пользуется огромной популярностью
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
