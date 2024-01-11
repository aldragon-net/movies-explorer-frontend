import './Switch.css';

function Switch ({onlyShort, handleSwitch}) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={onlyShort}
        onChange={handleSwitch} />
      <span className="switch__slider" />
    </label>
  )
}

export default Switch;
