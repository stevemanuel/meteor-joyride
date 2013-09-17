Package.describe({
  summary: 'Meteor package to wrap ZURB Foundation\'s Joyride plugin.'
});

Package.on_use(function(api, where) {
  api.use('jquery', 'client');

  if (api.export) {
    api.export('joyride');
  }

  api.add_files('joyride-2.1.css', 'client');
  api.add_files('jquery.joyride-2.1.js', 'client');
});
