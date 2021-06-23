module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  setupFilesAfterEnv: ['./scripts/setupJestEnv.js'],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\js$': 'babel-jest',
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testMatch: [
    '**/tests/**/?(*.)+(test).[jt]s?(x)',
    '**/tests/**/*spec.[jt]s?(x)',
    '**/__tests__/**/*.spec.js'
  ],
  moduleNameMapper: {
    '^az-ui(.*)$': '<rootDir>$1',
    '^main(.*)$': '<rootDir>/src$1',
    '^lodash-es$': 'lodash'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)']
}
