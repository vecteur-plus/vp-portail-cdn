"use strict";

var data = module.exports = {
  "jquery": {
    versions: ["2.1.1", "2.1.0", "2.0.3", "2.0.2", "2.0.1", "2.0.0", "1.11.0", "1.10.2", "1.10.1", "1.10.0", "1.9.1", "1.9.0", "1.8.3", "1.8.2", "1.8.1", "1.8.0", "1.7.2", "1.7.1", "1.7.0", "1.6.4", "1.6.3", "1.6.2", "1.6.1", "1.6.0", "1.5.2", "1.5.1", "1.5.0", "1.4.4", "1.4.3", "1.4.2", "1.4.1", "1.4.0", "1.3.2", "1.3.1", "1.3.0", "1.2.6", "1.2.3"],
    url: function (version) {
      return "//ajax.googleapis.com/ajax/libs/jquery/" + version + "/jquery.min.js";
    }
  },
  "bootstrap": {
    versions: ["3.3.1", "3.3.0", "3.2.0", "3.1.1"],
    url: function (version) {
      return "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/" + version + "/js/bootstrap.min.js";
    }
  },
  "angular-bootstrap": {
    versions: ["0.12.0", "0.11.2", "0.11.1", "0.11.0", "0.10.0"],
    url: function (version) {
      return "//cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/" + version + "/ui-bootstrap-tpls.min.js";
    }
  },
  "angular-ui-router": {
    versions: ["0.2.13", "0.2.12", "0.2.11", "0.2.10", "0.2.9", "0.2.8"],
    url: function (version) {
      return "//cdnjs.cloudflare.com/ajax/libs/angular-ui-router/" + version + "/angular-ui-router.min.js";
    }
  },
  "angular-strap": {
    versions: ["2.1.6", "2.1.5", "2.1.4"],
    url: function (version) {
      return "//cdnjs.cloudflare.com/ajax/libs/angular-strap/" + version + "/angular-strap.min.js";
    }
  },
  "fastclick": {
    versions: ["1.0.3", "1.0.2", "1.0.0"],
    url: function (version) {
      return "//cdnjs.cloudflare.com/ajax/libs/fastclick/" + version + "/fastclick.min.js";
    }
  },
  "lodash": {
    versions: ["2.4.1"],
    url: function (version) {
      return "//cdnjs.cloudflare.com/ajax/libs/lodash.js/" + version + "/lodash.min.js";
    }
  },
  "sockjs": {
    versions: ["0.3.4"],
    url: function (version) {
      return "//cdnjs.cloudflare.com/ajax/libs/sockjs-client/" + version + "/sockjs.min.js";
    }
  },
  "base64": {
    versions: ["0.2.0"],
    url: function (version) {
      return "//cdnjs.cloudflare.com/ajax/libs/Base64/" + version + "/base64.min.js";
    }
  },
  "ng-tags-input": {
    versions: ["2.1.1-1", "2.0.0"],
    url: function (version) {
      return "//cdnjs.cloudflare.com/ajax/libs/ng-tags-input/" + version + "/ng-tags-input.min.js";
    }
  },
  "angular-bindonce": {
    versions: ["0.3.1"],
    url: function (version) {
      return "//cdnjs.cloudflare.com/ajax/libs/angular-bindonce/" + version + "/angular-bindonce.min.js";
    }
  },
  "animate.css": {
    versions: ["3.2.0", "3.1.0"],
    url: function (version) {
      return "//cdnjs.cloudflare.com/ajax/libs/animate.css/" + version + "/animate.min.css";
    }
  },
  "underscore.string": {
    versions: ["2.3.3"],
    url: function (version) {
      return "//cdnjs.cloudflare.com/ajax/libs/underscore.string/" + version + "/underscore.string.min.js";
    }
  },
  "moment": {
    versions: ["2.8.2", "2.7.0"],
    url: function (version) {
      return "//cdnjs.cloudflare.com/ajax/libs/moment.js/" + version + "/moment.min.js";
    }
  },
  "moment-timezone": {
    versions: ["0.2.1", "0.2.0", "0.1.0"],
    url: function (version) {
      return "//cdnjs.cloudflare.com/ajax/libs/moment-timezone/" + version + "/moment-timezone.min.js";
    }
  }
};

// AngularJS
var angularFiles = [
  "angular",
  "angular-animate",
  "angular-cookies",
  "angular-loader",
  "angular-i18n",
  "angular-resource",
  "angular-route",
  "angular-sanitize",
  "angular-touch"
];

angularFiles.forEach(function (item) {
  data[item] = {
    versions: ["1.3.13", "1.3.12", "1.3.11", "1.3.10", "1.3.9", "1.3.8", "1.3.7", "1.3.6", "1.3.5", "1.3.4", "1.3.3", "1.3.2", "1.3.1", "1.3.0", "1.2.23", "1.2.22", "1.2.19", "1.2.18", "1.2.16", "1.2.15", "1.2.14", "1.2.13", "1.2.12", "1.2.11", "1.2.10", "1.2.9", "1.2.8", "1.2.7", "1.2.6", "1.2.5", "1.2.4", "1.2.3", "1.2.2", "1.2.1", "1.2.0", "1.0.8", "1.0.7", "1.0.6", "1.0.5", "1.0.4", "1.0.3", "1.0.2", "1.0.1"],
    url: function (version) {
      return "//ajax.googleapis.com/ajax/libs/angularjs/" + version + "/" + item + ".min.js";
    }
  };
});
