module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.module\\.css$': 'jest-transform-stub',
  },
};
