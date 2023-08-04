import React from "react";
import ruFlag from "../../assets/images/russia.png";
import kzFlag from "../../assets/images/kazakhstan.png";
import uzFlag from "../../assets/images/uzbekistan.png";
import trFlag from "../../assets/images/turkey.png";
import Select from "react-select";
import "./register-form.scss";

const RegisterForm = () => {
  const [selectedCountry, setSelectedCountry] = React.useState({
    value: "kz",
    flag: kzFlag,
  });
  const options = [
    { value: "ru", flag: ruFlag },
    { value: "kz", flag: kzFlag },
    { value: "uz", flag: uzFlag },
    { value: "tr", flag: trFlag },
  ];

  const formatOptionLabel = ({ value, label, flag }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={flag}
        alt={label}
        style={{ width: "20px", marginRight: "8px" }}
      />
      {label}
    </div>
  );

  console.log(selectedCountry);

  return (
    <div className="register-form">
      <h1>Регистрация</h1>
      <form>
        <div className="line firstLine">
          <Select
            options={options}
            value={selectedCountry}
            onChange={setSelectedCountry}
            formatOptionLabel={formatOptionLabel}
          />
          
          <input type="text" className="phone-number" />
        </div>
        <div className="line secondLine">
          <input type="password" className="password" placeholder="Пароль" />
        </div>
        <div className="errorBlock">
          <ul>
            <li>минимум 6 символов</li>
            <li>минимум 1 цифра</li>
          </ul>
        </div>
        <div className="checkbox-block year d-flex">
          <div className="text">
            <div>Мне больше 21 года</div>
            <div>Я соглашаюсь с договором оферты</div>
          </div>
          <input type="checkbox" className="checkbox" />
        </div>
        <div className="checkbox-block bonus d-flex">
          <div className="text">
            <div>Мне больше 21 года</div>
            <div>Я соглашаюсь с договором оферты</div>
          </div>
          {/* <input type="checkbox" className="checkbox" /> */}
        </div>
        <button className="registerButton">Зарегистрироваться</button>
        <p>
          Есть аккаунт? <a href="#">Войти</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
