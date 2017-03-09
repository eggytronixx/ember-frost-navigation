"use strict";define("dummy/app",["exports","dummy/config/environment","ember","ember/load-initializers","ember-engines/resolver"],function(e,t,n,o,r){var i=n.default.Application,u=void 0;n.default.MODEL_FACTORY_INJECTIONS=!0,u=i.extend({modulePrefix:t.default.modulePrefix,podModulePrefix:t.default.podModulePrefix,Resolver:r.default,engines:{emberBlogEngine:{dependencies:{services:["blog-data",{session:"active-session"}]}}}}),(0,o.default)(u,t.default.modulePrefix),e.default=u}),define("dummy/components/-lf-get-outlet-state",["exports","liquid-fire/components/-lf-get-outlet-state"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/code-snippet",["exports","ember","dummy/snippets"],function(e,t,n){var o=require("highlight.js");e.default=t.default.Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e;for(var t,n,o=e.split("\n"),r=0;r<o.length;r++)t=/^\s*/.exec(o[r]),t&&(void 0===n||n>t[0].length)&&(n=t[0].length);return void 0!==n&&n>0&&(e=e.replace(new RegExp("(\\n|^)\\s{"+n+"}","g"),"$1")),e},source:t.default.computed("name",function(){return this._unindent((n.default[this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){o.highlightBlock(this.get("element"))},language:t.default.computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"));if(e)switch(e[1].toLowerCase()){case"js":return"javascript";case"coffee":return"coffeescript";case"hbs":return"htmlbars";case"css":return"css";case"scss":return"scss";case"less":return"less";case"emblem":return"emblem";case"ts":return"typescript"}})})}),define("dummy/components/frost-button",["exports","ember-frost-core/components/frost-button"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-checkbox",["exports","ember-frost-core/components/frost-checkbox"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-combobox",["exports","ember-frost-core/components/frost-combobox"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-icon",["exports","ember-frost-core/components/frost-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-link",["exports","ember-frost-core/components/frost-link"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-loading",["exports","ember-frost-core/components/frost-loading"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-multi-select",["exports","ember-frost-core/components/frost-multi-select"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-navigation",["exports","ember-frost-navigation/components/frost-navigation"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-notification",["exports","ember-frost-notifier/pods/components/frost-notification/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-notifier",["exports","ember-frost-notifier/pods/components/frost-notifier/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-password",["exports","ember-frost-core/components/frost-password"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-radio-button",["exports","ember-frost-core/components/frost-radio-button"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-radio-group",["exports","ember-frost-core/components/frost-radio-group"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-scroll",["exports","ember-frost-core/components/frost-scroll"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-select-dropdown",["exports","ember-frost-core/components/frost-select-dropdown"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-select-outlet",["exports","ember-frost-core/components/frost-select-outlet"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-select",["exports","ember-frost-core/components/frost-select"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-text",["exports","ember-frost-core/components/frost-text"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-textarea",["exports","ember-frost-core/components/frost-textarea"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/frost-toggle",["exports","ember-frost-core/components/frost-toggle"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/hookable-input",["exports","ember-frost-core/components/hookable-input"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/hookable-textarea",["exports","ember-frost-core/components/hookable-textarea"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/illiquid-model",["exports","liquid-fire/components/illiquid-model"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/link-to-external",["exports","ember-engines/-private/link-to-external-component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-bind",["exports","liquid-fire/components/liquid-bind"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-child",["exports","liquid-fire/components/liquid-child"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-container",["exports","liquid-fire/components/liquid-container"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-if",["exports","liquid-fire/components/liquid-if"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-measured",["exports","liquid-fire/components/liquid-measured"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"measure",{enumerable:!0,get:function(){return t.measure}})}),define("dummy/components/liquid-outlet",["exports","liquid-fire/components/liquid-outlet"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-spacer",["exports","liquid-fire/components/liquid-spacer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-sync",["exports","liquid-fire/components/liquid-sync"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-unless",["exports","liquid-fire/components/liquid-unless"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/liquid-versions",["exports","liquid-fire/components/liquid-versions"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/nav-action",["exports","ember-frost-navigation/components/nav-action"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/nav-category",["exports","ember-frost-navigation/components/nav-category"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/nav-modal-outlet",["exports","ember-frost-navigation/components/nav-modal-outlet"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/nav-modal",["exports","ember-frost-navigation/components/nav-modal"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/nav-route",["exports","ember-frost-navigation/components/nav-route"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/nav-section-actions",["exports","ember-frost-navigation/components/nav-section-actions"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/nav-section",["exports","ember-frost-navigation/components/nav-section"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("dummy/enhancers/index",["exports"],function(e){e.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return 0===t.length?arguments[0]:t[t.length-1].apply(void 0,arguments)}}}),define("dummy/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,n){var o=null;t.default.Helper?o=t.default.Helper.helper(n.andHelper):t.default.HTMLBars.makeBoundHelper&&(o=t.default.HTMLBars.makeBoundHelper(n.andHelper)),e.default=o}),define("dummy/helpers/array",["exports","ember-frost-core/helpers/array"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"array",{enumerable:!0,get:function(){return t.array}})}),define("dummy/helpers/cancel-all",["exports","ember","ember-concurrency/-helpers"],function(e,t,n){function o(e){var o=e[0];return o&&"function"==typeof o.cancelAll||t.default.assert("The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed "+o,!1),(0,n.taskHelperClosure)("cancelAll",e)}e.cancelHelper=o,e.default=t.default.Helper.helper(o)}),define("dummy/helpers/ehook",["exports","ember-frost-core/helpers/ehook"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"ehook",{enumerable:!0,get:function(){return t.ehook}})}),define("dummy/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,n){var o=null;t.default.Helper?o=t.default.Helper.helper(n.equalHelper):t.default.HTMLBars.makeBoundHelper&&(o=t.default.HTMLBars.makeBoundHelper(n.equalHelper)),e.default=o}),define("dummy/helpers/extend",["exports","ember-frost-core/helpers/extend"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"extend",{enumerable:!0,get:function(){return t.extend}})}),define("dummy/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,n){var o=null;t.default.Helper?o=t.default.Helper.helper(n.gtHelper):t.default.HTMLBars.makeBoundHelper&&(o=t.default.HTMLBars.makeBoundHelper(n.gtHelper)),e.default=o}),define("dummy/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,n){var o=null;t.default.Helper?o=t.default.Helper.helper(n.gteHelper):t.default.HTMLBars.makeBoundHelper&&(o=t.default.HTMLBars.makeBoundHelper(n.gteHelper)),e.default=o}),define("dummy/helpers/hook",["exports","ember-hook/helpers/hook"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"hook",{enumerable:!0,get:function(){return t.hook}})}),define("dummy/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,n){var o=null;t.default.Helper?o=t.default.Helper.helper(n.isArrayHelper):t.default.HTMLBars.makeBoundHelper&&(o=t.default.HTMLBars.makeBoundHelper(n.isArrayHelper)),e.default=o}),define("dummy/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})}),define("dummy/helpers/lf-lock-model",["exports","liquid-fire/helpers/lf-lock-model"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfLockModel",{enumerable:!0,get:function(){return t.lfLockModel}})}),define("dummy/helpers/lf-or",["exports","liquid-fire/helpers/lf-or"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfOr",{enumerable:!0,get:function(){return t.lfOr}})}),define("dummy/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,n){var o=null;t.default.Helper?o=t.default.Helper.helper(n.ltHelper):t.default.HTMLBars.makeBoundHelper&&(o=t.default.HTMLBars.makeBoundHelper(n.ltHelper)),e.default=o}),define("dummy/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,n){var o=null;t.default.Helper?o=t.default.Helper.helper(n.lteHelper):t.default.HTMLBars.makeBoundHelper&&(o=t.default.HTMLBars.makeBoundHelper(n.lteHelper)),e.default=o}),define("dummy/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,n){var o=null;t.default.Helper?o=t.default.Helper.helper(n.notEqualHelper):t.default.HTMLBars.makeBoundHelper&&(o=t.default.HTMLBars.makeBoundHelper(n.notEqualHelper)),e.default=o}),define("dummy/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,n){var o=null;t.default.Helper?o=t.default.Helper.helper(n.notHelper):t.default.HTMLBars.makeBoundHelper&&(o=t.default.HTMLBars.makeBoundHelper(n.notHelper)),e.default=o}),define("dummy/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,n){var o=null;t.default.Helper?o=t.default.Helper.helper(n.orHelper):t.default.HTMLBars.makeBoundHelper&&(o=t.default.HTMLBars.makeBoundHelper(n.orHelper)),e.default=o}),define("dummy/helpers/perform",["exports","ember","ember-concurrency/-helpers"],function(e,t,n){function o(e,t){return(0,n.taskHelperClosure)("perform",e,t)}e.performHelper=o,e.default=t.default.Helper.helper(o)}),define("dummy/helpers/task",["exports","ember"],function(e,t){function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){return Array.isArray(e)?e:Array.from(e)}function r(e){var t=o(e),r=t[0],i=t.slice(1);return r._curry.apply(r,n(i))}e.default=t.default.Helper.helper(r)}),define("dummy/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,n){var o=null;t.default.Helper?o=t.default.Helper.helper(n.xorHelper):t.default.HTMLBars.makeBoundHelper&&(o=t.default.HTMLBars.makeBoundHelper(n.xorHelper)),e.default=o}),define("dummy/initializers/component-prop-types",["exports","ember-prop-types/initializers/component-prop-types"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/ember-concurrency",["exports","ember-concurrency"],function(e,t){e.default={name:"ember-concurrency",initialize:function(){}}}),define("dummy/initializers/ember-hook/initialize",["exports","ember-hook/initializers/ember-hook/initialize"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/engines",["exports","ember-engines/initializers/engines"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function o(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var o;if("undefined"!=typeof window)o=window;else if("undefined"!=typeof global)o=global;else{if("undefined"==typeof self)return;o=self}var r,i=n.default.exportApplicationGlobal;r="string"==typeof i?i:t.default.String.classify(n.default.modulePrefix),o[r]||(o[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[r]}}))}}e.initialize=o,e.default={name:"export-application-global",initialize:o}}),define("dummy/initializers/liquid-fire",["exports","liquid-fire/ember-internals"],function(e,t){(0,t.initialize)(),e.default={name:"liquid-fire",initialize:function(){}}}),define("dummy/initializers/notifier-service",["exports"],function(e){e.default={name:"notifier-service",initialize:function(e){e.inject("route","notifier","service:notifier")}}}),define("dummy/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,n,o,r,i,u,l,a,s,f,d,m){function c(){t.default.Helper||((0,n.registerHelper)("and",o.andHelper),(0,n.registerHelper)("or",r.orHelper),(0,n.registerHelper)("eq",i.equalHelper),(0,n.registerHelper)("not",u.notHelper),(0,n.registerHelper)("is-array",l.isArrayHelper),(0,n.registerHelper)("not-eq",a.notEqualHelper),(0,n.registerHelper)("gt",s.gtHelper),(0,n.registerHelper)("gte",f.gteHelper),(0,n.registerHelper)("lt",d.ltHelper),(0,n.registerHelper)("lte",m.lteHelper))}e.initialize=c,e.default={name:"truth-helpers",initialize:c}}),define("dummy/instance-initializers/ember-frost-navigation",["exports","ember-frost-navigation/instance-initializers/ember-frost-navigation"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/instance-initializers/svg-use-polyfill",["exports","ember-frost-core/instance-initializers/svg-use-polyfill"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})}),define("dummy/middleware/index",["exports","npm:redux-thunk"],function(e,t){var n=t.default.default?t.default.default:t.default;e.default=[n]}),define("dummy/mirage-models/link",["exports","ember-frost-core/mirage-models/link"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/pods/application/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"UViPy5jg",block:'{"statements":[["append",["unknown",["frost-notifier"]],false],["text","\\n"],["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/pods/application/template.hbs"}})}),define("dummy/pods/components/custom-logo/component",["exports","ember","dummy/pods/components/custom-logo/template"],function(e,t,n){var o=t.default.Component;e.default=o.extend({layout:n.default})}),define("dummy/pods/components/custom-logo/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"lyvnxtfl",block:'{"statements":[["open-element","div",[]],["static-attr","class","nav-category-name"],["flush-element"],["text","\\n  Lorem Ipsum\\n  "],["yield","default"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":["default"],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/pods/components/custom-logo/template.hbs"}})}),define("dummy/pods/components/user-pane/component",["exports","ember","dummy/pods/components/user-pane/template"],function(e,t,n){var o=t.default.Component;e.default=o.extend({layout:n.default})}),define("dummy/pods/components/user-pane/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"LVVZIC0y",block:'{"statements":[["append",["unknown",["model","label"]],false],["text","\\n"],["append",["helper",["component"],[["get",["model","logo"]]],null],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/pods/components/user-pane/template.hbs"}})}),define("dummy/pods/demo/controller",["exports","ember"],function(e,t){var n=t.default.Controller,o=t.default.Logger.log,r=t.default.get,i=t.default.inject.service,u=t.default.set;e.default=n.extend({count:0,frostNavigation:i(),notifier:i(),_notify:function(e,t){r(this,"notifier").addNotification({message:t,type:e,autoClear:!0,clearDuration:1200})},init:function(){this._super.apply(this,arguments);var e=t.default.Object.extend({}).create({description:"custom route",icon:"application",pack:"frost-nav",name:"Custom Route",route:"demo.test",routeModels:["id0"],routeQueryParams:{count:0}});u(this,"customRouteObject",e);var n=[[{title:"Custom Column",routes:[e]}]];r(this,"frostNavigation.categories").push({name:"Custom Category",columns:n})},actions:{myAction:function(e){this._notify("success","Item '"+e.action+"' fired"),o(e)},incrementCount:function(){var e=r(this,"count")+1;u(this,"count",e),u(this,"customRouteObject.routeModels",["id"+e]),u(this,"customRouteObject.routeQueryParams",{count:e})}}})}),define("dummy/pods/demo/go/route",["exports","ember"],function(e,t){var n=t.default.Route;e.default=n.extend({})}),define("dummy/pods/demo/go/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"mtHWd/VL",block:'{"statements":[["text","Went\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/pods/demo/go/template.hbs"}})}),define("dummy/pods/demo/route",["exports","ember"],function(e,t){var n=t.default.Route;e.default=n.extend({})}),define("dummy/pods/demo/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"n+xACZ8B",block:'{"statements":[["comment"," BEGIN-SNIPPET template "],["text","\\n"],["append",["helper",["frost-navigation"],null,[["hook","navActions","logo","menu"],["my-navigation",["helper",["hash"],null,[["myAction"],[["helper",["action"],[["get",[null]],"myAction"],null]]]],["helper",["component"],["custom-logo"],[["hook","class"],["my-custom-logo","nav-category navigation-logo"]]],["helper",["component"],["user-pane"],[["class","model"],["nav-category user",["helper",["hash"],null,[["logo","label"],[["helper",["component"],["frost-icon"],[["hook","icon","pack"],["my-custom-menu","user","frost-nav"]]],"Username"]]]]]]]]],false],["text","\\n"],["comment"," END-SNIPPET "],["text","\\n"],["open-element","div",[]],["static-attr","class","page-content"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","row"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","column item"],["flush-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","row item"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","item"],["flush-element"],["text","\\n          "],["open-element","h3",[]],["flush-element"],["text","Click me"],["close-element"],["text","\\n\\n          "],["append",["helper",["frost-button"],null,[["icon","priority","size","hook","onClick"],["add","primary","small","my-incrementer",["helper",["action"],[["get",[null]],"incrementCount"],null]]]],false],["text","\\n          "],["append",["unknown",["count"]],false],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","row item"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","item"],["flush-element"],["text","\\n          "],["open-element","h3",[]],["flush-element"],["text","Router"],["close-element"],["text","\\n          "],["append",["helper",["code-snippet"],null,[["name"],["router.js"]]],false],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","item"],["flush-element"],["text","\\n          "],["open-element","h3",[]],["flush-element"],["text","Controller"],["close-element"],["text","\\n          "],["append",["helper",["code-snippet"],null,[["name"],["controller.js"]]],false],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n      "],["open-element","div",[]],["static-attr","class","row item"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","item"],["flush-element"],["text","\\n          "],["open-element","h3",[]],["flush-element"],["text","Template"],["close-element"],["text","\\n          "],["append",["helper",["code-snippet"],null,[["name"],["template.hbs"]]],false],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","item"],["flush-element"],["text","\\n          "],["open-element","h3",[]],["flush-element"],["text","Outlet"],["close-element"],["text","\\n          "],["append",["unknown",["outlet"]],false],["text","\\n        "],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/pods/demo/template.hbs"}})}),define("dummy/pods/demo/test/controller",["exports","ember"],function(e,t){var n=t.default.Controller;e.default=n.extend({queryParams:["count"]})}),define("dummy/pods/demo/test/route",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/pods/demo/test/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"ZxXhdN7c",block:'{"statements":[["text","Test route\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/pods/demo/test/template.hbs"}})}),define("dummy/reducers/optional",["exports"],function(e){e.default=function(e){return function(t,n){return e(t,n)}}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","dummy/config/environment","ember"],function(e,t,n){var o=n.default.Router,r=o.extend({location:t.default.locationType,rootURL:t.default.rootURL});r.map(function(){this.route("demo",{path:"/"},function(){this.route("go"),this.route("test",{path:"/test/:id"}),this.mount("ember-blog-engine",{as:"blog"})}),this.nav("demo",function(){this.category("Category 1",{pack:"frost-nav",icon:"application"},function(){this.column("Column 1",{color:"#009eef"},function(){this.action("Action Example",{action:"myAction",pack:"frost-nav",icon:"application",description:"This is an action",inline:!0}),this.app("Route Example",{route:"go",description:"This is a route",pack:"frost-nav",icon:"application"}),this.engine("Blog Engine",{route:"blog",description:"This is an engine example",package:"ember-blog-engine",pack:"frost-nav",icon:"application"}),this.section("More Content",{color:"#a1e7ff"},function(){this.link("Google",{url:"http://google.ca",description:"Go to Google",pack:"frost-nav",icon:"application",tabbed:!0}),this.link("http://google.ca"),this.action("Action 1",{action:"myAction",pack:"frost-nav",icon:"application"})})}),this.column("Empty Column")})})}),e.default=r}),define("dummy/services/active-session",["exports","ember"],function(e,t){var n=t.default.Service;e.default=n.extend({user:null,init:function(){this._super(),this.user="Test User"}})}),define("dummy/services/blog-data",["exports","ember"],function(e,t){var n=t.default.Service,o=t.default.get,r=t.default.inject.service;e.default=n.extend({posts:null,session:r("active-session"),init:function(){this._super.apply(this,arguments),this.posts=[{id:"1",title:"Welcome to My Blog",author:"dgeb",body:"\n          <p>I hear blogging is the latest thing so I'm going to give this a go.</p>\n          <p>Please leave some comments below.</p>\n        ",comments:[{id:"101",author:"rwjblue",comment:"Good luck!"}]},{id:"2",title:"Closing this Thing Down",author:"dgeb",body:"\n          <p>Well, it's been a good run folks.</p>\n          <p>Thanks for the memories.</p>\n        ",comments:[{id:"102",author:"rwjblue",comment:"Too bad!"}]}]},add:function(e,t){o(this,"posts").push({id:this.posts.length,author:o(this,"session.user"),title:e,body:t,comments:[]})}})}),define("dummy/services/frost-navigation",["exports","ember-frost-navigation/services/frost-navigation"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/liquid-fire-transitions",["exports","liquid-fire/transition-map"],function(e,t){e.default=t.default}),define("dummy/services/notifier",["exports","ember-frost-notifier/pods/services/notifier"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/redux",["exports","ember","npm:redux","dummy/reducers/index","dummy/enhancers/index","dummy/reducers/optional","dummy/middleware/index"],function(e,t,n,o,r,i,u){function l(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=t.default.assert,s=t.default.isArray,f=function(e){return a("Middleware must either be an array, or a hash containing a `middleware` property",s(e)||e.middleware),s(e)?{middleware:e}:e},d=f(u.default),m=d.middleware,c=d.setup,p=void 0===c?function(){}:c,b=n.default.createStore,y=n.default.applyMiddleware,h=n.default.combineReducers,g=n.default.compose,x=g(y.apply(void 0,l(m)),r.default)(b);e.default=t.default.Service.extend({init:function(){this.store=x((0,i.default)(h(o.default))),p(this.store),this._super.apply(this,arguments)},getState:function(){return this.store.getState()},dispatch:function(e){return this.store.dispatch(e)},subscribe:function(e){return this.store.subscribe(e)}})}),define("dummy/snippets",["exports"],function(e){e.default={
"controller.js":"export default Controller.extend({\n  count: 0,\n  frostNavigation: service(),\n  notifier: service(),\n  _notify (type, message) {\n    get(this, 'notifier').addNotification({\n      message,\n      type,\n      autoClear: true,\n      clearDuration: 1200\n    })\n  },\n  init () {\n    this._super(...arguments)\n    let customRouteObject = Ember.Object.extend({}).create({\n      description: 'custom route',\n      icon: 'application',\n      pack: 'frost-nav',\n      name: 'Custom Route',\n      route: 'demo.test',\n      routeModels: ['id0'],\n      routeQueryParams: {count: 0}\n    })\n    set(this, 'customRouteObject', customRouteObject)\n    let columns = [\n      [\n        {\n          title: 'Custom Column',\n          routes: [\n            customRouteObject\n          ]\n        }\n      ]\n    ]\n    get(this, 'frostNavigation.categories').push({\n      name: 'Custom Category',\n      columns\n    })\n  },\n  actions: {\n    myAction (item) {\n      this._notify(\n        'success',\n        `Item '${item.action}' fired`\n      )\n      log(item)\n    },\n    incrementCount () {\n      let count = get(this, 'count') + 1\n\n      set(this, 'count', count)\n\n      set(this, 'customRouteObject.routeModels', [`id${count}`])\n      set(this, 'customRouteObject.routeQueryParams', {count})\n    }\n  }\n})","router.js":"Router.map(function () {\n  this.route('demo', {path: '/'}, function () {\n    this.route('go')\n    this.route('test', {path: '/test/:id'})\n    this.mount('ember-blog-engine', {\n      as: 'blog'\n    })\n  })\n  this.nav('demo', function () {\n    this.category('Category 1', {\n      pack: 'frost-nav',\n      icon: 'application'\n    }, function () {\n      this.column('Column 1', {\n        color: '#009eef'\n      }, function () {\n        this.action('Action Example', {\n          action: 'myAction',\n          pack: 'frost-nav',\n          icon: 'application',\n          description: 'This is an action',\n          inline: true\n        })\n        this.app('Route Example', {\n          route: 'go',\n          description: 'This is a route',\n          pack: 'frost-nav',\n          icon: 'application'\n        })\n        this.engine('Blog Engine', {\n          route: 'blog',\n          description: 'This is an engine example',\n          package: 'ember-blog-engine',\n          pack: 'frost-nav',\n          icon: 'application'\n        })\n        this.section('More Content', {\n          color: '#a1e7ff'\n        }, function () {\n          this.link('Google', {\n            url: 'http://google.ca',\n            description: 'Go to Google',\n            pack: 'frost-nav',\n            icon: 'application',\n            tabbed: true\n          })\n          this.link('http://google.ca')\n          this.action('Action 1', {\n            action: 'myAction',\n            pack: 'frost-nav',\n            icon: 'application'\n          })\n        })\n      })\n      this.column('Empty Column')\n    })\n  })\n})\n\nexport default Router","template.hbs":"{{frost-navigation\n  hook='my-navigation'\n  navActions=(hash\n    myAction=(action 'myAction')\n  )\n  logo=(component 'custom-logo'\n    hook='my-custom-logo'\n    class='nav-category navigation-logo'\n  )\n  menu=(component 'user-pane'\n    class='nav-category user'\n    model=(hash\n      logo=(component 'frost-icon'\n        hook='my-custom-menu'\n        icon='user'\n        pack='frost-nav'\n      )\n      label='Username'\n    )\n  )\n}}"}}),define("dummy/templates/components/code-snippet",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"mJxgtHOS",block:'{"statements":[["append",["unknown",["source"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/code-snippet.hbs"}})}),define("dummy/transitions/cross-fade",["exports","liquid-fire/transitions/cross-fade"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/default",["exports","liquid-fire/transitions/default"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/explode",["exports","liquid-fire/transitions/explode"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/fade",["exports","liquid-fire/transitions/fade"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/flex-grow",["exports","liquid-fire/transitions/flex-grow"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/fly-to",["exports","liquid-fire/transitions/fly-to"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/move-over",["exports","liquid-fire/transitions/move-over"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/scale",["exports","liquid-fire/transitions/scale"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/scroll-then",["exports","liquid-fire/transitions/scroll-then"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/to-down",["exports","liquid-fire/transitions/to-down"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/to-left",["exports","liquid-fire/transitions/to-left"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/to-right",["exports","liquid-fire/transitions/to-right"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/to-up",["exports","liquid-fire/transitions/to-up"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/transitions/wait",["exports","liquid-fire/transitions/wait"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/utils/addRoute",["exports","frost-guide-custom-routing/utils/addRoute"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/utils/key-codes",["exports","ember-frost-core/utils"],function(e,t){Object.defineProperty(e,"keyCodes",{enumerable:!0,get:function(){return t.keyCodes}})}),define("dummy/config/environment",["ember"],function(e){try{var t=document.querySelector('meta[name="dummy/config/environment"]').getAttribute("content"),n=JSON.parse(unescape(t)),o={default:n};return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(e){throw new Error('Could not read config from meta tag with name "dummy/config/environment".')}}),runningTests||require("dummy/app").default.create({});