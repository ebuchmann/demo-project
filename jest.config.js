module.exports = {
  globals: {
    'ts-jest': {
      target: 'es29',
    },
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/node_modules/**', '!**/vendor/**'],
  coveragePathIgnorePatterns: [
    '/node_modules',
    '/coverage',
    'jest.config.js',
    '/config',
    'generated.ts',
  ],
  testPathIgnorePatterns: ['/config'],
};
