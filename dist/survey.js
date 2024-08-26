"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Script for the domestic geographic name change form

console.log("survey.js()  starting survey.js() ... ");

// ------------------------------------
// Elastic IP Address of EC2 Instance
// ------------------------------------
var ec2ServerURL = 'http://44.207.170.49'; //need to add const infront of this.

// Import React Hook Form for survey creation
//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import { useForm } from 'react-hook-form';
var React = require('react');
var useState = React.useState; //missing import
var ReactDOM = require('react-dom/client');
var _require = require('react-hook-form'),
  useForm = _require.useForm;
var onSubmit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('/submit-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
        case 2:
          response = _context.sent;
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function onSubmit(_x) {
    return _ref.apply(this, arguments);
  };
}();
var geonameSurvey = function geonameSurvey() {
  var _useForm = useForm(),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showHonoreeDetails = _useState2[0],
    setShowHonoreeDetails = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showWildernessDetails = _useState4[0],
    setShowWildernessDetails = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showNativeAmericanDetails = _useState6[0],
    setShowNativeAmericanDetails = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showLocalOppositionDetails = _useState8[0],
    setShowLocalOppositionDetails = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    showCompleterDetails = _useState10[0],
    setShowCompleterDetails = _useState10[1];
  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };
  var options = ['Arch', 'Area', 'Arroyo', 'Bar', 'Basin', 'Bay', 'Beach', 'Bench', 'Bend', 'Canal', 'Cape', 'Cave', 'Channel', 'Cliff', 'Crater', 'Crossing', 'Falls', 'Flat', 'Gap', 'Glacier', 'Gut', 'Island', 'Isthmus', 'Lake', 'Lava', 'Levee', 'Locale', 'Pillar', 'Plain', 'Populated Place', 'Range', 'Rapids', 'Reservoir', 'Ridge', 'Sea', 'Slope', 'Spring', 'Stream', 'Summit', 'Swamp', 'Valley', 'Woods']; // Define options

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/React.createElement("label", null, "What is the proposed name of the feature?", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("proposedName")))), /*#__PURE__*/React.createElement("label", null, "Is the proposed name currently in local use?", /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, register("currentLocalName")))), /*#__PURE__*/React.createElement("label", null, "What is the location of the feature?", /*#__PURE__*/React.createElement("div", null, "Latitude: ", /*#__PURE__*/React.createElement("input", _extends({
    type: "number"
  }, register("latitude")))), /*#__PURE__*/React.createElement("div", null, "Longitude: ", /*#__PURE__*/React.createElement("input", _extends({
    type: "number"
  }, register("longitude"))))), /*#__PURE__*/React.createElement("label", null, "Is this a proposal to change an existing name?", /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, register("existingName")))), existingName === false &&
  /*#__PURE__*/
  // Check for "false" explicitly
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", null, "What is the address of the feature?", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("featureAddress")))), /*#__PURE__*/React.createElement("label", null, "Public Land Survey System", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("surveySystem"))))), existingName === true &&
  /*#__PURE__*/
  // Check for "true" explicitly
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", null, "What is the GNIS Name of the feature?", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("gnisName")))), errors.gnisName && /*#__PURE__*/React.createElement("span", null, errors.gnisName.message), " ", /*#__PURE__*/React.createElement("label", null, "What is the GNIS ID of the feature?", /*#__PURE__*/React.createElement("input", _extends({
    type: "number"
  }, register("gnisID")))), errors.gnisID && /*#__PURE__*/React.createElement("span", null, errors.gnisID.message), " "), /*#__PURE__*/React.createElement("label", null, "What is the Feature Type?", /*#__PURE__*/React.createElement("select", register("featureType"), options.map(function (option, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: option
    }, option);
  }))), /*#__PURE__*/React.createElement("label", null, "Please provide a description of the feature.", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("featureDescription")))), /*#__PURE__*/React.createElement("label", null, "Please provide relevant information about the proposed name, such as origin, meaning, how long it has been in current use, as well as current or historical significance. Also include why you believe the feature requires a name or name change and why the proposed name is appropriate. Describe any documents that you will be submitting to support your proposal.", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("nameDetails")))), /*#__PURE__*/React.createElement("label", null, "Please provide any supporting documentation about the proposed name, including any web links.", /*#__PURE__*/React.createElement("input", _extends({
    type: "file",
    accept: ".pdf,.doc,.docx"
  }, register("supportingDocument")))), /*#__PURE__*/React.createElement("label", null, "Is the name commemorative? Does the name honor or refer to a person or persons?", /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, register("commemorative"), {
    onChange: function onChange(e) {
      return setShowHonoreeDetails(e.target.checked);
    }
  }))), showHonoreeDetails && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", null, "What is the honoree's full name?", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("honoreeName")))), /*#__PURE__*/React.createElement("label", null, "What is the honoree's date of birth?", /*#__PURE__*/React.createElement("input", _extends({
    type: "date"
  }, register("honoreeDOB")))), /*#__PURE__*/React.createElement("label", null, "What is the honoree's date of death?", /*#__PURE__*/React.createElement("input", _extends({
    type: "date"
  }, register("honoreeDOD")))), /*#__PURE__*/React.createElement("label", null, "Please provide a short biography and significance or association with the geographic feature.", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("honoreeBio"))))), /*#__PURE__*/React.createElement("label", null, "Is the feature in a Wilderness Area or Wilderness Study Area?", /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, register("wilderness"), {
    onChange: function onChange(e) {
      return setShowWildernessDetails(e.target.checked);
    }
  }))), showWildernessDetails && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", null, "Please provide your justification for making an exception to the Wilderness Policy. Please note that the BGN will not approve new names for unnamed features within wilderness areas or wilderness study areas, unless an overriding need can be demonstrated by the proponent.", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("wildernessDescription"))))), /*#__PURE__*/React.createElement("label", null, "Is the name you are proposing intended to honor Native Americans, their language, or culture?", /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, register("honorNativeAmerican"), {
    onChange: function onChange(e) {
      return setShowNativeAmericanDetails(e.target.checked);
    }
  }))), showNativeAmericanDetails && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", null, "Please indicate below, or in documentation submitted separately \u2013 with this proposal or any time after the proposal is submitted \u2013 any efforts to solicit Tribal input.", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("tribalInput"))))), /*#__PURE__*/React.createElement("label", null, "Is there any local opposition or conflict with the proposed name?", /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, register("localOpposition"), {
    onChange: function onChange(e) {
      return setShowLocalOppositionDetails(e.target.checked);
    }
  }))), showLocalOppositionDetails && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", null, "Please explain and describe any opposition.", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("oppositionDetails"))))), /*#__PURE__*/React.createElement("label", null, "Please provide any additional notes about the proposed name that you did not include in response to any of the previous questions.", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("additionalDetails")))), /*#__PURE__*/React.createElement("label", null, "Are you completing this form for someone else?", /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, register("otherComplete"), {
    onChange: function onChange(e) {
      return setShowCompleterDetails(e.target.checked);
    }
  }))), showCompleterDetails && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", null, "Please provide your name.", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("completerName")))), /*#__PURE__*/React.createElement("label", null, "Please provide your email address.", /*#__PURE__*/React.createElement("input", _extends({
    type: "email"
  }, register("completerEmail")))), /*#__PURE__*/React.createElement("label", null, "Please provide your mailing address.", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("completerAddress")))), /*#__PURE__*/React.createElement("label", null, "Please provide your telephone number.", /*#__PURE__*/React.createElement("input", _extends({
    type: "tel"
  }, register("completerPhone"))))), /*#__PURE__*/React.createElement("label", null, "What is the name of the proponent?", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("proponentName")))), /*#__PURE__*/React.createElement("label", null, "Please provide the agency or organization of the proponent, if applicable.", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("proponentOrg")))), /*#__PURE__*/React.createElement("label", null, "Please provide the email address of the proponent.", /*#__PURE__*/React.createElement("input", _extends({
    type: "email"
  }, register("proponentEmail")))), /*#__PURE__*/React.createElement("label", null, "Please provide the mailing address of the proponent.", /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, register("proponentAddress")))), /*#__PURE__*/React.createElement("label", null, "Please provide the telephone number (including area code) of the proponent.", /*#__PURE__*/React.createElement("input", _extends({
    type: "tel"
  }, register("proponentPhone")))), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit"));
};

//Not sure if I need this root here on this script or in survey.html
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement("geonameSurvey", null));
var _default = exports["default"] = geonameSurvey;
module.exports = geonameSurvey;