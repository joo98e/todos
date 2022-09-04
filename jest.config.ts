export default {
  rootDir: ".",
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)?$": "babel-jest",
  },
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  // estEnvironment: "node", => error
  verbose: true,
  moduleDirectories: ["node_modules", __dirname, "src"],
  moduleNameMapper: {
    // "^@(.*)/$": "<rootDir>/$1", => error
    "^@utils/(.*)$": "<rootDir>/src/utils/$1", // example, @utils/getPath : "<rootDir>/src/utils/getPath"
  },
  testMatch: [
    "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
  ],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
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
