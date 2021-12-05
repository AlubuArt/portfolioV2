module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
      '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
    };