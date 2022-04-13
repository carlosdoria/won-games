module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: [
    "<rootDir>/.jest/setupTests.ts",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/utils/apollo.ts',
    '!src/utils/apolloCache.ts',
    '!src/types/**/*.d.ts',
    '!src/graphql/**/*.ts',
    '!src/**/mock.ts'
  ],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  // transform: {
  //   "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  // },
  // moduleNameMapper: {
  //   "\\.(scss|css|sass)$": "identity-obj-proxy"
  // },
  // coverageReporters: [ 'lcov', 'json' ]
}
