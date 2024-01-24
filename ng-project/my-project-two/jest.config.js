const { pathsToModuleNameMapper } = require("ts-jest/dist/config");
const { compilerOptions } = require("./tsconfig.json");

const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: "/",
});

module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["./src/setupJest.ts"],
  transformIgnorePatterns: ["^.+\\.js$"],
  moduleNameMapper,
  silent: true,
  collectCoverage: true,
  coverageReporters: ["lcov", "cobertura"],
  coverageDirectory: "./coverage/jest-ng-seed",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./coverage",
        outputName: "TESTS-jest-ng-seed.xml",
      },
    ],
  ],
};