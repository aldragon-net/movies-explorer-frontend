import './Profile.css';
import '../Form/Form.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Profile () {


  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isEdited, setIsEdited] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const onSubmit = (data) => {
    console.log(data);
  };
  const handleEdit = () => {
    setIsEdited(!isEdited);
  }

  return (
    <div className="profile">
      <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="profile__heading">Привет, Александр!</h2>
        <div className="profile__field">
            <label className="profile__label">Имя</label>
            <input
              className={`profile__input ${!isEdited && 'profile__input_inactive'}`}
              value="Александр"
              type="text"
              readonly
              {...register("name", { required: true })} />
        </div>
        <div className="profile__field">
            <label className="profile__label">Email</label>
            <input
              className={`profile__input ${!isEdited && 'profile__input_inactive'}`}
              value="pochta@yandex.ru" type="email" {...register("email", { required: true })} />
        </div>
        <p className="profile__error">{errorMessage}</p>
      {!isEdited ?
        <><p className="profile__edit" onClick={handleEdit}>Редактировать</p><p className="profile__logout">Выйти из аккаунта</p></>
      :
        <button className="profile__button" onClick={handleEdit}>Сохранить</button>
      }

      </form>
    </div>
  );
}

export default Profile;
