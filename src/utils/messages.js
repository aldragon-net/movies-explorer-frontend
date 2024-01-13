export const errorStatusToMessage = {
  login: {
    400: "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
    401: "Вы ввели неправильный логин или пароль.",
    403: "Переданный токен некорректен",
    500: "На сервере произошла ошибка",
    503: "Не удалось установить соединение с сервером",
  },
  registration: {
    400: "Невозможно создать пользователя с указанными данными",
    409: "Пользователь с таким email уже существует.",
    500: "При регистрации пользователя произошла ошибка.",
    503: "Не удалось установить соединение с сервером",
  },
  profileUpdate: {
    400: "Некорректные данные пользователя",
    409: "Пользователь с таким email уже существует.",
    500: "При обновлении профиля произошла ошибка.",
    503: "Не удалось установить соединение с сервером",
  },
  default: {
    404: "Страница по указанному маршруту не найдена.",
    500: "На сервере произошла ошибка.",
    503: "Не удалось установить соединение с сервером",
  }
}
