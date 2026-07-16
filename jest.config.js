module.exports = {
  testEnvironment: 'node',

  testMatch: [
    '**/tests/**/*.test.js'
  ],

  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**'
  ],

  coverageDirectory: 'coverage',

  coverageReporters: [
    'html',
    'lcov',
    'text'
  ],

  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'reports',
        outputName: 'junit.xml'
      }
    ]
  ],

  verbose: true
};