const Engineer = require('../lib/Engineer');

test("setting up github via constructor", () => {
    const testValue = "engineersteve";
    const employee = new Engineer("Steve", 1, "test@gmail.com", testValue);
    expect(employee.github).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("Steve", 1, "test@gmail.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get gitHub", () => {
    const testValue = "engineersteve";
    const employee = new Engineer("Steve", 1, "test@gmail.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
})