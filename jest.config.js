module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    window: { addEventListener: () => {} },
  },
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
}
