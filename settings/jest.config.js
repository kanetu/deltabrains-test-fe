module.exports = {
  // The root of your project directory (the directory containing this config file)
  rootDir: "..",

  // The directories where Jest should look for test files
  testMatch: ["<rootDir>/**/*.test.(js|jsx|ts|tsx)"],

  // Module file extensions that will be considered when running tests
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],

  testEnvironment: "jsdom",

  // Transform files with ts-jest
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },

  // Transform ignore files which are located in ["/node_modules"]
  transformIgnorePatterns: ["<rootDir>/node_modules/"],

  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/src/components$1",
    "^@/features(.*)$": "<rootDir>/src/features$1",
    "^@/assets(.*)$": "<rootDir>/src/assets$1",
    "^@/test-utils(.*)$": "<rootDir>/src/test-utils$1",
    "^@/lib/utils(.*)$": "<rootDir>/src/lib/utils$1",
    "^@/consts/common(.*)$": "<rootDir>/src/consts/common$1",
  },

  // Ignore files or directories that should not be tested
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Report test results in a more verbose format
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/index.tsx",
    "!src/reportWebVitals.ts",
  ],

  // Setup files that will be run before running tests
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};
