import React, { useState } from "react";
import './taxcal.css';

const taxRates = [
  { max: 150000, rate: 0 },
  { max: 300000, rate: 0.05 },
  { max: 500000, rate: 0.1 },
  { max: 750000, rate: 0.15 },
  { max: 1000000, rate: 0.2 },
  { max: 2000000, rate: 0.25 },
  { max: 5000000, rate: 0.3 },
  { max: Infinity, rate: 0.35 },
];

const calculateTax = (income) => {
  let tax = 0;
  let prevMax = 0;

  for (const { max, rate } of taxRates) {
    if (income > prevMax) {
      tax += (Math.min(income, max) - prevMax) * rate;
      prevMax = max;
    } else break;
  }

  return tax;
};

const getTaxRate = (income) => {
  let rate = 0;
  for (const { max, rate: r } of taxRates) {
    if (income <= max) {
      rate = r;
      break;
    }
  }
  return rate * 100;  // Convert to percentage
};

const TaxCal = () => {
  const [incomes, setIncomes] = useState([0]);

  const totalIncome = incomes.reduce((sum, income) => sum + income, 0);
  const taxAmount = calculateTax(totalIncome);
  const taxRate = getTaxRate(totalIncome);

  const handleIncomeChange = (index, value) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue) || parsedValue < 0) {
      alert("กรุณาใส่ตัวเลขที่เป็นบวกสำหรับรายได้ทุกช่อง");
    } else {
      const newIncomes = [...incomes];
      newIncomes[index] = parsedValue;
      setIncomes(newIncomes);
    }
  };

  const addIncomeField = () => {
    if (incomes.length < 3) {
      setIncomes([...incomes, 0]);
    } else {
      alert("ไม่สามารถเพิ่มช่องรายได้ได้เกิน 3 ช่อง");
    }
  };

  const removeIncomeField = (index) => {
    const newIncomes = incomes.filter((_, i) => i !== index);
    if (newIncomes.length === 0) {
      newIncomes.push(0);
    }
    setIncomes(newIncomes);
  };

  return (
    <div className="container-tax">
      <div className="tax-container">
        <p>คำนวณภาษีเงินได้บุคคลธรรมดา</p>
        {incomes.map((income, index) => (
          <div key={index} className="income-group">
            <input
              className="income-input"
              type="number"
              placeholder="รายได้ (บาท)"
              value={income}
              onChange={(e) => handleIncomeChange(index, e.target.value)}
            />
            {index === 0 ? null : (
              <button className="remove-btn" onClick={() => removeIncomeField(index)}>ลบ</button>
            )}
          </div>
        ))}{incomes.length < 3?<button className="add-btn" onClick={addIncomeField}>เพิ่มรายได้</button>:undefined}
        <div className="summary">
        <p>รายได้รวม: {totalIncome.toLocaleString()} บาท</p>
        <p>ภาษีที่ต้องจ่าย: {taxAmount.toLocaleString()} บาท</p>
        <p>อัตราภาษีที่ใช้: {taxRate}%</p>
      </div>
      </div>

      

      <a href="/blackwhite" className='previous'>
        <button>Previous</button>
      </a>
      <a href="/" className='next'>
        <button>Next</button>
      </a>
    </div>
  );
};

export default TaxCal;
