import './Profile.css';
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { nameValidationSchema, emailValidationSchema } from '../../utils/validation.js';

function Profile ({onUpdate, onLogout}) {

  const user = useContext(CurrentUserContext);
  const [isEdited, setIsEdited] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit, formState, watch } = useForm(
    {mode: "onChange", defaultValues: {name: user.name, email: user.email}}
  );

  const onSuccess = () => {
    setIsEdited(false);
    setErrorMessage('');
    setSuccessMessage('Данные профиля успешно изменены');
  }
  const onFail = (message) => {
    setErrorMessage(message);
  }
  const onSubmit = (data) => {
    onUpdate(data, onSuccess, onFail);
  }
  const handleEdit = () => {
    setSuccessMessage('');
    setIsEdited(true);
  }

  return (
    <main className="profile">
      <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="profile__heading">{`Привет, ${user.name}!`}</h2>
        <div className="profile__field">
          <label className="profile__label">Имя</label>
          <input
            className={`profile__input ${!isEdited && 'profile__input_inactive'}`}
            type="text"
            {...register("name", nameValidationSchema)}
            />
        </div>
        <p className="profile__field-error">
          {formState.errors.name && formState.errors.name.message}
        </p>
        <div className="profile__field">
          <label className="profile__label">Email</label>
          <input
            className={`profile__input ${!isEdited && 'profile__input_inactive'}`}
            type="text"
            {...register("email", emailValidationSchema)} />
        </div>
        <p className="profile__field-error">
          {formState.errors.email && formState.errors.email.message}
        </p>
        <p className={`profile__message ${errorMessage && "profile__error"}`}>
          {errorMessage}{successMessage}
        </p>
        {!isEdited
          ?
            <>
              <p className="profile__edit" onClick={handleEdit}>Редактировать</p>
              <p className="profile__logout" onClick={onLogout}>Выйти из аккаунта</p>
            </>
          :
            <button
              className={
                `profile__button
                ${(!formState.isValid
                    ||
                   (watch("name") === user.name && watch("email") === user.email )
                  ) && 'profile__button_inactive'}`
              }
              type="submit">
              Сохранить
            </button> }
      </form>
    </main>
  );
}

export default Profile;
