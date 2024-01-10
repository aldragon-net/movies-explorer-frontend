import './Switch.css';

function Switch ({onlyShort, handleSwitch}) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={onlyShort}
        onClick={handleSwitch} />
      <span className="switch__slider" />
    </label>
  )
}

export default Switch;