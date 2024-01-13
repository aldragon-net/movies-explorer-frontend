import './Form.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FormInput from '../FormInput/FormInput';

function Form ({ name, title, inputs, onSubmit, buttonText, altText, altLink, altLinkText, errorMessage }) {
  const { register, handleSubmit, formState } = useForm({mode: "onChange"});
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
            key={input.name}
            name={input.name}
            label={input.label}
            type={input.type}
            register={register}
            errors={formState.errors}
            validationSchema={input.validationSchema} />
        ))}
      </div>
      <span className="form__response-error">{errorMessage}</span>
      <button
        className={`form__button ${!formState.isValid && "form__button_inactive"}`}
        type="submit">
        {buttonText}
      </button>
      <span className="form__hint">{altText}</span>
      <Link to={altLink} className="form__link">{altLinkText}</Link>
    </form>
  )
}

export default Form;
