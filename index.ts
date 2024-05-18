// // Question 1

// type Product = {
//   name: string;
//   price: number;
//   inventory: {
//     stock: number;
//     colorOptions: string[];
//   };
// };

// const products: Product[] = [
//   {
//     name: "Laptop",
//     price: 3666,
//     inventory: {
//       stock: 266,
//       colorOptions: ["Black", "Green", "Blue"],
//     },
//   },
//   {
//     name: "Mobile",
//     price: 5636,
//     inventory: {
//       stock: 500,
//       colorOptions: ["Drak Blue", "White", "Indigo"],
//     },
//   },
//   {
//     name: "Headphones",
//     price: 10000,
//     inventory: {
//       stock: 205,
//       colorOptions: ["Yello", "Pink", "Light green"],
//     },
//   },
// ];

// function changeColor(product: Product, newColor: string): void {
//   product.inventory.colorOptions[0] = newColor;

//   if (newColor === "Red") {
//     product.price *= 1.1; // Increase by 10%
//   } else if (newColor === "Blue") {
//     product.price *= 0.95; // Decrease by 5%
//   }
// }

// changeColor(products[1], "Red");
// changeColor(products[2], "Blue");

// // products.forEach((product) => {
// //   console.log(`Name: ${product.name}`);
// //   console.log(`Price: $${product.price}`);
// //   console.log(`Stock: ${product.inventory.stock}`);
// //   console.log(`Available Colors: ${product.inventory.colorOptions.join(", ")}`);
// //   console.log("======================");
// // });

// const productAfter = products.map((product) => {
//   console.log(`Name: ${product.name}`);
//   console.log(`Price: $${product.price}`);
//   console.log(`Stock: ${product.inventory.stock}`);
//   console.log(`Available Colors: ${product.inventory.colorOptions.join(", ")}`);
//   console.log("======================");
// });

//==============================================================================

// // Question 2

// type Student = {
//   name: string;
//   grades: number[];
// };

// const students: Student[] = [
//   {
//     name: "Shaheer",
//     grades: [50, 70, 80, 90],
//   },
//   {
//     name: "Ahmer",
//     grades: [58, 95, 88, 70],
//   },
//   {
//     name: "Ali",
//     grades: [48, 30, 53, 45],
//   },
// ];

// function calculateAverageGrade(grades: number[]): number {
//   const sum = grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
//   return sum;
// }

// students.forEach((student) => {
//   const averageGrade = calculateAverageGrade(student.grades);
//   console.log(`Name: ${student.name}`);
//   console.log(`Average Grade: ${averageGrade.toFixed(2)}`);
// });

//==================================================================

// // Question 3

// type Employee = {
//   name: string;
//   hoursWorked: number;
//   hourlyRate: number;
//   salary: number;
// };

// const employees: Employee[] = [
//   {
//     name: "Shaheer",
//     hoursWorked: 25,
//     hourlyRate: 15,
//     salary: 0,
//   },
//   {
//     name: "Ahmed",
//     hoursWorked: 18,
//     hourlyRate: 20,
//     salary: 0,
//   },
//   {
//     name: "Ali",
//     hoursWorked: 22,
//     hourlyRate: 10,
//     salary: 0,
//   },
// ];

// function calculateSalary(employee: Employee): number {
//   let totalSalary = employee.hoursWorked * employee.hourlyRate; //calculating salary based on the hours worked and hourly rate.

//   if (employee.hoursWorked >= 20) {
//     totalSalary *= 1.1; // Increase total salary by 10%
//   }
//   return totalSalary;
// }

// employees.forEach((employee) => {
//   employee.salary = calculateSalary(employee);
//   console.log(`Name: ${employee.name}`);
//   console.log(`Salary: Rs.${employee.salary.toFixed(2)}/-`);
// });
