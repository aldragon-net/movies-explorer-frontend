import './Register.css';
import Form from '../Form/Form';

function Register () {
  const registerInputs = [
    {
      name: "name",
      label: "Имя",
      type: "text",
      validationSchema: { required: "Введите имя" }
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      validationSchema: {
        required: "Введите E-mail",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Введите валидный e-mail"
        }
      }
    },
    {
      name: "password",
      label: "Пароль",
      type: "password",
      validationSchema: { required: "Введите пароль", minLength: {value: 6, message: "Не менее 6 символов"} }
    },
  ]

  const onSubmit = (data) => {
    console.log(data);
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
        altLinkText="Войти" />
    </main>
  );
}

export default Register;