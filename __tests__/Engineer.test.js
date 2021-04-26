const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
  describe("getName", () => {
    // test getName for engineer class
    it("should return the name that is entered", () => {
      const name = "Mark";
      const newEmp = new Engineer(name, "1", "mark@email.com");
      result = newEmp.getName()
      expect(result).toBe(name);
    })
  })





});