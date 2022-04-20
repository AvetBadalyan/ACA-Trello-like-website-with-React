import React from 'react'

export default function Input({value, onChange, name}) {
  return (
    <div>
      <label>
        {name} <input onChange={onChange} value={value} type="text" />
      </label>
    </div>
  );
}
