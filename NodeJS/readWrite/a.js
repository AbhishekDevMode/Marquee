const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', '..', 'employee.json');
const data = fs.readFileSync(filePath, 'utf8');
const employees = JSON.parse(data);

const uniqueInterestKeys = [];

employees.forEach((emp) => {
  if (Array.isArray(emp.interests)) {
    emp.interests.forEach((interestObj) => {
      Object.keys(interestObj).forEach((key) => {
        if (!uniqueInterestKeys.includes(key)) {
          uniqueInterestKeys.push(key);
        }
      });
    });
  }
});

console.log(uniqueInterestKeys);
