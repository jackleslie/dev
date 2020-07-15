module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.css$'],
  moduleNameMapper: {
    '^.+\\.module\\.css$': 'identity-obj-proxy',
  },
};
