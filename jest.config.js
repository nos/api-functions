module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  modulePathIgnorePatterns: ["node_modules/"],
  roots: ["src", "jest"],
  testRegex: "((/__tests__/.*-test)|(.*\\.test))\\.(js|jsx|ts|tsx|json)$",
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  globals: {
    window: true
  },
  collectCoverage: true,
  setupFiles: [
    "./testsetup.js"
  ],
};
