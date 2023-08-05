import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import rule1 from "./assets/images/rule1.png";
import rule2 from "./assets/images/rule2.png";
import rule3 from "./assets/images/rule3.png";
import rule4 from "./assets/images/rule4.png";
import logo from "./assets/images/logo.png";
import { Slider } from "./components/Slider";
import { Modal } from "./components/Modal";
import RegisterForm from './components/RegisterForm'


function App() {
  const [modalActive, setModalActive] = React.useState(false);

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive} width={732}>
        <RegisterForm/>
      </Modal>
      <div className="app">
        <main id="main">
          <header className="header d-flex justify-content-between">
            <div className="logo">
              <img src={logo} width="211" alt="" />
            </div>
            <div className="header-right d-flex">
              <div className="languages">
                <span>ru</span>
                <span>kz</span>
              </div>
              <div className="sign-in">
                <button>вход</button>
              </div>
            </div>
          </header>
        </main>
        <section id="rules">
          <Container>
            <h2>Как принять участие</h2>
            <Row className="rules-list d-flex">
              <Col lg={3} md={6} xs={12}>
                <div className="rule">
                  <img src={rule1} alt="" width="280" />
                  <p>Зарегистрируйтесь и создайте профиль на странице акции</p>
                </div>
              </Col>
              <Col lg={3} md={6} xs={12}>
                <div className="rule">
                  <img src={rule2} alt="" width="280" />
                  <p>
                    Выполняйте задания каждый день и получайте сундуки с призами
                  </p>
                </div>
              </Col>
              <Col lg={3} md={6} xs={12}>
                <div className="rule">
                  <img src={rule3} alt="" width="280" />
                  <p>
                    Набирайте баллы и поднимайтесь в рейтинге. Чем выше рейтинг,
                    тем больше вероятность выигрыша
                  </p>
                </div>
              </Col>
              <Col lg={3} md={6} xs={12}>
                <div className="rule">
                  <img src={rule4} alt="" width="280" />
                  <p>Получайте гарантированные призы и бонусы</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="boxes">
          <h2>Сундуки</h2>
          <p>Чем выше место в рейтиге, тем выше шанс выиграть призы</p>
          <Slider />
          <div className="boxes-bottom">
            <div className="buttonBlock" onClick={() => setModalActive(true)}>
              <span className="textPart">Участвовать</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
