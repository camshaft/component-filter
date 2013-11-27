module.exports = function(builder) {
  builder.hook('before json', function(pkg) {
    delete pkg.config.json;
  });
};