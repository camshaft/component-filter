module.exports = function(builder) {
  builder.hook('before scripts', function(pkg) {
    delete pkg.config.main;
    delete pkg.config.scripts;
  });
};