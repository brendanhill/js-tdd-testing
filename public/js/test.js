/*! codecamp_2012_project - v0.1.0 - 2012-09-27
* https://github.com/rob-odil/codecamp_2012_project
* Copyright (c) 2012 Rob Odil; Licensed MIT */

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  data.buffer.push("<h2>CodeCamp 2012 Application</h2>\n\n<div id=\"postlist\">\n	");
  stack1 = depth0;
  stack2 = "outlet";
  stack3 = {};
  stack4 = "true";
  stack3['escaped'] = stack4;
  stack4 = helpers._triageMustache || depth0._triageMustache;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "_triageMustache", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "\n</div>");
  return buffer;
});
Ember.TEMPLATES["details"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  data.buffer.push("<hr />\n");
  stack1 = depth0;
  stack2 = "content.title";
  stack3 = {};
  stack4 = "true";
  stack3['escaped'] = stack4;
  stack4 = helpers._triageMustache || depth0._triageMustache;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "_triageMustache", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + " : <br />\n<p>\n");
  stack1 = depth0;
  stack2 = "content.details";
  stack3 = {};
  stack4 = "true";
  stack3['escaped'] = stack4;
  stack4 = helpers._triageMustache || depth0._triageMustache;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "_triageMustache", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "\n</p>");
  return buffer;
});
Ember.TEMPLATES["post"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, stack5, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"post_container\">\n	<div class=\"post\">\n		<span class=\"post_title\" ");
  stack1 = depth0;
  stack2 = "post";
  stack3 = depth0;
  stack4 = "viewPostDetails";
  stack5 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack5 === functionType) { stack1 = stack5.call(depth0, stack4, stack2, tmp1); }
  else if(stack5=== undef) { stack1 = helperMissing.call(depth0, "action", stack4, stack2, tmp1); }
  else { stack1 = stack5; }
  data.buffer.push(escapeExpression(stack1) + ">\n			");
  stack1 = depth0;
  stack2 = "post.title";
  stack3 = {};
  stack4 = "true";
  stack3['escaped'] = stack4;
  stack4 = helpers._triageMustache || depth0._triageMustache;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "_triageMustache", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "\n		</span><br />\n		");
  stack1 = depth0;
  stack2 = "post.summary";
  stack3 = {};
  stack4 = "true";
  stack3['escaped'] = stack4;
  stack4 = helpers._triageMustache || depth0._triageMustache;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "_triageMustache", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1));
  stack1 = depth0;
  stack2 = "post.id";
  stack3 = {};
  stack4 = "true";
  stack3['escaped'] = stack4;
  stack4 = helpers._triageMustache || depth0._triageMustache;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "_triageMustache", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "<br />\n		<span>&nbsp;&nbsp;&nbsp;Author: </span><span ");
  stack1 = {};
  stack2 = "mypost :author";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr || depth0.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, tmp1); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "bindAttr", tmp1); }
  else { stack1 = stack2; }
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "post.author";
  stack3 = {};
  stack4 = "true";
  stack3['escaped'] = stack4;
  stack4 = helpers._triageMustache || depth0._triageMustache;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "_triageMustache", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "</span>\n	</div>\n\n	<div class=\"details_container\">\n		<span ");
  stack1 = depth0;
  stack2 = "displayDetails";
  stack3 = {};
  stack4 = "view";
  stack3['target'] = stack4;
  stack4 = helpers.action || depth0.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "action", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + ">Details:</span>\n		<div class=\"details_contents\">\n			");
  stack1 = depth0;
  stack2 = "post.details";
  stack3 = {};
  stack4 = "true";
  stack3['escaped'] = stack4;
  stack4 = helpers._triageMustache || depth0._triageMustache;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack4 === functionType) { stack1 = stack4.call(depth0, stack2, tmp1); }
  else if(stack4=== undef) { stack1 = helperMissing.call(depth0, "_triageMustache", stack2, tmp1); }
  else { stack1 = stack4; }
  data.buffer.push(escapeExpression(stack1) + "\n		</div>\n	</div>\n</div>");
  return buffer;
});
Ember.TEMPLATES["posts"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var stack1, stack2, stack3, stack4, stack5, stack6, stack7, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n    ");
  stack1 = depth0;
  stack2 = "App.PostView";
  stack3 = helpers.view || depth0.view;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "view", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;}

  stack1 = depth0;
  stack2 = "content";
  stack3 = depth0;
  stack4 = "in";
  stack5 = depth0;
  stack6 = "post";
  stack7 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack5);
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack7.call(depth0, stack6, stack4, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
});
var App = null;
/*global App, Ember */
(function () {
    App = Ember.Application.create({
    	rootElement: '#app',

    	loggedinas: 'rodil'
    });
})();

/*global App, Ember */

(function () {
    App.ApplicationController = Ember.Controller.extend({});
}());
/*global App, Ember */
(function () {
    App.DetailsController = Ember.ObjectController.extend({
    	content: Ember.Object.create(),

    	fetch: function (id) {
    		var self = this;
    		var cacheObj = this.get('controllers').get('postsController').getPostById(id);
    		if (cacheObj) {
    			self.set('content', cacheObj);
    		} else {
	            $.get('/post/' + id).then(function (data) {
	                self.set('content', Ember.Object.create(data));
	            });
        	}
        }
    });
}());


/*global App, Ember */
(function () {
    App.PostsController = Ember.ArrayController.extend({
        content: [],

        init: function () {
            this._super();
            //this.fetch();
        },

        fetch: function () {
            var self = this;
            $.get('/posts/').then(function (data) {
                $.each(data, function(idx, post) {
                    self.get('content').pushObject(App.PostModel.create(post));
                });
            });
        },

        getPostById: function (id) {
            return this.get('content').filterProperty('id', id).pop();
        }
    });
}());


/*global App, Ember */
(function () {
    App.PostModel = Ember.Object.extend({
    	id: null,
        title: null,
        summary: null,
        details: null,
        postdate: null,
        author: null,

        wasRead: false
    });
})();

/*global MONKEY, Ember, Handlebars */

    var BaseView = Ember.View.extend({
        templates: Handlebars.templates
    });

/*global App, Ember */
(function () {
    App.ApplicationView = BaseView.extend({
        templateName: 'application'
    });
}());
/*global App, Ember */
(function () {
    App.DetailsView = BaseView.extend({
        templateName: 'details'
    });
}());
/*global App, Ember */
(function () {
    App.PostView = BaseView.extend({
        templateName: 'post',
        tagName: 'li',

        displayDetails: function () {
        	console.log(this);
        }
    });
}());
/*global App, Ember */
(function () {
    App.PostsView = BaseView.extend({
        templateName: 'posts',
        tagName: 'ul'
    });
}());
/*global App, Ember */
(function () {
	App.Router = Ember.Router.extend({

        enableLogging: true,
        location: 'hash',

    	root: Ember.Route.extend({


    		index: Ember.Route.extend({
    			route: '/',
    			redirectsTo: 'posts'
    		}),

    		posts: Ember.Route.extend({
    			route: '/posts',

    			connectOutlets: function (router) {   
    				router.get('applicationController').connectOutlet({
                        name: 'posts',
                        context: router.get('postsController').get('content')
                    });
    			},

                post: Ember.Route.extend({
                    route: '/:post_id',

                    connectOutlets: function (router, event) {
                        // router.get('applicationController').connectOutlet({
                        //     name: 'details',
                        //     outletName: 'details',
                        //     context: router.get('detailsController').get('content')
                        // });
                        router.get('detailsController').fetch(event.post_id);
                    }


                })

    		}),

            // handle events
            viewPostDetails: function (router, event) {
                router.transitionTo('post', {post_id: event.context.id});
            }
    	})
	})
})();
/**
 * QUnit v1.10.0 - A JavaScript Unit Testing Framework
 *
 * http://qunitjs.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function( window ) {

var QUnit,
    config,
    onErrorFnPrev,
    testId = 0,
    fileName = (sourceFromStacktrace( 0 ) || "" ).replace(/(:\d+)+\)?/, "").replace(/.+\//, ""),
    toString = Object.prototype.toString,
    hasOwn = Object.prototype.hasOwnProperty,
    // Keep a local reference to Date (GH-283)
    Date = window.Date,
    defined = {
    setTimeout: typeof window.setTimeout !== "undefined",
    sessionStorage: (function() {
        var x = "qunit-test-string";
        try {
            sessionStorage.setItem( x, x );
            sessionStorage.removeItem( x );
            return true;
        } catch( e ) {
            return false;
        }
    }())
};

function Test( settings ) {
    extend( this, settings );
    this.assertions = [];
    this.testNumber = ++Test.count;
}

Test.count = 0;

Test.prototype = {
    init: function() {
        var a, b, li,
        tests = id( "qunit-tests" );

        if ( tests ) {
            b = document.createElement( "strong" );
            b.innerHTML = this.name;

            // `a` initialized at top of scope
            a = document.createElement( "a" );
            a.innerHTML = "Rerun";
            a.href = QUnit.url({ testNumber: this.testNumber });

            li = document.createElement( "li" );
            li.appendChild( b );
            li.appendChild( a );
            li.className = "running";
            li.id = this.id = "qunit-test-output" + testId++;

            tests.appendChild( li );
        }
    },
    setup: function() {
        if ( this.module !== config.previousModule ) {
            if ( config.previousModule ) {
                runLoggingCallbacks( "moduleDone", QUnit, {
                    name: config.previousModule,
                    failed: config.moduleStats.bad,
                    passed: config.moduleStats.all - config.moduleStats.bad,
                    total: config.moduleStats.all
                });
            }
            config.previousModule = this.module;
            config.moduleStats = { all: 0, bad: 0 };
            runLoggingCallbacks( "moduleStart", QUnit, {
                name: this.module
            });
        } else if ( config.autorun ) {
            runLoggingCallbacks( "moduleStart", QUnit, {
                name: this.module
            });
        }

        config.current = this;

        this.testEnvironment = extend({
            setup: function() {},
            teardown: function() {}
        }, this.moduleTestEnvironment );

        runLoggingCallbacks( "testStart", QUnit, {
            name: this.testName,
            module: this.module
        });

        // allow utility functions to access the current test environment
        // TODO why??
        QUnit.current_testEnvironment = this.testEnvironment;

        if ( !config.pollution ) {
            saveGlobal();
        }
        if ( config.notrycatch ) {
            this.testEnvironment.setup.call( this.testEnvironment );
            return;
        }
        try {
            this.testEnvironment.setup.call( this.testEnvironment );
        } catch( e ) {
            QUnit.pushFailure( "Setup failed on " + this.testName + ": " + e.message, extractStacktrace( e, 1 ) );
        }
    },
    run: function() {
        config.current = this;

        var running = id( "qunit-testresult" );

        if ( running ) {
            running.innerHTML = "Running: <br/>" + this.name;
        }

        if ( this.async ) {
            QUnit.stop();
        }

        if ( config.notrycatch ) {
            this.callback.call( this.testEnvironment, QUnit.assert );
            return;
        }

        try {
            this.callback.call( this.testEnvironment, QUnit.assert );
        } catch( e ) {
            QUnit.pushFailure( "Died on test #" + (this.assertions.length + 1) + " " + this.stack + ": " + e.message, extractStacktrace( e, 0 ) );
            // else next test will carry the responsibility
            saveGlobal();

            // Restart the tests if they're blocking
            if ( config.blocking ) {
                QUnit.start();
            }
        }
    },
    teardown: function() {
        config.current = this;
        if ( config.notrycatch ) {
            this.testEnvironment.teardown.call( this.testEnvironment );
            return;
        } else {
            try {
                this.testEnvironment.teardown.call( this.testEnvironment );
            } catch( e ) {
                QUnit.pushFailure( "Teardown failed on " + this.testName + ": " + e.message, extractStacktrace( e, 1 ) );
            }
        }
        checkPollution();
    },
    finish: function() {
        config.current = this;
        if ( config.requireExpects && this.expected == null ) {
            QUnit.pushFailure( "Expected number of assertions to be defined, but expect() was not called.", this.stack );
        } else if ( this.expected != null && this.expected != this.assertions.length ) {
            QUnit.pushFailure( "Expected " + this.expected + " assertions, but " + this.assertions.length + " were run", this.stack );
        } else if ( this.expected == null && !this.assertions.length ) {
            QUnit.pushFailure( "Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.", this.stack );
        }

        var assertion, a, b, i, li, ol,
            test = this,
            good = 0,
            bad = 0,
            tests = id( "qunit-tests" );

        config.stats.all += this.assertions.length;
        config.moduleStats.all += this.assertions.length;

        if ( tests ) {
            ol = document.createElement( "ol" );

            for ( i = 0; i < this.assertions.length; i++ ) {
                assertion = this.assertions[i];

                li = document.createElement( "li" );
                li.className = assertion.result ? "pass" : "fail";
                li.innerHTML = assertion.message || ( assertion.result ? "okay" : "failed" );
                ol.appendChild( li );

                if ( assertion.result ) {
                    good++;
                } else {
                    bad++;
                    config.stats.bad++;
                    config.moduleStats.bad++;
                }
            }

            // store result when possible
            if ( QUnit.config.reorder && defined.sessionStorage ) {
                if ( bad ) {
                    sessionStorage.setItem( "qunit-test-" + this.module + "-" + this.testName, bad );
                } else {
                    sessionStorage.removeItem( "qunit-test-" + this.module + "-" + this.testName );
                }
            }

            if ( bad === 0 ) {
                ol.style.display = "none";
            }

            // `b` initialized at top of scope
            b = document.createElement( "strong" );
            b.innerHTML = this.name + " <b class='counts'>(<b class='failed'>" + bad + "</b>, <b class='passed'>" + good + "</b>, " + this.assertions.length + ")</b>";

            addEvent(b, "click", function() {
                var next = b.nextSibling.nextSibling,
                    display = next.style.display;
                next.style.display = display === "none" ? "block" : "none";
            });

            addEvent(b, "dblclick", function( e ) {
                var target = e && e.target ? e.target : window.event.srcElement;
                if ( target.nodeName.toLowerCase() == "span" || target.nodeName.toLowerCase() == "b" ) {
                    target = target.parentNode;
                }
                if ( window.location && target.nodeName.toLowerCase() === "strong" ) {
                    window.location = QUnit.url({ testNumber: test.testNumber });
                }
            });

            // `li` initialized at top of scope
            li = id( this.id );
            li.className = bad ? "fail" : "pass";
            li.removeChild( li.firstChild );
            a = li.firstChild;
            li.appendChild( b );
            li.appendChild ( a );
            li.appendChild( ol );

        } else {
            for ( i = 0; i < this.assertions.length; i++ ) {
                if ( !this.assertions[i].result ) {
                    bad++;
                    config.stats.bad++;
                    config.moduleStats.bad++;
                }
            }
        }

        runLoggingCallbacks( "testDone", QUnit, {
            name: this.testName,
            module: this.module,
            failed: bad,
            passed: this.assertions.length - bad,
            total: this.assertions.length
        });

        QUnit.reset();

        config.current = undefined;
    },

    queue: function() {
        var bad,
            test = this;

        synchronize(function() {
            test.init();
        });
        function run() {
            // each of these can by async
            synchronize(function() {
                test.setup();
            });
            synchronize(function() {
                test.run();
            });
            synchronize(function() {
                test.teardown();
            });
            synchronize(function() {
                test.finish();
            });
        }

        // `bad` initialized at top of scope
        // defer when previous test run passed, if storage is available
        bad = QUnit.config.reorder && defined.sessionStorage &&
                        +sessionStorage.getItem( "qunit-test-" + this.module + "-" + this.testName );

        if ( bad ) {
            run();
        } else {
            synchronize( run, true );
        }
    }
};

// Root QUnit object.
// `QUnit` initialized at top of scope
QUnit = {

    // call on start of module test to prepend name to all tests
    module: function( name, testEnvironment ) {
        config.currentModule = name;
        config.currentModuleTestEnvironment = testEnvironment;
        config.modules[name] = true;
    },

    asyncTest: function( testName, expected, callback ) {
        if ( arguments.length === 2 ) {
            callback = expected;
            expected = null;
        }

        QUnit.test( testName, expected, callback, true );
    },

    test: function( testName, expected, callback, async ) {
        var test,
            name = "<span class='test-name'>" + escapeInnerText( testName ) + "</span>";

        if ( arguments.length === 2 ) {
            callback = expected;
            expected = null;
        }

        if ( config.currentModule ) {
            name = "<span class='module-name'>" + config.currentModule + "</span>: " + name;
        }

        test = new Test({
            name: name,
            testName: testName,
            expected: expected,
            async: async,
            callback: callback,
            module: config.currentModule,
            moduleTestEnvironment: config.currentModuleTestEnvironment,
            stack: sourceFromStacktrace( 2 )
        });

        if ( !validTest( test ) ) {
            return;
        }

        test.queue();
    },

    // Specify the number of expected assertions to gurantee that failed test (no assertions are run at all) don't slip through.
    expect: function( asserts ) {
        if (arguments.length === 1) {
            config.current.expected = asserts;
        } else {
            return config.current.expected;
        }
    },

    start: function( count ) {
        config.semaphore -= count || 1;
        // don't start until equal number of stop-calls
        if ( config.semaphore > 0 ) {
            return;
        }
        // ignore if start is called more often then stop
        if ( config.semaphore < 0 ) {
            config.semaphore = 0;
        }
        // A slight delay, to avoid any current callbacks
        if ( defined.setTimeout ) {
            window.setTimeout(function() {
                if ( config.semaphore > 0 ) {
                    return;
                }
                if ( config.timeout ) {
                    clearTimeout( config.timeout );
                }

                config.blocking = false;
                process( true );
            }, 13);
        } else {
            config.blocking = false;
            process( true );
        }
    },

    stop: function( count ) {
        config.semaphore += count || 1;
        config.blocking = true;

        if ( config.testTimeout && defined.setTimeout ) {
            clearTimeout( config.timeout );
            config.timeout = window.setTimeout(function() {
                QUnit.ok( false, "Test timed out" );
                config.semaphore = 1;
                QUnit.start();
            }, config.testTimeout );
        }
    }
};

// Asssert helpers
// All of these must call either QUnit.push() or manually do:
// - runLoggingCallbacks( "log", .. );
// - config.current.assertions.push({ .. });
QUnit.assert = {
    /**
     * Asserts rough true-ish result.
     * @name ok
     * @function
     * @example ok( "asdfasdf".length > 5, "There must be at least 5 chars" );
     */
    ok: function( result, msg ) {
        if ( !config.current ) {
            throw new Error( "ok() assertion outside test context, was " + sourceFromStacktrace(2) );
        }
        result = !!result;

        var source,
            details = {
                module: config.current.module,
                name: config.current.testName,
                result: result,
                message: msg
            };

        msg = escapeInnerText( msg || (result ? "okay" : "failed" ) );
        msg = "<span class='test-message'>" + msg + "</span>";

        if ( !result ) {
            source = sourceFromStacktrace( 2 );
            if ( source ) {
                details.source = source;
                msg += "<table><tr class='test-source'><th>Source: </th><td><pre>" + escapeInnerText( source ) + "</pre></td></tr></table>";
            }
        }
        runLoggingCallbacks( "log", QUnit, details );
        config.current.assertions.push({
            result: result,
            message: msg
        });
    },

    /**
     * Assert that the first two arguments are equal, with an optional message.
     * Prints out both actual and expected values.
     * @name equal
     * @function
     * @example equal( format( "Received {0} bytes.", 2), "Received 2 bytes.", "format() replaces {0} with next argument" );
     */
    equal: function( actual, expected, message ) {
        QUnit.push( expected == actual, actual, expected, message );
    },

    /**
     * @name notEqual
     * @function
     */
    notEqual: function( actual, expected, message ) {
        QUnit.push( expected != actual, actual, expected, message );
    },

    /**
     * @name deepEqual
     * @function
     */
    deepEqual: function( actual, expected, message ) {
        QUnit.push( QUnit.equiv(actual, expected), actual, expected, message );
    },

    /**
     * @name notDeepEqual
     * @function
     */
    notDeepEqual: function( actual, expected, message ) {
        QUnit.push( !QUnit.equiv(actual, expected), actual, expected, message );
    },

    /**
     * @name strictEqual
     * @function
     */
    strictEqual: function( actual, expected, message ) {
        QUnit.push( expected === actual, actual, expected, message );
    },

    /**
     * @name notStrictEqual
     * @function
     */
    notStrictEqual: function( actual, expected, message ) {
        QUnit.push( expected !== actual, actual, expected, message );
    },

    throws: function( block, expected, message ) {
        var actual,
            ok = false;

        // 'expected' is optional
        if ( typeof expected === "string" ) {
            message = expected;
            expected = null;
        }

        config.current.ignoreGlobalErrors = true;
        try {
            block.call( config.current.testEnvironment );
        } catch (e) {
            actual = e;
        }
        config.current.ignoreGlobalErrors = false;

        if ( actual ) {
            // we don't want to validate thrown error
            if ( !expected ) {
                ok = true;
            // expected is a regexp
            } else if ( QUnit.objectType( expected ) === "regexp" ) {
                ok = expected.test( actual );
            // expected is a constructor
            } else if ( actual instanceof expected ) {
                ok = true;
            // expected is a validation function which returns true is validation passed
            } else if ( expected.call( {}, actual ) === true ) {
                ok = true;
            }

            QUnit.push( ok, actual, null, message );
        } else {
            QUnit.pushFailure( message, null, 'No exception was thrown.' );
        }
    }
};

/**
 * @deprecate since 1.8.0
 * Kept assertion helpers in root for backwards compatibility
 */
extend( QUnit, QUnit.assert );

/**
 * @deprecated since 1.9.0
 * Kept global "raises()" for backwards compatibility
 */
QUnit.raises = QUnit.assert.throws;

/**
 * @deprecated since 1.0.0, replaced with error pushes since 1.3.0
 * Kept to avoid TypeErrors for undefined methods.
 */
QUnit.equals = function() {
    QUnit.push( false, false, false, "QUnit.equals has been deprecated since 2009 (e88049a0), use QUnit.equal instead" );
};
QUnit.same = function() {
    QUnit.push( false, false, false, "QUnit.same has been deprecated since 2009 (e88049a0), use QUnit.deepEqual instead" );
};

// We want access to the constructor's prototype
(function() {
    function F() {}
    F.prototype = QUnit;
    QUnit = new F();
    // Make F QUnit's constructor so that we can add to the prototype later
    QUnit.constructor = F;
}());

/**
 * Config object: Maintain internal state
 * Later exposed as QUnit.config
 * `config` initialized at top of scope
 */
config = {
    // The queue of tests to run
    queue: [],

    // block until document ready
    blocking: true,

    // when enabled, show only failing tests
    // gets persisted through sessionStorage and can be changed in UI via checkbox
    hidepassed: false,

    // by default, run previously failed tests first
    // very useful in combination with "Hide passed tests" checked
    reorder: true,

    // by default, modify document.title when suite is done
    altertitle: true,

    // when enabled, all tests must call expect()
    requireExpects: false,

    // add checkboxes that are persisted in the query-string
    // when enabled, the id is set to `true` as a `QUnit.config` property
    urlConfig: [
        {
            id: "noglobals",
            label: "Check for Globals",
            tooltip: "Enabling this will test if any test introduces new properties on the `window` object. Stored as query-strings."
        },
        {
            id: "notrycatch",
            label: "No try-catch",
            tooltip: "Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."
        }
    ],

    // Set of all modules.
    modules: {},

    // logging callback queues
    begin: [],
    done: [],
    log: [],
    testStart: [],
    testDone: [],
    moduleStart: [],
    moduleDone: []
};

// Initialize more QUnit.config and QUnit.urlParams
(function() {
    var i,
        location = window.location || { search: "", protocol: "file:" },
        params = location.search.slice( 1 ).split( "&" ),
        length = params.length,
        urlParams = {},
        current;

    if ( params[ 0 ] ) {
        for ( i = 0; i < length; i++ ) {
            current = params[ i ].split( "=" );
            current[ 0 ] = decodeURIComponent( current[ 0 ] );
            // allow just a key to turn on a flag, e.g., test.html?noglobals
            current[ 1 ] = current[ 1 ] ? decodeURIComponent( current[ 1 ] ) : true;
            urlParams[ current[ 0 ] ] = current[ 1 ];
        }
    }

    QUnit.urlParams = urlParams;

    // String search anywhere in moduleName+testName
    config.filter = urlParams.filter;

    // Exact match of the module name
    config.module = urlParams.module;

    config.testNumber = parseInt( urlParams.testNumber, 10 ) || null;

    // Figure out if we're running the tests from a server or not
    QUnit.isLocal = location.protocol === "file:";
}());

// Export global variables, unless an 'exports' object exists,
// in that case we assume we're in CommonJS (dealt with on the bottom of the script)
if ( typeof exports === "undefined" ) {
    extend( window, QUnit );

    // Expose QUnit object
    window.QUnit = QUnit;
}

// Extend QUnit object,
// these after set here because they should not be exposed as global functions
extend( QUnit, {
    config: config,

    // Initialize the configuration options
    init: function() {
        extend( config, {
            stats: { all: 0, bad: 0 },
            moduleStats: { all: 0, bad: 0 },
            started: +new Date(),
            updateRate: 1000,
            blocking: false,
            autostart: true,
            autorun: false,
            filter: "",
            queue: [],
            semaphore: 0
        });

        var tests, banner, result,
            qunit = id( "qunit" );

        if ( qunit ) {
            qunit.innerHTML =
                "<h1 id='qunit-header'>" + escapeInnerText( document.title ) + "</h1>" +
                "<h2 id='qunit-banner'></h2>" +
                "<div id='qunit-testrunner-toolbar'></div>" +
                "<h2 id='qunit-userAgent'></h2>" +
                "<ol id='qunit-tests'></ol>";
        }

        tests = id( "qunit-tests" );
        banner = id( "qunit-banner" );
        result = id( "qunit-testresult" );

        if ( tests ) {
            tests.innerHTML = "";
        }

        if ( banner ) {
            banner.className = "";
        }

        if ( result ) {
            result.parentNode.removeChild( result );
        }

        if ( tests ) {
            result = document.createElement( "p" );
            result.id = "qunit-testresult";
            result.className = "result";
            tests.parentNode.insertBefore( result, tests );
            result.innerHTML = "Running...<br/>&nbsp;";
        }
    },

    // Resets the test setup. Useful for tests that modify the DOM.
    reset: function() {
        var fixture = id( "qunit-fixture" );
        if ( fixture ) {
            fixture.innerHTML = config.fixture;
        }
    },

    // Trigger an event on an element.
    // @example triggerEvent( document.body, "click" );
    triggerEvent: function( elem, type, event ) {
        if ( document.createEvent ) {
            event = document.createEvent( "MouseEvents" );
            event.initMouseEvent(type, true, true, elem.ownerDocument.defaultView,
                0, 0, 0, 0, 0, false, false, false, false, 0, null);

            elem.dispatchEvent( event );
        } else if ( elem.fireEvent ) {
            elem.fireEvent( "on" + type );
        }
    },

    // Safe object type checking
    is: function( type, obj ) {
        return QUnit.objectType( obj ) == type;
    },

    objectType: function( obj ) {
        if ( typeof obj === "undefined" ) {
                return "undefined";
        // consider: typeof null === object
        }
        if ( obj === null ) {
                return "null";
        }

        var type = toString.call( obj ).match(/^\[object\s(.*)\]$/)[1] || "";

        switch ( type ) {
            case "Number":
                if ( isNaN(obj) ) {
                    return "nan";
                }
                return "number";
            case "String":
            case "Boolean":
            case "Array":
            case "Date":
            case "RegExp":
            case "Function":
                return type.toLowerCase();
        }
        if ( typeof obj === "object" ) {
            return "object";
        }
        return undefined;
    },

    push: function( result, actual, expected, message ) {
        if ( !config.current ) {
            throw new Error( "assertion outside test context, was " + sourceFromStacktrace() );
        }

        var output, source,
            details = {
                module: config.current.module,
                name: config.current.testName,
                result: result,
                message: message,
                actual: actual,
                expected: expected
            };

        message = escapeInnerText( message ) || ( result ? "okay" : "failed" );
        message = "<span class='test-message'>" + message + "</span>";
        output = message;

        if ( !result ) {
            expected = escapeInnerText( QUnit.jsDump.parse(expected) );
            actual = escapeInnerText( QUnit.jsDump.parse(actual) );
            output += "<table><tr class='test-expected'><th>Expected: </th><td><pre>" + expected + "</pre></td></tr>";

            if ( actual != expected ) {
                output += "<tr class='test-actual'><th>Result: </th><td><pre>" + actual + "</pre></td></tr>";
                output += "<tr class='test-diff'><th>Diff: </th><td><pre>" + QUnit.diff( expected, actual ) + "</pre></td></tr>";
            }

            source = sourceFromStacktrace();

            if ( source ) {
                details.source = source;
                output += "<tr class='test-source'><th>Source: </th><td><pre>" + escapeInnerText( source ) + "</pre></td></tr>";
            }

            output += "</table>";
        }

        runLoggingCallbacks( "log", QUnit, details );

        config.current.assertions.push({
            result: !!result,
            message: output
        });
    },

    pushFailure: function( message, source, actual ) {
        if ( !config.current ) {
            throw new Error( "pushFailure() assertion outside test context, was " + sourceFromStacktrace(2) );
        }

        var output,
            details = {
                module: config.current.module,
                name: config.current.testName,
                result: false,
                message: message
            };

        message = escapeInnerText( message ) || "error";
        message = "<span class='test-message'>" + message + "</span>";
        output = message;

        output += "<table>";

        if ( actual ) {
            output += "<tr class='test-actual'><th>Result: </th><td><pre>" + escapeInnerText( actual ) + "</pre></td></tr>";
        }

        if ( source ) {
            details.source = source;
            output += "<tr class='test-source'><th>Source: </th><td><pre>" + escapeInnerText( source ) + "</pre></td></tr>";
        }

        output += "</table>";

        runLoggingCallbacks( "log", QUnit, details );

        config.current.assertions.push({
            result: false,
            message: output
        });
    },

    url: function( params ) {
        params = extend( extend( {}, QUnit.urlParams ), params );
        var key,
            querystring = "?";

        for ( key in params ) {
            if ( !hasOwn.call( params, key ) ) {
                continue;
            }
            querystring += encodeURIComponent( key ) + "=" +
                encodeURIComponent( params[ key ] ) + "&";
        }
        return window.location.pathname + querystring.slice( 0, -1 );
    },

    extend: extend,
    id: id,
    addEvent: addEvent
    // load, equiv, jsDump, diff: Attached later
});

/**
 * @deprecated: Created for backwards compatibility with test runner that set the hook function
 * into QUnit.{hook}, instead of invoking it and passing the hook function.
 * QUnit.constructor is set to the empty F() above so that we can add to it's prototype here.
 * Doing this allows us to tell if the following methods have been overwritten on the actual
 * QUnit object.
 */
extend( QUnit.constructor.prototype, {

    // Logging callbacks; all receive a single argument with the listed properties
    // run test/logs.html for any related changes
    begin: registerLoggingCallback( "begin" ),

    // done: { failed, passed, total, runtime }
    done: registerLoggingCallback( "done" ),

    // log: { result, actual, expected, message }
    log: registerLoggingCallback( "log" ),

    // testStart: { name }
    testStart: registerLoggingCallback( "testStart" ),

    // testDone: { name, failed, passed, total }
    testDone: registerLoggingCallback( "testDone" ),

    // moduleStart: { name }
    moduleStart: registerLoggingCallback( "moduleStart" ),

    // moduleDone: { name, failed, passed, total }
    moduleDone: registerLoggingCallback( "moduleDone" )
});

if ( typeof document === "undefined" || document.readyState === "complete" ) {
    config.autorun = true;
}

QUnit.load = function() {
    runLoggingCallbacks( "begin", QUnit, {} );

    // Initialize the config, saving the execution queue
    var banner, filter, i, label, len, main, ol, toolbar, userAgent, val, urlConfigCheckboxes, moduleFilter,
        numModules = 0,
        moduleFilterHtml = "",
        urlConfigHtml = "",
        oldconfig = extend( {}, config );

    QUnit.init();
    extend(config, oldconfig);

    config.blocking = false;

    len = config.urlConfig.length;

    for ( i = 0; i < len; i++ ) {
        val = config.urlConfig[i];
        if ( typeof val === "string" ) {
            val = {
                id: val,
                label: val,
                tooltip: "[no tooltip available]"
            };
        }
        config[ val.id ] = QUnit.urlParams[ val.id ];
        urlConfigHtml += "<input id='qunit-urlconfig-" + val.id + "' name='" + val.id + "' type='checkbox'" + ( config[ val.id ] ? " checked='checked'" : "" ) + " title='" + val.tooltip + "'><label for='qunit-urlconfig-" + val.id + "' title='" + val.tooltip + "'>" + val.label + "</label>";
    }

    moduleFilterHtml += "<label for='qunit-modulefilter'>Module: </label><select id='qunit-modulefilter' name='modulefilter'><option value='' " + ( config.module === undefined  ? "selected" : "" ) + ">< All Modules ></option>";
    for ( i in config.modules ) {
        if ( config.modules.hasOwnProperty( i ) ) {
            numModules += 1;
            moduleFilterHtml += "<option value='" + encodeURIComponent(i) + "' " + ( config.module === i ? "selected" : "" ) + ">" + i + "</option>";
        }
    }
    moduleFilterHtml += "</select>";

    // `userAgent` initialized at top of scope
    userAgent = id( "qunit-userAgent" );
    if ( userAgent ) {
        userAgent.innerHTML = navigator.userAgent;
    }

    // `banner` initialized at top of scope
    banner = id( "qunit-header" );
    if ( banner ) {
        banner.innerHTML = "<a href='" + QUnit.url({ filter: undefined, module: undefined, testNumber: undefined }) + "'>" + banner.innerHTML + "</a> ";
    }

    // `toolbar` initialized at top of scope
    toolbar = id( "qunit-testrunner-toolbar" );
    if ( toolbar ) {
        // `filter` initialized at top of scope
        filter = document.createElement( "input" );
        filter.type = "checkbox";
        filter.id = "qunit-filter-pass";

        addEvent( filter, "click", function() {
            var tmp,
                ol = document.getElementById( "qunit-tests" );

            if ( filter.checked ) {
                ol.className = ol.className + " hidepass";
            } else {
                tmp = " " + ol.className.replace( /[\n\t\r]/g, " " ) + " ";
                ol.className = tmp.replace( / hidepass /, " " );
            }
            if ( defined.sessionStorage ) {
                if (filter.checked) {
                    sessionStorage.setItem( "qunit-filter-passed-tests", "true" );
                } else {
                    sessionStorage.removeItem( "qunit-filter-passed-tests" );
                }
            }
        });

        if ( config.hidepassed || defined.sessionStorage && sessionStorage.getItem( "qunit-filter-passed-tests" ) ) {
            filter.checked = true;
            // `ol` initialized at top of scope
            ol = document.getElementById( "qunit-tests" );
            ol.className = ol.className + " hidepass";
        }
        toolbar.appendChild( filter );

        // `label` initialized at top of scope
        label = document.createElement( "label" );
        label.setAttribute( "for", "qunit-filter-pass" );
        label.setAttribute( "title", "Only show tests and assertons that fail. Stored in sessionStorage." );
        label.innerHTML = "Hide passed tests";
        toolbar.appendChild( label );

        urlConfigCheckboxes = document.createElement( 'span' );
        urlConfigCheckboxes.innerHTML = urlConfigHtml;
        addEvent( urlConfigCheckboxes, "change", function( event ) {
            var params = {};
            params[ event.target.name ] = event.target.checked ? true : undefined;
            window.location = QUnit.url( params );
        });
        toolbar.appendChild( urlConfigCheckboxes );

        if (numModules > 1) {
            moduleFilter = document.createElement( 'span' );
            moduleFilter.setAttribute( 'id', 'qunit-modulefilter-container' );
            moduleFilter.innerHTML = moduleFilterHtml;
            addEvent( moduleFilter, "change", function() {
                var selectBox = moduleFilter.getElementsByTagName("select")[0],
                    selectedModule = decodeURIComponent(selectBox.options[selectBox.selectedIndex].value);

                window.location = QUnit.url( { module: ( selectedModule === "" ) ? undefined : selectedModule } );
            });
            toolbar.appendChild(moduleFilter);
        }
    }

    // `main` initialized at top of scope
    main = id( "qunit-fixture" );
    if ( main ) {
        config.fixture = main.innerHTML;
    }

    if ( config.autostart ) {
        QUnit.start();
    }
};

addEvent( window, "load", QUnit.load );

// `onErrorFnPrev` initialized at top of scope
// Preserve other handlers
onErrorFnPrev = window.onerror;

// Cover uncaught exceptions
// Returning true will surpress the default browser handler,
// returning false will let it run.
window.onerror = function ( error, filePath, linerNr ) {
    var ret = false;
    if ( onErrorFnPrev ) {
        ret = onErrorFnPrev( error, filePath, linerNr );
    }

    // Treat return value as window.onerror itself does,
    // Only do our handling if not surpressed.
    if ( ret !== true ) {
        if ( QUnit.config.current ) {
            if ( QUnit.config.current.ignoreGlobalErrors ) {
                return true;
            }
            QUnit.pushFailure( error, filePath + ":" + linerNr );
        } else {
            QUnit.test( "global failure", extend( function() {
                QUnit.pushFailure( error, filePath + ":" + linerNr );
            }, { validTest: validTest } ) );
        }
        return false;
    }

    return ret;
};

function done() {
    config.autorun = true;

    // Log the last module results
    if ( config.currentModule ) {
        runLoggingCallbacks( "moduleDone", QUnit, {
            name: config.currentModule,
            failed: config.moduleStats.bad,
            passed: config.moduleStats.all - config.moduleStats.bad,
            total: config.moduleStats.all
        });
    }

    var i, key,
        banner = id( "qunit-banner" ),
        tests = id( "qunit-tests" ),
        runtime = +new Date() - config.started,
        passed = config.stats.all - config.stats.bad,
        html = [
            "Tests completed in ",
            runtime,
            " milliseconds.<br/>",
            "<span class='passed'>",
            passed,
            "</span> tests of <span class='total'>",
            config.stats.all,
            "</span> passed, <span class='failed'>",
            config.stats.bad,
            "</span> failed."
        ].join( "" );

    if ( banner ) {
        banner.className = ( config.stats.bad ? "qunit-fail" : "qunit-pass" );
    }

    if ( tests ) {
        id( "qunit-testresult" ).innerHTML = html;
    }

    if ( config.altertitle && typeof document !== "undefined" && document.title ) {
        // show ✖ for good, ✔ for bad suite result in title
        // use escape sequences in case file gets loaded with non-utf-8-charset
        document.title = [
            ( config.stats.bad ? "\u2716" : "\u2714" ),
            document.title.replace( /^[\u2714\u2716] /i, "" )
        ].join( " " );
    }

    // clear own sessionStorage items if all tests passed
    if ( config.reorder && defined.sessionStorage && config.stats.bad === 0 ) {
        // `key` & `i` initialized at top of scope
        for ( i = 0; i < sessionStorage.length; i++ ) {
            key = sessionStorage.key( i++ );
            if ( key.indexOf( "qunit-test-" ) === 0 ) {
                sessionStorage.removeItem( key );
            }
        }
    }

    // scroll back to top to show results
    if ( window.scrollTo ) {
        window.scrollTo(0, 0);
    }

    runLoggingCallbacks( "done", QUnit, {
        failed: config.stats.bad,
        passed: passed,
        total: config.stats.all,
        runtime: runtime
    });
}

/** @return Boolean: true if this test should be ran */
function validTest( test ) {
    var include,
        filter = config.filter && config.filter.toLowerCase(),
        module = config.module && config.module.toLowerCase(),
        fullName = (test.module + ": " + test.testName).toLowerCase();

    // Internally-generated tests are always valid
    if ( test.callback && test.callback.validTest === validTest ) {
        delete test.callback.validTest;
        return true;
    }

    if ( config.testNumber ) {
        return test.testNumber === config.testNumber;
    }

    if ( module && ( !test.module || test.module.toLowerCase() !== module ) ) {
        return false;
    }

    if ( !filter ) {
        return true;
    }

    include = filter.charAt( 0 ) !== "!";
    if ( !include ) {
        filter = filter.slice( 1 );
    }

    // If the filter matches, we need to honour include
    if ( fullName.indexOf( filter ) !== -1 ) {
        return include;
    }

    // Otherwise, do the opposite
    return !include;
}

// so far supports only Firefox, Chrome and Opera (buggy), Safari (for real exceptions)
// Later Safari and IE10 are supposed to support error.stack as well
// See also https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error/Stack
function extractStacktrace( e, offset ) {
    offset = offset === undefined ? 3 : offset;

    var stack, include, i, regex;

    if ( e.stacktrace ) {
        // Opera
        return e.stacktrace.split( "\n" )[ offset + 3 ];
    } else if ( e.stack ) {
        // Firefox, Chrome
        stack = e.stack.split( "\n" );
        if (/^error$/i.test( stack[0] ) ) {
            stack.shift();
        }
        if ( fileName ) {
            include = [];
            for ( i = offset; i < stack.length; i++ ) {
                if ( stack[ i ].indexOf( fileName ) != -1 ) {
                    break;
                }
                include.push( stack[ i ] );
            }
            if ( include.length ) {
                return include.join( "\n" );
            }
        }
        return stack[ offset ];
    } else if ( e.sourceURL ) {
        // Safari, PhantomJS
        // hopefully one day Safari provides actual stacktraces
        // exclude useless self-reference for generated Error objects
        if ( /qunit.js$/.test( e.sourceURL ) ) {
            return;
        }
        // for actual exceptions, this is useful
        return e.sourceURL + ":" + e.line;
    }
}
function sourceFromStacktrace( offset ) {
    try {
        throw new Error();
    } catch ( e ) {
        return extractStacktrace( e, offset );
    }
}

function escapeInnerText( s ) {
    if ( !s ) {
        return "";
    }
    s = s + "";
    return s.replace( /[\&<>]/g, function( s ) {
        switch( s ) {
            case "&": return "&amp;";
            case "<": return "&lt;";
            case ">": return "&gt;";
            default: return s;
        }
    });
}

function synchronize( callback, last ) {
    config.queue.push( callback );

    if ( config.autorun && !config.blocking ) {
        process( last );
    }
}

function process( last ) {
    function next() {
        process( last );
    }
    var start = new Date().getTime();
    config.depth = config.depth ? config.depth + 1 : 1;

    while ( config.queue.length && !config.blocking ) {
        if ( !defined.setTimeout || config.updateRate <= 0 || ( ( new Date().getTime() - start ) < config.updateRate ) ) {
            config.queue.shift()();
        } else {
            window.setTimeout( next, 13 );
            break;
        }
    }
    config.depth--;
    if ( last && !config.blocking && !config.queue.length && config.depth === 0 ) {
        done();
    }
}

function saveGlobal() {
    config.pollution = [];

    if ( config.noglobals ) {
        for ( var key in window ) {
            // in Opera sometimes DOM element ids show up here, ignore them
            if ( !hasOwn.call( window, key ) || /^qunit-test-output/.test( key ) ) {
                continue;
            }
            config.pollution.push( key );
        }
    }
}

function checkPollution( name ) {
    var newGlobals,
        deletedGlobals,
        old = config.pollution;

    saveGlobal();

    newGlobals = diff( config.pollution, old );
    if ( newGlobals.length > 0 ) {
        QUnit.pushFailure( "Introduced global variable(s): " + newGlobals.join(", ") );
    }

    deletedGlobals = diff( old, config.pollution );
    if ( deletedGlobals.length > 0 ) {
        QUnit.pushFailure( "Deleted global variable(s): " + deletedGlobals.join(", ") );
    }
}

// returns a new Array with the elements that are in a but not in b
function diff( a, b ) {
    var i, j,
        result = a.slice();

    for ( i = 0; i < result.length; i++ ) {
        for ( j = 0; j < b.length; j++ ) {
            if ( result[i] === b[j] ) {
                result.splice( i, 1 );
                i--;
                break;
            }
        }
    }
    return result;
}

function extend( a, b ) {
    for ( var prop in b ) {
        if ( b[ prop ] === undefined ) {
            delete a[ prop ];

        // Avoid "Member not found" error in IE8 caused by setting window.constructor
        } else if ( prop !== "constructor" || a !== window ) {
            a[ prop ] = b[ prop ];
        }
    }

    return a;
}

function addEvent( elem, type, fn ) {
    if ( elem.addEventListener ) {
        elem.addEventListener( type, fn, false );
    } else if ( elem.attachEvent ) {
        elem.attachEvent( "on" + type, fn );
    } else {
        fn();
    }
}

function id( name ) {
    return !!( typeof document !== "undefined" && document && document.getElementById ) &&
        document.getElementById( name );
}

function registerLoggingCallback( key ) {
    return function( callback ) {
        config[key].push( callback );
    };
}

// Supports deprecated method of completely overwriting logging callbacks
function runLoggingCallbacks( key, scope, args ) {
    //debugger;
    var i, callbacks;
    if ( QUnit.hasOwnProperty( key ) ) {
        QUnit[ key ].call(scope, args );
    } else {
        callbacks = config[ key ];
        for ( i = 0; i < callbacks.length; i++ ) {
            callbacks[ i ].call( scope, args );
        }
    }
}

// Test for equality any JavaScript type.
// Author: Philippe Rathé <prathe@gmail.com>
QUnit.equiv = (function() {

    // Call the o related callback with the given arguments.
    function bindCallbacks( o, callbacks, args ) {
        var prop = QUnit.objectType( o );
        if ( prop ) {
            if ( QUnit.objectType( callbacks[ prop ] ) === "function" ) {
                return callbacks[ prop ].apply( callbacks, args );
            } else {
                return callbacks[ prop ]; // or undefined
            }
        }
    }

    // the real equiv function
    var innerEquiv,
        // stack to decide between skip/abort functions
        callers = [],
        // stack to avoiding loops from circular referencing
        parents = [],

        getProto = Object.getPrototypeOf || function ( obj ) {
            return obj.__proto__;
        },
        callbacks = (function () {

            // for string, boolean, number and null
            function useStrictEquality( b, a ) {
                if ( b instanceof a.constructor || a instanceof b.constructor ) {
                    // to catch short annotaion VS 'new' annotation of a
                    // declaration
                    // e.g. var i = 1;
                    // var j = new Number(1);
                    return a == b;
                } else {
                    return a === b;
                }
            }

            return {
                "string": useStrictEquality,
                "boolean": useStrictEquality,
                "number": useStrictEquality,
                "null": useStrictEquality,
                "undefined": useStrictEquality,

                "nan": function( b ) {
                    return isNaN( b );
                },

                "date": function( b, a ) {
                    return QUnit.objectType( b ) === "date" && a.valueOf() === b.valueOf();
                },

                "regexp": function( b, a ) {
                    return QUnit.objectType( b ) === "regexp" &&
                        // the regex itself
                        a.source === b.source &&
                        // and its modifers
                        a.global === b.global &&
                        // (gmi) ...
                        a.ignoreCase === b.ignoreCase &&
                        a.multiline === b.multiline &&
                        a.sticky === b.sticky;
                },

                // - skip when the property is a method of an instance (OOP)
                // - abort otherwise,
                // initial === would have catch identical references anyway
                "function": function() {
                    var caller = callers[callers.length - 1];
                    return caller !== Object && typeof caller !== "undefined";
                },

                "array": function( b, a ) {
                    var i, j, len, loop;

                    // b could be an object literal here
                    if ( QUnit.objectType( b ) !== "array" ) {
                        return false;
                    }

                    len = a.length;
                    if ( len !== b.length ) {
                        // safe and faster
                        return false;
                    }

                    // track reference to avoid circular references
                    parents.push( a );
                    for ( i = 0; i < len; i++ ) {
                        loop = false;
                        for ( j = 0; j < parents.length; j++ ) {
                            if ( parents[j] === a[i] ) {
                                loop = true;// dont rewalk array
                            }
                        }
                        if ( !loop && !innerEquiv(a[i], b[i]) ) {
                            parents.pop();
                            return false;
                        }
                    }
                    parents.pop();
                    return true;
                },

                "object": function( b, a ) {
                    var i, j, loop,
                        // Default to true
                        eq = true,
                        aProperties = [],
                        bProperties = [];

                    // comparing constructors is more strict than using
                    // instanceof
                    if ( a.constructor !== b.constructor ) {
                        // Allow objects with no prototype to be equivalent to
                        // objects with Object as their constructor.
                        if ( !(( getProto(a) === null && getProto(b) === Object.prototype ) ||
                            ( getProto(b) === null && getProto(a) === Object.prototype ) ) ) {
                                return false;
                        }
                    }

                    // stack constructor before traversing properties
                    callers.push( a.constructor );
                    // track reference to avoid circular references
                    parents.push( a );

                    for ( i in a ) { // be strict: don't ensures hasOwnProperty
                                    // and go deep
                        loop = false;
                        for ( j = 0; j < parents.length; j++ ) {
                            if ( parents[j] === a[i] ) {
                                // don't go down the same path twice
                                loop = true;
                            }
                        }
                        aProperties.push(i); // collect a's properties

                        if (!loop && !innerEquiv( a[i], b[i] ) ) {
                            eq = false;
                            break;
                        }
                    }

                    callers.pop(); // unstack, we are done
                    parents.pop();

                    for ( i in b ) {
                        bProperties.push( i ); // collect b's properties
                    }

                    // Ensures identical properties name
                    return eq && innerEquiv( aProperties.sort(), bProperties.sort() );
                }
            };
        }());

    innerEquiv = function() { // can take multiple arguments
        var args = [].slice.apply( arguments );
        if ( args.length < 2 ) {
            return true; // end transition
        }

        return (function( a, b ) {
            if ( a === b ) {
                return true; // catch the most you can
            } else if ( a === null || b === null || typeof a === "undefined" ||
                    typeof b === "undefined" ||
                    QUnit.objectType(a) !== QUnit.objectType(b) ) {
                return false; // don't lose time with error prone cases
            } else {
                return bindCallbacks(a, callbacks, [ b, a ]);
            }

            // apply transition with (1..n) arguments
        }( args[0], args[1] ) && arguments.callee.apply( this, args.splice(1, args.length - 1 )) );
    };

    return innerEquiv;
}());

/**
 * jsDump Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com |
 * http://flesler.blogspot.com Licensed under BSD
 * (http://www.opensource.org/licenses/bsd-license.php) Date: 5/15/2008
 *
 * @projectDescription Advanced and extensible data dumping for Javascript.
 * @version 1.0.0
 * @author Ariel Flesler
 * @link {http://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html}
 */
QUnit.jsDump = (function() {
    function quote( str ) {
        return '"' + str.toString().replace( /"/g, '\\"' ) + '"';
    }
    function literal( o ) {
        return o + "";
    }
    function join( pre, arr, post ) {
        var s = jsDump.separator(),
            base = jsDump.indent(),
            inner = jsDump.indent(1);
        if ( arr.join ) {
            arr = arr.join( "," + s + inner );
        }
        if ( !arr ) {
            return pre + post;
        }
        return [ pre, inner + arr, base + post ].join(s);
    }
    function array( arr, stack ) {
        var i = arr.length, ret = new Array(i);
        this.up();
        while ( i-- ) {
            ret[i] = this.parse( arr[i] , undefined , stack);
        }
        this.down();
        return join( "[", ret, "]" );
    }

    var reName = /^function (\w+)/,
        jsDump = {
            parse: function( obj, type, stack ) { //type is used mostly internally, you can fix a (custom)type in advance
                stack = stack || [ ];
                var inStack, res,
                    parser = this.parsers[ type || this.typeOf(obj) ];

                type = typeof parser;
                inStack = inArray( obj, stack );

                if ( inStack != -1 ) {
                    return "recursion(" + (inStack - stack.length) + ")";
                }
                //else
                if ( type == "function" )  {
                    stack.push( obj );
                    res = parser.call( this, obj, stack );
                    stack.pop();
                    return res;
                }
                // else
                return ( type == "string" ) ? parser : this.parsers.error;
            },
            typeOf: function( obj ) {
                var type;
                if ( obj === null ) {
                    type = "null";
                } else if ( typeof obj === "undefined" ) {
                    type = "undefined";
                } else if ( QUnit.is( "regexp", obj) ) {
                    type = "regexp";
                } else if ( QUnit.is( "date", obj) ) {
                    type = "date";
                } else if ( QUnit.is( "function", obj) ) {
                    type = "function";
                } else if ( typeof obj.setInterval !== undefined && typeof obj.document !== "undefined" && typeof obj.nodeType === "undefined" ) {
                    type = "window";
                } else if ( obj.nodeType === 9 ) {
                    type = "document";
                } else if ( obj.nodeType ) {
                    type = "node";
                } else if (
                    // native arrays
                    toString.call( obj ) === "[object Array]" ||
                    // NodeList objects
                    ( typeof obj.length === "number" && typeof obj.item !== "undefined" && ( obj.length ? obj.item(0) === obj[0] : ( obj.item( 0 ) === null && typeof obj[0] === "undefined" ) ) )
                ) {
                    type = "array";
                } else {
                    type = typeof obj;
                }
                return type;
            },
            separator: function() {
                return this.multiline ? this.HTML ? "<br />" : "\n" : this.HTML ? "&nbsp;" : " ";
            },
            indent: function( extra ) {// extra can be a number, shortcut for increasing-calling-decreasing
                if ( !this.multiline ) {
                    return "";
                }
                var chr = this.indentChar;
                if ( this.HTML ) {
                    chr = chr.replace( /\t/g, "   " ).replace( / /g, "&nbsp;" );
                }
                return new Array( this._depth_ + (extra||0) ).join(chr);
            },
            up: function( a ) {
                this._depth_ += a || 1;
            },
            down: function( a ) {
                this._depth_ -= a || 1;
            },
            setParser: function( name, parser ) {
                this.parsers[name] = parser;
            },
            // The next 3 are exposed so you can use them
            quote: quote,
            literal: literal,
            join: join,
            //
            _depth_: 1,
            // This is the list of parsers, to modify them, use jsDump.setParser
            parsers: {
                window: "[Window]",
                document: "[Document]",
                error: "[ERROR]", //when no parser is found, shouldn"t happen
                unknown: "[Unknown]",
                "null": "null",
                "undefined": "undefined",
                "function": function( fn ) {
                    var ret = "function",
                        name = "name" in fn ? fn.name : (reName.exec(fn) || [])[1];//functions never have name in IE

                    if ( name ) {
                        ret += " " + name;
                    }
                    ret += "( ";

                    ret = [ ret, QUnit.jsDump.parse( fn, "functionArgs" ), "){" ].join( "" );
                    return join( ret, QUnit.jsDump.parse(fn,"functionCode" ), "}" );
                },
                array: array,
                nodelist: array,
                "arguments": array,
                object: function( map, stack ) {
                    var ret = [ ], keys, key, val, i;
                    QUnit.jsDump.up();
                    if ( Object.keys ) {
                        keys = Object.keys( map );
                    } else {
                        keys = [];
                        for ( key in map ) {
                            keys.push( key );
                        }
                    }
                    keys.sort();
                    for ( i = 0; i < keys.length; i++ ) {
                        key = keys[ i ];
                        val = map[ key ];
                        ret.push( QUnit.jsDump.parse( key, "key" ) + ": " + QUnit.jsDump.parse( val, undefined, stack ) );
                    }
                    QUnit.jsDump.down();
                    return join( "{", ret, "}" );
                },
                node: function( node ) {
                    var a, val,
                        open = QUnit.jsDump.HTML ? "&lt;" : "<",
                        close = QUnit.jsDump.HTML ? "&gt;" : ">",
                        tag = node.nodeName.toLowerCase(),
                        ret = open + tag;

                    for ( a in QUnit.jsDump.DOMAttrs ) {
                        val = node[ QUnit.jsDump.DOMAttrs[a] ];
                        if ( val ) {
                            ret += " " + a + "=" + QUnit.jsDump.parse( val, "attribute" );
                        }
                    }
                    return ret + close + open + "/" + tag + close;
                },
                functionArgs: function( fn ) {//function calls it internally, it's the arguments part of the function
                    var args,
                        l = fn.length;

                    if ( !l ) {
                        return "";
                    }

                    args = new Array(l);
                    while ( l-- ) {
                        args[l] = String.fromCharCode(97+l);//97 is 'a'
                    }
                    return " " + args.join( ", " ) + " ";
                },
                key: quote, //object calls it internally, the key part of an item in a map
                functionCode: "[code]", //function calls it internally, it's the content of the function
                attribute: quote, //node calls it internally, it's an html attribute value
                string: quote,
                date: quote,
                regexp: literal, //regex
                number: literal,
                "boolean": literal
            },
            DOMAttrs: {
                //attributes to dump from nodes, name=>realName
                id: "id",
                name: "name",
                "class": "className"
            },
            HTML: false,//if true, entities are escaped ( <, >, \t, space and \n )
            indentChar: "  ",//indentation unit
            multiline: true //if true, items in a collection, are separated by a \n, else just a space.
        };

    return jsDump;
}());

// from Sizzle.js
function getText( elems ) {
    var i, elem,
        ret = "";

    for ( i = 0; elems[i]; i++ ) {
        elem = elems[i];

        // Get the text from text nodes and CDATA nodes
        if ( elem.nodeType === 3 || elem.nodeType === 4 ) {
            ret += elem.nodeValue;

        // Traverse everything else, except comment nodes
        } else if ( elem.nodeType !== 8 ) {
            ret += getText( elem.childNodes );
        }
    }

    return ret;
}

// from jquery.js
function inArray( elem, array ) {
    if ( array.indexOf ) {
        return array.indexOf( elem );
    }

    for ( var i = 0, length = array.length; i < length; i++ ) {
        if ( array[ i ] === elem ) {
            return i;
        }
    }

    return -1;
}

/*
 * Javascript Diff Algorithm
 *  By John Resig (http://ejohn.org/)
 *  Modified by Chu Alan "sprite"
 *
 * Released under the MIT license.
 *
 * More Info:
 *  http://ejohn.org/projects/javascript-diff-algorithm/
 *
 * Usage: QUnit.diff(expected, actual)
 *
 * QUnit.diff( "the quick brown fox jumped over", "the quick fox jumps over" ) == "the  quick <del>brown </del> fox <del>jumped </del><ins>jumps </ins> over"
 */
QUnit.diff = (function() {
    function diff( o, n ) {
        var i,
            ns = {},
            os = {};

        for ( i = 0; i < n.length; i++ ) {
            if ( ns[ n[i] ] == null ) {
                ns[ n[i] ] = {
                    rows: [],
                    o: null
                };
            }
            ns[ n[i] ].rows.push( i );
        }

        for ( i = 0; i < o.length; i++ ) {
            if ( os[ o[i] ] == null ) {
                os[ o[i] ] = {
                    rows: [],
                    n: null
                };
            }
            os[ o[i] ].rows.push( i );
        }

        for ( i in ns ) {
            if ( !hasOwn.call( ns, i ) ) {
                continue;
            }
            if ( ns[i].rows.length == 1 && typeof os[i] != "undefined" && os[i].rows.length == 1 ) {
                n[ ns[i].rows[0] ] = {
                    text: n[ ns[i].rows[0] ],
                    row: os[i].rows[0]
                };
                o[ os[i].rows[0] ] = {
                    text: o[ os[i].rows[0] ],
                    row: ns[i].rows[0]
                };
            }
        }

        for ( i = 0; i < n.length - 1; i++ ) {
            if ( n[i].text != null && n[ i + 1 ].text == null && n[i].row + 1 < o.length && o[ n[i].row + 1 ].text == null &&
                        n[ i + 1 ] == o[ n[i].row + 1 ] ) {

                n[ i + 1 ] = {
                    text: n[ i + 1 ],
                    row: n[i].row + 1
                };
                o[ n[i].row + 1 ] = {
                    text: o[ n[i].row + 1 ],
                    row: i + 1
                };
            }
        }

        for ( i = n.length - 1; i > 0; i-- ) {
            if ( n[i].text != null && n[ i - 1 ].text == null && n[i].row > 0 && o[ n[i].row - 1 ].text == null &&
                        n[ i - 1 ] == o[ n[i].row - 1 ]) {

                n[ i - 1 ] = {
                    text: n[ i - 1 ],
                    row: n[i].row - 1
                };
                o[ n[i].row - 1 ] = {
                    text: o[ n[i].row - 1 ],
                    row: i - 1
                };
            }
        }

        return {
            o: o,
            n: n
        };
    }

    return function( o, n ) {
        o = o.replace( /\s+$/, "" );
        n = n.replace( /\s+$/, "" );

        var i, pre,
            str = "",
            out = diff( o === "" ? [] : o.split(/\s+/), n === "" ? [] : n.split(/\s+/) ),
            oSpace = o.match(/\s+/g),
            nSpace = n.match(/\s+/g);

        if ( oSpace == null ) {
            oSpace = [ " " ];
        }
        else {
            oSpace.push( " " );
        }

        if ( nSpace == null ) {
            nSpace = [ " " ];
        }
        else {
            nSpace.push( " " );
        }

        if ( out.n.length === 0 ) {
            for ( i = 0; i < out.o.length; i++ ) {
                str += "<del>" + out.o[i] + oSpace[i] + "</del>";
            }
        }
        else {
            if ( out.n[0].text == null ) {
                for ( n = 0; n < out.o.length && out.o[n].text == null; n++ ) {
                    str += "<del>" + out.o[n] + oSpace[n] + "</del>";
                }
            }

            for ( i = 0; i < out.n.length; i++ ) {
                if (out.n[i].text == null) {
                    str += "<ins>" + out.n[i] + nSpace[i] + "</ins>";
                }
                else {
                    // `pre` initialized at top of scope
                    pre = "";

                    for ( n = out.n[i].row + 1; n < out.o.length && out.o[n].text == null; n++ ) {
                        pre += "<del>" + out.o[n] + oSpace[n] + "</del>";
                    }
                    str += " " + out.n[i].text + nSpace[i] + pre;
                }
            }
        }

        return str;
    };
}());

// for CommonJS enviroments, export everything
if ( typeof exports !== "undefined" ) {
    extend(exports, QUnit);
}

// get at whatever the global object is, like window in browsers
}( (function() {return this;}.call()) ));
/**
 * Sinon.JS 1.4.2, 2012/07/11
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @author Contributors: https://github.com/cjohansen/Sinon.JS/blob/master/AUTHORS
 *
 * (The BSD License)
 * 
 * Copyright (c) 2010-2012, Christian Johansen, christian@cjohansen.no
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 * 
 *     * Redistributions of source code must retain the above copyright notice,
 *       this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright notice,
 *       this list of conditions and the following disclaimer in the documentation
 *       and/or other materials provided with the distribution.
 *     * Neither the name of Christian Johansen nor the names of his contributors
 *       may be used to endorse or promote products derived from this software
 *       without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

"use strict";
var sinon = (function () {
var buster = (function (setTimeout, B) {
    var isNode = typeof require == "function" && typeof module == "object";
    var div = typeof document != "undefined" && document.createElement("div");
    var F = function () {};

    var buster = {
        bind: function bind(obj, methOrProp) {
            var method = typeof methOrProp == "string" ? obj[methOrProp] : methOrProp;
            var args = Array.prototype.slice.call(arguments, 2);
            return function () {
                var allArgs = args.concat(Array.prototype.slice.call(arguments));
                return method.apply(obj, allArgs);
            };
        },

        partial: function partial(fn) {
            var args = [].slice.call(arguments, 1);
            return function () {
                return fn.apply(this, args.concat([].slice.call(arguments)));
            };
        },

        create: function create(object) {
            F.prototype = object;
            return new F();
        },

        extend: function extend(target) {
            if (!target) { return; }
            for (var i = 1, l = arguments.length, prop; i < l; ++i) {
                for (prop in arguments[i]) {
                    target[prop] = arguments[i][prop];
                }
            }
            return target;
        },

        nextTick: function nextTick(callback) {
            if (typeof process != "undefined" && process.nextTick) {
                return process.nextTick(callback);
            }
            setTimeout(callback, 0);
        },

        functionName: function functionName(func) {
            if (!func) return "";
            if (func.displayName) return func.displayName;
            if (func.name) return func.name;
            var matches = func.toString().match(/function\s+([^\(]+)/m);
            return matches && matches[1] || "";
        },

        isNode: function isNode(obj) {
            if (!div) return false;
            try {
                obj.appendChild(div);
                obj.removeChild(div);
            } catch (e) {
                return false;
            }
            return true;
        },

        isElement: function isElement(obj) {
            return obj && obj.nodeType === 1 && buster.isNode(obj);
        },

        isArray: function isArray(arr) {
            return Object.prototype.toString.call(arr) == "[object Array]";
        },

        flatten: function flatten(arr) {
            var result = [], arr = arr || [];
            for (var i = 0, l = arr.length; i < l; ++i) {
                result = result.concat(buster.isArray(arr[i]) ? flatten(arr[i]) : arr[i]);
            }
            return result;
        },

        each: function each(arr, callback) {
            for (var i = 0, l = arr.length; i < l; ++i) {
                callback(arr[i]);
            }
        },

        map: function map(arr, callback) {
            var results = [];
            for (var i = 0, l = arr.length; i < l; ++i) {
                results.push(callback(arr[i]));
            }
            return results;
        },

        parallel: function parallel(fns, callback) {
            function cb(err, res) {
                if (typeof callback == "function") {
                    callback(err, res);
                    callback = null;
                }
            }
            if (fns.length == 0) { return cb(null, []); }
            var remaining = fns.length, results = [];
            function makeDone(num) {
                return function done(err, result) {
                    if (err) { return cb(err); }
                    results[num] = result;
                    if (--remaining == 0) { cb(null, results); }
                };
            }
            for (var i = 0, l = fns.length; i < l; ++i) {
                fns[i](makeDone(i));
            }
        },

        series: function series(fns, callback) {
            function cb(err, res) {
                if (typeof callback == "function") {
                    callback(err, res);
                }
            }
            var remaining = fns.slice();
            var results = [];
            function callNext() {
                if (remaining.length == 0) return cb(null, results);
                var promise = remaining.shift()(next);
                if (promise && typeof promise.then == "function") {
                    promise.then(buster.partial(next, null), next);
                }
            }
            function next(err, result) {
                if (err) return cb(err);
                results.push(result);
                callNext();
            }
            callNext();
        },

        countdown: function countdown(num, done) {
            return function () {
                if (--num == 0) done();
            };
        }
    };

    if (typeof process === "object" &&
        typeof require === "function" && typeof module === "object") {
        var crypto = require("crypto");
        var path = require("path");

        buster.tmpFile = function (fileName) {
            var hashed = crypto.createHash("sha1");
            hashed.update(fileName);
            var tmpfileName = hashed.digest("hex");

            if (process.platform == "win32") {
                return path.join(process.env["TEMP"], tmpfileName);
            } else {
                return path.join("/tmp", tmpfileName);
            }
        };
    }

    if (Array.prototype.some) {
        buster.some = function (arr, fn, thisp) {
            return arr.some(fn, thisp);
        };
    } else {
        // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
        buster.some = function (arr, fun, thisp) {
                        if (arr == null) { throw new TypeError(); }
            arr = Object(arr);
            var len = arr.length >>> 0;
            if (typeof fun !== "function") { throw new TypeError(); }

            for (var i = 0; i < len; i++) {
                if (arr.hasOwnProperty(i) && fun.call(thisp, arr[i], i, arr)) {
                    return true;
                }
            }

            return false;
        };
    }

    if (Array.prototype.filter) {
        buster.filter = function (arr, fn, thisp) {
            return arr.filter(fn, thisp);
        };
    } else {
        // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/filter
        buster.filter = function (fn, thisp) {
                        if (this == null) { throw new TypeError(); }

            var t = Object(this);
            var len = t.length >>> 0;
            if (typeof fn != "function") { throw new TypeError(); }

            var res = [];
            for (var i = 0; i < len; i++) {
                if (i in t) {
                    var val = t[i]; // in case fun mutates this
                    if (fn.call(thisp, val, i, t)) { res.push(val); }
                }
            }

            return res;
        };
    }

    if (isNode) {
        module.exports = buster;
        buster.eventEmitter = require("./buster-event-emitter");
        Object.defineProperty(buster, "defineVersionGetter", {
            get: function () {
                return require("./define-version-getter");
            }
        });
    }

    return buster.extend(B || {}, buster);
}(setTimeout, buster));
if (typeof buster === "undefined") {
    var buster = {};
}

if (typeof module === "object" && typeof require === "function") {
    buster = require("buster-core");
}

buster.format = buster.format || {};
buster.format.excludeConstructors = ["Object", /^.$/];
buster.format.quoteStrings = true;

buster.format.ascii = (function () {
    
    var hasOwn = Object.prototype.hasOwnProperty;

    var specialObjects = [];
    if (typeof global != "undefined") {
        specialObjects.push({ obj: global, value: "[object global]" });
    }
    if (typeof document != "undefined") {
        specialObjects.push({ obj: document, value: "[object HTMLDocument]" });
    }
    if (typeof window != "undefined") {
        specialObjects.push({ obj: window, value: "[object Window]" });
    }

    function keys(object) {
        var k = Object.keys && Object.keys(object) || [];

        if (k.length == 0) {
            for (var prop in object) {
                if (hasOwn.call(object, prop)) {
                    k.push(prop);
                }
            }
        }

        return k.sort();
    }

    function isCircular(object, objects) {
        if (typeof object != "object") {
            return false;
        }

        for (var i = 0, l = objects.length; i < l; ++i) {
            if (objects[i] === object) {
                return true;
            }
        }

        return false;
    }

    function ascii(object, processed, indent) {
        if (typeof object == "string") {
            var quote = typeof this.quoteStrings != "boolean" || this.quoteStrings;
            return processed || quote ? '"' + object + '"' : object;
        }

        if (typeof object == "function" && !(object instanceof RegExp)) {
            return ascii.func(object);
        }

        processed = processed || [];

        if (isCircular(object, processed)) {
            return "[Circular]";
        }

        if (Object.prototype.toString.call(object) == "[object Array]") {
            return ascii.array.call(this, object, processed);
        }

        if (!object) {
            return "" + object;
        }

        if (buster.isElement(object)) {
            return ascii.element(object);
        }

        if (typeof object.toString == "function" &&
            object.toString !== Object.prototype.toString) {
            return object.toString();
        }

        for (var i = 0, l = specialObjects.length; i < l; i++) {
            if (object === specialObjects[i].obj) {
                return specialObjects[i].value;
            }
        }

        return ascii.object.call(this, object, processed, indent);
    }

    ascii.func = function (func) {
        return "function " + buster.functionName(func) + "() {}";
    };

    ascii.array = function (array, processed) {
        processed = processed || [];
        processed.push(array);
        var pieces = [];

        for (var i = 0, l = array.length; i < l; ++i) {
            pieces.push(ascii.call(this, array[i], processed));
        }

        return "[" + pieces.join(", ") + "]";
    };

    ascii.object = function (object, processed, indent) {
        processed = processed || [];
        processed.push(object);
        indent = indent || 0;
        var pieces = [], properties = keys(object), prop, str, obj;
        var is = "";
        var length = 3;

        for (var i = 0, l = indent; i < l; ++i) {
            is += " ";
        }

        for (i = 0, l = properties.length; i < l; ++i) {
            prop = properties[i];
            obj = object[prop];

            if (isCircular(obj, processed)) {
                str = "[Circular]";
            } else {
                str = ascii.call(this, obj, processed, indent + 2);
            }

            str = (/\s/.test(prop) ? '"' + prop + '"' : prop) + ": " + str;
            length += str.length;
            pieces.push(str);
        }

        var cons = ascii.constructorName.call(this, object);
        var prefix = cons ? "[" + cons + "] " : ""

        return (length + indent) > 80 ?
            prefix + "{\n  " + is + pieces.join(",\n  " + is) + "\n" + is + "}" :
            prefix + "{ " + pieces.join(", ") + " }";
    };

    ascii.element = function (element) {
        var tagName = element.tagName.toLowerCase();
        var attrs = element.attributes, attribute, pairs = [], attrName;

        for (var i = 0, l = attrs.length; i < l; ++i) {
            attribute = attrs.item(i);
            attrName = attribute.nodeName.toLowerCase().replace("html:", "");

            if (attrName == "contenteditable" && attribute.nodeValue == "inherit") {
                continue;
            }

            if (!!attribute.nodeValue) {
                pairs.push(attrName + "=\"" + attribute.nodeValue + "\"");
            }
        }

        var formatted = "<" + tagName + (pairs.length > 0 ? " " : "");
        var content = element.innerHTML;

        if (content.length > 20) {
            content = content.substr(0, 20) + "[...]";
        }

        var res = formatted + pairs.join(" ") + ">" + content + "</" + tagName + ">";

        return res.replace(/ contentEditable="inherit"/, "");
    };

    ascii.constructorName = function (object) {
        var name = buster.functionName(object && object.constructor);
        var excludes = this.excludeConstructors || buster.format.excludeConstructors || [];

        for (var i = 0, l = excludes.length; i < l; ++i) {
            if (typeof excludes[i] == "string" && excludes[i] == name) {
                return "";
            } else if (excludes[i].test && excludes[i].test(name)) {
                return "";
            }
        }

        return name;
    };

    return ascii;
}());

if (typeof module != "undefined") {
    module.exports = buster.format;
}
/*jslint eqeqeq: false, onevar: false, forin: true, nomen: false, regexp: false, plusplus: false*/
/*global module, require, __dirname, document*/
/**
 * Sinon core utilities. For internal use only.
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2011 Christian Johansen
 */

var sinon = (function (buster) {
    var div = typeof document != "undefined" && document.createElement("div");
    var hasOwn = Object.prototype.hasOwnProperty;

    function isDOMNode(obj) {
        var success = false;

        try {
            obj.appendChild(div);
            success = div.parentNode == obj;
        } catch (e) {
            return false;
        } finally {
            try {
                obj.removeChild(div);
            } catch (e) {
                // Remove failed, not much we can do about that
            }
        }

        return success;
    }

    function isElement(obj) {
        return div && obj && obj.nodeType === 1 && isDOMNode(obj);
    }

    function isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }

    function mirrorProperties(target, source) {
        for (var prop in source) {
            if (!hasOwn.call(target, prop)) {
                target[prop] = source[prop];
            }
        }
    }

    var sinon = {
        wrapMethod: function wrapMethod(object, property, method) {
            if (!object) {
                throw new TypeError("Should wrap property of object");
            }

            if (typeof method != "function") {
                throw new TypeError("Method wrapper should be function");
            }

            var wrappedMethod = object[property];

            if (!isFunction(wrappedMethod)) {
                throw new TypeError("Attempted to wrap " + (typeof wrappedMethod) + " property " +
                                    property + " as function");
            }

            if (wrappedMethod.restore && wrappedMethod.restore.sinon) {
                throw new TypeError("Attempted to wrap " + property + " which is already wrapped");
            }

            if (wrappedMethod.calledBefore) {
                var verb = !!wrappedMethod.returns ? "stubbed" : "spied on";
                throw new TypeError("Attempted to wrap " + property + " which is already " + verb);
            }

            // IE 8 does not support hasOwnProperty on the window object.
            var owned = hasOwn.call(object, property);
            object[property] = method;
            method.displayName = property;

            method.restore = function () {
                // For prototype properties try to reset by delete first.
                // If this fails (ex: localStorage on mobile safari) then force a reset
                // via direct assignment.
                if (!owned) {
                    delete object[property];
                }
                if (object[property] === method) {
                    object[property] = wrappedMethod;
                }
            };

            method.restore.sinon = true;
            mirrorProperties(method, wrappedMethod);

            return method;
        },

        extend: function extend(target) {
            for (var i = 1, l = arguments.length; i < l; i += 1) {
                for (var prop in arguments[i]) {
                    if (arguments[i].hasOwnProperty(prop)) {
                        target[prop] = arguments[i][prop];
                    }

                    // DONT ENUM bug, only care about toString
                    if (arguments[i].hasOwnProperty("toString") &&
                        arguments[i].toString != target.toString) {
                        target.toString = arguments[i].toString;
                    }
                }
            }

            return target;
        },

        create: function create(proto) {
            var F = function () {};
            F.prototype = proto;
            return new F();
        },

        deepEqual: function deepEqual(a, b) {
            if (sinon.match && sinon.match.isMatcher(a)) {
                return a.test(b);
            }
            if (typeof a != "object" || typeof b != "object") {
                return a === b;
            }

            if (isElement(a) || isElement(b)) {
                return a === b;
            }

            if (a === b) {
                return true;
            }

            var aString = Object.prototype.toString.call(a);
            if (aString != Object.prototype.toString.call(b)) {
                return false;
            }

            if (aString == "[object Array]") {
                if (a.length !== b.length) {
                    return false;
                }

                for (var i = 0, l = a.length; i < l; i += 1) {
                    if (!deepEqual(a[i], b[i])) {
                        return false;
                    }
                }

                return true;
            }

            var prop, aLength = 0, bLength = 0;

            for (prop in a) {
                aLength += 1;

                if (!deepEqual(a[prop], b[prop])) {
                    return false;
                }
            }

            for (prop in b) {
                bLength += 1;
            }

            if (aLength != bLength) {
                return false;
            }

            return true;
        },

        functionName: function functionName(func) {
            var name = func.displayName || func.name;

            // Use function decomposition as a last resort to get function
            // name. Does not rely on function decomposition to work - if it
            // doesn't debugging will be slightly less informative
            // (i.e. toString will say 'spy' rather than 'myFunc').
            if (!name) {
                var matches = func.toString().match(/function ([^\s\(]+)/);
                name = matches && matches[1];
            }

            return name;
        },

        functionToString: function toString() {
            if (this.getCall && this.callCount) {
                var thisValue, prop, i = this.callCount;

                while (i--) {
                    thisValue = this.getCall(i).thisValue;

                    for (prop in thisValue) {
                        if (thisValue[prop] === this) {
                            return prop;
                        }
                    }
                }
            }

            return this.displayName || "sinon fake";
        },

        getConfig: function (custom) {
            var config = {};
            custom = custom || {};
            var defaults = sinon.defaultConfig;

            for (var prop in defaults) {
                if (defaults.hasOwnProperty(prop)) {
                    config[prop] = custom.hasOwnProperty(prop) ? custom[prop] : defaults[prop];
                }
            }

            return config;
        },

        format: function (val) {
            return "" + val;
        },

        defaultConfig: {
            injectIntoThis: true,
            injectInto: null,
            properties: ["spy", "stub", "mock", "clock", "server", "requests"],
            useFakeTimers: true,
            useFakeServer: true
        },

        timesInWords: function timesInWords(count) {
            return count == 1 && "once" ||
                count == 2 && "twice" ||
                count == 3 && "thrice" ||
                (count || 0) + " times";
        },

        calledInOrder: function (spies) {
            for (var i = 1, l = spies.length; i < l; i++) {
                if (!spies[i - 1].calledBefore(spies[i])) {
                    return false;
                }
            }

            return true;
        },

        orderByFirstCall: function (spies) {
            return spies.sort(function (a, b) {
                // uuid, won't ever be equal
                var aCall = a.getCall(0);
                var bCall = b.getCall(0);
                var aId = aCall && aCall.callId || -1;
                var bId = bCall && bCall.callId || -1;

                return aId < bId ? -1 : 1;
            });
        },

        log: function () {},

        logError: function (label, err) {
            var msg = label + " threw exception: "
            sinon.log(msg + "[" + err.name + "] " + err.message);
            if (err.stack) { sinon.log(err.stack); }

            setTimeout(function () {
                err.message = msg + err.message;
                throw err;
            }, 0);
        },

        typeOf: function (value) {
            if (value === null) {
              return "null";
            }
            var string = Object.prototype.toString.call(value);
            return string.substring(8, string.length - 1).toLowerCase();
        }
    };

    var isNode = typeof module == "object" && typeof require == "function";

    if (isNode) {
        try {
            buster = { format: require("buster-format") };
        } catch (e) {}
        module.exports = sinon;
        module.exports.spy = require("./sinon/spy");
        module.exports.stub = require("./sinon/stub");
        module.exports.mock = require("./sinon/mock");
        module.exports.collection = require("./sinon/collection");
        module.exports.assert = require("./sinon/assert");
        module.exports.sandbox = require("./sinon/sandbox");
        module.exports.test = require("./sinon/test");
        module.exports.testCase = require("./sinon/test_case");
        module.exports.assert = require("./sinon/assert");
        module.exports.match = require("./sinon/match");
    }

    if (buster) {
        var formatter = sinon.create(buster.format);
        formatter.quoteStrings = false;
        sinon.format = function () {
            return formatter.ascii.apply(formatter, arguments);
        };
    } else if (isNode) {
        try {
            var util = require("util");
            sinon.format = function (value) {
                return typeof value == "object" && value.toString === Object.prototype.toString ? util.inspect(value) : value;
            };
        } catch (e) {
            /* Node, but no util module - would be very old, but better safe than
             sorry */
        }
    }

    return sinon;
}(typeof buster == "object" && buster));

/* @depend ../sinon.js */
/*jslint eqeqeq: false, onevar: false, plusplus: false*/
/*global module, require, sinon*/
/**
 * Match functions
 *
 * @author Maximilian Antoni (mail@maxantoni.de)
 * @license BSD
 *
 * Copyright (c) 2012 Maximilian Antoni
 */

(function (sinon) {
    var commonJSModule = typeof module == "object" && typeof require == "function";

    if (!sinon && commonJSModule) {
        sinon = require("../sinon");
    }

    if (!sinon) {
        return;
    }

    function assertType(value, type, name) {
        var actual = sinon.typeOf(value);
        if (actual !== type) {
            throw new TypeError("Expected type of " + name + " to be " +
                type + ", but was " + actual);
        }
    }

    var matcher = {
        toString: function () {
            return this.message;
        }
    };

    function isMatcher(object) {
        return matcher.isPrototypeOf(object);
    }

    function matchObject(expectation, actual) {
        if (actual === null || actual === undefined) {
            return false;
        }
        for (var key in expectation) {
            if (expectation.hasOwnProperty(key)) {
                var exp = expectation[key];
                var act = actual[key];
                if (match.isMatcher(exp)) {
                    if (!exp.test(act)) {
                        return false;
                    }
                } else if (sinon.typeOf(exp) === "object") {
                    if (!matchObject(exp, act)) {
                        return false;
                    }
                } else if (!sinon.deepEqual(exp, act)) {
                    return false;
                }
            }
        }
        return true;
    }

    matcher.or = function (m2) {
        if (!isMatcher(m2)) {
            throw new TypeError("Matcher expected");
        }
        var m1 = this;
        var or = sinon.create(matcher);
        or.test = function (actual) {
            return m1.test(actual) || m2.test(actual);
        };
        or.message = m1.message + ".or(" + m2.message + ")";
        return or;
    };

    matcher.and = function (m2) {
        if (!isMatcher(m2)) {
            throw new TypeError("Matcher expected");
        }
        var m1 = this;
        var and = sinon.create(matcher);
        and.test = function (actual) {
            return m1.test(actual) && m2.test(actual);
        };
        and.message = m1.message + ".and(" + m2.message + ")";
        return and;
    };

    var match = function (expectation, message) {
        var m = sinon.create(matcher);
        var type = sinon.typeOf(expectation);
        switch (type) {
        case "object":
            if (typeof expectation.test === "function") {
                m.test = function (actual) {
                    return expectation.test(actual) === true;
                };
                m.message = "match(" + sinon.functionName(expectation.test) + ")";
                return m;
            }
            var str = [];
            for (var key in expectation) {
                if (expectation.hasOwnProperty(key)) {
                    str.push(key + ": " + expectation[key]);
                }
            }
            m.test = function (actual) {
                return matchObject(expectation, actual);
            };
            m.message = "match(" + str.join(", ") + ")";
            break;
        case "number":
            m.test = function (actual) {
                return expectation == actual;
            };
            break;
        case "string":
            m.test = function (actual) {
                if (typeof actual !== "string") {
                    return false;
                }
                return actual.indexOf(expectation) !== -1;
            };
            m.message = "match(\"" + expectation + "\")";
            break;
        case "regexp":
            m.test = function (actual) {
                if (typeof actual !== "string") {
                    return false;
                }
                return expectation.test(actual);
            };
            break;
        case "function":
            m.test = expectation;
            if (message) {
                m.message = message;
            } else {
                m.message = "match(" + sinon.functionName(expectation) + ")";
            }
            break;
        default:
            m.test = function (actual) {
              return sinon.deepEqual(expectation, actual);
            };
        }
        if (!m.message) {
            m.message = "match(" + expectation + ")";
        }
        return m;
    };

    match.isMatcher = isMatcher;

    match.any = match(function () {
        return true;
    }, "any");

    match.defined = match(function (actual) {
        return actual !== null && actual !== undefined;
    }, "defined");

    match.truthy = match(function (actual) {
        return !!actual;
    }, "truthy");

    match.falsy = match(function (actual) {
        return !actual;
    }, "falsy");

    match.same = function (expectation) {
        return match(function (actual) {
            return expectation === actual;
        }, "same(" + expectation + ")");
    };

    match.typeOf = function (type) {
        assertType(type, "string", "type");
        return match(function (actual) {
            return sinon.typeOf(actual) === type;
        }, "typeOf(\"" + type + "\")");
    };

    match.instanceOf = function (type) {
        assertType(type, "function", "type");
        return match(function (actual) {
            return actual instanceof type;
        }, "instanceOf(" + sinon.functionName(type) + ")");
    };

    function createPropertyMatcher(propertyTest, messagePrefix) {
        return function (property, value) {
            assertType(property, "string", "property");
            var onlyProperty = arguments.length === 1;
            var message = messagePrefix + "(\"" + property + "\"";
            if (!onlyProperty) {
                message += ", " + value;
            }
            message += ")";
            return match(function (actual) {
                if (actual === undefined || actual === null ||
                        !propertyTest(actual, property)) {
                    return false;
                }
                return onlyProperty || sinon.deepEqual(value, actual[property]);
            }, message);
        };
    }

    match.has = createPropertyMatcher(function (actual, property) {
        if (typeof actual === "object") {
            return property in actual;
        }
        return actual[property] !== undefined;
    }, "has");

    match.hasOwn = createPropertyMatcher(function (actual, property) {
        return actual.hasOwnProperty(property);
    }, "hasOwn");

    match.bool = match.typeOf("boolean");
    match.number = match.typeOf("number");
    match.string = match.typeOf("string");
    match.object = match.typeOf("object");
    match.func = match.typeOf("function");
    match.array = match.typeOf("array");
    match.regexp = match.typeOf("regexp");
    match.date = match.typeOf("date");

    if (commonJSModule) {
        module.exports = match;
    } else {
        sinon.match = match;
    }
}(typeof sinon == "object" && sinon || null));

/**
 * @depend ../sinon.js
 * @depend match.js
 */
/*jslint eqeqeq: false, onevar: false, plusplus: false*/
/*global module, require, sinon*/
/**
 * Spy functions
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2011 Christian Johansen
 */

(function (sinon) {
    var commonJSModule = typeof module == "object" && typeof require == "function";
    var spyCall;
    var callId = 0;
    var push = [].push;
    var slice = Array.prototype.slice;

    if (!sinon && commonJSModule) {
        sinon = require("../sinon");
    }

    if (!sinon) {
        return;
    }

    function spy(object, property) {
        if (!property && typeof object == "function") {
            return spy.create(object);
        }

        if (!object && !property) {
            return spy.create(function () {});
        }

        var method = object[property];
        return sinon.wrapMethod(object, property, spy.create(method));
    }

    sinon.extend(spy, (function () {

        function delegateToCalls(api, method, matchAny, actual, notCalled) {
            api[method] = function () {
                if (!this.called) {
                    if (notCalled) {
                        return notCalled.apply(this, arguments);
                    }
                    return false;
                }

                var currentCall;
                var matches = 0;

                for (var i = 0, l = this.callCount; i < l; i += 1) {
                    currentCall = this.getCall(i);

                    if (currentCall[actual || method].apply(currentCall, arguments)) {
                        matches += 1;

                        if (matchAny) {
                            return true;
                        }
                    }
                }

                return matches === this.callCount;
            };
        }

        function matchingFake(fakes, args, strict) {
            if (!fakes) {
                return;
            }

            var alen = args.length;

            for (var i = 0, l = fakes.length; i < l; i++) {
                if (fakes[i].matches(args, strict)) {
                    return fakes[i];
                }
            }
        }

        function incrementCallCount() {
            this.called = true;
            this.callCount += 1;
            this.notCalled = false;
            this.calledOnce = this.callCount == 1;
            this.calledTwice = this.callCount == 2;
            this.calledThrice = this.callCount == 3;
        }

        function createCallProperties() {
            this.firstCall = this.getCall(0);
            this.secondCall = this.getCall(1);
            this.thirdCall = this.getCall(2);
            this.lastCall = this.getCall(this.callCount - 1);
        }

        var uuid = 0;

        // Public API
        var spyApi = {
            reset: function () {
                this.called = false;
                this.notCalled = true;
                this.calledOnce = false;
                this.calledTwice = false;
                this.calledThrice = false;
                this.callCount = 0;
                this.firstCall = null;
                this.secondCall = null;
                this.thirdCall = null;
                this.lastCall = null;
                this.args = [];
                this.returnValues = [];
                this.thisValues = [];
                this.exceptions = [];
                this.callIds = [];
                if (this.fakes) {
                    for (var i = 0; i < this.fakes.length; i++) {
                        this.fakes[i].reset();
                    }
                }
            },

            create: function create(func) {
                var name;

                if (typeof func != "function") {
                    func = function () {};
                } else {
                    name = sinon.functionName(func);
                }

                function proxy() {
                    return proxy.invoke(func, this, slice.call(arguments));
                }

                sinon.extend(proxy, spy);
                delete proxy.create;
                sinon.extend(proxy, func);

                proxy.reset();
                proxy.prototype = func.prototype;
                proxy.displayName = name || "spy";
                proxy.toString = sinon.functionToString;
                proxy._create = sinon.spy.create;
                proxy.id = "spy#" + uuid++;

                return proxy;
            },

            invoke: function invoke(func, thisValue, args) {
                var matching = matchingFake(this.fakes, args);
                var exception, returnValue;

                incrementCallCount.call(this);
                push.call(this.thisValues, thisValue);
                push.call(this.args, args);
                push.call(this.callIds, callId++);

                try {
                    if (matching) {
                        returnValue = matching.invoke(func, thisValue, args);
                    } else {
                        returnValue = (this.func || func).apply(thisValue, args);
                    }
                } catch (e) {
                    push.call(this.returnValues, undefined);
                    exception = e;
                    throw e;
                } finally {
                    push.call(this.exceptions, exception);
                }

                push.call(this.returnValues, returnValue);

                createCallProperties.call(this);

                return returnValue;
            },

            getCall: function getCall(i) {
                if (i < 0 || i >= this.callCount) {
                    return null;
                }

                return spyCall.create(this, this.thisValues[i], this.args[i],
                                      this.returnValues[i], this.exceptions[i],
                                      this.callIds[i]);
            },

            calledBefore: function calledBefore(spyFn) {
                if (!this.called) {
                    return false;
                }

                if (!spyFn.called) {
                    return true;
                }

                return this.callIds[0] < spyFn.callIds[spyFn.callIds.length - 1];
            },

            calledAfter: function calledAfter(spyFn) {
                if (!this.called || !spyFn.called) {
                    return false;
                }

                return this.callIds[this.callCount - 1] > spyFn.callIds[spyFn.callCount - 1];
            },

            withArgs: function () {
                var args = slice.call(arguments);

                if (this.fakes) {
                    var match = matchingFake(this.fakes, args, true);

                    if (match) {
                        return match;
                    }
                } else {
                    this.fakes = [];
                }

                var original = this;
                var fake = this._create();
                fake.matchingAguments = args;
                push.call(this.fakes, fake);

                fake.withArgs = function () {
                    return original.withArgs.apply(original, arguments);
                };

                for (var i = 0; i < this.args.length; i++) {
                    if (fake.matches(this.args[i])) {
                        incrementCallCount.call(fake);
                        push.call(fake.thisValues, this.thisValues[i]);
                        push.call(fake.args, this.args[i]);
                        push.call(fake.returnValues, this.returnValues[i]);
                        push.call(fake.exceptions, this.exceptions[i]);
                        push.call(fake.callIds, this.callIds[i]);
                    }
                }
                createCallProperties.call(fake);

                return fake;
            },

            matches: function (args, strict) {
                var margs = this.matchingAguments;

                if (margs.length <= args.length &&
                    sinon.deepEqual(margs, args.slice(0, margs.length))) {
                    return !strict || margs.length == args.length;
                }
            },

            printf: function (format) {
                var spy = this;
                var args = slice.call(arguments, 1);
                var formatter;

                return (format || "").replace(/%(.)/g, function (match, specifyer) {
                    formatter = spyApi.formatters[specifyer];

                    if (typeof formatter == "function") {
                        return formatter.call(null, spy, args);
                    } else if (!isNaN(parseInt(specifyer), 10)) {
                        return sinon.format(args[specifyer - 1]);
                    }

                    return "%" + specifyer;
                });
            }
        };

        delegateToCalls(spyApi, "calledOn", true);
        delegateToCalls(spyApi, "alwaysCalledOn", false, "calledOn");
        delegateToCalls(spyApi, "calledWith", true);
        delegateToCalls(spyApi, "calledWithMatch", true);
        delegateToCalls(spyApi, "alwaysCalledWith", false, "calledWith");
        delegateToCalls(spyApi, "alwaysCalledWithMatch", false, "calledWithMatch");
        delegateToCalls(spyApi, "calledWithExactly", true);
        delegateToCalls(spyApi, "alwaysCalledWithExactly", false, "calledWithExactly");
        delegateToCalls(spyApi, "neverCalledWith", false, "notCalledWith",
            function () { return true; });
        delegateToCalls(spyApi, "neverCalledWithMatch", false, "notCalledWithMatch",
            function () { return true; });
        delegateToCalls(spyApi, "threw", true);
        delegateToCalls(spyApi, "alwaysThrew", false, "threw");
        delegateToCalls(spyApi, "returned", true);
        delegateToCalls(spyApi, "alwaysReturned", false, "returned");
        delegateToCalls(spyApi, "calledWithNew", true);
        delegateToCalls(spyApi, "alwaysCalledWithNew", false, "calledWithNew");
        delegateToCalls(spyApi, "callArg", false, "callArgWith", function () {
            throw new Error(this.toString() + " cannot call arg since it was not yet invoked.");
        });
        spyApi.callArgWith = spyApi.callArg;
        delegateToCalls(spyApi, "yield", false, "yield", function () {
            throw new Error(this.toString() + " cannot yield since it was not yet invoked.");
        });
        // "invokeCallback" is an alias for "yield" since "yield" is invalid in strict mode.
        spyApi.invokeCallback = spyApi.yield;
        delegateToCalls(spyApi, "yieldTo", false, "yieldTo", function (property) {
            throw new Error(this.toString() + " cannot yield to '" + property +
                "' since it was not yet invoked.");
        });

        spyApi.formatters = {
            "c": function (spy) {
                return sinon.timesInWords(spy.callCount);
            },

            "n": function (spy) {
                return spy.toString();
            },

            "C": function (spy) {
                var calls = [];

                for (var i = 0, l = spy.callCount; i < l; ++i) {
                    push.call(calls, "    " + spy.getCall(i).toString());
                }

                return calls.length > 0 ? "\n" + calls.join("\n") : "";
            },

            "t": function (spy) {
                var objects = [];

                for (var i = 0, l = spy.callCount; i < l; ++i) {
                    push.call(objects, sinon.format(spy.thisValues[i]));
                }

                return objects.join(", ");
            },

            "*": function (spy, args) {
                var formatted = [];

                for (var i = 0, l = args.length; i < l; ++i) {
                    push.call(formatted, sinon.format(args[i]));
                }

                return formatted.join(", ");
            }
        };

        return spyApi;
    }()));

    spyCall = (function () {

        function throwYieldError(proxy, text, args) {
            var msg = sinon.functionName(proxy) + text;
            if (args.length) {
                msg += " Received [" + slice.call(args).join(", ") + "]";
            }
            throw new Error(msg);
        }

        return {
            create: function create(spy, thisValue, args, returnValue, exception, id) {
                var proxyCall = sinon.create(spyCall);
                delete proxyCall.create;
                proxyCall.proxy = spy;
                proxyCall.thisValue = thisValue;
                proxyCall.args = args;
                proxyCall.returnValue = returnValue;
                proxyCall.exception = exception;
                proxyCall.callId = typeof id == "number" && id || callId++;

                return proxyCall;
            },

            calledOn: function calledOn(thisValue) {
                return this.thisValue === thisValue;
            },

            calledWith: function calledWith() {
                for (var i = 0, l = arguments.length; i < l; i += 1) {
                    if (!sinon.deepEqual(arguments[i], this.args[i])) {
                        return false;
                    }
                }

                return true;
            },

            calledWithMatch: function calledWithMatch() {
              for (var i = 0, l = arguments.length; i < l; i += 1) {
                  var actual = this.args[i];
                  var expectation = arguments[i];
                  if (!sinon.match || !sinon.match(expectation).test(actual)) {
                      return false;
                  }
              }
              return true;
            },

            calledWithExactly: function calledWithExactly() {
                return arguments.length == this.args.length &&
                    this.calledWith.apply(this, arguments);
            },

            notCalledWith: function notCalledWith() {
                return !this.calledWith.apply(this, arguments);
            },

            notCalledWithMatch: function notCalledWithMatch() {
              return !this.calledWithMatch.apply(this, arguments);
            },

            returned: function returned(value) {
                return sinon.deepEqual(value, this.returnValue);
            },

            threw: function threw(error) {
                if (typeof error == "undefined" || !this.exception) {
                    return !!this.exception;
                }

                if (typeof error == "string") {
                    return this.exception.name == error;
                }

                return this.exception === error;
            },

            calledWithNew: function calledWithNew(thisValue) {
                return this.thisValue instanceof this.proxy;
            },

            calledBefore: function (other) {
                return this.callId < other.callId;
            },

            calledAfter: function (other) {
                return this.callId > other.callId;
            },

            callArg: function (pos) {
                this.args[pos]();
            },

            callArgWith: function (pos) {
                var args = slice.call(arguments, 1);
                this.args[pos].apply(null, args);
            },

            "yield": function () {
                var args = this.args;
                for (var i = 0, l = args.length; i < l; ++i) {
                    if (typeof args[i] === "function") {
                        args[i].apply(null, slice.call(arguments));
                        return;
                    }
                }
                throwYieldError(this.proxy, " cannot yield since no callback was passed.", args);
            },

            yieldTo: function (prop) {
                var args = this.args;
                for (var i = 0, l = args.length; i < l; ++i) {
                    if (args[i] && typeof args[i][prop] === "function") {
                        args[i][prop].apply(null, slice.call(arguments, 1));
                        return;
                    }
                }
                throwYieldError(this.proxy, " cannot yield to '" + prop +
                    "' since no callback was passed.", args);
            },

            toString: function () {
                var callStr = this.proxy.toString() + "(";
                var args = [];

                for (var i = 0, l = this.args.length; i < l; ++i) {
                    push.call(args, sinon.format(this.args[i]));
                }

                callStr = callStr + args.join(", ") + ")";

                if (typeof this.returnValue != "undefined") {
                    callStr += " => " + sinon.format(this.returnValue);
                }

                if (this.exception) {
                    callStr += " !" + this.exception.name;

                    if (this.exception.message) {
                        callStr += "(" + this.exception.message + ")";
                    }
                }

                return callStr;
            }
        };
    }());

    spy.spyCall = spyCall;

    // This steps outside the module sandbox and will be removed
    sinon.spyCall = spyCall;

    if (commonJSModule) {
        module.exports = spy;
    } else {
        sinon.spy = spy;
    }
}(typeof sinon == "object" && sinon || null));

/**
 * @depend ../sinon.js
 * @depend spy.js
 */
/*jslint eqeqeq: false, onevar: false*/
/*global module, require, sinon*/
/**
 * Stub functions
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2011 Christian Johansen
 */

(function (sinon) {
    var commonJSModule = typeof module == "object" && typeof require == "function";

    if (!sinon && commonJSModule) {
        sinon = require("../sinon");
    }

    if (!sinon) {
        return;
    }

    function stub(object, property, func) {
        if (!!func && typeof func != "function") {
            throw new TypeError("Custom stub should be function");
        }

        var wrapper;

        if (func) {
            wrapper = sinon.spy && sinon.spy.create ? sinon.spy.create(func) : func;
        } else {
            wrapper = stub.create();
        }

        if (!object && !property) {
            return sinon.stub.create();
        }

        if (!property && !!object && typeof object == "object") {
            for (var prop in object) {
                if (typeof object[prop] === "function") {
                    stub(object, prop);
                }
            }

            return object;
        }

        return sinon.wrapMethod(object, property, wrapper);
    }

    function getCallback(stub, args) {
        if (stub.callArgAt < 0) {
            for (var i = 0, l = args.length; i < l; ++i) {
                if (!stub.callArgProp && typeof args[i] == "function") {
                    return args[i];
                }

                if (stub.callArgProp && args[i] &&
                    typeof args[i][stub.callArgProp] == "function") {
                    return args[i][stub.callArgProp];
                }
            }

            return null;
        }

        return args[stub.callArgAt];
    }

    var join = Array.prototype.join;

    function getCallbackError(stub, func, args) {
        if (stub.callArgAt < 0) {
            var msg;

            if (stub.callArgProp) {
                msg = sinon.functionName(stub) +
                    " expected to yield to '" + stub.callArgProp +
                    "', but no object with such a property was passed."
            } else {
                msg = sinon.functionName(stub) +
                            " expected to yield, but no callback was passed."
            }

            if (args.length > 0) {
                msg += " Received [" + join.call(args, ", ") + "]";
            }

            return msg;
        }

        return "argument at index " + stub.callArgAt + " is not a function: " + func;
    }

    var nextTick = (function () {
        if (typeof process === "object" && typeof process.nextTick === "function") {
            return process.nextTick;
        } else if (typeof msSetImmediate === "function") {
            return msSetImmediate.bind(window);
        } else if (typeof setImmediate === "function") {
            return setImmediate;
        } else {
            return function (callback) {
                setTimeout(callback, 0);
            };
        }
    })();

    function callCallback(stub, args) {
        if (typeof stub.callArgAt == "number") {
            var func = getCallback(stub, args);

            if (typeof func != "function") {
                throw new TypeError(getCallbackError(stub, func, args));
            }

            if (stub.callbackAsync) {
                nextTick(function() {
                    func.apply(stub.callbackContext, stub.callbackArguments);
                });
            } else {
                func.apply(stub.callbackContext, stub.callbackArguments);
            }
        }
    }

    var uuid = 0;

    sinon.extend(stub, (function () {
        var slice = Array.prototype.slice, proto;

        function throwsException(error, message) {
            if (typeof error == "string") {
                this.exception = new Error(message || "");
                this.exception.name = error;
            } else if (!error) {
                this.exception = new Error("Error");
            } else {
                this.exception = error;
            }

            return this;
        }

        proto = {
            create: function create() {
                var functionStub = function () {

                    callCallback(functionStub, arguments);

                    if (functionStub.exception) {
                        throw functionStub.exception;
                    } else if (typeof functionStub.returnArgAt == 'number') {
                        return arguments[functionStub.returnArgAt];
                    } else if (functionStub.returnThis) {
                        return this;
                    }
                    return functionStub.returnValue;
                };

                functionStub.id = "stub#" + uuid++;
                var orig = functionStub;
                functionStub = sinon.spy.create(functionStub);
                functionStub.func = orig;

                sinon.extend(functionStub, stub);
                functionStub._create = sinon.stub.create;
                functionStub.displayName = "stub";
                functionStub.toString = sinon.functionToString;

                return functionStub;
            },

            returns: function returns(value) {
                this.returnValue = value;

                return this;
            },

            returnsArg: function returnsArg(pos) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }

                this.returnArgAt = pos;

                return this;
            },

            returnsThis: function returnsThis() {
                this.returnThis = true;

                return this;
            },

            "throws": throwsException,
            throwsException: throwsException,

            callsArg: function callsArg(pos) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }

                this.callArgAt = pos;
                this.callbackArguments = [];

                return this;
            },

            callsArgOn: function callsArgOn(pos, context) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }
                if (typeof context != "object") {
                    throw new TypeError("argument context is not an object");
                }

                this.callArgAt = pos;
                this.callbackArguments = [];
                this.callbackContext = context;

                return this;
            },

            callsArgWith: function callsArgWith(pos) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }

                this.callArgAt = pos;
                this.callbackArguments = slice.call(arguments, 1);

                return this;
            },

            callsArgOnWith: function callsArgWith(pos, context) {
                if (typeof pos != "number") {
                    throw new TypeError("argument index is not number");
                }
                if (typeof context != "object") {
                    throw new TypeError("argument context is not an object");
                }

                this.callArgAt = pos;
                this.callbackArguments = slice.call(arguments, 2);
                this.callbackContext = context;

                return this;
            },

            yields: function () {
                this.callArgAt = -1;
                this.callbackArguments = slice.call(arguments, 0);

                return this;
            },

            yieldsOn: function (context) {
                if (typeof context != "object") {
                    throw new TypeError("argument context is not an object");
                }

                this.callArgAt = -1;
                this.callbackArguments = slice.call(arguments, 1);
                this.callbackContext = context;

                return this;
            },

            yieldsTo: function (prop) {
                this.callArgAt = -1;
                this.callArgProp = prop;
                this.callbackArguments = slice.call(arguments, 1);

                return this;
            },

            yieldsToOn: function (prop, context) {
                if (typeof context != "object") {
                    throw new TypeError("argument context is not an object");
                }

                this.callArgAt = -1;
                this.callArgProp = prop;
                this.callbackArguments = slice.call(arguments, 2);
                this.callbackContext = context;

                return this;
            }
        };
        
        // create asynchronous versions of callsArg* and yields* methods
        for (var method in proto) {
            if (proto.hasOwnProperty(method) && method.match(/^(callsArg|yields)/)) {
                proto[method + 'Async'] = (function (syncFnName) {
                    return function () {
                        this.callbackAsync = true;
                        return this[syncFnName].apply(this, arguments);
                    };
                })(method);
            }
        }
        
        return proto;
        
    }()));

    if (commonJSModule) {
        module.exports = stub;
    } else {
        sinon.stub = stub;
    }
}(typeof sinon == "object" && sinon || null));

/**
 * @depend ../sinon.js
 * @depend stub.js
 */
/*jslint eqeqeq: false, onevar: false, nomen: false*/
/*global module, require, sinon*/
/**
 * Mock functions.
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2011 Christian Johansen
 */

(function (sinon) {
    var commonJSModule = typeof module == "object" && typeof require == "function";
    var push = [].push;

    if (!sinon && commonJSModule) {
        sinon = require("../sinon");
    }

    if (!sinon) {
        return;
    }

    function mock(object) {
        if (!object) {
            return sinon.expectation.create("Anonymous mock");
        }

        return mock.create(object);
    }

    sinon.mock = mock;

    sinon.extend(mock, (function () {
        function each(collection, callback) {
            if (!collection) {
                return;
            }

            for (var i = 0, l = collection.length; i < l; i += 1) {
                callback(collection[i]);
            }
        }

        return {
            create: function create(object) {
                if (!object) {
                    throw new TypeError("object is null");
                }

                var mockObject = sinon.extend({}, mock);
                mockObject.object = object;
                delete mockObject.create;

                return mockObject;
            },

            expects: function expects(method) {
                if (!method) {
                    throw new TypeError("method is falsy");
                }

                if (!this.expectations) {
                    this.expectations = {};
                    this.proxies = [];
                }

                if (!this.expectations[method]) {
                    this.expectations[method] = [];
                    var mockObject = this;

                    sinon.wrapMethod(this.object, method, function () {
                        return mockObject.invokeMethod(method, this, arguments);
                    });

                    push.call(this.proxies, method);
                }

                var expectation = sinon.expectation.create(method);
                push.call(this.expectations[method], expectation);

                return expectation;
            },

            restore: function restore() {
                var object = this.object;

                each(this.proxies, function (proxy) {
                    if (typeof object[proxy].restore == "function") {
                        object[proxy].restore();
                    }
                });
            },

            verify: function verify() {
                var expectations = this.expectations || {};
                var messages = [], met = [];

                each(this.proxies, function (proxy) {
                    each(expectations[proxy], function (expectation) {
                        if (!expectation.met()) {
                            push.call(messages, expectation.toString());
                        } else {
                            push.call(met, expectation.toString());
                        }
                    });
                });

                this.restore();

                if (messages.length > 0) {
                    sinon.expectation.fail(messages.concat(met).join("\n"));
                } else {
                    sinon.expectation.pass(messages.concat(met).join("\n"));
                }

                return true;
            },

            invokeMethod: function invokeMethod(method, thisValue, args) {
                var expectations = this.expectations && this.expectations[method];
                var length = expectations && expectations.length || 0, i;

                for (i = 0; i < length; i += 1) {
                    if (!expectations[i].met() &&
                        expectations[i].allowsCall(thisValue, args)) {
                        return expectations[i].apply(thisValue, args);
                    }
                }

                var messages = [], available, exhausted = 0;

                for (i = 0; i < length; i += 1) {
                    if (expectations[i].allowsCall(thisValue, args)) {
                        available = available || expectations[i];
                    } else {
                        exhausted += 1;
                    }
                    push.call(messages, "    " + expectations[i].toString());
                }

                if (exhausted === 0) {
                    return available.apply(thisValue, args);
                }

                messages.unshift("Unexpected call: " + sinon.spyCall.toString.call({
                    proxy: method,
                    args: args
                }));

                sinon.expectation.fail(messages.join("\n"));
            }
        };
    }()));

    var times = sinon.timesInWords;

    sinon.expectation = (function () {
        var slice = Array.prototype.slice;
        var _invoke = sinon.spy.invoke;

        function callCountInWords(callCount) {
            if (callCount == 0) {
                return "never called";
            } else {
                return "called " + times(callCount);
            }
        }

        function expectedCallCountInWords(expectation) {
            var min = expectation.minCalls;
            var max = expectation.maxCalls;

            if (typeof min == "number" && typeof max == "number") {
                var str = times(min);

                if (min != max) {
                    str = "at least " + str + " and at most " + times(max);
                }

                return str;
            }

            if (typeof min == "number") {
                return "at least " + times(min);
            }

            return "at most " + times(max);
        }

        function receivedMinCalls(expectation) {
            var hasMinLimit = typeof expectation.minCalls == "number";
            return !hasMinLimit || expectation.callCount >= expectation.minCalls;
        }

        function receivedMaxCalls(expectation) {
            if (typeof expectation.maxCalls != "number") {
                return false;
            }

            return expectation.callCount == expectation.maxCalls;
        }

        return {
            minCalls: 1,
            maxCalls: 1,

            create: function create(methodName) {
                var expectation = sinon.extend(sinon.stub.create(), sinon.expectation);
                delete expectation.create;
                expectation.method = methodName;

                return expectation;
            },

            invoke: function invoke(func, thisValue, args) {
                this.verifyCallAllowed(thisValue, args);

                return _invoke.apply(this, arguments);
            },

            atLeast: function atLeast(num) {
                if (typeof num != "number") {
                    throw new TypeError("'" + num + "' is not number");
                }

                if (!this.limitsSet) {
                    this.maxCalls = null;
                    this.limitsSet = true;
                }

                this.minCalls = num;

                return this;
            },

            atMost: function atMost(num) {
                if (typeof num != "number") {
                    throw new TypeError("'" + num + "' is not number");
                }

                if (!this.limitsSet) {
                    this.minCalls = null;
                    this.limitsSet = true;
                }

                this.maxCalls = num;

                return this;
            },

            never: function never() {
                return this.exactly(0);
            },

            once: function once() {
                return this.exactly(1);
            },

            twice: function twice() {
                return this.exactly(2);
            },

            thrice: function thrice() {
                return this.exactly(3);
            },

            exactly: function exactly(num) {
                if (typeof num != "number") {
                    throw new TypeError("'" + num + "' is not a number");
                }

                this.atLeast(num);
                return this.atMost(num);
            },

            met: function met() {
                return !this.failed && receivedMinCalls(this);
            },

            verifyCallAllowed: function verifyCallAllowed(thisValue, args) {
                if (receivedMaxCalls(this)) {
                    this.failed = true;
                    sinon.expectation.fail(this.method + " already called " + times(this.maxCalls));
                }

                if ("expectedThis" in this && this.expectedThis !== thisValue) {
                    sinon.expectation.fail(this.method + " called with " + thisValue + " as thisValue, expected " +
                        this.expectedThis);
                }

                if (!("expectedArguments" in this)) {
                    return;
                }

                if (!args) {
                    sinon.expectation.fail(this.method + " received no arguments, expected " +
                        this.expectedArguments.join());
                }

                if (args.length < this.expectedArguments.length) {
                    sinon.expectation.fail(this.method + " received too few arguments (" + args.join() +
                        "), expected " + this.expectedArguments.join());
                }

                if (this.expectsExactArgCount &&
                    args.length != this.expectedArguments.length) {
                    sinon.expectation.fail(this.method + " received too many arguments (" + args.join() +
                        "), expected " + this.expectedArguments.join());
                }

                for (var i = 0, l = this.expectedArguments.length; i < l; i += 1) {
                    if (!sinon.deepEqual(this.expectedArguments[i], args[i])) {
                        sinon.expectation.fail(this.method + " received wrong arguments (" + args.join() +
                            "), expected " + this.expectedArguments.join());
                    }
                }
            },

            allowsCall: function allowsCall(thisValue, args) {
                if (this.met() && receivedMaxCalls(this)) {
                    return false;
                }

                if ("expectedThis" in this && this.expectedThis !== thisValue) {
                    return false;
                }

                if (!("expectedArguments" in this)) {
                    return true;
                }

                args = args || [];

                if (args.length < this.expectedArguments.length) {
                    return false;
                }

                if (this.expectsExactArgCount &&
                    args.length != this.expectedArguments.length) {
                    return false;
                }

                for (var i = 0, l = this.expectedArguments.length; i < l; i += 1) {
                    if (!sinon.deepEqual(this.expectedArguments[i], args[i])) {
                        return false;
                    }
                }

                return true;
            },

            withArgs: function withArgs() {
                this.expectedArguments = slice.call(arguments);
                return this;
            },

            withExactArgs: function withExactArgs() {
                this.withArgs.apply(this, arguments);
                this.expectsExactArgCount = true;
                return this;
            },

            on: function on(thisValue) {
                this.expectedThis = thisValue;
                return this;
            },

            toString: function () {
                var args = (this.expectedArguments || []).slice();

                if (!this.expectsExactArgCount) {
                    push.call(args, "[...]");
                }

                var callStr = sinon.spyCall.toString.call({
                    proxy: this.method, args: args
                });

                var message = callStr.replace(", [...", "[, ...") + " " +
                    expectedCallCountInWords(this);

                if (this.met()) {
                    return "Expectation met: " + message;
                }

                return "Expected " + message + " (" +
                    callCountInWords(this.callCount) + ")";
            },

            verify: function verify() {
                if (!this.met()) {
                    sinon.expectation.fail(this.toString());
                } else {
                    sinon.expectation.pass(this.toString());
                }

                return true;
            },

            pass: function(message) {
              sinon.assert.pass(message);
            },
            fail: function (message) {
                var exception = new Error(message);
                exception.name = "ExpectationError";

                throw exception;
            }
        };
    }());

    if (commonJSModule) {
        module.exports = mock;
    } else {
        sinon.mock = mock;
    }
}(typeof sinon == "object" && sinon || null));

/**
 * @depend ../sinon.js
 * @depend stub.js
 * @depend mock.js
 */
/*jslint eqeqeq: false, onevar: false, forin: true*/
/*global module, require, sinon*/
/**
 * Collections of stubs, spies and mocks.
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2011 Christian Johansen
 */

(function (sinon) {
    var commonJSModule = typeof module == "object" && typeof require == "function";
    var push = [].push;

    if (!sinon && commonJSModule) {
        sinon = require("../sinon");
    }

    if (!sinon) {
        return;
    }

    function getFakes(fakeCollection) {
        if (!fakeCollection.fakes) {
            fakeCollection.fakes = [];
        }

        return fakeCollection.fakes;
    }

    function each(fakeCollection, method) {
        var fakes = getFakes(fakeCollection);

        for (var i = 0, l = fakes.length; i < l; i += 1) {
            if (typeof fakes[i][method] == "function") {
                fakes[i][method]();
            }
        }
    }

    function compact(fakeCollection) {
        var fakes = getFakes(fakeCollection);
        var i = 0;
        while (i < fakes.length) {
          fakes.splice(i, 1);
        }
    }

    var collection = {
        verify: function resolve() {
            each(this, "verify");
        },

        restore: function restore() {
            each(this, "restore");
            compact(this);
        },

        verifyAndRestore: function verifyAndRestore() {
            var exception;

            try {
                this.verify();
            } catch (e) {
                exception = e;
            }

            this.restore();

            if (exception) {
                throw exception;
            }
        },

        add: function add(fake) {
            push.call(getFakes(this), fake);
            return fake;
        },

        spy: function spy() {
            return this.add(sinon.spy.apply(sinon, arguments));
        },

        stub: function stub(object, property, value) {
            if (property) {
                var original = object[property];

                if (typeof original != "function") {
                    if (!object.hasOwnProperty(property)) {
                        throw new TypeError("Cannot stub non-existent own property " + property);
                    }

                    object[property] = value;

                    return this.add({
                        restore: function () {
                            object[property] = original;
                        }
                    });
                }
            }
            if (!property && !!object && typeof object == "object") {
                var stubbedObj = sinon.stub.apply(sinon, arguments);

                for (var prop in stubbedObj) {
                    if (typeof stubbedObj[prop] === "function") {
                        this.add(stubbedObj[prop]);
                    }
                }

                return stubbedObj;
            }

            return this.add(sinon.stub.apply(sinon, arguments));
        },

        mock: function mock() {
            return this.add(sinon.mock.apply(sinon, arguments));
        },

        inject: function inject(obj) {
            var col = this;

            obj.spy = function () {
                return col.spy.apply(col, arguments);
            };

            obj.stub = function () {
                return col.stub.apply(col, arguments);
            };

            obj.mock = function () {
                return col.mock.apply(col, arguments);
            };

            return obj;
        }
    };

    if (commonJSModule) {
        module.exports = collection;
    } else {
        sinon.collection = collection;
    }
}(typeof sinon == "object" && sinon || null));

/*jslint eqeqeq: false, plusplus: false, evil: true, onevar: false, browser: true, forin: false*/
/*global module, require, window*/
/**
 * Fake timer API
 * setTimeout
 * setInterval
 * clearTimeout
 * clearInterval
 * tick
 * reset
 * Date
 *
 * Inspired by jsUnitMockTimeOut from JsUnit
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2011 Christian Johansen
 */

if (typeof sinon == "undefined") {
    var sinon = {};
}

(function (global) {
    var id = 1;

    function addTimer(args, recurring) {
        if (args.length === 0) {
            throw new Error("Function requires at least 1 parameter");
        }

        var toId = id++;
        var delay = args[1] || 0;

        if (!this.timeouts) {
            this.timeouts = {};
        }

        this.timeouts[toId] = {
            id: toId,
            func: args[0],
            callAt: this.now + delay,
            invokeArgs: Array.prototype.slice.call(args, 2)
        };

        if (recurring === true) {
            this.timeouts[toId].interval = delay;
        }

        return toId;
    }

    function parseTime(str) {
        if (!str) {
            return 0;
        }

        var strings = str.split(":");
        var l = strings.length, i = l;
        var ms = 0, parsed;

        if (l > 3 || !/^(\d\d:){0,2}\d\d?$/.test(str)) {
            throw new Error("tick only understands numbers and 'h:m:s'");
        }

        while (i--) {
            parsed = parseInt(strings[i], 10);

            if (parsed >= 60) {
                throw new Error("Invalid time " + str);
            }

            ms += parsed * Math.pow(60, (l - i - 1));
        }

        return ms * 1000;
    }

    function createObject(object) {
        var newObject;

        if (Object.create) {
            newObject = Object.create(object);
        } else {
            var F = function () {};
            F.prototype = object;
            newObject = new F();
        }

        newObject.Date.clock = newObject;
        return newObject;
    }

    sinon.clock = {
        now: 0,

        create: function create(now) {
            var clock = createObject(this);

            if (typeof now == "number") {
                clock.now = now;
            }

            if (!!now && typeof now == "object") {
                throw new TypeError("now should be milliseconds since UNIX epoch");
            }

            return clock;
        },

        setTimeout: function setTimeout(callback, timeout) {
            return addTimer.call(this, arguments, false);
        },

        clearTimeout: function clearTimeout(timerId) {
            if (!this.timeouts) {
                this.timeouts = [];
            }

            if (timerId in this.timeouts) {
                delete this.timeouts[timerId];
            }
        },

        setInterval: function setInterval(callback, timeout) {
            return addTimer.call(this, arguments, true);
        },

        clearInterval: function clearInterval(timerId) {
            this.clearTimeout(timerId);
        },

        tick: function tick(ms) {
            ms = typeof ms == "number" ? ms : parseTime(ms);
            var tickFrom = this.now, tickTo = this.now + ms, previous = this.now;
            var timer = this.firstTimerInRange(tickFrom, tickTo);

            var firstException;
            while (timer && tickFrom <= tickTo) {
                if (this.timeouts[timer.id]) {
                    tickFrom = this.now = timer.callAt;
                    try {
                      this.callTimer(timer);
                    } catch (e) {
                      firstException = firstException || e;
                    }
                }

                timer = this.firstTimerInRange(previous, tickTo);
                previous = tickFrom;
            }

            this.now = tickTo;

            if (firstException) {
              throw firstException;
            }
        },

        firstTimerInRange: function (from, to) {
            var timer, smallest, originalTimer;

            for (var id in this.timeouts) {
                if (this.timeouts.hasOwnProperty(id)) {
                    if (this.timeouts[id].callAt < from || this.timeouts[id].callAt > to) {
                        continue;
                    }

                    if (!smallest || this.timeouts[id].callAt < smallest) {
                        originalTimer = this.timeouts[id];
                        smallest = this.timeouts[id].callAt;

                        timer = {
                            func: this.timeouts[id].func,
                            callAt: this.timeouts[id].callAt,
                            interval: this.timeouts[id].interval,
                            id: this.timeouts[id].id,
                            invokeArgs: this.timeouts[id].invokeArgs
                        };
                    }
                }
            }

            return timer || null;
        },

        callTimer: function (timer) {
            if (typeof timer.interval == "number") {
                this.timeouts[timer.id].callAt += timer.interval;
            } else {
                delete this.timeouts[timer.id];
            }

            try {
                if (typeof timer.func == "function") {
                    timer.func.apply(null, timer.invokeArgs);
                } else {
                    eval(timer.func);
                }
            } catch (e) {
              var exception = e;
            }

            if (!this.timeouts[timer.id]) {
                if (exception) {
                  throw exception;
                }
                return;
            }

            if (exception) {
              throw exception;
            }
        },

        reset: function reset() {
            this.timeouts = {};
        },

        Date: (function () {
            var NativeDate = Date;

            function ClockDate(year, month, date, hour, minute, second, ms) {
                // Defensive and verbose to avoid potential harm in passing
                // explicit undefined when user does not pass argument
                switch (arguments.length) {
                case 0:
                    return new NativeDate(ClockDate.clock.now);
                case 1:
                    return new NativeDate(year);
                case 2:
                    return new NativeDate(year, month);
                case 3:
                    return new NativeDate(year, month, date);
                case 4:
                    return new NativeDate(year, month, date, hour);
                case 5:
                    return new NativeDate(year, month, date, hour, minute);
                case 6:
                    return new NativeDate(year, month, date, hour, minute, second);
                default:
                    return new NativeDate(year, month, date, hour, minute, second, ms);
                }
            }

            return mirrorDateProperties(ClockDate, NativeDate);
        }())
    };

    function mirrorDateProperties(target, source) {
        if (source.now) {
            target.now = function now() {
                return target.clock.now;
            };
        } else {
            delete target.now;
        }

        if (source.toSource) {
            target.toSource = function toSource() {
                return source.toSource();
            };
        } else {
            delete target.toSource;
        }

        target.toString = function toString() {
            return source.toString();
        };

        target.prototype = source.prototype;
        target.parse = source.parse;
        target.UTC = source.UTC;
        target.prototype.toUTCString = source.prototype.toUTCString;
        return target;
    }

    var methods = ["Date", "setTimeout", "setInterval",
                   "clearTimeout", "clearInterval"];

    function restore() {
        var method;

        for (var i = 0, l = this.methods.length; i < l; i++) {
            method = this.methods[i];
            if (global[method].hadOwnProperty) {
                global[method] = this["_" + method];
            } else {
                delete global[method];
            }
        }

        // Prevent multiple executions which will completely remove these props
        this.methods = [];
    }

    function stubGlobal(method, clock) {
        clock[method].hadOwnProperty = Object.prototype.hasOwnProperty.call(global, method);
        clock["_" + method] = global[method];

        if (method == "Date") {
            var date = mirrorDateProperties(clock[method], global[method]);
            global[method] = date;
        } else {
            global[method] = function () {
                return clock[method].apply(clock, arguments);
            };

            for (var prop in clock[method]) {
                if (clock[method].hasOwnProperty(prop)) {
                    global[method][prop] = clock[method][prop];
                }
            }
        }

        global[method].clock = clock;
    }

    sinon.useFakeTimers = function useFakeTimers(now) {
        var clock = sinon.clock.create(now);
        clock.restore = restore;
        clock.methods = Array.prototype.slice.call(arguments,
                                                   typeof now == "number" ? 1 : 0);

        if (clock.methods.length === 0) {
            clock.methods = methods;
        }

        for (var i = 0, l = clock.methods.length; i < l; i++) {
            stubGlobal(clock.methods[i], clock);
        }

        return clock;
    };
}(typeof global != "undefined" && typeof global !== "function" ? global : this));

sinon.timers = {
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    setInterval: setInterval,
    clearInterval: clearInterval,
    Date: Date
};

if (typeof module == "object" && typeof require == "function") {
    module.exports = sinon;
}

/*jslint eqeqeq: false, onevar: false*/
/*global sinon, module, require, ActiveXObject, XMLHttpRequest, DOMParser*/
/**
 * Minimal Event interface implementation
 *
 * Original implementation by Sven Fuchs: https://gist.github.com/995028
 * Modifications and tests by Christian Johansen.
 *
 * @author Sven Fuchs (svenfuchs@artweb-design.de)
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2011 Sven Fuchs, Christian Johansen
 */

if (typeof sinon == "undefined") {
    this.sinon = {};
}

(function () {
    var push = [].push;

    sinon.Event = function Event(type, bubbles, cancelable) {
        this.initEvent(type, bubbles, cancelable);
    };

    sinon.Event.prototype = {
        initEvent: function(type, bubbles, cancelable) {
            this.type = type;
            this.bubbles = bubbles;
            this.cancelable = cancelable;
        },

        stopPropagation: function () {},

        preventDefault: function () {
            this.defaultPrevented = true;
        }
    };

    sinon.EventTarget = {
        addEventListener: function addEventListener(event, listener, useCapture) {
            this.eventListeners = this.eventListeners || {};
            this.eventListeners[event] = this.eventListeners[event] || [];
            push.call(this.eventListeners[event], listener);
        },

        removeEventListener: function removeEventListener(event, listener, useCapture) {
            var listeners = this.eventListeners && this.eventListeners[event] || [];

            for (var i = 0, l = listeners.length; i < l; ++i) {
                if (listeners[i] == listener) {
                    return listeners.splice(i, 1);
                }
            }
        },

        dispatchEvent: function dispatchEvent(event) {
            var type = event.type;
            var listeners = this.eventListeners && this.eventListeners[type] || [];

            for (var i = 0; i < listeners.length; i++) {
                if (typeof listeners[i] == "function") {
                    listeners[i].call(this, event);
                } else {
                    listeners[i].handleEvent(event);
                }
            }

            return !!event.defaultPrevented;
        }
    };
}());

/**
 * @depend event.js
 */
/*jslint eqeqeq: false, onevar: false*/
/*global sinon, module, require, ActiveXObject, XMLHttpRequest, DOMParser*/
/**
 * Fake XMLHttpRequest object
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2011 Christian Johansen
 */

if (typeof sinon == "undefined") {
    this.sinon = {};
}
sinon.xhr = { XMLHttpRequest: this.XMLHttpRequest };

// wrapper for global
(function(global) {
    var xhr = sinon.xhr;
    xhr.GlobalXMLHttpRequest = global.XMLHttpRequest;
    xhr.GlobalActiveXObject = global.ActiveXObject;
    xhr.supportsActiveX = typeof xhr.GlobalActiveXObject != "undefined";
    xhr.supportsXHR = typeof xhr.GlobalXMLHttpRequest != "undefined";
    xhr.workingXHR = xhr.supportsXHR ? xhr.GlobalXMLHttpRequest : xhr.supportsActiveX
                                     ? function() { return new xhr.GlobalActiveXObject("MSXML2.XMLHTTP.3.0") } : false;

    /*jsl:ignore*/
    var unsafeHeaders = {
        "Accept-Charset": true,
        "Accept-Encoding": true,
        "Connection": true,
        "Content-Length": true,
        "Cookie": true,
        "Cookie2": true,
        "Content-Transfer-Encoding": true,
        "Date": true,
        "Expect": true,
        "Host": true,
        "Keep-Alive": true,
        "Referer": true,
        "TE": true,
        "Trailer": true,
        "Transfer-Encoding": true,
        "Upgrade": true,
        "User-Agent": true,
        "Via": true
    };
    /*jsl:end*/

    function FakeXMLHttpRequest() {
        this.readyState = FakeXMLHttpRequest.UNSENT;
        this.requestHeaders = {};
        this.requestBody = null;
        this.status = 0;
        this.statusText = "";

        if (typeof FakeXMLHttpRequest.onCreate == "function") {
            FakeXMLHttpRequest.onCreate(this);
        }
    }

    function verifyState(xhr) {
        if (xhr.readyState !== FakeXMLHttpRequest.OPENED) {
            throw new Error("INVALID_STATE_ERR");
        }

        if (xhr.sendFlag) {
            throw new Error("INVALID_STATE_ERR");
        }
    }

    // filtering to enable a white-list version of Sinon FakeXhr,
    // where whitelisted requests are passed through to real XHR
    function each(collection, callback) {
        if (!collection) return;
        for (var i = 0, l = collection.length; i < l; i += 1) {
            callback(collection[i]);
        }
    }
    function some(collection, callback) {
        for (var index = 0; index < collection.length; index++) {
            if(callback(collection[index]) === true) return true;
        };
        return false;
    }
    // largest arity in XHR is 5 - XHR#open
    var apply = function(obj,method,args) {
        switch(args.length) {
        case 0: return obj[method]();
        case 1: return obj[method](args[0]);
        case 2: return obj[method](args[0],args[1]);
        case 3: return obj[method](args[0],args[1],args[2]);
        case 4: return obj[method](args[0],args[1],args[2],args[3]);
        case 5: return obj[method](args[0],args[1],args[2],args[3],args[4]);
        };
    };

    FakeXMLHttpRequest.filters = [];
    FakeXMLHttpRequest.addFilter = function(fn) {
        this.filters.push(fn)
    };
    var IE6Re = /MSIE 6/;
    FakeXMLHttpRequest.defake = function(fakeXhr,xhrArgs) {
        var xhr = new sinon.xhr.workingXHR();
        each(["open","setRequestHeader","send","abort","getResponseHeader",
              "getAllResponseHeaders","addEventListener","overrideMimeType","removeEventListener"],
             function(method) {
                 fakeXhr[method] = function() {
                   return apply(xhr,method,arguments);
                 };
             });

        var copyAttrs = function(args) {
            each(args, function(attr) {
              try {
                fakeXhr[attr] = xhr[attr]
              } catch(e) {
                if(!IE6Re.test(navigator.userAgent)) throw e;
              }
            });
        };

        var stateChange = function() {
            fakeXhr.readyState = xhr.readyState;
            if(xhr.readyState >= FakeXMLHttpRequest.HEADERS_RECEIVED) {
                copyAttrs(["status","statusText"]);
            }
            if(xhr.readyState >= FakeXMLHttpRequest.LOADING) {
                copyAttrs(["responseText"]);
            }
            if(xhr.readyState === FakeXMLHttpRequest.DONE) {
                copyAttrs(["responseXML"]);
            }
            if(fakeXhr.onreadystatechange) fakeXhr.onreadystatechange.call(fakeXhr);
        };
        if(xhr.addEventListener) {
          for(var event in fakeXhr.eventListeners) {
              if(fakeXhr.eventListeners.hasOwnProperty(event)) {
                  each(fakeXhr.eventListeners[event],function(handler) {
                      xhr.addEventListener(event, handler);
                  });
              }
          }
          xhr.addEventListener("readystatechange",stateChange);
        } else {
          xhr.onreadystatechange = stateChange;
        }
        apply(xhr,"open",xhrArgs);
    };
    FakeXMLHttpRequest.useFilters = false;

    function verifyRequestSent(xhr) {
        if (xhr.readyState == FakeXMLHttpRequest.DONE) {
            throw new Error("Request done");
        }
    }

    function verifyHeadersReceived(xhr) {
        if (xhr.async && xhr.readyState != FakeXMLHttpRequest.HEADERS_RECEIVED) {
            throw new Error("No headers received");
        }
    }

    function verifyResponseBodyType(body) {
        if (typeof body != "string") {
            var error = new Error("Attempted to respond to fake XMLHttpRequest with " +
                                 body + ", which is not a string.");
            error.name = "InvalidBodyException";
            throw error;
        }
    }

    sinon.extend(FakeXMLHttpRequest.prototype, sinon.EventTarget, {
        async: true,

        open: function open(method, url, async, username, password) {
            this.method = method;
            this.url = url;
            this.async = typeof async == "boolean" ? async : true;
            this.username = username;
            this.password = password;
            this.responseText = null;
            this.responseXML = null;
            this.requestHeaders = {};
            this.sendFlag = false;
            if(sinon.FakeXMLHttpRequest.useFilters === true) {
                var xhrArgs = arguments;
                var defake = some(FakeXMLHttpRequest.filters,function(filter) {
                    return filter.apply(this,xhrArgs)
                });
                if (defake) {
                  return sinon.FakeXMLHttpRequest.defake(this,arguments);
                }
            }
            this.readyStateChange(FakeXMLHttpRequest.OPENED);
        },

        readyStateChange: function readyStateChange(state) {
            this.readyState = state;

            if (typeof this.onreadystatechange == "function") {
                try {
                    this.onreadystatechange();
                } catch (e) {
                    sinon.logError("Fake XHR onreadystatechange handler", e);
                }
            }

            this.dispatchEvent(new sinon.Event("readystatechange"));
        },

        setRequestHeader: function setRequestHeader(header, value) {
            verifyState(this);

            if (unsafeHeaders[header] || /^(Sec-|Proxy-)/.test(header)) {
                throw new Error("Refused to set unsafe header \"" + header + "\"");
            }

            if (this.requestHeaders[header]) {
                this.requestHeaders[header] += "," + value;
            } else {
                this.requestHeaders[header] = value;
            }
        },

        // Helps testing
        setResponseHeaders: function setResponseHeaders(headers) {
            this.responseHeaders = {};

            for (var header in headers) {
                if (headers.hasOwnProperty(header)) {
                    this.responseHeaders[header] = headers[header];
                }
            }

            if (this.async) {
                this.readyStateChange(FakeXMLHttpRequest.HEADERS_RECEIVED);
            }
        },

        // Currently treats ALL data as a DOMString (i.e. no Document)
        send: function send(data) {
            verifyState(this);

            if (!/^(get|head)$/i.test(this.method)) {
                if (this.requestHeaders["Content-Type"]) {
                    var value = this.requestHeaders["Content-Type"].split(";");
                    this.requestHeaders["Content-Type"] = value[0] + ";charset=utf-8";
                } else {
                    this.requestHeaders["Content-Type"] = "text/plain;charset=utf-8";
                }

                this.requestBody = data;
            }

            this.errorFlag = false;
            this.sendFlag = this.async;
            this.readyStateChange(FakeXMLHttpRequest.OPENED);

            if (typeof this.onSend == "function") {
                this.onSend(this);
            }
        },

        abort: function abort() {
            this.aborted = true;
            this.responseText = null;
            this.errorFlag = true;
            this.requestHeaders = {};

            if (this.readyState > sinon.FakeXMLHttpRequest.UNSENT && this.sendFlag) {
                this.readyStateChange(sinon.FakeXMLHttpRequest.DONE);
                this.sendFlag = false;
            }

            this.readyState = sinon.FakeXMLHttpRequest.UNSENT;
        },

        getResponseHeader: function getResponseHeader(header) {
            if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
                return null;
            }

            if (/^Set-Cookie2?$/i.test(header)) {
                return null;
            }

            header = header.toLowerCase();

            for (var h in this.responseHeaders) {
                if (h.toLowerCase() == header) {
                    return this.responseHeaders[h];
                }
            }

            return null;
        },

        getAllResponseHeaders: function getAllResponseHeaders() {
            if (this.readyState < FakeXMLHttpRequest.HEADERS_RECEIVED) {
                return "";
            }

            var headers = "";

            for (var header in this.responseHeaders) {
                if (this.responseHeaders.hasOwnProperty(header) &&
                    !/^Set-Cookie2?$/i.test(header)) {
                    headers += header + ": " + this.responseHeaders[header] + "\r\n";
                }
            }

            return headers;
        },

        setResponseBody: function setResponseBody(body) {
            verifyRequestSent(this);
            verifyHeadersReceived(this);
            verifyResponseBodyType(body);

            var chunkSize = this.chunkSize || 10;
            var index = 0;
            this.responseText = "";

            do {
                if (this.async) {
                    this.readyStateChange(FakeXMLHttpRequest.LOADING);
                }

                this.responseText += body.substring(index, index + chunkSize);
                index += chunkSize;
            } while (index < body.length);

            var type = this.getResponseHeader("Content-Type");

            if (this.responseText &&
                (!type || /(text\/xml)|(application\/xml)|(\+xml)/.test(type))) {
                try {
                    this.responseXML = FakeXMLHttpRequest.parseXML(this.responseText);
                } catch (e) {
                    // Unable to parse XML - no biggie
                }
            }

            if (this.async) {
                this.readyStateChange(FakeXMLHttpRequest.DONE);
            } else {
                this.readyState = FakeXMLHttpRequest.DONE;
            }
        },

        respond: function respond(status, headers, body) {
            this.setResponseHeaders(headers || {});
            this.status = typeof status == "number" ? status : 200;
            this.statusText = FakeXMLHttpRequest.statusCodes[this.status];
            this.setResponseBody(body || "");
        }
    });

    sinon.extend(FakeXMLHttpRequest, {
        UNSENT: 0,
        OPENED: 1,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        DONE: 4
    });

    // Borrowed from JSpec
    FakeXMLHttpRequest.parseXML = function parseXML(text) {
        var xmlDoc;

        if (typeof DOMParser != "undefined") {
            var parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "text/xml");
        } else {
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = "false";
            xmlDoc.loadXML(text);
        }

        return xmlDoc;
    };

    FakeXMLHttpRequest.statusCodes = {
        100: "Continue",
        101: "Switching Protocols",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        300: "Multiple Choice",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Request Entity Too Large",
        414: "Request-URI Too Long",
        415: "Unsupported Media Type",
        416: "Requested Range Not Satisfiable",
        417: "Expectation Failed",
        422: "Unprocessable Entity",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported"
    };

    sinon.useFakeXMLHttpRequest = function () {
        sinon.FakeXMLHttpRequest.restore = function restore(keepOnCreate) {
            if (xhr.supportsXHR) {
                global.XMLHttpRequest = xhr.GlobalXMLHttpRequest;
            }

            if (xhr.supportsActiveX) {
                global.ActiveXObject = xhr.GlobalActiveXObject;
            }

            delete sinon.FakeXMLHttpRequest.restore;

            if (keepOnCreate !== true) {
                delete sinon.FakeXMLHttpRequest.onCreate;
            }
        };
        if (xhr.supportsXHR) {
            global.XMLHttpRequest = sinon.FakeXMLHttpRequest;
        }

        if (xhr.supportsActiveX) {
            global.ActiveXObject = function ActiveXObject(objId) {
                if (objId == "Microsoft.XMLHTTP" || /^Msxml2\.XMLHTTP/i.test(objId)) {

                    return new sinon.FakeXMLHttpRequest();
                }

                return new xhr.GlobalActiveXObject(objId);
            };
        }

        return sinon.FakeXMLHttpRequest;
    };

    sinon.FakeXMLHttpRequest = FakeXMLHttpRequest;
})(this);

if (typeof module == "object" && typeof require == "function") {
    module.exports = sinon;
}

/**
 * @depend fake_xml_http_request.js
 */
/*jslint eqeqeq: false, onevar: false, regexp: false, plusplus: false*/
/*global module, require, window*/
/**
 * The Sinon "server" mimics a web server that receives requests from
 * sinon.FakeXMLHttpRequest and provides an API to respond to those requests,
 * both synchronously and asynchronously. To respond synchronuously, canned
 * answers have to be provided upfront.
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2011 Christian Johansen
 */

if (typeof sinon == "undefined") {
    var sinon = {};
}

sinon.fakeServer = (function () {
    var push = [].push;
    function F() {}

    function create(proto) {
        F.prototype = proto;
        return new F();
    }

    function responseArray(handler) {
        var response = handler;

        if (Object.prototype.toString.call(handler) != "[object Array]") {
            response = [200, {}, handler];
        }

        if (typeof response[2] != "string") {
            throw new TypeError("Fake server response body should be string, but was " +
                                typeof response[2]);
        }

        return response;
    }

    var wloc = typeof window !== "undefined" ? window.location : {};
    var rCurrLoc = new RegExp("^" + wloc.protocol + "//" + wloc.host);

    function matchOne(response, reqMethod, reqUrl) {
        var rmeth = response.method;
        var matchMethod = !rmeth || rmeth.toLowerCase() == reqMethod.toLowerCase();
        var url = response.url;
        var matchUrl = !url || url == reqUrl || (typeof url.test == "function" && url.test(reqUrl));

        return matchMethod && matchUrl;
    }

    function match(response, request) {
        var requestMethod = this.getHTTPMethod(request);
        var requestUrl = request.url;

        if (!/^https?:\/\//.test(requestUrl) || rCurrLoc.test(requestUrl)) {
            requestUrl = requestUrl.replace(rCurrLoc, "");
        }

        if (matchOne(response, this.getHTTPMethod(request), requestUrl)) {
            if (typeof response.response == "function") {
                var ru = response.url;
                var args = [request].concat(!ru ? [] : requestUrl.match(ru).slice(1));
                return response.response.apply(response, args);
            }

            return true;
        }

        return false;
    }

    return {
        create: function () {
            var server = create(this);
            this.xhr = sinon.useFakeXMLHttpRequest();
            server.requests = [];

            this.xhr.onCreate = function (xhrObj) {
                server.addRequest(xhrObj);
            };

            return server;
        },

        addRequest: function addRequest(xhrObj) {
            var server = this;
            push.call(this.requests, xhrObj);

            xhrObj.onSend = function () {
                server.handleRequest(this);
            };

            if (this.autoRespond && !this.responding) {
                setTimeout(function () {
                    server.responding = false;
                    server.respond();
                }, this.autoRespondAfter || 10);

                this.responding = true;
            }
        },

        getHTTPMethod: function getHTTPMethod(request) {
            if (this.fakeHTTPMethods && /post/i.test(request.method)) {
                var matches = (request.requestBody || "").match(/_method=([^\b;]+)/);
                return !!matches ? matches[1] : request.method;
            }

            return request.method;
        },

        handleRequest: function handleRequest(xhr) {
            if (xhr.async) {
                if (!this.queue) {
                    this.queue = [];
                }

                push.call(this.queue, xhr);
            } else {
                this.processRequest(xhr);
            }
        },

        respondWith: function respondWith(method, url, body) {
            if (arguments.length == 1 && typeof method != "function") {
                this.response = responseArray(method);
                return;
            }

            if (!this.responses) { this.responses = []; }

            if (arguments.length == 1) {
                body = method;
                url = method = null;
            }

            if (arguments.length == 2) {
                body = url;
                url = method;
                method = null;
            }

            push.call(this.responses, {
                method: method,
                url: url,
                response: typeof body == "function" ? body : responseArray(body)
            });
        },

        respond: function respond() {
            if (arguments.length > 0) this.respondWith.apply(this, arguments);
            var queue = this.queue || [];
            var request;

            while(request = queue.shift()) {
                this.processRequest(request);
            }
        },

        processRequest: function processRequest(request) {
            try {
                if (request.aborted) {
                    return;
                }

                var response = this.response || [404, {}, ""];

                if (this.responses) {
                    for (var i = 0, l = this.responses.length; i < l; i++) {
                        if (match.call(this, this.responses[i], request)) {
                            response = this.responses[i].response;
                            break;
                        }
                    }
                }

                if (request.readyState != 4) {
                    request.respond(response[0], response[1], response[2]);
                }
            } catch (e) {
                sinon.logError("Fake server request processing", e);
            }
        },

        restore: function restore() {
            return this.xhr.restore && this.xhr.restore.apply(this.xhr, arguments);
        }
    };
}());

if (typeof module == "object" && typeof require == "function") {
    module.exports = sinon;
}

/**
 * @depend fake_server.js
 * @depend fake_timers.js
 */
/*jslint browser: true, eqeqeq: false, onevar: false*/
/*global sinon*/
/**
 * Add-on for sinon.fakeServer that automatically handles a fake timer along with
 * the FakeXMLHttpRequest. The direct inspiration for this add-on is jQuery
 * 1.3.x, which does not use xhr object's onreadystatehandler at all - instead,
 * it polls the object for completion with setInterval. Dispite the direct
 * motivation, there is nothing jQuery-specific in this file, so it can be used
 * in any environment where the ajax implementation depends on setInterval or
 * setTimeout.
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2011 Christian Johansen
 */

(function () {
    function Server() {}
    Server.prototype = sinon.fakeServer;

    sinon.fakeServerWithClock = new Server();

    sinon.fakeServerWithClock.addRequest = function addRequest(xhr) {
        if (xhr.async) {
            if (typeof setTimeout.clock == "object") {
                this.clock = setTimeout.clock;
            } else {
                this.clock = sinon.useFakeTimers();
                this.resetClock = true;
            }

            if (!this.longestTimeout) {
                var clockSetTimeout = this.clock.setTimeout;
                var clockSetInterval = this.clock.setInterval;
                var server = this;

                this.clock.setTimeout = function (fn, timeout) {
                    server.longestTimeout = Math.max(timeout, server.longestTimeout || 0);

                    return clockSetTimeout.apply(this, arguments);
                };

                this.clock.setInterval = function (fn, timeout) {
                    server.longestTimeout = Math.max(timeout, server.longestTimeout || 0);

                    return clockSetInterval.apply(this, arguments);
                };
            }
        }

        return sinon.fakeServer.addRequest.call(this, xhr);
    };

    sinon.fakeServerWithClock.respond = function respond() {
        var returnVal = sinon.fakeServer.respond.apply(this, arguments);

        if (this.clock) {
            this.clock.tick(this.longestTimeout || 0);
            this.longestTimeout = 0;

            if (this.resetClock) {
                this.clock.restore();
                this.resetClock = false;
            }
        }

        return returnVal;
    };

    sinon.fakeServerWithClock.restore = function restore() {
        if (this.clock) {
            this.clock.restore();
        }

        return sinon.fakeServer.restore.apply(this, arguments);
    };
}());

/**
 * @depend ../sinon.js
 * @depend collection.js
 * @depend util/fake_timers.js
 * @depend util/fake_server_with_clock.js
 */
/*jslint eqeqeq: false, onevar: false, plusplus: false*/
/*global require, module*/
/**
 * Manages fake collections as well as fake utilities such as Sinon's
 * timers and fake XHR implementation in one convenient object.
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2011 Christian Johansen
 */

if (typeof module == "object" && typeof require == "function") {
    var sinon = require("../sinon");
    sinon.extend(sinon, require("./util/fake_timers"));
}

(function () {
    var push = [].push;

    function exposeValue(sandbox, config, key, value) {
        if (!value) {
            return;
        }

        if (config.injectInto) {
            config.injectInto[key] = value;
        } else {
            push.call(sandbox.args, value);
        }
    }

    function prepareSandboxFromConfig(config) {
        var sandbox = sinon.create(sinon.sandbox);

        if (config.useFakeServer) {
            if (typeof config.useFakeServer == "object") {
                sandbox.serverPrototype = config.useFakeServer;
            }

            sandbox.useFakeServer();
        }

        if (config.useFakeTimers) {
            if (typeof config.useFakeTimers == "object") {
                sandbox.useFakeTimers.apply(sandbox, config.useFakeTimers);
            } else {
                sandbox.useFakeTimers();
            }
        }

        return sandbox;
    }

    sinon.sandbox = sinon.extend(sinon.create(sinon.collection), {
        useFakeTimers: function useFakeTimers() {
            this.clock = sinon.useFakeTimers.apply(sinon, arguments);

            return this.add(this.clock);
        },

        serverPrototype: sinon.fakeServer,

        useFakeServer: function useFakeServer() {
            var proto = this.serverPrototype || sinon.fakeServer;

            if (!proto || !proto.create) {
                return null;
            }

            this.server = proto.create();
            return this.add(this.server);
        },

        inject: function (obj) {
            sinon.collection.inject.call(this, obj);

            if (this.clock) {
                obj.clock = this.clock;
            }

            if (this.server) {
                obj.server = this.server;
                obj.requests = this.server.requests;
            }

            return obj;
        },

        create: function (config) {
            if (!config) {
                return sinon.create(sinon.sandbox);
            }

            var sandbox = prepareSandboxFromConfig(config);
            sandbox.args = sandbox.args || [];
            var prop, value, exposed = sandbox.inject({});

            if (config.properties) {
                for (var i = 0, l = config.properties.length; i < l; i++) {
                    prop = config.properties[i];
                    value = exposed[prop] || prop == "sandbox" && sandbox;
                    exposeValue(sandbox, config, prop, value);
                }
            } else {
                exposeValue(sandbox, config, "sandbox", value);
            }

            return sandbox;
        }
    });

    sinon.sandbox.useFakeXMLHttpRequest = sinon.sandbox.useFakeServer;

    if (typeof module == "object" && typeof require == "function") {
        module.exports = sinon.sandbox;
    }
}());

/**
 * @depend ../sinon.js
 * @depend stub.js
 * @depend mock.js
 * @depend sandbox.js
 */
/*jslint eqeqeq: false, onevar: false, forin: true, plusplus: false*/
/*global module, require, sinon*/
/**
 * Test function, sandboxes fakes
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2011 Christian Johansen
 */

(function (sinon) {
    var commonJSModule = typeof module == "object" && typeof require == "function";

    if (!sinon && commonJSModule) {
        sinon = require("../sinon");
    }

    if (!sinon) {
        return;
    }

    function test(callback) {
        var type = typeof callback;

        if (type != "function") {
            throw new TypeError("sinon.test needs to wrap a test function, got " + type);
        }

        return function () {
            var config = sinon.getConfig(sinon.config);
            config.injectInto = config.injectIntoThis && this || config.injectInto;
            var sandbox = sinon.sandbox.create(config);
            var exception, result;
            var args = Array.prototype.slice.call(arguments).concat(sandbox.args);

            try {
                result = callback.apply(this, args);
            } finally {
                sandbox.verifyAndRestore();
            }

            return result;
        };
    }

    test.config = {
        injectIntoThis: true,
        injectInto: null,
        properties: ["spy", "stub", "mock", "clock", "server", "requests"],
        useFakeTimers: true,
        useFakeServer: true
    };

    if (commonJSModule) {
        module.exports = test;
    } else {
        sinon.test = test;
    }
}(typeof sinon == "object" && sinon || null));

/**
 * @depend ../sinon.js
 * @depend test.js
 */
/*jslint eqeqeq: false, onevar: false, eqeqeq: false*/
/*global module, require, sinon*/
/**
 * Test case, sandboxes all test functions
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2011 Christian Johansen
 */

(function (sinon) {
    var commonJSModule = typeof module == "object" && typeof require == "function";

    if (!sinon && commonJSModule) {
        sinon = require("../sinon");
    }

    if (!sinon || !Object.prototype.hasOwnProperty) {
        return;
    }

    function createTest(property, setUp, tearDown) {
        return function () {
            if (setUp) {
                setUp.apply(this, arguments);
            }

            var exception, result;

            try {
                result = property.apply(this, arguments);
            } catch (e) {
                exception = e;
            }

            if (tearDown) {
                tearDown.apply(this, arguments);
            }

            if (exception) {
                throw exception;
            }

            return result;
        };
    }

    function testCase(tests, prefix) {
        /*jsl:ignore*/
        if (!tests || typeof tests != "object") {
            throw new TypeError("sinon.testCase needs an object with test functions");
        }
        /*jsl:end*/

        prefix = prefix || "test";
        var rPrefix = new RegExp("^" + prefix);
        var methods = {}, testName, property, method;
        var setUp = tests.setUp;
        var tearDown = tests.tearDown;

        for (testName in tests) {
            if (tests.hasOwnProperty(testName)) {
                property = tests[testName];

                if (/^(setUp|tearDown)$/.test(testName)) {
                    continue;
                }

                if (typeof property == "function" && rPrefix.test(testName)) {
                    method = property;

                    if (setUp || tearDown) {
                        method = createTest(property, setUp, tearDown);
                    }

                    methods[testName] = sinon.test(method);
                } else {
                    methods[testName] = tests[testName];
                }
            }
        }

        return methods;
    }

    if (commonJSModule) {
        module.exports = testCase;
    } else {
        sinon.testCase = testCase;
    }
}(typeof sinon == "object" && sinon || null));

/**
 * @depend ../sinon.js
 * @depend stub.js
 */
/*jslint eqeqeq: false, onevar: false, nomen: false, plusplus: false*/
/*global module, require, sinon*/
/**
 * Assertions matching the test spy retrieval interface.
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @license BSD
 *
 * Copyright (c) 2010-2011 Christian Johansen
 */

(function (sinon, global) {
    var commonJSModule = typeof module == "object" && typeof require == "function";
    var slice = Array.prototype.slice;
    var assert;

    if (!sinon && commonJSModule) {
        sinon = require("../sinon");
    }

    if (!sinon) {
        return;
    }

    function verifyIsStub() {
        var method;

        for (var i = 0, l = arguments.length; i < l; ++i) {
            method = arguments[i];

            if (!method) {
                assert.fail("fake is not a spy");
            }

            if (typeof method != "function") {
                assert.fail(method + " is not a function");
            }

            if (typeof method.getCall != "function") {
                assert.fail(method + " is not stubbed");
            }
        }
    }

    function failAssertion(object, msg) {
        object = object || global;
        var failMethod = object.fail || assert.fail;
        failMethod.call(object, msg);
    }

    function mirrorPropAsAssertion(name, method, message) {
        if (arguments.length == 2) {
            message = method;
            method = name;
        }

        assert[name] = function (fake) {
            verifyIsStub(fake);

            var args = slice.call(arguments, 1);
            var failed = false;

            if (typeof method == "function") {
                failed = !method(fake);
            } else {
                failed = typeof fake[method] == "function" ?
                    !fake[method].apply(fake, args) : !fake[method];
            }

            if (failed) {
                failAssertion(this, fake.printf.apply(fake, [message].concat(args)));
            } else {
                assert.pass(name);
            }
        };
    }

    function exposedName(prefix, prop) {
        return !prefix || /^fail/.test(prop) ? prop :
            prefix + prop.slice(0, 1).toUpperCase() + prop.slice(1);
    };

    assert = {
        failException: "AssertError",

        fail: function fail(message) {
            var error = new Error(message);
            error.name = this.failException || assert.failException;

            throw error;
        },

        pass: function pass(assertion) {},

        callOrder: function assertCallOrder() {
            verifyIsStub.apply(null, arguments);
            var expected = "", actual = "";

            if (!sinon.calledInOrder(arguments)) {
                try {
                    expected = [].join.call(arguments, ", ");
                    actual = sinon.orderByFirstCall(slice.call(arguments)).join(", ");
                } catch (e) {
                    // If this fails, we'll just fall back to the blank string
                }

                failAssertion(this, "expected " + expected + " to be " +
                              "called in order but were called as " + actual);
            } else {
                assert.pass("callOrder");
            }
        },

        callCount: function assertCallCount(method, count) {
            verifyIsStub(method);

            if (method.callCount != count) {
                var msg = "expected %n to be called " + sinon.timesInWords(count) +
                    " but was called %c%C";
                failAssertion(this, method.printf(msg));
            } else {
                assert.pass("callCount");
            }
        },

        expose: function expose(target, options) {
            if (!target) {
                throw new TypeError("target is null or undefined");
            }

            var o = options || {};
            var prefix = typeof o.prefix == "undefined" && "assert" || o.prefix;
            var includeFail = typeof o.includeFail == "undefined" || !!o.includeFail;

            for (var method in this) {
                if (method != "export" && (includeFail || !/^(fail)/.test(method))) {
                    target[exposedName(prefix, method)] = this[method];
                }
            }

            return target;
        }
    };

    mirrorPropAsAssertion("called", "expected %n to have been called at least once but was never called");
    mirrorPropAsAssertion("notCalled", function (spy) { return !spy.called; },
                          "expected %n to not have been called but was called %c%C");
    mirrorPropAsAssertion("calledOnce", "expected %n to be called once but was called %c%C");
    mirrorPropAsAssertion("calledTwice", "expected %n to be called twice but was called %c%C");
    mirrorPropAsAssertion("calledThrice", "expected %n to be called thrice but was called %c%C");
    mirrorPropAsAssertion("calledOn", "expected %n to be called with %1 as this but was called with %t");
    mirrorPropAsAssertion("alwaysCalledOn", "expected %n to always be called with %1 as this but was called with %t");
    mirrorPropAsAssertion("calledWithNew", "expected %n to be called with new");
    mirrorPropAsAssertion("alwaysCalledWithNew", "expected %n to always be called with new");
    mirrorPropAsAssertion("calledWith", "expected %n to be called with arguments %*%C");
    mirrorPropAsAssertion("calledWithMatch", "expected %n to be called with match %*%C");
    mirrorPropAsAssertion("alwaysCalledWith", "expected %n to always be called with arguments %*%C");
    mirrorPropAsAssertion("alwaysCalledWithMatch", "expected %n to always be called with match %*%C");
    mirrorPropAsAssertion("calledWithExactly", "expected %n to be called with exact arguments %*%C");
    mirrorPropAsAssertion("alwaysCalledWithExactly", "expected %n to always be called with exact arguments %*%C");
    mirrorPropAsAssertion("neverCalledWith", "expected %n to never be called with arguments %*%C");
    mirrorPropAsAssertion("neverCalledWithMatch", "expected %n to never be called with match %*%C");
    mirrorPropAsAssertion("threw", "%n did not throw exception%C");
    mirrorPropAsAssertion("alwaysThrew", "%n did not always throw exception%C");

    if (commonJSModule) {
        module.exports = assert;
    } else {
        sinon.assert = assert;
    }
}(typeof sinon == "object" && sinon || null, typeof window != "undefined" ? window : global));

return sinon;}.call(typeof window != 'undefined' && window || {}));
/*global QUnit */

QUnit.config.reorder = false;

window.qunitStatus = {
    done: false,
    failed: false
};

QUnit.log(function (context) {
    if (context.result) {
        return;
    }
    var status = window.qunitStatus;

    status.failedTests = status.failedTests || {};
    status.failedTests[context.module] = status.failedTests[context.module] || {};

    status.failedTests[context.module][context.name] = status.failedTests[context.module][context.name] || [];


    status.failedTests[context.module][context.name].push(context.message);
    window.qunitStatus.failed = true;
});


QUnit.config.reorder = false;

QUnit.begin(function () {

	Ember.run.begin();
	App.initialize();
	Ember.run.end();

});

QUnit.done(function (context) {
    window.qunitStatus.stats = [
        "Time: " + context.runtime + "ms",
        "Total: " + context.total,
        "Passed: " + context.passed,
        "Failed: " + context.failed
    ].join(', ');
    window.qunitStatus.done = true;
	App.destroy();
});


(function () {
	module('Module #1 :: Basics', {
		setup: function () {},
		teardown: function () {}
	});

	test('Application creation', function () {
	    equal('ember-application', $('#app').attr('class'), 'The target div contains the application.');
	});

	test('Main view creation', function () {
	    equal('ember-view', $('#app div:first-child').attr('class'), 'The main view was instantiated properly.');
	});

	test('The content divs are in the dom and individual views', function () {

		// let's take the actual server request out of the mix
		var server = sinon.fakeServer.create();
		Ember.run.begin();
		App.get('router').get('postsController').fetch();
		server.requests[0].respond(200, {'Content-Type': 'application/json'}, JSON.stringify({}));
		Ember.run.end();

		ok($('#postlist').length > 0, 'The list area div has been created.');
		equal('ember-view', $('#postlist div:first-child').attr('class'), 'The list view was instantiated properly.');
		ok($('#postdetails').length > 0, 'The details area div has been created.');
		equal('ember-view', $('#postdetails div:first-child').attr('class'), 'The details view was instantiated properly.');

	});

}());

(function () {
	module('Module #2 :: Request Verification', {
		setup: function () {},
		teardown: function () {}
	});

	test('The initial AJAX request', function () {
		var server = sinon.fakeServer.create();

		Ember.run.begin();
		App.get('router').get('postsController').fetch();
		server.requests[0].respond(200, {'Content-Type': 'application/json'}, JSON.stringify({}));
		Ember.run.end();
		
		equal('/posts/', server.requests[0].url, 'The correct URL was requested');
		equal('GET', server.requests[0].method, 'The correct method was used for the request');
	});

	test('Request a specific post', function () {
		var server = sinon.fakeServer.create()
			post_id = 1;

		Ember.run.begin();
		App.get('router').get('detailsController').fetch(post_id);
		server.requests[0].respond(200, {'Content-Type': 'application/json'}, JSON.stringify({}));
		Ember.run.end();

		equal('/post/' + post_id, server.requests[0].url, 'The correct URL was requested');
		equal('GET', server.requests[0].method, 'The correct method was used for the request');

	});

}());

(function () {
	module('Module #2 :: Request Verification', {
		setup: function () {
			this.response = [
				{
	            	id: 001,
	            	title: 'Monkies in my code 1',
	            	summary: 'summary: ',
	            	details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum nunc sit amet sapien iaculis tincidunt bibendum commodo tellus. Proin sed egestas tellus. Cras ultricies elementum nisi, eu placerat lacus iaculis non. Nunc gravida congue tincidunt. Phasellus nec felis leo, vitae placerat lacus. Etiam luctus, ligula quis tempus accumsan, est dolor suscipit nulla, vitae viverra velit diam at turpis. Donec sed egestas dui. Donec consequat posuere dictum.',
	            	postdate: ''
        		}
        	];
		},
		teardown: function () {}
	});

	test('Model Verification', function () {
		var server = sinon.fakeServer.create(),
			response = this.response,
			model = null;

		Ember.run.begin();
		App.get('router').get('postsController').fetch();
		server.requests[0].respond(200, {'Content-Type': 'application/json'}, JSON.stringify(response));
		Ember.run.end();

		// model = App.get('router').get('postsController').get('postsController');//postsController;//.get('postsController').get('content')[0];
		console.log(App.get('router').get('postsController'));

		// ok(model.get('id') !== null, 'The id property is not null');
		ok(true);
	});
}());


