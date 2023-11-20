import React, { useState } from "react";
import "../../style/auth.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {login} from "../../store/Auth"
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLogin2, setIsLogin2] = useState(false);
const DataAuth = useSelector(state => state.auth.authdataMassive)
const Verif = DataAuth[0].isAuth
// console.log(DataAuth[0].isAuth)
const dispatch = useDispatch()
// const gty = () => {
//   const data = {
//       login: "andrey12",
//       password: 123444,
//       isAuth: true
//   }
//   dispatch(login(data))
// }
// gty()
dispatch(login())
// console.log(test)
// test.push(
//   {
//     login: "andrey12",
//     password: 123444,
//     isAuth: true
//   }
// )
// console.log(test)
  return (
    <div className="auth">
      <div className="auth__container">
      {Verif ? (
        <div className="auth__container-profile">





          <p>Вы авторизованы</p>
          <h1 onClick={() => setIsLogin2(false)}>Выйти</h1>







          </div>
          ) : (
            isLogin ? (
              <div className="auth__container-auth">
                <h1>Авторизация</h1>
                <input type="text" placeholder="Ваш логин" />
                <input type="password" placeholder="Ваш пароль" />
                <input className="auth__btn" type="button" value='Войти'  onClick={() => setIsLogin2(true)}/>
                <p onClick={() => setIsLogin(false)} >Регистрация</p> 
              </div>
              ) : (
              <div className="auth__container-auth">
                <h1>Регистрация</h1>
                <input type="text" placeholder="Ваш логин" />
                <input type="password" placeholder="Ваш пароль" />
                <input className="auth__btn" type="button" value='Зарегистрироваться' />
                <p onClick={() => setIsLogin(true)}>Авторизация</p>
              </div>
            )
          )}
      </div>
      </div>
  );
};

export default Auth;
