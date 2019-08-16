module.exports = {
  reporters: ['default', ['jest-junit', {}]],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
