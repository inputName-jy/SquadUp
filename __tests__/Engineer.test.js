// Import Engineer class with require()
const Engineer = require("../lib/Engineer");

// Test setting github account
test("can set github to engineer", () => {
  // Assign github account to a new variable
  // Instantiate the Employee class, passing an name and an id and an email and the github variable as auguments, to create an object and assign it to an new variable
  // Export the github of the employee object to be equal to the value of the github variable
  const github = "test";
  const e = new Engineer("John", 1, "test@test.com", github);
  expect(e.github).toBe(github);
});

// Test get role method
test("can get engineer role from getRole()", () => {
  // Assign "Engineer" to a new role variable
  // Instantiate the Employee class, passing an employee name and an id and an email and a github account name as auguments, to create an object and assign it to an new variable
  // Export getRole() to return the role to be equal to the value of the role variable
  const role = "Engineer";
  const e = new Engineer("John", 1, "test@test.com", "test");
  expect(e.getRole()).toBe(role);
});

// Test get github method
test("can get engineer github from getGithub()", () => {
  // Assign github account to a new variable
  // Instantiate the Employee class, passing an employee name and an id and an email and the github variable as auguments, to create an object and assign it to an new variable
  // Expect getGithub() to return the github  name to be equal to the value of the github variable
  const github = "test";
  const e = new Engineer("John", 1, "test@test.com", github);
  expect(e.getGithub()).toBe(github);
});
