export default {
  rootDir: ".",
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)?$": "babel-jest",
  },
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-jsdom",
  // estEnvironment: "node", => error
  verbose: true,
  moduleDirectories: ["node_modules", __dirname, "src", "fixtures"],
  moduleNameMapper: {
    // '^@(.*/)(.*)$': '<rootDir>/$1/$2',
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@testing/fixtures/(.*)$": "<rootDir>/fixtures/$1",
    "^@store/slices/(.*)$": "<rootDir>/store/slices/$1",
    "^@store/(.*)$": "<rootDir>/store/$1",
    "^@pages/(.*)$": "<rootDir>/pages/$1",
    "^@ui/(.*)$": "<rootDir>/ui/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
  },
  testMatch: ["<rootDir>/**/*.test.(js|jsx|ts|tsx)", "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
};

// export default {
//
//
//   transform: {
//     "^.+\\.(js|jsx|ts|tsx)?$": "babel-jest",
//   },
//   testEnvironment: "node",
//   moduleDirectories: ["node_modules", __dirname, "src"],
//   moduleNameMapper: {
//     // "^@(.*)/$": "<rootDir>/$1",
//     "@utils/": "<rootDir>/src/utils/",
//   },
//   testMatch: [
//     "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
//     "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
//   ],
//   transformIgnorePatterns: ["<rootDir>/node_modules/"],
// };
