module.exports = function(builder) {
  builder.hook('before templates', function(pkg) {
    delete pkg.config.templates;
  });
};