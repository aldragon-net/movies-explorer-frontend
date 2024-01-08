import './Profile.css';
import '../Form/Form.css';
import { useEffect, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Profile ({onLogout}) {

  const [isEdited, setIsEdited] = useState(false);
  const [errorMessage] = useState('');
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (e) => {
    e.preventDefault()
    handleEdit();
  }
  const handleEdit = () => {
    setIsEdited(!isEdited);
  }
  const handleNameChange = (e) => {
    setUserName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setUserEmail(e.target.value)
  }
  const user = useContext(CurrentUserContext);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    setUserName(user.name);
    setUserEmail(user.email);
    }, [user.name, user.email]);

  return (
    <main className="profile">
      <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="profile__heading">{`Привет, ${user.name}!`}</h2>
        <div className="profile__field">
            <label className="profile__label">Имя</label>
            <input
              className={`profile__input ${!isEdited && 'profile__input_inactive'}`}
              value={userName}
              onChange={handleNameChange}
              type="text"
             />
        </div>
        <div className="profile__field">
            <label className="profile__label">Email</label>
            <input
              className={`profile__input ${!isEdited && 'profile__input_inactive'}`}
              value={userEmail}
              onChange={handleEmailChange}
              type="email" />
        </div>
        <p className="profile__error">{errorMessage}</p>
      {!isEdited ?
        <>
          <p className="profile__edit" onClick={handleEdit}>Редактировать</p>
          <p className="profile__logout" onClick={onLogout}>Выйти из аккаунта</p>
        </>
      :
        <button className="profile__button" type="submit">Сохранить</button>
      }

      </form>
    </main>
  );
}

export default Profile;
