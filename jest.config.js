module.exports = {
  globals: {
    'ts-jest': {
      target: 'es2019',
    },
  },
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: [
    '/node_modules',
    '/coverage',
    'jest.config.js',
    '/config',
    'generated.ts',
    '/test-utils',
    '.eslintrc.js',
  ],
  testPathIgnorePatterns: ['/config', '/test-utils'],
};
