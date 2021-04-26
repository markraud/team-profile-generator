const Employee = require('../lib/Employee')

describe("Employee", () => {
  describe("getName", () => {
    // test getName for employee class
    it("should return the name that is entered as employee", () => {
      const name = "Mark";
      const newEmp = new Employee(name, "1", "mark@email.com");
      result = newEmp.getName()
      expect(result).toBe(name);
    })
  })
  describe("getId", () => {
    // test getId for employee class
    it("should return the name that is entered as employee", () => {
      const id = "Mark";
      const newEmp = new Employee("Mark", id, "mark@email.com");
      result = newEmp.getId()
      expect(result).toBe(id);
    })
  })
  describe("getEmail", () => {
    // test getEmail for employee class
    it("should return the name that is entered as employee", () => {
      const email = "mark@email.com";
      const newEmp = new Employee("Mark", "1", email);
      result = newEmp.getEmail()
      expect(result).toBe(email);
    })
  })
  describe("getRole", () => {
    // test getRole for employee class
    it("should return the name that is entered as employee", () => {
      const role = "Employee";
      const newEmp = new Employee("Mark", "1", "mark@email.com");
      result = newEmp.getRole()
      expect(result).toBe(role);
    })
  })





});