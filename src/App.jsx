import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <main className="main">
        <header>
          <div className="logo">Logo</div>
          <div className="header-right">
            <ul className="languages">
              <li>ru</li>
              <li>kz</li>
            </ul>
            <div className="sign-in">
              <button>Войти</button>
            </div>
          </div>
        </header>
      </main>
      <section className="rules">Rules</section>
      <section className="boxes">Boxes</section>
    </div>
  );
}

export default App;
