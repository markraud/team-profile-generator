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
  describe("getId", () => {
    // test getId for engineer class
    it("should return the name that is entered", () => {
      const id = "1";
      const newEmp = new Engineer("Mark", id, "mark@email.com");
      result = newEmp.getId()
      expect(result).toBe(id);
    })
  })
  describe("getEmail", () => {
    // test getEmail for engineer class
    it("should return the name that is entered", () => {
      const email = "mark@email.com";
      const newEmp = new Engineer("Mark", "1", email);
      result = newEmp.getEmail()
      expect(result).toBe(email);
    })
  })
  describe("getRole", () => {
    // test getRole for engineer class
    it("should return the name that is entered", () => {
      const role = "Engineer";
      const newEmp = new Engineer("Mark", "1", "mark@email.com");
      result = newEmp.getRole()
      expect(result).toBe(role);
    })
  })




});