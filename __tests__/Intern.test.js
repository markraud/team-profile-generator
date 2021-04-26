const Intern = require('../lib/Intern')

describe("Intern", () => {
  describe("getName", () => {
    // test getName for intern class
    it("should return the name that is entered", () => {
      const name = "Mark";
      const newEmp = new Intern(name, "1", "mark@email.com");
      result = newEmp.getName()
      expect(result).toBe(name);
    })
  })





});