import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import rule1 from "./assets/images/rule1.png";
import rule2 from "./assets/images/rule2.png";
import rule3 from "./assets/images/rule3.png";
import rule4 from "./assets/images/rule4.png";
import logo from "./assets/images/logo.png";
import kzImg from "./assets/images/alga.png";
import ruImg from "./assets/images/otdihat.png";
import { Slider } from "./components/Slider";
import { Modal } from "./components/Modal";
import RegisterForm from "./components/RegisterForm";
import YellowBtn from "./components/UI/yellow-btn";

function App() {
  const [modalActive, setModalActive] = React.useState(false);
  const [language, setLanguage] = React.useState("ru");

  const onClickLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive} width={732}>
        <RegisterForm />
      </Modal>
      <div className="app">
        <main id="main">
          <header className="header d-flex justify-content-between">
            <div className="logo">
              <img src={logo} width="211" alt="" />
            </div>
            <div className="header-right d-flex">
              <div className="languages">
                <span
                  className={language == "ru" ? "active" : ""}
                  onClick={() => onClickLanguage("ru")}
                >
                  ru
                </span>
                <span
                  className={language == "kz" ? "active" : ""}
                  onClick={() => onClickLanguage("kz")}
                >
                  kz
                </span>
              </div>
              <div className="sign-in">
                <button> </button>
              </div>
            </div>
          </header>
          <div className="center-block">
            <img src={kzImg} className="textImg kzImg" alt="" />
            <img src={ruImg} className="textImg ruImg" alt="" />
            <div className="center-block__text">В любую точку мира</div>
            <div className="yellowBtn">
              <YellowBtn setModalActive={setModalActive} />
            </div>
          </div>
        </main>
        <section id="rules">
          <div className="rules-inner">
            <Container>
              <h2>Как принять участие</h2>
              <Row className="rules-list d-flex">
                <Col xl={3} lg={6} md={6} xs={12}>
                  <div className="rule">
                    <img src={rule1} alt="" width="280" />
                    <p>
                      Зарегистрируйтесь и создайте профиль на странице акции
                    </p>
                  </div>
                </Col>
                <Col xl={3} lg={6} md={6} xs={12}>
                  <div className="rule">
                    <img src={rule2} alt="" width="280" />
                    <p>
                      Выполняйте задания каждый день и получайте сундуки с
                      призами
                    </p>
                  </div>
                </Col>
                <Col xl={3} lg={6} md={6} xs={12}>
                  <div className="rule">
                    <img src={rule3} alt="" height="242.67" />
                    <p>
                      Набирайте баллы и поднимайтесь в рейтинге. Чем выше
                      рейтинг, тем больше вероятность выигрыша
                    </p>
                  </div>
                </Col>
                <Col xl={3} lg={6} md={6} xs={12}>
                  <div className="rule">
                    <img src={rule4} alt="" width="280" />
                    <p>Получайте гарантированные призы и бонусы</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section id="boxes">
          <h2>Сундуки</h2>
          <p>Чем выше место в рейтиге, тем выше шанс выиграть призы</p>
          <Slider />
          <div className="yellowBtn">
            <YellowBtn setModalActive={setModalActive} block="boxes" />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
