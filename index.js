exports.remove = function(pkg) {
  delete pkg.config.styles;
  delete pkg.config.main;
  delete pkg.config.scripts;
  delete pkg.config.templates;
  delete pkg.config.fonts;
  delete pkg.config.images;
};