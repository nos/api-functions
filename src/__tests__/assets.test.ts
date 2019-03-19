describe("assets", () => {
  function reqDeps() {
    const { default: assets } = require("../assets");
    return assets;
  }

  beforeEach(() => {
    jest.resetModules();
    (global as any).NOS = undefined;
  });

  it("should return default assets", () => {
    const expected = {
      GAS: "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7",
      NEO: "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b"
    };
    const assets = reqDeps();
    expect(assets).toEqual(expected);
  });

  it("should return mocked window value", () => {
    (global as any).NOS = { ASSETS: "testnos" };

    const assets = reqDeps();
    expect(assets).toBe("testnos");
  });
});
