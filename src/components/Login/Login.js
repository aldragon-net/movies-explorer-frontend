import './Login.css';
import { useState } from 'react';
import Form from '../Form/Form.js';
import { emailValidationSchema } from '../../utils/validation.js';

function Login ({onLogin}) {
  const loginInputs = [
    {
      name: "email",
      label: "Email",
      type: "text",
      validationSchema: emailValidationSchema
    },
    {
      name: "password",
      label: "Пароль",
      type: "password",
      validationSchema: { required: "Введите пароль" }
    },
  ]

  const [errorMessage, setErrorMessage] = useState('');

  const onFail = (message) => {
    setErrorMessage(message);
  }
  const onSubmit = (data) => {
    onLogin(data, onFail);
  };

  return (
    <main className="login">
      <Form
        name="login"
        title="Рады видеть!"
        inputs={loginInputs}
        onSubmit={onSubmit}
        buttonText="Войти"
        altText="Еще не зарегистрированы?"
        altLink="/signup"
        altLinkText="Регистрация"
        errorMessage={errorMessage} />
    </main>
  );
}

export default Login;
