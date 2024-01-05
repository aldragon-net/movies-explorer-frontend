import './Login.css';
import '../Form/Form.css';
import Form from '../Form/Form';

function Login () {
  const onSubmit = (data) => {
    console.log(data);
  };
  const loginInputs = [
    {
      name: "login-email",
      label: "Email",
      type: "email",
      validationSchema: { required: "Введите e-mail", pattern: /^\S+@\S+$/i }
    },
    {
      name: "login-password",
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
        altLinkText="Регистрация" />
    </main>
  );
}

export default Login;
