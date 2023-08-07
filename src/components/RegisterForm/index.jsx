import React, { useState, useEffect, useRef } from "react";
import ruFlag from "../../assets/images/russia.png";
import kzFlag from "../../assets/images/kazakhstan.png";
import uzFlag from "../../assets/images/uzbekistan.png";
import trFlag from "../../assets/images/turkey.png";
import Select from "react-select";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import "./register-form.scss";

const RegisterForm = ({ setActive }) => {
  const initialValues = { phone: "+7", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputType, setInputType] = useState("password");
  const codes = [700, 701, 702, 703, 704];

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^\+7\d{10}$/;

    if (!values.phone) {
      errors.phone = "Заполните поле";
    } else if (!regex.test(values.phone)) {
      errors.phone = "Введите настоящий номер телефона";
    } else if (!codes.includes(parseInt(formValues.phone.substring(2, 5)))) {
      errors.phone = "Неверный код оператора.";
    }

    if (!values.password) {
      errors.password = "Заполните поле";
    } else if (values.password.length < 6) {
      errors.password = "Пароль не может быть меньше 6 ти символов";
    } else if (!values.password.match(/\d/)) {
      errors.password = "Пароль должен содержать минимум одну цифру";
    }

    return errors;
  };

  const changeInputType = () => {
    setInputType(inputType == "text" ? "password" : "text");
  };

  return (
    <div className="register-form">
      <IoCloseOutline className="closeIcon" onClick={() => setActive(false)} />
      <div style={{ textAlign: "center" }}>
        {Object.keys(formErrors).length < 1 && isSubmit && "Success"}
      </div>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <div className="line firstLine">
          <input
            type="text"
            className="phone-number"
            placeholder="+7xx xxx xx xx"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
        </div>
        <span className="message">{formErrors.phone}</span>
        <div className="line secondLine">
          <input
            type={inputType}
            className="password"
            placeholder="Пароль"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          {inputType == "password" ? (
            <BsEyeSlash onClick={() => changeInputType()} />
          ) : (
            <BsEye onClick={() => changeInputType()} />
          )}
        </div>
        <span className="message">{formErrors.password}</span>
        <div className="checkbox-block year d-flex">
          <div className="text">
            <div>Мне больше 21 года</div>
            <div>Я соглашаюсь с договором оферты</div>
          </div>
          <input type="checkbox" id="checkbox1" />
        </div>
        <div className="checkbox-block bonus d-flex">
          <div className="text">
            <div>Мне больше 21 года</div>
            <div>Я соглашаюсь с договором оферты</div>
          </div>
          <input type="checkbox" id="checkbox2" />
        </div>
        <button className="registerButton" onClick={(e) => validate(e)}>
          Зарегистрироваться
        </button>
        <p>
          Есть аккаунт? <a href="#">Войти</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
