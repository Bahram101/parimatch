import React, { useState, useEffect } from "react";
import ruFlag from "../../assets/images/russia.png";
import kzFlag from "../../assets/images/kazakhstan.png";
import uzFlag from "../../assets/images/uzbekistan.png";
import trFlag from "../../assets/images/turkey.png";
import Select from "react-select";
import "./register-form.scss";

const RegisterForm = () => {
  const initialValues = { phone: "+7", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const handleChange = (e) => {
    console.log('eeee',e)
    const { name, value } = e.target;
    console.log(name, value)
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

    if (!values.phone) {
      errors.phone = "Phone number is required!";
    } else if (!regex.test(values.phone)) {
      errors.phone = "This is not a valid phone format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    }
    // else  (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    return errors;
  };
 
  return (
    <div className="register-form">
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
            type="password"
            className="password"
            placeholder="Пароль"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <span className="message">{formErrors.password}</span>
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
