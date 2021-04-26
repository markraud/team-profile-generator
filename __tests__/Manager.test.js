const Manager = require('../lib/Manager')

describe("Manager", () => {
  describe("getName", () => {
    // test getName for manager class
    it("should return the name that is entered", () => {
      const name = "Mark";
      const newEmp = new Manager(name, "1", "mark@email.com");
      result = newEmp.getName()
      expect(result).toBe(name);
    })
  })
  describe("getId", () => {
    // test getId for manager class
    it("should return the name that is entered", () => {
      const id = "1";
      const newEmp = new Manager("Mark", id, "mark@email.com");
      result = newEmp.getId()
      expect(result).toBe(id);
    })
  })
  describe("getEmail", () => {
    // test getEmail for manager class
    it("should return the name that is entered", () => {
      const email = "mark@email.com";
      const newEmp = new Manager("Mark", "1", email);
      result = newEmp.getEmail()
      expect(result).toBe(email);
    })
  })
  describe("getRole", () => {
    // test getRole for manager class
    it("should return the name that is entered", () => {
      const role = "Manager";
      const newEmp = new Manager("Mark", "1", "mark@email.com");
      result = newEmp.getRole()
      expect(result).toBe(role);
    })
  })





});