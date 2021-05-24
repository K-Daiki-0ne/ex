module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    '<rootDir>/src'
  ],
  
  // テストの設定ファイル
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],

  // tsconfig.jest.jsonの記述
  globals: {
    'ts-jest': {
      'tsConfig': '<rootDir>/test/tsconfig.jest.json'
    }
  },
  modulePaths: [
    "<rootDir>/@src/"
  ],

  moduleNameMapper: {
    // sass及びCSSの設定
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    // 絶対パスについての設定
    "@src(.*)$": "<rootDir>/src/$1"
  }
};