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
  describe("getId", () => {
    // test getId for intern class
    it("should return the name that is entered", () => {
      const id = "1";
      const newEmp = new Intern("Mark", id, "mark@email.com");
      result = newEmp.getId()
      expect(result).toBe(id);
    })
  })
  describe("getEmail", () => {
    // test getName for intern class
    it("should return the name that is entered", () => {
      const email = "mark@email.com";
      const newEmp = new Intern("Mark", "1", email);
      result = newEmp.getEmail()
      expect(result).toBe(email);
    })
  })
  describe("getRole", () => {
    // test getRole for intern class
    it("should return the name that is entered", () => {
      const role = "Intern";
      const newEmp = new Intern("Mark", "1", "mark@email.com");
      result = newEmp.getRole()
      expect(result).toBe(role);
    })
  })





});