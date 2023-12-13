import './Switch.css';

function Switch () {
  return (
    <label className="switch">
      <input
        type="checkbox" />
      <span className="switch__slider" />
    </label>
  )
}

export default Switch;