module.exports = {
  setupFiles: ['jest-canvas-mock', './tests/setup.js'],
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    "<rootDir>/src/graph",
    "<rootDir>/src/hooks/useGraph.ts"
  ]
};
