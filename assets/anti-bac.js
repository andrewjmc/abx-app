"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('anti-bac/adapters/application', ['exports', 'ember-data', 'ember-data-fixture-adapter'], function (exports, _emberData, _emberDataFixtureAdapter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDataFixtureAdapter['default'];
    }
  });
});
define('anti-bac/app', ['exports', 'ember', 'anti-bac/resolver', 'ember-load-initializers', 'anti-bac/config/environment'], function (exports, _ember, _antiBacResolver, _emberLoadInitializers, _antiBacConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _antiBacConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _antiBacConfigEnvironment['default'].podModulePrefix,
    Resolver: _antiBacResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _antiBacConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('anti-bac/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'anti-bac/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _antiBacConfigEnvironment) {

  var name = _antiBacConfigEnvironment['default'].APP.name;
  var version = _antiBacConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('anti-bac/components/children-row', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('anti-bac/components/hierarchy-row', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('anti-bac/components/result-row', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('anti-bac/controllers/application', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		antibacterials: undefined,
		microbacteria: undefined,

		microbacteriaByLevel: _ember['default'].A(),
		antibacterialsByLevel: _ember['default'].A(),

		antibacterialsChange: (function () {
			this.assignByLevel(this.get('antibacterials'), this.get('antibacterialsByLevel'));
		}).observes('antibacterials'),

		microbacteriaChange: (function () {
			this.assignByLevel(this.get('microbacteria'), this.get('microbacteriaByLevel'));
		}).observes('microbacteria'),

		assignByLevel: function assignByLevel(objects, arr) {
			arr.clear();
			var level = 1;
			var done = false;
			while (!done) {
				var thisLevel = objects.filterBy("level", level);
				if (thisLevel.length > 0) {
					arr.pushObject(thisLevel);
					level++;
				} else {
					done = true;
				}
			}
		},

		actions: {
			toggleHierarchy: function toggleHierarchy(o) {
				if (o.get('children.length') > 0) {
					o.toggleProperty('userOpen');
				}
			}
		}
	});
});
define('anti-bac/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('anti-bac/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('anti-bac/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('anti-bac/helpers/decrement', ['exports', 'ember'], function (exports, _ember) {
  exports.decrement = decrement;

  function decrement(params /*, hash*/) {
    return params[0] - 1;
  }

  exports['default'] = _ember['default'].Helper.helper(decrement);
});
define('anti-bac/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('anti-bac/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('anti-bac/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('anti-bac/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('anti-bac/helpers/lookup-result', ['exports', 'ember'], function (exports, _ember) {
  exports.lookupResult = lookupResult;

  function lookupResult(params /*, hash*/) {
    return window.abgram[params[1].get('id') + '&' + params[0].get('id')];
  }

  exports['default'] = _ember['default'].Helper.helper(lookupResult);
});
define('anti-bac/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('anti-bac/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('anti-bac/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('anti-bac/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('anti-bac/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('anti-bac/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('anti-bac/helpers/remaining-generations', ['exports', 'ember'], function (exports, _ember) {
  exports.remainingGenerations = remainingGenerations;

  function remainingGenerations(params) {
    var res = params[1] - params[0];
    if (params[2]) res += params[2];
    return res;
  }

  exports['default'] = _ember['default'].Helper.helper(remainingGenerations);
});
define('anti-bac/helpers/sensitivity-class', ['exports', 'ember'], function (exports, _ember) {
  exports.sensitivityClass = sensitivityClass;

  function sensitivityClass(params /*, hash*/) {
    var sensitivity = window.abgram[params[1].get('id') + '&' + params[0].get('id')];
    var open = params[2];
    var result = "result-cell " + sensitivity;
    if (!open) {
      result += " hide";
    }
    return result;
  }

  exports['default'] = _ember['default'].Helper.helper(sensitivityClass);
});
define('anti-bac/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('anti-bac/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('anti-bac/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'anti-bac/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _antiBacConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_antiBacConfigEnvironment['default'].APP.name, _antiBacConfigEnvironment['default'].APP.version)
  };
});
define('anti-bac/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('anti-bac/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('anti-bac/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('anti-bac/initializers/export-application-global', ['exports', 'ember', 'anti-bac/config/environment'], function (exports, _ember, _antiBacConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_antiBacConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _antiBacConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_antiBacConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('anti-bac/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('anti-bac/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('anti-bac/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('anti-bac/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("anti-bac/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('anti-bac/mixins/hierarchy', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Mixin.create({
		level: (function () {
			var parent = this.get('parent');
			if (parent) {
				return parent.get('level') + 1;
			} else {
				return 1;
			}
		}).property('parent'),

		position: (function () {
			var parent = this.get('parent');
			if (parent) {
				return this.get('parent.children').indexOf(this);
			} else {
				return 0;
			}
		}).property('parent.children.@each'),

		overallPosition: DS.attr('numeric'),

		totalChildren: (function () {
			var children = this.get('children');
			var tC = 0;
			children.forEach(function (c) {
				tC += c.get('totalChildren');
			});
			return tC;
		}).property('children.@each.totalChildren'),

		hasVisibleChildren: (function () {
			return this.get('children.length') > 0 && this.get('userOpen');
		}).property('children.length', 'userOpen'),

		totalLeaves: (function () {
			var children = this.get('children');
			var tL = 0;
			if (children) {
				children.forEach(function (c) {
					tL += c.get('totalLeaves');
				});
			} else {
				tL = 1;
			}
			return tL;
		}).property('children.@each.totalLeaves'),

		totalVisibleLeaves: (function () {
			if (!this.get('userOpen')) {
				return 1;
			} else {
				var children = this.get('children');
				var tL = 0;
				if (children.length > 0) {
					children.forEach(function (c) {
						if (c.get('propagatedOpen')) {
							tL += c.get('totalVisibleLeaves');
						}
					});
				} else {
					tL = 1;
				}
				return tL;
			}
		}).property('children.@each.totalVisibleLeaves', 'children.@each.propagatesVisible', 'userOpen'),

		spaces: (function () {
			var parent = this.get('parent');
			if (parent) {
				if (this.get('position') == 0) {
					return parent.get('spaces') + 1;
				} else {
					return 0;
				}
			} else {
				return 0;
			}
		}).property('parent.spaces', 'position'),

		leafSpaces: (function () {
			var children = this.get('children');
			var tS = 0;
			if (children) {
				children.forEach(function (c) {
					tS += c.get('leafSpaces');
				});
			} else {
				tS = this.get('spaces');
			}
			return tS;
		}).property('children.@each.leafSpaces', 'spaces'),

		visibleLeafSpaces: (function () {
			if (!this.get('propagatedOpen')) {
				return 0;
			} else if (!this.get('userOpen')) {
				return this.get('spaces');
			} else {
				var children = this.get('children');
				var tVS = 0;
				if (children.length > 0) {
					children.forEach(function (c) {
						tVS += c.get('visibleLeafSpaces');
					});
				} else {
					tVS = this.get('spaces');
				}
				return tVS;
			}
		}).property('children.@each.visibleLeafSpaces', 'userOpen', 'propagatedOpen', 'spaces'),

		descendantSpaces: (function () {
			return this.get('leafSpaces') - this.get('spaces');
		}).property('spaces', 'leafSpaces'),

		visibleDescendantSpaces: (function () {
			return this.get('visibleLeafSpaces') - this.get('spaces');
		}).property('spaces', 'visibleLeafSpaces'),

		colSpan: (function () {
			return this.get('totalVisibleLeaves'); // + this.get('visibleDescendantSpaces');
		}).property('totalVisibleLeaves', 'visibleDescendantGenerations'),

		userOpen: DS.attr('boolean', { defaultValue: true }),

		propagatedOpen: (function () {
			var p = this.get('parent');
			var pO;
			if (this.get('parent')) {
				pO = this.get('parent.propagatedOpen') && this.get('parent.userOpen');
			} else {
				return true;
			}

			if (pO) {
				return true;
			} else {
				return false;
			}
		}).property('parent', 'parent.propagatedOpen', 'userOpen'),

		display: (function () {
			var pO = this.get('propagatedOpen');
			var hasC = this.get('children.length') > 0;
			if (pO & (!hasC || !this.get('userOpen'))) {
				return true;
			} else {
				return false;
			}
			//pO !hasC display
			//pO hasC no
			//!pO no
		}).property('propagatedOpen', 'children.length'),

		firstChildParents: (function () {
			if (this.get('position') == 0) {
				var p = this.get('parent');
				if (p) {
					var fCP = p.get('firstChildParents');
					return fCP.concat(p);
				} else {
					return _ember['default'].A();
				}
			} else {
				return _ember['default'].A();
			}
		}).property('position', 'parent.firstChildParents')
	});
});
define('anti-bac/models/antibacterial', ['exports', 'ember-data', 'anti-bac/mixins/hierarchy'], function (exports, _emberData, _antiBacMixinsHierarchy) {

  var Antibacterial = _emberData['default'].Model.extend(_antiBacMixinsHierarchy['default'], {
    name: _emberData['default'].attr('text'),
    parent: _emberData['default'].belongsTo('antibacterial', { async: false, inverse: 'children' }),
    children: _emberData['default'].hasMany('antibacterial', { async: false, inverse: 'parent' }),
    sensitiveMicrobacteria: _emberData['default'].hasMany('microbacterium', { async: false, inverse: 'effectiveAntibacterials' }),
    resistantMicrobacteria: _emberData['default'].hasMany('microbacterium', { async: false, inverse: 'ineffectiveAntibacterials' })
  });

  Antibacterial.reopenClass({
    FIXTURES: [{
      id: "All",
      children: ["Aminoglycosides", "Beta lactams"]
    }, {
      id: "Aminoglycosides",
      children: ["Gentamicin", "Amikacin"]
    }, {
      id: "Gentamicin"
    }, {
      id: "Amikacin"
    }, {
      id: "Beta lactams",
      children: ["Penicillins", "Carbapenems", "Cephalosporins", "Monobactams"]
    }, {
      id: "Penicillins",
      children: ["Penicillin"]
    }, {
      id: "Penicillin"
    }, {
      id: "Carbapenems",
      children: ["Imipenem", "Meropenem", "Ertapenem"]
    }, {
      id: "Imipenem"
    }, {
      id: "Meropenem"
    }, {
      id: "Ertapenem"
    }, {
      id: "Cephalosporins",
      children: ["First generation", "Second generation", "Third generation", "Fourth generation"]
    }, {
      id: "First generation",
      children: ["Cephalexin"]
    }, {
      id: "Cephalexin"
    }, {
      id: "Second generation",
      children: ["Cefuroxime"]
    }, {
      id: "Cefuroxime"
    }, {
      id: "Third generation",
      children: ["Cefotaxime", "Ceftriaxone"]
    }, {
      id: "Cefotaxime"
    }, {
      id: "Ceftriaxone"
    }, {
      id: "Fourth generation",
      children: ["Cefepime"]
    }, {
      id: "Cefepime"
    }, {
      id: "Monobactams",
      children: ["Aztreonam"]
    }, {
      id: "Aztreonam"
    }]
  });

  exports['default'] = Antibacterial;
});
define('anti-bac/models/microbacterium', ['exports', 'ember-data', 'anti-bac/mixins/hierarchy'], function (exports, _emberData, _antiBacMixinsHierarchy) {

	var Microbacterial = _emberData['default'].Model.extend(_antiBacMixinsHierarchy['default'], {
		name: _emberData['default'].attr('text'),
		parent: _emberData['default'].belongsTo('microbacterium', { async: false, inverse: 'children' }),
		children: _emberData['default'].hasMany('microbacterium', { async: false, inverse: 'parent' }),
		effectiveAntibacterials: _emberData['default'].hasMany('antibacterial', { async: false, inverse: 'sensitiveMicrobacteria' }),
		ineffectiveAntibacterials: _emberData['default'].hasMany('antibacterial', { async: false, inverse: 'resistantMicrobacteria' })
	});

	Microbacterial.reopenClass({
		FIXTURES: [{
			id: 'All',
			children: ['Gram positive', 'Gram negative']
		}, {
			id: 'Gram positive',
			children: ['Staphylococci', 'Streptococci']
		}, {
			id: 'Staphylococci',
			children: ['Staphylococcus aureus', 'Coagulase-negative Staphylococci']
		}, {
			id: 'Staphylococcus aureus'
		}, {
			id: 'Coagulase-negative Staphylococci'
		}, {
			id: 'Streptococci',
			children: ['Group A Streptococcus', 'Group B Streptococcus']
		}, {
			id: 'Group A Streptococcus'
		}, {
			id: 'Group B Streptococcus'
		}, {
			id: "Gram negative",
			children: ['Escherichia coli', 'Neisseria']
		}, {
			id: 'Escherichia coli'
		}, {
			id: 'Neisseria'
		}]
	});

	exports['default'] = Microbacterial;
});
define('anti-bac/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('anti-bac/router', ['exports', 'ember', 'anti-bac/config/environment'], function (exports, _ember, _antiBacConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _antiBacConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('anti-bac/routes/application', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return _ember['default'].RSVP.hash({
				antibacterials: this.store.findAll('antibacterial'),
				microbacteria: this.store.findAll('microbacterium')
			});
		},
		setupController: function setupController(controller, model) {
			var aRoot = this.store.peekRecord('antibacterial', 'All');
			var mRoot = this.store.peekRecord('microbacterium', 'All');

			aRoot.get('sensitiveMicrobacteria').pushObject(mRoot);
			var m = this.store.peekRecord('microbacterium', 'Staphylococci');
			var a = this.store.peekRecord('antibacterial', 'Penicillin');
			a.get('resistantMicrobacteria').pushObject(m);

			var abgram = {};
			var getAllChildren = function getAllChildren(obj, annotate, level, spaces) {
				console.log(obj.get('id'));
				//Holds the number of generations which descend below this one
				var descendantGenerations = 0;
				//Holds the number of spaces which descend from this one (not counting overlaps)
				var leafSpaces = 0;
				//Holds the result to be returned to the next level up
				var res = [];
				//If this is the first call
				if (!level) {
					//Set the level to 1 and number of spaces to 0
					//Add the parent object to the list
					level = 1;
					res.pushObject(obj);
					spaces = 0;
				}
				if (annotate) {
					//Set the level of this current object
					obj.set('level', level);
				}
				//Get the object's children
				var children = obj.get('children');
				//Record the number of children
				var totalChildren = children.length;
				//Default number of leaves
				var totalLeaves = 0;
				if (totalChildren == 0) {
					//This is a leaf if it has no children
					totalLeaves = 1;
					leafSpaces = spaces;
				}
				var position = 1;
				//Iterate through children
				children.forEach(function (c) {
					//Add child to the result
					res.pushObject(c);
					if (annotate) {
						//Record the child's position among siblings
						c.set('position', position);
						if (position == 1) {
							//If the first sibling than indent by another space
							c.set('spaces', spaces + 1);
						} else {
							c.set('spaces', 0);
						}
					}
					//Recurse into this child, at the next level and passing the number of spaces
					var newC = getAllChildren(c, annotate, level + 1, c.get('spaces'));
					console.log(' + ' + c.get('id'));
					//The call will return the number of generations descending -- store this
					if (descendantGenerations < 1 + newC[1]) {
						descendantGenerations = 1 + newC[1];
					}
					//Add the children's children to the result'
					res = res.concat(newC[0]);
					if (level == 1) console.log(res.length);
					//Track the total number of children
					totalChildren += newC[0].length;
					totalLeaves += newC[2];
					leafSpaces += newC[3];
					position++;
				});
				//Record values obtained
				obj.set('totalLeaves', totalLeaves);
				obj.set('descendantGenerations', descendantGenerations);
				if (children.length > 0) {
					obj.set('descendantSpaces', leafSpaces - obj.get('spaces'));
				} else {
					obj.set('descendantSpaces', 0);
				}
				obj.set('leafSpaces', leafSpaces);
				if (level == 1) {
					console.log(res);
					return res;
				} else {
					return [res, descendantGenerations, totalLeaves, leafSpaces];
				}
			};
			var propagateResponse = function propagateResponse(m, a, response) {
				var mChildren = getAllChildren(m);
				var aChildren = getAllChildren(a);
				mChildren.forEach(function (mC) {
					aChildren.forEach(function (aC) {
						abgram[aC.get('id') + '&' + mC.get('id')] = response;
					});
				});
			};
			var mRecurse = function mRecurse(m) {
				//Find resistances
				var aRs = m.get('ineffectiveAntibacterials');
				aRs.forEach(function (aR) {
					propagateResponse(m, aR, 'Resistant');
				});
				//Find sensitivities
				var aSs = m.get('effectiveAntibacterials');
				aSs.forEach(function (aS) {
					propagateResponse(m, aS, 'Sensitive');
				});
				var mChildren = m.get('children');
				mChildren.forEach(function (mC) {
					mRecurse(mC);
				});
			};

			controller.set('antibacterials', getAllChildren(aRoot, 0));
			controller.set('microbacteria', getAllChildren(mRoot, 0));
			controller.set('antibacterialRoot', aRoot);
			mRecurse(mRoot);
			window.abgram = abgram;
		}
	});
});
define('anti-bac/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("anti-bac/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 5
                },
                "end": {
                  "line": 8,
                  "column": 5
                }
              },
              "moduleName": "anti-bac/templates/application.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("td");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element7 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element7, 'colspan');
              morphs[1] = dom.createAttrMorph(element7, 'rowspan');
              return morphs;
            },
            statements: [["attribute", "colspan", ["get", "antibacterialsByLevel.length", ["loc", [null, [7, 20], [7, 48]]]]], ["attribute", "rowspan", ["get", "microbacteriaByLevel.length", ["loc", [null, [7, 61], [7, 88]]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 10,
                    "column": 6
                  },
                  "end": {
                    "line": 12,
                    "column": 6
                  }
                },
                "moduleName": "anti-bac/templates/application.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("							");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("<td colspan={{microbacterium.spaces}} class={{if microbacterium.propagatedOpen \"\" \"hide\"}}></td>");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 12,
                    "column": 6
                  },
                  "end": {
                    "line": 14,
                    "column": 6
                  }
                },
                "moduleName": "anti-bac/templates/application.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("							");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("<td colspan={{microbacterium.spaces}} rowspan={{remainingGenerations microbacterium.level microbacteriaByLevel.length 1}} class={{if microbacterium.propagatedOpen \"\" \"hide\"}}></td>");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 5
                },
                "end": {
                  "line": 15,
                  "column": 5
                }
              },
              "moduleName": "anti-bac/templates/application.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["get", "microbacterium.hasVisibleChildren", ["loc", [null, [10, 12], [10, 45]]]]], [], 0, 1, ["loc", [null, [10, 6], [14, 13]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        var child2 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 16,
                  "column": 5
                },
                "end": {
                  "line": 18,
                  "column": 5
                }
              },
              "moduleName": "anti-bac/templates/application.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("td");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element6 = dom.childAt(fragment, [1]);
              var morphs = new Array(4);
              morphs[0] = dom.createAttrMorph(element6, 'colspan');
              morphs[1] = dom.createAttrMorph(element6, 'class');
              morphs[2] = dom.createElementMorph(element6);
              morphs[3] = dom.createMorphAt(element6, 0, 0);
              return morphs;
            },
            statements: [["attribute", "colspan", ["get", "microbacterium.colSpan", ["loc", [null, [17, 20], [17, 42]]]]], ["attribute", "class", ["subexpr", "if", [["get", "microbacterium.propagatedOpen", ["loc", [null, [17, 56], [17, 85]]]], "", "hide"], [], ["loc", [null, [17, 51], [17, 97]]]]], ["element", "action", ["toggleHierarchy", ["get", "microbacterium", ["loc", [null, [17, 125], [17, 139]]]]], [], ["loc", [null, [17, 98], [17, 141]]]], ["content", "microbacterium.id", ["loc", [null, [17, 142], [17, 163]]]]],
            locals: [],
            templates: []
          };
        })();
        var child3 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 18,
                  "column": 5
                },
                "end": {
                  "line": 20,
                  "column": 5
                }
              },
              "moduleName": "anti-bac/templates/application.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("td");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element5 = dom.childAt(fragment, [1]);
              var morphs = new Array(5);
              morphs[0] = dom.createAttrMorph(element5, 'colspan');
              morphs[1] = dom.createAttrMorph(element5, 'rowspan');
              morphs[2] = dom.createAttrMorph(element5, 'class');
              morphs[3] = dom.createElementMorph(element5);
              morphs[4] = dom.createMorphAt(element5, 0, 0);
              return morphs;
            },
            statements: [["attribute", "colspan", ["get", "microbacterium.colSpan", ["loc", [null, [19, 20], [19, 42]]]]], ["attribute", "rowspan", ["subexpr", "remainingGenerations", [["get", "microbacterium.level", ["loc", [null, [19, 76], [19, 96]]]], ["get", "microbacteriaByLevel.length", ["loc", [null, [19, 97], [19, 124]]]], 1], [], ["loc", [null, [19, 53], [19, 128]]]]], ["attribute", "class", ["subexpr", "if", [["get", "microbacterium.propagatedOpen", ["loc", [null, [19, 140], [19, 169]]]], "", "hide"], [], ["loc", [null, [19, 135], [19, 181]]]]], ["element", "action", ["toggleHierarchy", ["get", "microbacterium", ["loc", [null, [19, 209], [19, 223]]]]], [], ["loc", [null, [19, 182], [19, 225]]]], ["content", "microbacterium.id", ["loc", [null, [19, 226], [19, 247]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 21,
                "column": 4
              }
            },
            "moduleName": "anti-bac/templates/application.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["subexpr", "eq", [["get", "microbacterium.level", ["loc", [null, [6, 15], [6, 35]]]], 1], [], ["loc", [null, [6, 11], [6, 38]]]]], [], 0, null, ["loc", [null, [6, 5], [8, 12]]]], ["block", "if", [["subexpr", "gt", [["get", "microbacterium.spaces", ["loc", [null, [9, 15], [9, 36]]]], 0], [], ["loc", [null, [9, 11], [9, 39]]]]], [], 1, null, ["loc", [null, [9, 5], [15, 12]]]], ["block", "if", [["get", "microbacterium.hasVisibleChildren", ["loc", [null, [16, 11], [16, 44]]]]], [], 2, 3, ["loc", [null, [16, 5], [20, 12]]]]],
          locals: ["microbacterium"],
          templates: [child0, child1, child2, child3]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 23,
              "column": 2
            }
          },
          "moduleName": "anti-bac/templates/application.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "each", [["get", "microbacteriaLevel", ["loc", [null, [5, 12], [5, 30]]]]], [], 0, null, ["loc", [null, [5, 4], [21, 13]]]]],
        locals: ["microbacteriaLevel"],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 29,
                  "column": 5
                },
                "end": {
                  "line": 31,
                  "column": 5
                }
              },
              "moduleName": "anti-bac/templates/application.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("<td rowspan={{antibacterial.parent.colSpan}}>{{antibacterial.parent.id}}</td>");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 28,
                "column": 4
              },
              "end": {
                "line": 32,
                "column": 4
              }
            },
            "moduleName": "anti-bac/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "antibacterial.parent", ["loc", [null, [29, 11], [29, 31]]]]], [], 0, null, ["loc", [null, [29, 5], [31, 12]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 33,
                "column": 4
              },
              "end": {
                "line": 35,
                "column": 4
              }
            },
            "moduleName": "anti-bac/templates/application.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("					");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element2, 'rowspan');
            morphs[1] = dom.createElementMorph(element2);
            morphs[2] = dom.createMorphAt(element2, 0, 0);
            return morphs;
          },
          statements: [["attribute", "rowspan", ["get", "firstChildParent.colSpan", ["loc", [null, [34, 19], [34, 43]]]]], ["element", "action", ["toggleHierarchy", ["get", "firstChildParent", ["loc", [null, [34, 73], [34, 89]]]]], [], ["loc", [null, [34, 46], [34, 91]]]], ["content", "firstChildParent.id", ["loc", [null, [34, 92], [34, 115]]]]],
          locals: ["firstChildParent"],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 37,
                "column": 4
              },
              "end": {
                "line": 41,
                "column": 4
              }
            },
            "moduleName": "anti-bac/templates/application.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("					");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("td");
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n					");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element1, 'class');
            return morphs;
          },
          statements: [["attribute", "class", ["subexpr", "sensitivityClass", [["get", "microbacterium", ["loc", [null, [38, 34], [38, 48]]]], ["get", "antibacterial", ["loc", [null, [38, 49], [38, 62]]]], ["get", "microbacterium.display", ["loc", [null, [38, 63], [38, 85]]]]], [], ["loc", [null, [38, 15], [38, 87]]]]], ["attribute", "class", ["subexpr", "lookupResult", [["get", "microbacterium", ["loc", [null, [39, 32], [39, 46]]]], ["get", "antibacterial", ["loc", [null, [39, 47], [39, 60]]]]], [], ["loc", [null, [39, 17], [39, 62]]]]]],
          locals: ["microbacterium"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 2
            },
            "end": {
              "line": 43,
              "column": 2
            }
          },
          "moduleName": "anti-bac/templates/application.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("				");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("			");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("	\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var element4 = dom.childAt(element3, [4]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element3, 'class');
          morphs[1] = dom.createMorphAt(element3, 1, 1);
          morphs[2] = dom.createMorphAt(element3, 2, 2);
          morphs[3] = dom.createAttrMorph(element4, 'colspan');
          morphs[4] = dom.createElementMorph(element4);
          morphs[5] = dom.createMorphAt(element4, 0, 0);
          morphs[6] = dom.createMorphAt(element3, 6, 6);
          return morphs;
        },
        statements: [["attribute", "class", ["subexpr", "if", [["get", "antibacterial.display", ["loc", [null, [27, 18], [27, 39]]]], "", "hide"], [], ["loc", [null, [27, 13], [27, 51]]]]], ["block", "if", [["subexpr", "eq", [["get", "antibacterial.position", ["loc", [null, [28, 14], [28, 36]]]], 0], [], ["loc", [null, [28, 10], [28, 39]]]]], [], 0, null, ["loc", [null, [28, 4], [32, 11]]]], ["block", "each", [["get", "antibacterial.firstChildParents", ["loc", [null, [33, 12], [33, 43]]]]], [], 1, null, ["loc", [null, [33, 4], [35, 13]]]], ["attribute", "colspan", ["subexpr", "remainingGenerations", [["get", "antibacterial.level", ["loc", [null, [36, 39], [36, 58]]]], ["get", "antibacterialsByLevel.length", ["loc", [null, [36, 59], [36, 87]]]], 1], [], ["loc", [null, [36, 16], [36, 91]]]]], ["element", "action", ["toggleHierarchy", ["get", "antibacterial", ["loc", [null, [36, 119], [36, 132]]]]], [], ["loc", [null, [36, 92], [36, 134]]]], ["content", "antibacterial.id", ["loc", [null, [36, 135], [36, 155]]]], ["block", "each", [["get", "microbacteria", ["loc", [null, [37, 12], [37, 25]]]]], [], 2, null, ["loc", [null, [37, 4], [41, 13]]]]],
        locals: ["antibacterial"],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 47,
            "column": 0
          }
        },
        "moduleName": "anti-bac/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "id", "main-table");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element8 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element8, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element8, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "each", [["get", "microbacteriaByLevel", ["loc", [null, [3, 10], [3, 30]]]]], [], 0, null, ["loc", [null, [3, 2], [23, 11]]]], ["block", "each", [["get", "antibacterials", ["loc", [null, [26, 10], [26, 24]]]]], [], 1, null, ["loc", [null, [26, 2], [43, 11]]]], ["content", "outlet", ["loc", [null, [46, 0], [46, 10]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("anti-bac/templates/components/children-row", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 3
                },
                "end": {
                  "line": 6,
                  "column": 3
                }
              },
              "moduleName": "anti-bac/templates/components/children-row.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("				");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("td");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createAttrMorph(element0, 'rowspan');
              morphs[1] = dom.createMorphAt(element0, 0, 0);
              return morphs;
            },
            statements: [["attribute", "rowspan", ["get", "rowObj.colspan", ["loc", [null, [5, 18], [5, 32]]]]], ["content", "rowObj.id", ["loc", [null, [5, 35], [5, 48]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 1
              },
              "end": {
                "line": 10,
                "column": 1
              }
            },
            "moduleName": "anti-bac/templates/components/children-row.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var element2 = dom.childAt(element1, [3]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(element1, 1, 1);
            morphs[1] = dom.createAttrMorph(element2, 'rowspan');
            morphs[2] = dom.createMorphAt(element2, 0, 0);
            morphs[3] = dom.createMorphAt(element1, 5, 5);
            return morphs;
          },
          statements: [["block", "if", [["subexpr", "eq", [["get", "rowChild.position", ["loc", [null, [4, 13], [4, 30]]]], 0], [], ["loc", [null, [4, 9], [4, 33]]]]], [], 0, null, ["loc", [null, [4, 3], [6, 10]]]], ["attribute", "rowspan", ["subexpr", "remainingGenerations", [["get", "rowChild.level", ["loc", [null, [7, 38], [7, 52]]]], ["get", "rowGenerations", ["loc", [null, [7, 53], [7, 67]]]]], [], ["loc", [null, [7, 15], [7, 69]]]]], ["content", "rowChild.id", ["loc", [null, [7, 70], [7, 85]]]], ["inline", "result-row", [], ["rowObj", ["subexpr", "@mut", [["get", "rowChild", ["loc", [null, [8, 23], [8, 31]]]]], [], []], "colObjs", ["subexpr", "@mut", [["get", "colObjs", ["loc", [null, [8, 40], [8, 47]]]]], [], []]], ["loc", [null, [8, 3], [8, 49]]]]],
          locals: ["rowChild"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "anti-bac/templates/components/children-row.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "rowObj.children", ["loc", [null, [2, 9], [2, 24]]]]], [], 0, null, ["loc", [null, [2, 1], [10, 10]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 7
          }
        },
        "moduleName": "anti-bac/templates/components/children-row.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "gt", [["get", "rowObj.children.length", ["loc", [null, [1, 10], [1, 32]]]], 0], [], ["loc", [null, [1, 6], [1, 35]]]]], [], 0, null, ["loc", [null, [1, 0], [11, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("anti-bac/templates/components/hierarchy-row", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 5
          }
        },
        "moduleName": "anti-bac/templates/components/hierarchy-row.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("tr");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("td");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element1, 'colspan');
        morphs[1] = dom.createMorphAt(element1, 0, 0);
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["attribute", "colspan", ["subexpr", "remainingGenerations", [["get", "rowObj.level", ["loc", [null, [2, 36], [2, 48]]]], ["get", "rowGenerations", ["loc", [null, [2, 49], [2, 63]]]]], [], ["loc", [null, [2, 13], [2, 65]]]]], ["content", "rowObj.id", ["loc", [null, [2, 66], [2, 79]]]], ["inline", "result-row", [], ["rowObj", ["subexpr", "@mut", [["get", "rowObj", ["loc", [null, [3, 21], [3, 27]]]]], [], []], "colObjs", ["subexpr", "@mut", [["get", "colObjs", ["loc", [null, [3, 36], [3, 43]]]]], [], []]], ["loc", [null, [3, 1], [3, 45]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("anti-bac/templates/components/result-row", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "anti-bac/templates/components/result-row.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["subexpr", "sensitivityClass", [["get", "colObj", ["loc", [null, [2, 30], [2, 36]]]], ["get", "rowObj", ["loc", [null, [2, 37], [2, 43]]]], ["get", "colObj.display", ["loc", [null, [2, 44], [2, 58]]]]], [], ["loc", [null, [2, 11], [2, 60]]]]]],
        locals: ["colObj"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 9
          }
        },
        "moduleName": "anti-bac/templates/components/result-row.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "colObjs", ["loc", [null, [1, 8], [1, 15]]]]], [], 0, null, ["loc", [null, [1, 0], [4, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('anti-bac/config/environment', ['ember'], function(Ember) {
  var prefix = 'anti-bac';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("anti-bac/app")["default"].create({"name":"anti-bac","version":"0.0.0+960279f3"});
}

/* jshint ignore:end */
//# sourceMappingURL=anti-bac.map