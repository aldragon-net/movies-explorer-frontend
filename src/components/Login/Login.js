import './Login.css';
import '../Form/Form.css';
import Form from '../Form/Form';
import { emailValidationSchema } from '../../utils/validation.js';

function Login ({onLogin, errorMessage}) {
  const onSubmit = (data) => {
    onLogin(data);
  };
  const loginInputs = [
    {
      name: "email",
      label: "Email",
      type: "email",
      validationSchema: emailValidationSchema
    },
    {
      name: "password",
      label: "Пароль",
      type: "password",
      validationSchema: { required: "Введите пароль" }
    },
  ]
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
