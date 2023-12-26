import './Form.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';

function Form ({ name, title, inputs, onSubmit, buttonText, altText, altLink, altLinkText }) {
  const { register, handleSubmit, formState } = useForm();
  return (
    <form
      className="form"
      id={name}
      name={name}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Link to="/"><div className="form__logo"></div></Link>
      <h2 className="form__heading">{title}</h2>
      <div className="form__input-area">
      {inputs.map((input, i) => (
        <FormInput
          name={input.name}
          label={input.label}
          type={input.type}
          register={register}
          errors={formState.errors}
          validationSchema={input.validationSchema} />
      ))}
      </div>
      <button
        className={`form__button ${Object.keys(formState.errors).length > 0 && "form__button_inactive"}`}
        type="submit">
        {buttonText}
      </button>
      <span className="form__hint">{altText}</span>
      <Link to={altLink} className="form__link">{altLinkText}</Link>
    </form>
  )
}

export default Form;
