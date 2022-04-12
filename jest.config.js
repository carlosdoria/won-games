module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: [
    "<rootDir>/.jest/setupTests.ts",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/**/_app.tsx",
    "!src/**/_document.tsx",
    '!src/**/stories.tsx',
  ],
  // transform: {
  //   "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  // },
  // moduleNameMapper: {
  //   "\\.(scss|css|sass)$": "identity-obj-proxy"
  // },
  // coverageReporters: [ 'lcov', 'json' ]
}
