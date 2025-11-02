import React, { useState } from 'react';
import NumberInput from './NumberInput';
import CalculateButton from './CalculateButton';

//Component chính quản lý việc tính tổng hai số
const SumCalculator = () => {
  // State để quản lý dữ liệu đầu vào
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  // State để lưu kết quả tính toán
  const [result, setResult] = useState(null);
  // State để quản lý thông báo lỗi
  const [error, setError] = useState('');

  // Hàm xử lý tính tổng
  const handleCalculate = () => {
    // Validation: kiểm tra input có rỗng hoặc không phải số
    if (number1 === '' || number2 === '') {
      setError('Vui lòng nhập cả hai số.');
      setResult(null);
      return;
    }
    if (isNaN(number1) || isNaN(number2)) {
      setError('Giá trị nhập phải là số.');
      setResult(null);
      return;
    }

    // Tính tổng
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum);
    setError('');
  };

  return (
    <div className="calculator-container">
      <h2>Sum Calculator</h2>
      {/* Ô nhập số thứ 1 */}
      <NumberInput
        label="Number 1"
        value={number1}
        onChange={setNumber1}
        placeholder="Nhập số thứ nhất"
      />
      {/* Ô nhập số thứ 2 */}
      <NumberInput
        label="Number 2"
        value={number2}
        onChange={setNumber2}
        placeholder="Nhập số thứ hai"
      />
      {/* Nút bấm để thực hiện phép tính */}
      <CalculateButton onClick={handleCalculate} />
      {/* Hiển thị kết quả nếu có và không có lỗi */}
      {error && <p className="error">{error}</p>}
      {result !== null && !error && <p className="result">Result: {result}</p>}
    </div>
  );
};

export default SumCalculator;
