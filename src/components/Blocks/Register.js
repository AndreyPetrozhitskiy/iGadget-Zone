import React, { useState } from "react";
import "../../style/auth.scss";
import { Link } from "react-router-dom";

const Register = () => {
 
  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__container-auth">
          <h1>Регистрация</h1>
          <input type="text" placeholder="Ваш логин" />
          <input type="password" placeholder="Ваш пароль" />
          <input className="auth__btn" type="button" value='Зарегистрироваться' />
          <p ><Link to='/auth'>Авторизация</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
