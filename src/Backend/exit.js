module.exports = function() {
  setTimeout((function() {
      return process.exit(22);
  }), 10000);
}
