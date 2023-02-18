const Manager = require("../lib/Manager");

// Test setting office number
test("can set office number to manager", () => {
    const officeNumber = "test";
    const e = new Manager("John", 1, "test@test.com", officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
});

// Test get role method
test("can get manager role from getRole()", () => {
    const role = "Manager";
    const e = new Manager("John", 1, "test@test.com", "test");
    expect(e.getRole()).toBe(role);
});

// Test get office number method
test("can get manager office number from getOffice()", () => {
    const officeNumber = "test";
    const e = new Manager("John", 1, "test@test.com", officeNumber);
    expect(e.getOfficeNumber()).toBe(officeNumber);
});