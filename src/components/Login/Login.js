import './Login.css';
import '../Form/Form.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Login () {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__logo"></div>
        <h2 className="form__heading">Рады видеть!</h2>
        <div className="form__input-area">
          <label className="form__label">Email</label>
          <input className="form__input" type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          <p className='form__error'>{errors.email && 'Email is required and must be valid'}</p>
          <label className="form__label">Password</label>
          <input className="form__input" type="password" {...register("password", { required: true })} />
          <p className='form__error'>{errors.password && 'Password is required'}</p>
        </div>
        <button className="form__button" type="submit">Войти</button>
        <span className="form__hint">Еще не зарегистрированы?</span>
        <Link to="/signup" className="form__link">Регистрация</Link>
      </form>
    </div>
  );
}

export default Login;
