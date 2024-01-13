import './Register.css';
import Form from '../Form/Form.js';
import { useState } from 'react';
import {
  nameValidationSchema,
  emailValidationSchema,
  passwordValidationSchema
} from '../../utils/validation.js';

function Register ({onRegister}) {
  const registerInputs = [
    {
      name: "name",
      label: "Имя",
      type: "text",
      validationSchema: nameValidationSchema
    },
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
      validationSchema: passwordValidationSchema
    },
  ]

  const [errorMessage, setErrorMessage] = useState('');

  const onFail = (message) => {
    setErrorMessage(message);
  }
  const onSubmit = (data) => {
    onRegister(data, onFail);
  };

  return (
    <main className="register">
      <Form
        name="register"
        title="Добро пожаловать!"
        inputs={registerInputs}
        onSubmit={onSubmit}
        buttonText="Зарегистрироваться"
        altText="Уже зарегистрированы?"
        altLink="/signin"
        altLinkText="Войти"
        errorMessage={errorMessage}/>
    </main>
  );
}

export default Register;