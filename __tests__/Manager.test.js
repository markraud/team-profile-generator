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





});