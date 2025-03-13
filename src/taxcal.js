document.addEventListener("DOMContentLoaded", function () {
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
    return rate * 100;
  };

  const incomes = [0];
  const container = document.querySelector('.container-tax');
  const taxContainer = container.querySelector('.tax-container');
  const summary = container.querySelector('.summary');

  const updateUI = () => {
    const totalIncome = incomes.reduce((sum, income) => sum + income, 0);
    const taxAmount = calculateTax(totalIncome);
    const taxRate = getTaxRate(totalIncome);

    summary.innerHTML = `
      <p>รายได้รวม: ${totalIncome.toLocaleString()} บาท</p>
      <p>ภาษีที่ต้องจ่าย: ${taxAmount.toLocaleString()} บาท</p>
      <p>อัตราภาษีที่ใช้: ${taxRate}%</p>
    `;
  };

  const handleIncomeChange = (index, value) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue) || parsedValue < 0) {
      alert("กรุณาใส่ตัวเลขที่เป็นบวกสำหรับรายได้ทุกช่อง");
    } else {
      incomes[index] = parsedValue;
      updateUI();
    }
  };

  const addIncomeField = () => {
    if (incomes.length < 3) {
      incomes.push(0);
      renderIncomeFields();
    } else {
      alert("ไม่สามารถเพิ่มช่องรายได้ได้เกิน 3 ช่อง");
    }
  };

  const removeIncomeField = (index) => {
    incomes.splice(index, 1);
    if (incomes.length === 0) {
      incomes.push(0);
    }
    renderIncomeFields();
  };

  const renderIncomeFields = () => {
    taxContainer.innerHTML = `<p>คำนวณภาษีเงินได้บุคคลธรรมดา</p>`;
    
    incomes.forEach((income, index) => {
      const div = document.createElement('div');
      div.classList.add('income-group');

      const input = document.createElement('input');
      input.type = 'number';
      input.classList.add('income-input');
      input.placeholder = 'รายได้ (บาท)';
      input.value = income;
      input.addEventListener('input', (e) => handleIncomeChange(index, e.target.value));

      div.appendChild(input);

      if (index !== 0) {
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'ลบ';
        removeBtn.addEventListener('click', () => removeIncomeField(index));
        div.appendChild(removeBtn);
      }

      taxContainer.appendChild(div);
    });

    if (incomes.length < 3) {
      const addBtn = document.createElement('button');
      addBtn.classList.add('add-btn');
      addBtn.textContent = 'เพิ่มรายได้';
      addBtn.addEventListener('click', addIncomeField);
      taxContainer.appendChild(addBtn);
    }

    updateUI();
  };

  // Initial render
  renderIncomeFields();
});
