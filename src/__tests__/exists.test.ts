describe("exists", () => {
  function reqDeps() {
    const { default: result } = require("../exists");
    return result;
  }

  beforeEach(() => {
    jest.resetModules();
  });

  it("should return false", () => {
    const result = reqDeps();
    expect(result).toBeFalsy();
  });

  it("should return true", () => {
    (global as any).NOS = "testnos";

    const result = reqDeps();
    expect(result).toBeTruthy();
  });
});
