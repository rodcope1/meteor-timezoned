Package.describe({
  name: "rodcope1:timezoned",
  summary: "A high-level time zone package for Meteor",
  version: "0.1.4",
  git: "https://github.com/rodcope1/meteor-timezoned.git"
});

Package.on_use(function(api) {
  if (api.versionsFrom) {
    api.use('aldeed:moment-timezone@0.4.0');
    api.use('aldeed:geocoder@0.3.8');
    api.use('underscore@1.0.3');
    api.use('http@1.1.0');
  } else {
    api.use(['moment-timezone', 'geocoder', 'underscore', 'http']);
  }
  
  api.add_files(['timezoned.js']);
  api.export('TimeZoned');
});

Package.on_test(function(api) {
  if (api.versionsFrom) {
    api.use('rodcope1:timezoned');
    api.use('tinytest@1.0.5');
  } else {
    api.use(['timezoned', 'tinytest']);
  }
  api.add_files(['tests/timezoned-tests.js']);
});
