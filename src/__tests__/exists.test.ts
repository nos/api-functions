function reqExists() {
  const { default: result } = require("../exists");
  return result;
}

describe("exists", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should return false", () => {
    const result = reqExists();
    expect(result).toBeFalsy();
  });

  it("should return true", () => {
    (global as any).NOS = "testnos";

    const result = reqExists();
    expect(result).toBeTruthy();
  });
});
