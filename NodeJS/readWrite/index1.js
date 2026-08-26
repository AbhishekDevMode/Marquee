const fs = require("fs");

fs.readFile("employee.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  try {
    const employees = JSON.parse(data);
    const departments = [];
    
    employees.forEach((emp) => {
      if (emp.department && !departments.includes(emp.department)) {
        departments.push(emp.department);
      }
    });

    const prod = [];
    departments.forEach((department) => {
      employees.forEach((emp) => {
        if (emp.department === department && emp.products_in_cart) {
          prod.push(emp.products_in_cart);
        }
      });
    });

    console.log(prod);
  } catch (parseErr) {
    console.log(parseErr);
  }
});
