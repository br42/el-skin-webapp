/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after `n` failures
  // bail: 0,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "C:\\Users\\bdpontte\\AppData\\Local\\Programs\\msys64\\tmp\\jest",

  // Automatically clear mock calls, instances, contexts and results before every test
  // clearMocks: false,
  clearMocks: false,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // Indicates which provider should be used to instrument code for coverage
  // coverageProvider: "babel",

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: undefined,

  // A path to a custom dependency extractor
  // dependencyExtractor: undefined,

  // Make calling deprecated APIs throw helpful error messages
  // errorOnDeprecated: false,

  // The default configuration for fake timers
  // fakeTimers: {
  //   "enableGlobally": false
  // },

  // Force coverage collection from ignored files using an array of glob patterns
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: undefined,

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: undefined,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // maxWorkers: "50%",

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   "node_modules"
  // ],
  moduleDirectories: [
    'node_modules',
    'src'
  ],

  // An array of file extensions your modules use
  // moduleFileExtensions: [
  //   "js",
  //   "mjs",
  //   "cjs",
  //   "jsx",
  //   "ts",
  //   "mts",
  //   "cts",
  //   "tsx",
  //   "json",
  //   "node"
  // ],
  
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'mts', 'cts', 'tsx', 'json', 'node'],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // moduleNameMapper: {},

  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // Activates notifications for test results
  // notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  // notifyMode: "failure-change",

  // A preset that is used as a base for Jest's configuration
  // preset: undefined,
  //preset: '@babel/preset-react',
  //preset: '@babel/preset-typescript',
  
  // Run tests from one or more projects
  // projects: undefined,

  // Use this configuration option to add custom reporters to Jest
  // reporters: undefined,

  // Automatically reset mock state before every test
  // resetMocks: false,
  resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: undefined,

  // Automatically restore mock state and implementation before every test
  // restoreMocks: false,
  restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  // rootDir: undefined,
  rootDir: '.',

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],
  roots: ['<rootDir>/src'],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: "jest-runner",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],
  setupFiles: [
    //'<rootDir>/node_modules/react-app-polyfill/jsdom'
    'react-app-polyfill/jsdom',
  ],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // setupFilesAfterEnv: [],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom'
  ],

  // The number of seconds after which a test is considered as slow and reported as such in the results.
  // slowTestThreshold: 5,

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  // testMatch: [
  //   "**/__tests__/**/*.?([mc])[jt]s?(x)",
  //   "**/?(*.)+(spec|test).?([mc])[jt]s?(x)"
  // ],
  
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [],

  // This option allows the use of a custom results processor
  // testResultsProcessor: undefined,

  // This option allows use of a custom test runner
  // testRunner: "jest-circus/runner",

  // A map from regular expressions to paths to transformers
  // transform: undefined,
  transform: {
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': (
      '<rootDir>/node_modules/react-scripts/config/jest/babelTransform.js'
    ),
    '^.+\\.css$': ('<rootDir>/node_modules/react-scripts/config/jest/cssTransform.js'),
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': (
      '<rootDir>/node_modules/react-scripts/config/jest/fileTransform.js'
    ),
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "\\\\node_modules\\\\",
  //   "\\.pnp\\.[^\\\\]+$"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
  
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

//const config = {
//  roots: ['<rootDir>/src'],
//
//  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'], 
//
//  setupFiles: [
//    isEjecting
//      ? 'react-app-polyfill/jsdom'
//      : require.resolve('react-app-polyfill/jsdom'),
//  ],
//
//  setupFilesAfterEnv: setupTestsFile ? [setupTestsFile] : [],
//  testMatch: [
//    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
//    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
//  ],
//  testEnvironment: 'jsdom',
//  transform: {
//    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': resolve(
//      'config/jest/babelTransform.js'
//    ),
//    '^.+\\.css$': resolve('config/jest/cssTransform.js'),
//    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': resolve(
//      'config/jest/fileTransform.js'
//    ),
//  },
//  transformIgnorePatterns: [
//    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
//    '^.+\\.module\\.(css|sass|scss)$',
//  ],
//  modulePaths: modules.additionalModulePaths || [],
//  moduleNameMapper: {
//    '^react-native$': 'react-native-web',
//    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
//    ...(modules.jestAliases || {}),
//  },
//  moduleFileExtensions: [...paths.moduleFileExtensions, 'node'].filter(
//    ext => !ext.includes('mjs')
//  ),
//  watchPlugins: [
//    'jest-watch-typeahead/filename',
//    'jest-watch-typeahead/testname',
//  ],
//  resetMocks: true,
//};

export default config;
