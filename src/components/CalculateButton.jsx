import React from 'react';

//Giao diện nút để kích hoạt tính toán tổng
const CalculateButton = ({ onClick }) => {
  return (
    <button //Giao diện nút để kích hoạt tính toán tổng
      onClick={onClick}
      className="calculate-button"
      aria-label="Calculate sum of numbers"
    >
      Calculate Sum
    </button>
  );
};

export default CalculateButton;