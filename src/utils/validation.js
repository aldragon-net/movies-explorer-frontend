const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,}$/gi;
const nameRegex = /^[А-ЯA-Zё\s-]+$/i;

export const nameValidationSchema = {
  required: "Введите имя",
  pattern: {
    value: nameRegex,
    message: "Только латиница, кириллица, дефис и пробел"
  },
  minLength: {
    value: 2,
    message: "Не менее двух символов"
  }
 };

export const emailValidationSchema = {
  required: "Введите E-mail",
  pattern: {
    value: emailRegex,
    message: "Введите валидный e-mail"
  }
};

export const passwordValidationSchema = {
  required: "Введите пароль",
  minLength: {
    value: 6,
    message: "Не менее 6 символов"
  }
}
