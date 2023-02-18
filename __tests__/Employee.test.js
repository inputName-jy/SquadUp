// Import Employee class with require()
const Employee = require("../lib/Employee");

// Test instantiate Employee instance
test("can intantiate Employee instance", () => {
  // Instantiate the Employee class with new operator to create an object and assign it to an new variable
  // Expect the type of the variable to be the "object" data type
  const e = new Employee();
  expect(typeof(e)).toBe("object");

});

// Test setting name of an employee
test("can set name of an employee", () => {
  // Assign the name of an employee to a new variable
  // Instantiate the Employee class, passing the variable of the employee name as an augument, to create an object and assign it to an new variable
  // Expect the value of the name property of the object to be equal to the value of the variable of the employee name
  const name = "John";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

// Test setting id of an employee
test("can set id of an employee", () => {
  // Assign a number as an id to a new variable for the employeee id
  // Instantiate the Employee class with an employee name of your choice and the id variable as input arguments to create an employee object and assign it to a new variable
  // Expect the id of the employe object to be equal to the value of the id variable
  const id = 1;
  const e = new Employee("John", id);
  expect(e.id).toBe(id);
});

// Test setting email of an employee
test("can set email of an employee", () => {
  // Assign an email to a new variable
  // Instantiate the Employee class, passing a name and an id and the email variable as input arguments, to create an employee object and assign it to a new variable
  // Expect the email of the employee object to be equal to the value of the email variable
  const email = "test@test.com";
  const e = new Employee("John", 1, email);
  expect(e.email).toBe(email);
});

// Test get name method
test("can get employee name from getName()", () => {
  // Assign the name of an employee to a new variable
    // Instantiate the Employee class, passing the variable of the employee name as input augument, to create an object and assign it to an new variable
    // Expect the getName method of the object to return the name to be equal to the value of the emplyee name variable
  const name = "John";
  const e = new Employee(name);
  expect(e.getName()).toBe(name);
});

// Test get id method
test("can get employee id from getID()", () => {
  // Assign an id of an employee to a new variable
  // Instantiate the Employee class, passing an employee name and the id variable as auguments, to create an object and assign it to an new variable
  // Expect the getId method of the object to return the id to be equal to the value of the emplyee id variable
  const id = 1;
  const e = new Employee("John", id);
  expect(e.getID()).toBe(id);
});

// Test get email method
test("can get employee email from getEmail()", () => {
  // Assign an email of an employee to a new variable
  // Instantiate the Employee class, passing an employee name and an id and the email variable as auguments, to create an object and assign it to an new variable
  // Expect the getEmail method of the object to return the email to be equal to the value of the emplyee email variable
  const email = "test@test.com";
  const e = new Employee("John", 1, email);
  expect(e.getEmail()).toBe(email);
});

// Test get role method
test("can get employee role from getRole()", () => {
  // Assign "Employee" to a new role variable
  // Instantiate the Employee class, passing an employee name and an id and an email as auguments, to create an object and assign it to an new variable
  // Expect getRole() to return the role to be equal to the value of the role variable
  const role = "Employee";
  const e = new Employee("John", 1, "Manager");
  expect(e.getRole()).toBe(role);
});
