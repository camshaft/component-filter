var package = require(process.cwd() + '/component.json');
var remove = require('.').remove;

module.exports = function(builder) {
  builder.hook('before styles', function(pkg) {
    if (pkg.config.repo !== package.config.repo) return;
    remove(pkg);  
  });
  builder.hook('before scripts', function(pkg) {
    if (pkg.config.repo !== package.config.repo) return;
    remove(pkg);  
  });
};
