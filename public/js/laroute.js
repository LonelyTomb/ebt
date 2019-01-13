(function () {

    var laroute = (function () {

        var routes = {

            absolute: false,
            rootUrl: 'http://localhost',
            routes : [
    {
        "uri": "login",
        "name": "login"
    },
    {
        "uri": "logout",
        "name": "logout"
    },
    {
        "uri": "register",
        "name": "register"
    },
    {
        "uri": "password\/reset",
        "name": "password.request"
    },
    {
        "uri": "password\/email",
        "name": "password.email"
    },
    {
        "uri": "password\/reset\/{token}",
        "name": "password.reset"
    },
    {
        "uri": "\/",
        "name": "welcome"
    },
    {
        "uri": "home",
        "name": "home"
    },
    {
        "uri": "logout",
        "name": "logout"
    },
    {
        "uri": "epanel",
        "name": "epanel"
    },
    {
        "uri": "epanel\/login",
        "name": "epanel.login"
    },
    {
        "uri": "epanel\/login",
        "name": "epanel.processLogin"
    },
    {
        "uri": "epanel\/logout",
        "name": "epanel.logout"
    },
    {
        "uri": "epanel\/register\/admin",
        "name": "epanel.register.admin"
    },
    {
        "uri": "epanel\/register\/user",
        "name": "epanel.register.user"
    },
    {
        "uri": "epanel\/register\/user",
        "name": "epanel.registerProcess.user"
    },
    {
        "uri": "epanel\/register\/users",
        "name": "epanel.register.users"
    },
    {
        "uri": "epanel\/register\/users",
        "name": "epanel.registerProcess.users"
    },
    {
        "uri": "epanel\/password\/reset",
        "name": "admin.password.request"
    },
    {
        "uri": "epanel\/password\/email",
        "name": "admin.password.email"
    },
    {
        "uri": "epanel\/password\/reset\/{token}",
        "name": "admin.password.reset"
    },
    {
        "uri": "epanel\/questions\/upload",
        "name": "questions.upload"
    },
    {
        "uri": "epanel\/questions\/upload\/preview",
        "name": "questions.upload.preview"
    },
    {
        "uri": "epanel\/users\/index",
        "name": "users.index"
    },
    {
        "uri": "epanel\/courses",
        "name": "courses.index"
    },
    {
        "uri": "epanel\/courses\/create",
        "name": "courses.create"
    },
    {
        "uri": "epanel\/courses",
        "name": "courses.store"
    },
    {
        "uri": "epanel\/courses\/{course}",
        "name": "courses.show"
    },
    {
        "uri": "epanel\/courses\/{course}\/edit",
        "name": "courses.edit"
    },
    {
        "uri": "epanel\/courses\/{course}",
        "name": "courses.update"
    },
    {
        "uri": "epanel\/courses\/{course}",
        "name": "courses.destroy"
    },
    {
        "uri": "epanel\/configs",
        "name": "configs.index"
    },
    {
        "uri": "epanel\/configs\/create",
        "name": "configs.create"
    },
    {
        "uri": "epanel\/configs",
        "name": "configs.store"
    },
    {
        "uri": "epanel\/configs\/{config}",
        "name": "configs.show"
    },
    {
        "uri": "epanel\/configs\/{config}\/edit",
        "name": "configs.edit"
    },
    {
        "uri": "epanel\/configs\/{config}",
        "name": "configs.update"
    },
    {
        "uri": "epanel\/configs\/{config}",
        "name": "configs.destroy"
    },
    {
        "uri": "epanel\/scripts",
        "name": "scripts.index"
    },
    {
        "uri": "epanel\/scripts\/create",
        "name": "scripts.create"
    },
    {
        "uri": "epanel\/scripts",
        "name": "scripts.store"
    },
    {
        "uri": "epanel\/scripts\/{script}",
        "name": "scripts.show"
    },
    {
        "uri": "epanel\/scripts\/{script}\/edit",
        "name": "scripts.edit"
    },
    {
        "uri": "epanel\/scripts\/{script}",
        "name": "scripts.update"
    },
    {
        "uri": "epanel\/scripts\/{script}",
        "name": "scripts.destroy"
    },
    {
        "uri": "epanel\/questions",
        "name": "questions.index"
    },
    {
        "uri": "epanel\/questions\/create",
        "name": "questions.create"
    },
    {
        "uri": "epanel\/questions",
        "name": "questions.store"
    },
    {
        "uri": "epanel\/questions\/{question}",
        "name": "questions.show"
    },
    {
        "uri": "epanel\/questions\/{question}\/edit",
        "name": "questions.edit"
    },
    {
        "uri": "epanel\/questions\/{question}",
        "name": "questions.update"
    },
    {
        "uri": "epanel\/questions\/{question}",
        "name": "questions.destroy"
    },
    {
        "uri": "epanel\/questionsList",
        "name": "questionsList.index"
    },
    {
        "uri": "epanel\/questionsList",
        "name": "questionsList.store"
    },
    {
        "uri": "epanel\/questionsList\/{questionsList}",
        "name": "questionsList.show"
    },
    {
        "uri": "epanel\/questionsList\/{questionsList}",
        "name": "questionsList.update"
    },
    {
        "uri": "epanel\/questionsList\/{questionsList}",
        "name": "questionsList.destroy"
    }
],
            prefix: '',

            route : function (name, parameters, route) {
                route = route || this.getByName(name);

                if ( ! route ) {
                    return undefined;
                }

                return this.toRoute(route, parameters);
            },

            url: function (url, parameters) {
                parameters = parameters || [];

                var uri = url + '/' + parameters.join('/');

                return this.getCorrectUrl(uri);
            },

            toRoute : function (route, parameters) {
                var uri = this.replaceNamedParameters(route.uri, parameters);
                var qs  = this.getRouteQueryString(parameters);

                if (this.absolute && this.isOtherHost(route)){
                    return "//" + route.host + "/" + uri + qs;
                }

                return this.getCorrectUrl(uri + qs);
            },

            isOtherHost: function (route){
                return route.host && route.host != window.location.hostname;
            },

            replaceNamedParameters : function (uri, parameters) {
                uri = uri.replace(/\{(.*?)\??\}/g, function(match, key) {
                    if (parameters.hasOwnProperty(key)) {
                        var value = parameters[key];
                        delete parameters[key];
                        return value;
                    } else {
                        return match;
                    }
                });

                // Strip out any optional parameters that were not given
                uri = uri.replace(/\/\{.*?\?\}/g, '');

                return uri;
            },

            getRouteQueryString : function (parameters) {
                var qs = [];
                for (var key in parameters) {
                    if (parameters.hasOwnProperty(key)) {
                        qs.push(key + '=' + parameters[key]);
                    }
                }

                if (qs.length < 1) {
                    return '';
                }

                return '?' + qs.join('&');
            },

            getByName : function (name) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].name === name) {
                        return this.routes[key];
                    }
                }
            },

            getByAction : function(action) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].action === action) {
                        return this.routes[key];
                    }
                }
            },

            getCorrectUrl: function (uri) {
                var url = this.prefix + '/' + uri.replace(/^\/?/, '');

                if ( ! this.absolute) {
                    return url;
                }

                return this.rootUrl.replace('/\/?$/', '') + url;
            }
        };

        var getLinkAttributes = function(attributes) {
            if ( ! attributes) {
                return '';
            }

            var attrs = [];
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    attrs.push(key + '="' + attributes[key] + '"');
                }
            }

            return attrs.join(' ');
        };

        var getHtmlLink = function (url, title, attributes) {
            title      = title || url;
            attributes = getLinkAttributes(attributes);

            return '<a href="' + url + '" ' + attributes + '>' + title + '</a>';
        };

        return {
            // Generate a url for a given controller action.
            // laroute.action('HomeController@getIndex', [params = {}])
            action : function (name, parameters) {
                parameters = parameters || {};

                return routes.route(name, parameters, routes.getByAction(name));
            },

            // Generate a url for a given named route.
            // laroute.route('routeName', [params = {}])
            route : function (route, parameters) {
                parameters = parameters || {};

                return routes.route(route, parameters);
            },

            // Generate a fully qualified URL to the given path.
            // laroute.route('url', [params = {}])
            url : function (route, parameters) {
                parameters = parameters || {};

                return routes.url(route, parameters);
            },

            // Generate a html link to the given url.
            // laroute.link_to('foo/bar', [title = url], [attributes = {}])
            link_to : function (url, title, attributes) {
                url = this.url(url);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given route.
            // laroute.link_to_route('route.name', [title=url], [parameters = {}], [attributes = {}])
            link_to_route : function (route, title, parameters, attributes) {
                var url = this.route(route, parameters);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given controller action.
            // laroute.link_to_action('HomeController@getIndex', [title=url], [parameters = {}], [attributes = {}])
            link_to_action : function(action, title, parameters, attributes) {
                var url = this.action(action, parameters);

                return getHtmlLink(url, title, attributes);
            }

        };

    }).call(this);

    /**
     * Expose the class either via AMD, CommonJS or the global object
     */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return laroute;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = laroute;
    }
    else {
        window.laroute = laroute;
    }

}).call(this);

