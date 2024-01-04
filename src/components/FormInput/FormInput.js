import './FormInput.css';

function FormInput ({ name, label, register, errors, type, validationSchema }) {
  console.log(errors)
  return (
    <>
      <label className="form-input__label">{label}</label>
      <input
        className={`form-input__field ${errors[name] && "form-input__field_invalid"}`}
        id={name}
        name={name}
        type={type}
        {...register(name, validationSchema)} />
      <p className='form-input__error'>
        {errors[name] && errors[name].message}</p>
    </>
  );
}

export default FormInput;