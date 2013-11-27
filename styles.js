module.exports = function(builder) {
  builder.hook('before styles', function(pkg) {
    delete pkg.config.styles;
  });
};