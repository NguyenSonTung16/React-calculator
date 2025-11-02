import React from 'react';


//Hiển thị một trường nhập liệu số với nhãn
const NumberInput = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="input-group">
      <label>{label}:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};

export default NumberInput;