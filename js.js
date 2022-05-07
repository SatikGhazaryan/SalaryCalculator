/**
 * Satik 2022
 * salary
 * */
document.getElementById("salary0").addEventListener("keyup", function (event) {
  salary.registeredSalary = +document.getElementById("salary0").value;
  document.getElementById("salary").value = salary.netSalary();
  document.getElementById("incomeTax").value = salary.incomeTax();
  document.getElementById("soc").value = salary.soc();
  document.getElementById("stampDuty").value = salary.stampDuty();
  if (document.getElementById("check").checked) {
    salary.age = 1984;
  } else {
    salary.age = 1970;
  }
});
const salary = {
  registeredSalary: +document.getElementById("salary0").value,
  age: 1984,

  incomeTax: function () {
    return (this.registeredSalary * 21) / 100;
  },
  soc: function () {
    if (this.registeredSalary <= 500000) {
      return (this.registeredSalary * 4.5) / 100;
    } else if (
      this.registeredSalary > 500000 &&
      this.registeredSalary <= 1020000
    ) {
      return (this.registeredSalary * 10) / 100 - 27500;
    } else {
      return 74500;
    }
  },
  stampDuty: function () {
    if (this.registeredSalary <= 100000) {
      if (this.registeredSalary >= 95000) {
        return 1500;
      } else {
        return 0;
      }
    } else if (
      this.registeredSalary > 100000 &&
      this.registeredSalary <= 200000
    ) {
      return 3000;
    } else if (
      this.registeredSalary > 200000 &&
      this.registeredSalary <= 500000
    ) {
      return 5500;
    } else if (
      this.registeredSalary > 500000 &&
      this.registeredSalary <= 1000000
    ) {
      return 8500;
    } else {
      return 1500;
    }
  },
  pensionSystem: function () {
    if (this.age > 1974) {
      if (this.registeredSalary <= 500000) {
        return (this.registeredSalary * 4.5) / 100;
      } else if (
        this.registeredSalary > 500000 &&
        this.registeredSalary <= 1020000
      ) {
        return (this.registeredSalary * 10) / 100 - 32500;
      } else {
        return 69500;
      }
    } else {
      return false;
    }
  },
  netSalary: function () {
    if (this.pensionSystem() !== false) {
      return (
        this.registeredSalary - this.incomeTax() - this.soc() - this.stampDuty()
      );
    } else {
      return this.registeredSalary - this.stampDuty() - this.incomeTax();
    }
  },
};
//console.log(salary.netSalary());
