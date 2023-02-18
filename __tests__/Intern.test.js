const Intern = require("../lib/Intern");

// Test setting school
test("can set school to intern", () => {
    const school = "test";
    const e = new Intern("John", 1, "test@test.com", school);
    expect(e.school).toBe(school);
});

// Test get role method
test("can get intern role from getRole()", () => {
    const role = "Intern";
    const e = new Intern("John", 1, "test@test.com", "test");
    expect(e.getRole()).toBe(role);
});

// Test get school method
test("can get intern school from getSchool()", () => {
    const school = "test";
    const e = new Intern("John", 1, "test@test.com", school);
    expect(e.getSchool()).toBe(school);
});