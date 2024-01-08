import './Login.css';
import '../Form/Form.css';
import Form from '../Form/Form';

function Login ({onLogin}) {
  const onSubmit = (data) => {
    console.log(data);
    onLogin(data);
  };
  const loginInputs = [
    {
      name: "email",
      label: "Email",
      type: "email",
      validationSchema: { required: "Введите e-mail", pattern: /^\S+@\S+$/i }
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
        altLinkText="Регистрация" />
    </main>
  );
}

export default Login;
