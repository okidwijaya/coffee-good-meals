import React from 'react';
import './style.css';
function SelectRound({value, isSelected, onChange, disabled = false}) {
  // console.log(value, isSelected, onChange);
  const selected = isSelected === true ? 'selectedItemRound' : '';
  return (
    <button
      className={`btn btn-radio btn-yellow-color ${selected} no-outline`}
      type='button'
      disabled={disabled}
      onClick={() => {
        onChange(value);
      }}>
      {value}
    </button>
  );
}

export default SelectRound;
