module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  watchPathIgnorePatterns: ['./node_modules'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$'
    },
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|js)?(x)',
    '**/+(*.)+(spec|test).+(ts|js)?(x)'
  ],
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@config/(.*)': '<rootDir>/src/app/_config/$1',
    '@environment/(.*)': '<rootDir>/src/environments/$1',
    '@shared/(.*)': '<rootDir>/src/app/_shared/$1',
    '@delegations/(.*)': '<rootDir>/src/app/delegations/$1'
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  testPathIgnorePatterns: [
    '/node_modules', '/dist/', 'src/app/*.{js}'
  ]
};
