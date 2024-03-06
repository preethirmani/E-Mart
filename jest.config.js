module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '/Users/preethirajamani/Downloads/Coursework/Capstone/E-Mart/frontend/node_modules/babel-jest',
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  }
}