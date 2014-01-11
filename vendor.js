var pkg = require(process.cwd() + '/component.json');
var remove = require('./').remove;

module.exports = function(builder) {
  builder.hook('before styles', function(pkg) {
    if (pkg.root) return pkg.config.dependencies = {};
    remove(pkg);
  });
  builder.hook('before scripts', function(pkg) {
    if (pkg.root) return pkg.config.dependencies = {};
    remove(pkg);
  });
};
