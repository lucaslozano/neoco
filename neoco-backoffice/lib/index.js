'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactRouterDom = require('react-router-dom');
var styled = require('styled-components');
var bluejayUi = require('bluejay-ui');
var reactI18next = require('react-i18next');
var Form$1 = require('neoco/neoco-form');
var alertify = require("alertifyjs");

function _interopDefaultLegacy(e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var Form__default = /*#__PURE__*/_interopDefaultLegacy(Form$1);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var AuthContext = /*#__PURE__*/React.createContext();

var initState = function initState(key, defaultValue) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return defaultValue;
  }
};

var AuthProvider = function AuthProvider(_ref) {
  var children = _ref.children,
    sidebarProps = _ref.sidebarProps;

  var _useState = React.useState(initState("isLoggedIn", false)),
    _useState2 = _slicedToArray(_useState, 2),
    isLoggedIn = _useState2[0],
    setIsLoggedIn = _useState2[1];

  var _useState3 = React.useState(initState("user", {})),
    _useState4 = _slicedToArray(_useState3, 2),
    user = _useState4[0],
    setUser = _useState4[1];

  var login = function login(_ref2) {
    var token = _ref2.token,
      nextUser = _ref2.user;
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(nextUser));
    setUser(nextUser);
    setIsLoggedIn(true);
  };

  var logout = function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser({});
    setIsLoggedIn(false);
  };

  var updateUser = function updateUser(nextUser) {
    localStorage.setItem("user", JSON.stringify(_objectSpread2(_objectSpread2({}, user), nextUser)));
    setUser(_objectSpread2(_objectSpread2({}, user), nextUser));
  };

  return /*#__PURE__*/React__default['default'].createElement(AuthContext.Provider, {
    value: {
      isLoggedIn: isLoggedIn,
      user: user,
      login: login,
      logout: logout,
      updateUser: updateUser,
      sidebarProps: sidebarProps
    }
  }, children);
};

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 40px;\n  height: 40px;\n\n  svg {\n    width: 15px;\n    height: 15px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border: 1.5px solid #19c3fc;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: auto;\n  padding-bottom: 60px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  overflow-y: auto;\n  padding: 15px 60px 150px 60px;\n  background: linear-gradient(180deg, #edf0f4 0%, #dadde1 100%);\n  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100vh;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Logout = function Logout(props) {
  return /*#__PURE__*/React__default['default'].createElement("svg", props, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5 1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5H4a.5.5 0 0 1 0 1H1.5A1.5 1.5 0 0 1 0 9.5v-8A1.5 1.5 0 0 1 1.5 0H4a.5.5 0 0 1 0 1H1.5zM7.146 3.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 1 1-.708-.708L8.793 5.5 7.146 3.854a.5.5 0 0 1 0-.708z",
    fill: "#fff"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 5.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z",
    fill: "#fff"
  }));
};

Logout.defaultProps = {
  width: "10",
  height: "11",
  viewBox: "0 0 10 11",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var Edit = function Edit(props) {
  return /*#__PURE__*/React__default['default'].createElement("svg", props, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.437 0c.655 0 1.283.261 1.741.723l3.101 3.101a2.462 2.462 0 0 1 0 3.482L7.958 18.624c-.699.806-1.69 1.3-2.823 1.378H0v-1l.003-4.215c.085-1.054.576-2.035 1.323-2.694L12.696.725A2.456 2.456 0 0 1 14.436 0zM5.064 18.005c.534-.038 1.031-.287 1.43-.743L14.058 9.7l-3.755-3.755-7.606 7.605c-.405.358-.656.86-.696 1.318v3.135l3.064.002zM11.717 4.53l3.754 3.755 2.394-2.394a.462.462 0 0 0 0-.653L14.76 2.135a.456.456 0 0 0-.647 0L11.717 4.53z"
  }));
};

Edit.defaultProps = {
  width: "20",
  height: "21",
  viewBox: "0 0 20 21",
  xmlns: "http://www.w3.org/2000/svg"
};
var Container = styled__default['default'].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.backgroundColor;
});
var ChildrenContainer = styled__default['default'].div(_templateObject2());
var ControlsContainer = styled__default['default'].div(_templateObject3());
var ProfileImage = styled__default['default'].img(_templateObject4());
var SmallButton = styled__default['default'](bluejayUi.Button)(_templateObject5());

var AuthPage = function AuthPage(_ref2) {
  var children = _ref2.children,
    routes = _ref2.routes;

  var _useContext = React.useContext(AuthContext),
    user = _useContext.user,
    logout = _useContext.logout,
    sidebarProps = _useContext.sidebarProps;

  return /*#__PURE__*/React__default['default'].createElement(Container, null, /*#__PURE__*/React__default['default'].createElement(bluejayUi.Sidebar, _extends({
    defaultOpen: false
  }, sidebarProps), /*#__PURE__*/React__default['default'].createElement(bluejayUi.List, null, routes.filter(function (route) {
    return route.to;
  }).map(function (route, key) {
    return /*#__PURE__*/React__default['default'].createElement(bluejayUi.Link, {
      key: key,
      as: reactRouterDom.Link,
      to: route.to,
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React__default['default'].createElement(bluejayUi.ListItem, {
      icon: route.icon
    }, route.name));
  })), /*#__PURE__*/React__default['default'].createElement(ControlsContainer, null, user.imageUrl && /*#__PURE__*/React__default['default'].createElement(ProfileImage, {
    src: user.imageUrl
  }), /*#__PURE__*/React__default['default'].createElement(bluejayUi.Link, {
    as: reactRouterDom.Link,
    to: "/profile"
  }, /*#__PURE__*/React__default['default'].createElement(SmallButton, {
    color: "primary",
    style: {
      marginTop: 20
    },
    rounded: true,
    icon: Edit
  })), /*#__PURE__*/React__default['default'].createElement(SmallButton, {
    color: "#FC6B19",
    rounded: true,
    icon: Logout,
    onClick: logout
  }))), /*#__PURE__*/React__default['default'].createElement(ChildrenContainer, null, children));
};

var isEmptyObject = function isEmptyObject(object) {
  return Object.keys(object).length === 0 && object.constructor === Object;
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["    \n    width: 350px;\n  "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: auto;\n  flex-direction: column;\n  width: 100%;\n  background-color: ", ";\n\n  ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var mediaQuery = bluejayUi.responsive.mediaQuery;
var Form = styled__default['default'].form(_templateObject$1(), function (_ref) {
  var theme = _ref.theme;
  return theme.formBackgroundColor;
}, mediaQuery.TABLET(_templateObject2$1()));

var UnAuthForm = function UnAuthForm(_ref2) {
  var onSubmit = _ref2.onSubmit,
    title = _ref2.title,
    submitText = _ref2.submitText,
    _ref2$register = _ref2.register,
    register = _ref2$register === void 0 ? {} : _ref2$register,
    _ref2$recoverPassword = _ref2.recoverPassword,
    recoverPassword = _ref2$recoverPassword === void 0 ? {} : _ref2$recoverPassword,
    _ref2$fields = _ref2.fields,
    fields = _ref2$fields === void 0 ? [{
      name: "email"
    }, {
      name: "password"
    }] : _ref2$fields,
    _ref2$message = _ref2.message,
    message = _ref2$message === void 0 ? {} : _ref2$message,
    children = _ref2.children,
    _ref2$resetMode = _ref2.resetMode,
    resetMode = _ref2$resetMode === void 0 ? function () { } : _ref2$resetMode;

  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;

  var _useState = React.useState(initialStateFields(fields)),
    _useState2 = _slicedToArray(_useState, 2),
    credentials = _useState2[0],
    setCredentials = _useState2[1];

  var onInputChange = function onInputChange(e, field) {
    setCredentials(_objectSpread2(_objectSpread2({}, credentials), {}, _defineProperty({}, field.name, e.target.value)));
    resetMode();
  };

  var onLocalSubmit = function onLocalSubmit(e) {
    e.preventDefault();
    onSubmit(credentials);
  };

  return /*#__PURE__*/React__default['default'].createElement(Form, {
    onSubmit: onLocalSubmit
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    style: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "black",
      marginBottom: 35
    }
  }, title), fields.map(function (field, index) {
    return /*#__PURE__*/React__default['default'].createElement(bluejayUi.Input, _extends({
      key: field.name
    }, field, {
      onChange: function onChange(e) {
        return onInputChange(e, field);
      },
      value: credentials[field.name]
    }));
  }), recoverPassword.linkText && /*#__PURE__*/React__default['default'].createElement("span", {
    style: {
      margin: "0px auto 50px auto",
      textAlign: "center",
      color: "#000",
      fontWeight: "bold"
    }
  }, recoverPassword.text, /*#__PURE__*/React__default['default'].createElement(bluejayUi.Link, {
    as: reactRouterDom.Link,
    to: recoverPassword.to,
    color: "primary"
  }, recoverPassword.linkText)), message && /*#__PURE__*/React__default['default'].createElement(bluejayUi.Text, {
    color: message.color,
    style: {
      margin: "auto auto 30px auto",
      textAlign: "center"
    }
  }, t(message.translation)), submitText && /*#__PURE__*/React__default['default'].createElement(bluejayUi.Button, {
    color: "primary",
    style: {
      fontWeight: "bold",
      textTransform: "none"
    },
    type: "submit",
    "data-testid": "unauth-submit",
    onClick: function onClick(e) {
      return isEmptyObject(credentials) ? e.preventDefault() : null;
    }
  }, submitText), register.linkText && /*#__PURE__*/React__default['default'].createElement("span", {
    style: {
      margin: "0px auto 50px auto",
      textAlign: "center",
      color: "#000",
      fontWeight: "bold"
    }
  }, register.text, /*#__PURE__*/React__default['default'].createElement(bluejayUi.Link, {
    as: reactRouterDom.Link,
    to: register.to,
    color: "primary"
  }, register.linkText)), children);
};

function initialStateFields() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return fields.reduce(function (reducer, field) {
    var fieldName = field.name;
    return _objectSpread2(_objectSpread2({}, reducer), {}, _defineProperty({}, fieldName, ""));
  }, {});
}

var Login = function Login(_ref) {
  var _ref$onSubmit = _ref.onSubmit,
    onSubmit = _ref$onSubmit === void 0 ? function () {
      return Promise.resolve();
    } : _ref$onSubmit,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ["onSubmit", "children"]);

  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;

  var _useContext = React.useContext(AuthContext),
    login = _useContext.login;

  var _useState = React.useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    message = _useState2[0],
    setMessage = _useState2[1];

  var onLocalSubmit = function onLocalSubmit(credentials) {
    if (!credentials.email && !credentials.password) {
      return;
    }

    if (typeof onSubmit === "function") {
      onSubmit(credentials).then(login).catch(function (_ref2) {
        var message = _ref2.message;
        return setMessage(message);
      });
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(UnAuthForm, _extends({}, props, {
    onSubmit: onLocalSubmit,
    message: message,
    title: t("login.title"),
    submitText: t("general.signin"),
    fields: [{
      label: t("general.email"),
      placeholder: t("general.email"),
      type: "email",
      name: "email",
      id: "email"
    }, {
      label: t("general.password"),
      placeholder: t("general.password"),
      type: "password",
      name: "password",
      id: "password"
    }]
  }), children);
};

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  padding: 50px 10%;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row;\n  "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  overflow: hidden;\n  background-color: ", ";\n  ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var mediaQuery$1 = bluejayUi.responsive.mediaQuery;
var Container$1 = styled__default['default'].div(_templateObject$2(), function (_ref) {
  var theme = _ref.theme;
  return theme.backgroundColor;
}, mediaQuery$1.TABLET(_templateObject2$2()));
var Box = styled__default['default'].div(_templateObject3$1());

var UnAuthPage = function UnAuthPage(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React__default['default'].createElement(Container$1, null, /*#__PURE__*/React__default['default'].createElement(Box, null, children));
};

var RecoverPassword = function RecoverPassword(_ref) {
  var _ref$onSubmit = _ref.onSubmit,
    onSubmit = _ref$onSubmit === void 0 ? function () {
      return Promise.resolve();
    } : _ref$onSubmit,
    props = _objectWithoutProperties(_ref, ["onSubmit"]);

  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;

  var _useContext = React.useContext(AuthContext),
    recoverPassword = _useContext.recoverPassword;

  var onLocalSubmit = function onLocalSubmit(credentials) {
    if (typeof onSubmit === "function") {
      onSubmit(credentials);
    } else {
      recoverPassword();
    }
  };

  return /*#__PURE__*/React__default['default'].createElement(UnAuthForm, _extends({}, props, {
    onSubmit: onLocalSubmit,
    title: t("recoverPassword.title"),
    submitText: t("recoverPassword.send"),
    fields: [{
      label: t("general.email"),
      placeholder: t("general.email"),
      type: "email",
      name: "email",
      id: "email"
    }]
  }));
};

var index = {
  AuthPage: AuthPage,
  Login: Login,
  UnAuthPage: UnAuthPage,
  RecoverPassword: RecoverPassword
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 45px;\n  padding: 50px;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var CustomCard = styled__default['default'](bluejayUi.Card)(_templateObject$3());

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  color: black;\n  font-size: 36px;\n  font-weight: 600;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var H1 = styled__default['default'](bluejayUi.Text)(_templateObject$4());

var translateField = function translateField(modelName, t) {
  var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "name";
  return function (field) {
    return _objectSpread2(_objectSpread2({}, field), {}, _defineProperty({}, prop, t("fields.".concat(modelName, ".").concat(field.property))));
  };
};

var getFields = function getFields(header, t) {
  return header.sections.reduce(function (reducer, section) {
    return [].concat(_toConsumableArray(reducer), _toConsumableArray(section.fields.filter(removeIfNotVisible).map(translateField(header.options.name, t))));
  }, []);
};
var getFilterFields = function getFilterFields(header) {
  return header.sections.reduce(function (reducer, section) {
    return [].concat(_toConsumableArray(reducer), _toConsumableArray(section.fields.filter(removeIfNotFilter)));
  }, []);
};

var removeIfNotVisible = function removeIfNotVisible(field) {
  var _field$tableOptions, _field$tableOptions2;

  return typeof ((_field$tableOptions = field.tableOptions) === null || _field$tableOptions === void 0 ? void 0 : _field$tableOptions.show) !== "undefined" ? (_field$tableOptions2 = field.tableOptions) === null || _field$tableOptions2 === void 0 ? void 0 : _field$tableOptions2.show : true;
};

var removeIfNotFilter = function removeIfNotFilter(field) {
  var _field$tableOptions3, _field$tableOptions4;

  return ((_field$tableOptions3 = field.tableOptions) === null || _field$tableOptions3 === void 0 ? void 0 : _field$tableOptions3.filter) || ((_field$tableOptions4 = field.tableOptions) === null || _field$tableOptions4 === void 0 ? void 0 : _field$tableOptions4.isSearchable) || field.relation;
};

var getClientSidePaginatedData = function getClientSidePaginatedData(_ref) {
  var pagination = _ref.pagination,
    data = _ref.data;
  var start = (pagination.page - 1) * pagination.itemsPerPage;
  return data.slice(start, start + pagination.itemsPerPage);
};

var getModelPK = function getModelPK(header) {
  var _header$options;

  return header === null || header === void 0 ? void 0 : (_header$options = header.options) === null || _header$options === void 0 ? void 0 : _header$options.primaryKey;
};

var getItemIdentifier = function getItemIdentifier(item, header) {
  if (item === null || item === void 0 ? void 0 : item.id) {
    return item.id;
  } else {
    var primaryKeyAttribute = getModelPK(header);
    return primaryKeyAttribute ? item[primaryKeyAttribute] : null;
  }
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: ", ";\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var itemsPerPageOptions = [{
  value: 10,
  label: "10"
}, {
  value: 20,
  label: "20"
}, {
  value: 50,
  label: "50"
}, {
  value: 100,
  label: "100"
}];

var PaginationButtons = function PaginationButtons(_ref) {
  var pagination = _ref.pagination,
    updatePagination = _ref.updatePagination,
    _ref$displayItemsPerP = _ref.displayItemsPerPage,
    displayItemsPerPage = _ref$displayItemsPerP === void 0 ? true : _ref$displayItemsPerP;
  var itemsOptions = itemsPerPageOptions.filter(function (_ref2) {
    var value = _ref2.value;
    return value === (pagination === null || pagination === void 0 ? void 0 : pagination.itemsPerPage);
  });
  var numberOfPages = pagination && pagination.pages ? pagination.pages : 5;
  return /*#__PURE__*/React.createElement(Container$2, {
    onlyPagination: !!(numberOfPages && !displayItemsPerPage)
  }, itemsPerPageOptions[0].value >= pagination.count || !displayItemsPerPage ? /*#__PURE__*/React.createElement(React.Fragment, null) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      paddingLeft: 0,
      width: 120
    }
  }, /*#__PURE__*/React.createElement(bluejayUi.MultiSelect, {
    isSearchable: false,
    value: itemsOptions.length ? itemsOptions[0] : itemsPerPageOptions[0],
    options: itemsPerPageOptions,
    onChange: function onChange(_ref3) {
      var value = _ref3.value;
      return updatePagination(_objectSpread2(_objectSpread2({}, pagination), {}, {
        itemsPerPage: parseInt(value),
        page: pagination.firstPage,
        pages: pagination.count ? Math.ceil(pagination.count / parseInt(value)) : 1
      }));
    }
  })), numberOfPages === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      paddingRight: 0
    }
  }, pagination.page ? /*#__PURE__*/React.createElement(bluejayUi.Pagination, {
    style: {
      marginTop: 0
    },
    page: pagination.page,
    goToPage: function goToPage(page) {
      return updatePagination(_objectSpread2(_objectSpread2({}, pagination), {}, {
        page: page
      }));
    },
    pageBound: Math.min(numberOfPages, 3),
    pages: numberOfPages
  }) : /*#__PURE__*/React.createElement(React.Fragment, null)));
};

var Container$2 = styled__default['default'].div(_templateObject$5(), function (_ref4) {
  var onlyPagination = _ref4.onlyPagination;
  return onlyPagination ? "flex-end" : "space-between";
});

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-left: 20px;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}

var FiltersInput = function FiltersInput(_ref) {
  var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () { } : _ref$onChange,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$auxData = _ref.auxData,
    auxData = _ref$auxData === void 0 ? {} : _ref$auxData;

  var _useState = React.useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    filterTypes = _useState2[0],
    setFilterTypes = _useState2[1];

  var _useState3 = React.useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    currentFilters = _useState4[0],
    setCurrentFilters = _useState4[1];

  React.useEffect(function () {
    setFilterTypes(options);
  }, [options]);
  return filterTypes ? /*#__PURE__*/React.createElement(Container$3, null, /*#__PURE__*/React.createElement(bluejayUi.MultiSelect, _extends({}, style, {
    styles: {
      menu: function menu(provided) {
        return _objectSpread2(_objectSpread2({}, provided), {}, {
          padding: 0
        });
      },
      option: function option(provided) {
        return _objectSpread2(_objectSpread2({}, provided), {}, {
          padding: "4px 8px"
        });
      },
      control: function control(provided, _ref2) {
        var width = _ref2.selectProps.width;
        return _objectSpread2(_objectSpread2({}, provided), {}, {
          width: width
        });
      },
      singleValue: function singleValue(provided, state) {
        var opacity = state.isDisabled ? 0.5 : 1;
        var transition = "opacity 300ms";
        return _objectSpread2(_objectSpread2({}, provided), {}, {
          opacity: opacity,
          transition: transition
        });
      }
    },
    placeholder: "Filtrar",
    defaultValue: currentFilters,
    isMulti: true,
    name: "filters",
    options: getNextOptions({
      filters: currentFilters,
      filterTypes: filterTypes,
      aux: auxData
    }),
    value: currentFilters,
    className: "basic-multi-select",
    classNamePrefix: "select",
    isSearchable: false,
    onChange: function onChange(options) {
      if (!options || !options.length) {
        setCurrentFilters([]);

        _onChange([]);
      } else {
        var lastFilter = options && options.length ? options[options.length - 1] : null;

        if (lastFilter && !lastFilter.relation && typeof lastFilter.children === "undefined") {
          var _lastFilter = options[options.length - 2];
          var children = options[options.length - 1];

          var nextFilter = _objectSpread2(_objectSpread2({}, _lastFilter), {}, {
            children: children,
            label: "".concat(_lastFilter.label, ": ").concat(children.label)
          });

          var data = [].concat(_toConsumableArray(options.slice(0, -2)), [nextFilter]);
          setCurrentFilters(data);

          _onChange(data);
        } else {
          setCurrentFilters(options);
        }
      }
    }
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null);
};

var Container$3 = styled__default['default'].div(_templateObject$6());

function getNextOptions(_ref3) {
  var filters = _ref3.filters,
    filterTypes = _ref3.filterTypes;
  var lastFilter = filters && filters.length ? filters[filters.length - 1] : null;

  if (lastFilter && lastFilter.relation && typeof lastFilter.children !== "undefined") {
    return filterTypes.root;
  } else {
    if (lastFilter) {
      return filterTypes[lastFilter.relation];
    } else {
      return filterTypes.root;
    }
  }
}

var useFilters = function useFilters(_ref) {
  var _header$options, _header$options$table;

  var _ref$onFiltersChange = _ref.onFiltersChange,
    onFiltersChange = _ref$onFiltersChange === void 0 ? function () {
      return Promise.resolve();
    } : _ref$onFiltersChange,
    _ref$header = _ref.header,
    header = _ref$header === void 0 ? {} : _ref$header,
    _ref$auxData = _ref.auxData,
    auxData = _ref$auxData === void 0 ? {} : _ref$auxData;

  var _useState = React.useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];

  var _useState3 = React.useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    filtersFields = _useState4[0],
    setFiltersFields = _useState4[1];

  var _useState5 = React.useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    filter = _useState6[0],
    setFilter = _useState6[1];

  var _useState7 = React.useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    filters = _useState8[0],
    setFilters = _useState8[1];

  React.useEffect(function () {
    header.sections && setFiltersFields(buildFilterTypes({
      fields: getFilterFields(header),
      auxData: auxData
    }));
  }, [auxData]);
  React.useEffect(function () {
    header.sections && setFiltersFields(buildFilterTypes({
      fields: getFilterFields(header),
      auxData: auxData
    }));
  }, [header.sections]);

  var updateFilters = function updateFilters(data) {
    data.searchValue && setSearchValue(data.searchValue);
    data.filters ? setFilters(data.filters && data.filters.length ? data.filters : []) : data.filters === null && setFilters([]);
    var valuee = data.searchValue !== undefined ? data.searchValue : searchValue;
    var filterss = data.filters !== null && data.filters ? data.filters : filters;
    onFiltersChange({
      searchValue: valuee,
      filters: filterss
    });
  };

  return [{
    searchValue: searchValue,
    filtersFields: ((_header$options = header.options) === null || _header$options === void 0 ? void 0 : (_header$options$table = _header$options.tableOptions) === null || _header$options$table === void 0 ? void 0 : _header$options$table.isFilterable) ? filtersFields : null,
    filter: null
  }, updateFilters];
};

var buildFilterTypes = function buildFilterTypes(_ref2) {
  var fields = _ref2.fields,
    auxData = _ref2.auxData;

  var buildTypeValues = function buildTypeValues(field) {
    var _field$tableOptions;

    var filterSource = (_field$tableOptions = field.tableOptions) === null || _field$tableOptions === void 0 ? void 0 : _field$tableOptions.filter;
    var filterProperty = filterSource === null || filterSource === void 0 ? void 0 : filterSource.property;
    var filterValuesSource = filterSource === null || filterSource === void 0 ? void 0 : filterSource.values;
    var filterValues = filterValuesSource ? typeof filterValuesSource === "function" ? auxData ? filterValuesSource(auxData) : [] : filterValuesSource : [];
    return (filterValues === null || filterValues === void 0 ? void 0 : filterValues.map(function (filter) {
      return _objectSpread2(_objectSpread2({}, filter), {}, {
        type: filterProperty ? filterProperty : field.property
      });
    })) || [];
  };

  var buildGeneriType = function buildGeneriType(field) {
    var filter = typeof field.tableOptions.filter === "function" ? field.tableOptions.filter() : field.tableOptions.filter;

    if (!filter) {
      return null;
    }

    var value = filter.property ? filter.property : field.property;
    return {
      value: value,
      label: filter.label ? filter.label : field.label,
      relation: {
        key: value,
        values: buildTypeValues(field)
      }
    };
  };

  return fields && fields.length ? fields.filter(function (field) {
    var _field$tableOptions2;

    return (_field$tableOptions2 = field.tableOptions) === null || _field$tableOptions2 === void 0 ? void 0 : _field$tableOptions2.filter;
  }).map(buildGeneriType).reduce(function (_ref3, _ref4) {
    var root = _ref3.root,
      filters = _objectWithoutProperties(_ref3, ["root"]);

    var relation = _ref4.relation,
      filter = _objectWithoutProperties(_ref4, ["relation"]);

    return _objectSpread2(_objectSpread2({
      root: [].concat(_toConsumableArray(root), [_objectSpread2({
        relation: filter.value
      }, filter)])
    }, filters), {}, _defineProperty({}, relation.key, relation.values));
  }, {
    root: []
  }) : null;
};

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  width: 80px;\n  height: 100%;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 54px;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}

var TableSearch = function TableSearch(_ref) {
  var _ref$isSearchable = _ref.isSearchable,
    isSearchable = _ref$isSearchable === void 0 ? false : _ref$isSearchable,
    _ref$isFilterable = _ref.isFilterable,
    isFilterable = _ref$isFilterable === void 0 ? false : _ref$isFilterable,
    header = _ref.header,
    _ref$updateFilter = _ref.updateFilter,
    updateFilter = _ref$updateFilter === void 0 ? function () { } : _ref$updateFilter,
    count = _ref.count,
    _ref$auxData = _ref.auxData,
    auxData = _ref$auxData === void 0 ? {} : _ref$auxData;

  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;

  var _useFilters = useFilters({
    onFiltersChange: updateFilter,
    header: header,
    auxData: auxData
  }),
    _useFilters2 = _slicedToArray(_useFilters, 2),
    _useFilters2$ = _useFilters2[0],
    searchValue = _useFilters2$.searchValue,
    filtersFields = _useFilters2$.filtersFields,
    filter = _useFilters2$.filter,
    updateFilters = _useFilters2[1];

  return /*#__PURE__*/React.createElement(Container$4, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(CountLabel, null, "( ".concat(count ? count : 0, " )"))), isSearchable ? /*#__PURE__*/React.createElement(bluejayUi.Input, {
    style: {
      width: "25vw",
      marginTop: 10
    },
    placeholder: t("general.search"),
    debounce: 500,
    type: "text",
    class: "form-control",
    value: searchValue,
    onChange: function onChange(e) {
      e.preventDefault();
      updateFilters({
        searchValue: e.target.value
      });
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null), isFilterable ? /*#__PURE__*/React.createElement(FiltersInput, {
    options: filtersFields,
    auxData: auxData,
    onChange: function onChange(data) {
      return updateFilters({
        filters: data
      });
    },
    style: {
      width: "35vw"
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null));
};

var Container$4 = styled__default['default'].div(_templateObject$7());
var CountLabel = styled__default['default'].span(_templateObject2$3());

var usePagination = function usePagination(_ref) {
  var _ref$onPaginationChan = _ref.onPaginationChange,
    onPaginationChange = _ref$onPaginationChan === void 0 ? function () {
      return Promise.resolve();
    } : _ref$onPaginationChan;

  var _useState = React.useState({
    itemsPerPage: itemsPerPageOptions[0].value,
    page: 1,
    firstPage: 1,
    count: null
  }),
    _useState2 = _slicedToArray(_useState, 2),
    pagination = _useState2[0],
    setPagination = _useState2[1];

  var pages = pagination.numPages ? pagination.numPages : pagination.count ? Math.ceil(pagination.count / pagination.itemsPerPage) : 1;

  var updatePagination = function updatePagination(nextPagination) {
    return setPagination(function (currentPagination) {
      return _objectSpread2(_objectSpread2({}, currentPagination), nextPagination);
    });
  };

  React.useEffect(function () {
    if (pagination.count !== null) {
      onPaginationChange();
    }
  }, [pagination.page, pagination.itemsPerPage]);
  React.useEffect(function () {
    if (pagination.count === null) {
      onPaginationChange();
    }
  }, [pagination.count]);
  return [_objectSpread2(_objectSpread2({}, pagination), {}, {
    pages: pages
  }), updatePagination];
};

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 25px;\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  fill: #fc4219;\n  fill-rule: evenodd;\n  height: 15px;\n  width: auto;\n  padding: 0 15px;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  fill: #998335;\n  height: 15px;\n  width: auto;\n  padding: 0 15px;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-evenly;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}

var Pencil = function Pencil(props) {
  return /*#__PURE__*/React__default['default'].createElement("svg", props, /*#__PURE__*/React__default['default'].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.437 0c.655 0 1.283.261 1.741.723l3.101 3.101a2.462 2.462 0 0 1 0 3.482L7.958 18.624c-.699.806-1.69 1.3-2.823 1.378H0v-1l.003-4.215c.085-1.054.576-2.035 1.323-2.694L12.696.725A2.456 2.456 0 0 1 14.436 0zM5.064 18.005c.534-.038 1.031-.287 1.43-.743L14.058 9.7l-3.755-3.755-7.606 7.605c-.405.358-.656.86-.696 1.318v3.135l3.064.002zM11.717 4.53l3.754 3.755 2.394-2.394a.462.462 0 0 0 0-.653L14.76 2.135a.456.456 0 0 0-.647 0L11.717 4.53z"
  }));
};

Pencil.defaultProps = {
  width: "20",
  height: "21",
  viewBox: "0 0 20 21",
  xmlns: "http://www.w3.org/2000/svg"
};

var Trash = function Trash(props) {
  return /*#__PURE__*/React__default['default'].createElement("svg", props, /*#__PURE__*/React__default['default'].createElement("path", {
    clipRule: "evenodd",
    d: "M7 0h6a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.08L17 20a2 2 0 0 1-2 2H5c-1.105 0-2-.895-1.997-1.917L2.08 9H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3V2a2 2 0 0 1 2-2zM2 5h16v2H2V5zm2.086 4h11.827l-.91 10.917L15 20H5L4.086 9zM13 2v1H7V2h6z"
  }));
};

Trash.defaultProps = {
  width: "20",
  height: "22",
  viewBox: "0 0 20 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var ModelTable = function ModelTable(_ref) {
  var _header$options, _header$options2, _header$options3, _header$options4, _header$options4$tabl, _header$options5, _header$options6, _header$options6$tabl, _header$options7;

  var header = _ref.header,
    data = _ref.data,
    _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    _ref$renderActions = _ref.renderActions,
    renderActions = _ref$renderActions === void 0 ? function () {
      return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null);
    } : _ref$renderActions,
    children = _ref.children;
  var history = reactRouterDom.useHistory();

  var _useContext = React.useContext(AuthContext),
    logout = _useContext.logout;

  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;

  var _useState = React.useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    auxData = _useState2[0],
    setAuxData = _useState2[1];

  var _useState3 = React.useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    filter = _useState4[0],
    setFilter = _useState4[1];

  var _useState5 = React.useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    remoteData = _useState6[0],
    setRemoteData = _useState6[1];

  var _useState7 = React.useState(),
    _useState8 = _slicedToArray(_useState7, 2),
    itemToDelete = _useState8[0],
    setItemToDelete = _useState8[1];

  var _useState9 = React.useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoading = _useState10[0],
    setIsLoading = _useState10[1];

  var _usePagination = usePagination({
    onPaginationChange: function onPaginationChange() {
      return getData();
    },
    filter: filter
  }),
    _usePagination2 = _slicedToArray(_usePagination, 2),
    pagination = _usePagination2[0],
    updatePagination = _usePagination2[1];

  var updateAuxData = function updateAuxData(nextState) {
    setAuxData(function (currentState) {
      return _objectSpread2(_objectSpread2({}, currentState), nextState);
    });
  };

  React.useEffect(function () {
    onMount().then(function (a) {
      updateAuxData(a);
    });
  }, []);
  React.useEffect(function () {
    updatePagination({
      count: data === null || data === void 0 ? void 0 : data.length
    });
  }, [data]);
  React.useEffect(function () {
    if (filter !== null) {
      updatePagination({
        count: null,
        page: 1
      });
    }
  }, [filter]);

  var _ref2 = ((_header$options = header.options) === null || _header$options === void 0 ? void 0 : _header$options.requests) || {},
    _ref2$findRequest = _ref2.findRequest,
    findRequest = _ref2$findRequest === void 0 ? function () {
      return Promise.resolve();
    } : _ref2$findRequest,
    _ref2$mapFindResponse = _ref2.mapFindResponse,
    mapFindResponse = _ref2$mapFindResponse === void 0 ? function (data) {
      return data;
    } : _ref2$mapFindResponse,
    _ref2$deleteRequest = _ref2.deleteRequest,
    deleteRequest = _ref2$deleteRequest === void 0 ? function () {
      return Promise.resolve();
    } : _ref2$deleteRequest,
    _ref2$countRequest = _ref2.countRequest,
    countRequest = _ref2$countRequest === void 0 ? function () {
      return Promise.resolve();
    } : _ref2$countRequest;

  var _ref3 = ((_header$options2 = header.options) === null || _header$options2 === void 0 ? void 0 : _header$options2.tableOptions) || {},
    _ref3$isCreatable = _ref3.isCreatable,
    isCreatable = _ref3$isCreatable === void 0 ? true : _ref3$isCreatable,
    _ref3$isEditable = _ref3.isEditable,
    isEditable = _ref3$isEditable === void 0 ? false : _ref3$isEditable,
    _ref3$isDeletable = _ref3.isDeletable,
    isDeletable = _ref3$isDeletable === void 0 ? false : _ref3$isDeletable,
    _ref3$isSearchable = _ref3.isSearchable,
    isSearchable = _ref3$isSearchable === void 0 ? false : _ref3$isSearchable,
    _ref3$isFilterable = _ref3.isFilterable,
    isFilterable = _ref3$isFilterable === void 0 ? false : _ref3$isFilterable,
    _ref3$openOnClickRow = _ref3.openOnClickRow,
    openOnClickRow = _ref3$openOnClickRow === void 0 ? false : _ref3$openOnClickRow,
    _ref3$displayItemsPer = _ref3.displayItemsPerPage,
    displayItemsPerPage = _ref3$displayItemsPer === void 0 ? true : _ref3$displayItemsPer,
    _ref3$getItemActions = _ref3.getItemActions,
    getItemActions = _ref3$getItemActions === void 0 ? function () {
      return {
        isEditable: isEditable,
        isDeletable: isDeletable
      };
    } : _ref3$getItemActions,
    _ref3$onMount = _ref3.onMount,
    onMount = _ref3$onMount === void 0 ? function () {
      return Promise.resolve();
    } : _ref3$onMount;

  var path = getRoutePath((_header$options3 = header.options) === null || _header$options3 === void 0 ? void 0 : _header$options3.route);
  var isSmart = typeof data === "undefined";
  var renderChildren = children || ((_header$options4 = header.options) === null || _header$options4 === void 0 ? void 0 : (_header$options4$tabl = _header$options4.tableOptions) === null || _header$options4$tabl === void 0 ? void 0 : _header$options4$tabl.children);

  var updateState = function updateState(fn) {
    return setRemoteData(fn);
  };

  var getData = function getData() {
    setIsLoading(true);
    return findRequest({
      pagination: pagination,
      filter: filter,
      fields: isSearchable || isFilterable ? getFilterFields(header) : []
    }).then(function (data) {
      setIsLoading(false);
      if (isSmart) setRemoteData(mapFindResponse(data));
      return Promise.resolve(data);
    }).then(function (data) {
      if (pagination.count === null) {
        countRequest({
          pagination: pagination,
          filter: filter,
          fields: isSearchable || isFilterable ? getFilterFields(header) : [],
          data: data
        }).then(function () {
          var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            count: 0,
            numPages: 0
          },
            count = _ref4.count,
            numPages = _ref4.numPages;

          updatePagination({
            count: count,
            page: pagination.page,
            numPages: numPages
          });
        });
      }

      return Promise.resolve(data);
    }).catch(function (_ref5) {
      var status = _ref5.status;

      if (status === 401) {
        logout();
      }
    });
  };

  var onDeleteClick = function onDeleteClick(item) {
    setItemToDelete(item);
  };

  var onConfirmDeleteClick = function onConfirmDeleteClick(e) {
    deleteRequest(itemToDelete).then(function () {
      setItemToDelete(null);
      getData();
    });
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, itemToDelete && /*#__PURE__*/React__default['default'].createElement(DeleteRowModal, {
    onConfirmDeleteClick: onConfirmDeleteClick,
    onCancelDeleteClick: function onCancelDeleteClick() {
      return setItemToDelete(null);
    }
  }), /*#__PURE__*/React__default['default'].createElement(H1, {
    style: {
      marginTop: 10
    }
  }, t("general." + ((_header$options5 = header.options) === null || _header$options5 === void 0 ? void 0 : _header$options5.name))), typeof ((_header$options6 = header.options) === null || _header$options6 === void 0 ? void 0 : (_header$options6$tabl = _header$options6.tableOptions) === null || _header$options6$tabl === void 0 ? void 0 : _header$options6$tabl.renderBefore) === "function" && header.options.tableOptions.renderBefore(), /*#__PURE__*/React__default['default'].createElement(CustomCard, {
    style: styles.container
  }, /*#__PURE__*/React__default['default'].createElement(ControlsContainer$1, null, isCreatable && /*#__PURE__*/React__default['default'].createElement(ButtonContainer, null, /*#__PURE__*/React__default['default'].createElement(bluejayUi.Button, {
    color: "primary",
    as: reactRouterDom.Link,
    to: "".concat(path, "/new")
  }, t("general.new" + ((_header$options7 = header.options) === null || _header$options7 === void 0 ? void 0 : _header$options7.name))))), /*#__PURE__*/React__default['default'].createElement(bluejayUi.Loader, {
    isLoading: isLoading
  }, /*#__PURE__*/React__default['default'].createElement(TableSearch, {
    isSearchable: isSearchable,
    isFilterable: isFilterable,
    header: header,
    count: pagination ? pagination.count : null,
    updateFilter: setFilter,
    auxData: auxData
  }), /*#__PURE__*/React__default['default'].createElement(bluejayUi.Table, {
    headers: getFields(header, t),
    onRowClick: openOnClickRow && function (item) {
      return history.push("".concat(path, "/").concat(getItemIdentifier(item, header)));
    },
    data: isSmart ? remoteData : getClientSidePaginatedData({
      pagination: pagination,
      data: data
    }),
    renderCustomCell: function renderCustomCell(item) {
      var itemActions = getItemActions({
        item: item,
        state: remoteData
      });
      var itemId = getItemIdentifier(item, header);
      return /*#__PURE__*/React__default['default'].createElement(ActionsContainer, null, isEditable && itemActions.isEditable && itemId && /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, {
        to: "".concat(path, "/").concat(itemId)
      }, /*#__PURE__*/React__default['default'].createElement(EditIcon, null)), isDeletable && itemActions.isDeletable && /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, {
        onClick: function onClick() {
          return onDeleteClick(item);
        }
      }, /*#__PURE__*/React__default['default'].createElement(TrashIcon, null)), typeof renderActions === "function" && renderActions({
        item: item,
        state: remoteData,
        updateState: updateState
      }));
    }
  }), /*#__PURE__*/React__default['default'].createElement(PaginationButtons, {
    pagination: pagination,
    updatePagination: updatePagination,
    displayItemsPerPage: displayItemsPerPage
  })), typeof renderChildren === "function" ? renderChildren({
    state: remoteData
  }) : renderChildren));
};

var DeleteRowModal = function DeleteRowModal(_ref6) {
  var onConfirmDeleteClick = _ref6.onConfirmDeleteClick,
    onCancelDeleteClick = _ref6.onCancelDeleteClick;

  var _useTranslation2 = reactI18next.useTranslation(),
    t = _useTranslation2.t;

  return /*#__PURE__*/React__default['default'].createElement(bluejayUi.Modal, {
    title: t("general.areYouSure")
  }, /*#__PURE__*/React__default['default'].createElement(bluejayUi.Text, {
    style: {
      textAlign: "center"
    }
  }, t("general.thisActionCannotBeUndone")), /*#__PURE__*/React__default['default'].createElement(ModalActions, null, /*#__PURE__*/React__default['default'].createElement(bluejayUi.Button, {
    color: "primary",
    onClick: onCancelDeleteClick,
    style: {
      marginRight: 20
    }
  }, t("actions.cancel")), /*#__PURE__*/React__default['default'].createElement(bluejayUi.Button, {
    color: "danger",
    onClick: onConfirmDeleteClick
  }, t("actions.delete"))));
};

var ActionsContainer = styled__default['default'].div(_templateObject$8());
var EditIcon = styled__default['default'](Pencil)(_templateObject2$4());
var TrashIcon = styled__default['default'](Trash)(_templateObject3$2());
var ModalActions = styled__default['default'].div(_templateObject4$1());
var ControlsContainer$1 = styled__default['default'].div(_templateObject5$1());
var ButtonContainer = styled__default['default'].div(_templateObject6());

var image = function image(_ref) {
  var _headers$options;

  var headers = _ref.headers,
    beforeSave = _ref.beforeSave,
    field = _ref.field,
    key = _ref.key,
    data = _ref.data;
  var image = data[key];
  var isNewFile = image === null || image === void 0 ? void 0 : image.name;

  var _headers$options$requ = headers === null || headers === void 0 ? void 0 : (_headers$options = headers.options) === null || _headers$options === void 0 ? void 0 : _headers$options.requests,
    uploadFileRequest = _headers$options$requ.uploadFileRequest;

  var shouldUpload = typeof image !== "undefined" && isNewFile;

  if (shouldUpload && typeof uploadFileRequest !== "function") {
    var _headers$options2;

    throw new Error("You must define the uploadFileRequest function in your ".concat(headers === null || headers === void 0 ? void 0 : (_headers$options2 = headers.options) === null || _headers$options2 === void 0 ? void 0 : _headers$options2.name, " header"));
  }

  return shouldUpload ? uploadFileRequest({
    file: image,
    params: {
      name: beforeSave({
        state: data,
        field: field
      })
    }
  }).then(function (fileUrl) {
    return Promise.resolve(_defineProperty({}, key, fileUrl));
  }) : Promise.resolve(_defineProperty({}, key, image));
};
var multiselect = function multiselect(_ref2) {
  var _field$relation, _field$relation2;

  var field = _ref2.field,
    key = _ref2.key,
    data = _ref2.data;
  var isMulti = (field === null || field === void 0 ? void 0 : (_field$relation = field.relation) === null || _field$relation === void 0 ? void 0 : _field$relation.isMulti) || false;
  var forceSendItem = (field === null || field === void 0 ? void 0 : (_field$relation2 = field.relation) === null || _field$relation2 === void 0 ? void 0 : _field$relation2.forceSendItem) || false;
  return Promise.resolve(_defineProperty({}, key, isMulti ? data[key] : forceSendItem ? data[key] : data[key].value));
};
var defaultBeforeSave = function defaultBeforeSave(_ref3) {
  var headers = _ref3.headers,
    beforeSave = _ref3.beforeSave,
    field = _ref3.field,
    key = _ref3.key,
    data = _ref3.data;
  return Promise.resolve(_defineProperty({}, key, beforeSave({
    state: data,
    field: field
  })));
};
var formats = {
  image: image,
  multiselect: multiselect,
  defaultBeforeSave: defaultBeforeSave
};

var beforeSave = function beforeSave(_ref) {
  var header = _ref.header,
    state = _ref.state;
  var data = state.data;
  var fields = header.sections.reduce(function (reducer, _ref2) {
    var fields = _ref2.fields;
    return [].concat(_toConsumableArray(reducer), _toConsumableArray(fields));
  }, []);
  return Object.keys(data).reduce(function (reducer, key) {
    return reducer.then(function (nextData) {
      var field = fields.find(function (_ref3) {
        var property = _ref3.property;
        return property === key;
      });

      var _ref4 = field ? field : {},
        type = _ref4.type;

      if (type) {
        var _field$upsertOptions;

        var fieldBeforeSave = (field === null || field === void 0 ? void 0 : (_field$upsertOptions = field.upsertOptions) === null || _field$upsertOptions === void 0 ? void 0 : _field$upsertOptions.beforeSave) || defaultBeforeSave$1;
        var params = {
          headers: header,
          beforeSave: fieldBeforeSave,
          field: field,
          key: key,
          data: data,
          nextData: nextData
        };
        var format = typeof fieldBeforeSave === "function" && (type === "image" || type === "multiselect") ? formats[type] : formats["defaultBeforeSave"];

        if (typeof format === "function") {
          return format(params).then(function (data) {
            return _objectSpread2(_objectSpread2({}, nextData), data);
          });
        } else {
          return Promise.resolve(_objectSpread2(_objectSpread2({}, nextData), {}, _defineProperty({}, key, data[key])));
        }
      } else {
        return Promise.resolve(nextData);
      }
    });
  }, Promise.resolve(data));
};
var filterHeaders = function filterHeaders(header, t) {
  return _objectSpread2(_objectSpread2({}, header), {}, {
    sections: header.sections.reduce(function (reducer, section) {
      return [].concat(_toConsumableArray(reducer), [_objectSpread2(_objectSpread2({}, section), {}, {
        fields: section.fields.filter(removeIfNotVisible$1) //.map(translateField(header.options.name, t, "label")),

      })]);
    }, [])
  });
};

var removeIfNotVisible$1 = function removeIfNotVisible(field) {
  var _field$upsertOptions2, _field$upsertOptions3;

  return typeof ((_field$upsertOptions2 = field.upsertOptions) === null || _field$upsertOptions2 === void 0 ? void 0 : _field$upsertOptions2.show) !== "undefined" ? (_field$upsertOptions3 = field.upsertOptions) === null || _field$upsertOptions3 === void 0 ? void 0 : _field$upsertOptions3.show : true;
};

var defaultBeforeSave$1 = function defaultBeforeSave(_ref5) {
  var state = _ref5.state,
    field = _ref5.field;
  return state[field.name || field.property];
};

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  color: #9da1a7;\n  text-transform: uppercase;\n  font-size: 22px;\n  font-weight: 400;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}

var getInitialState = function getInitialState(sections) {
  return sections.reduce(function (reducer, _ref) {
    var fields = _ref.fields;
    return _objectSpread2(_objectSpread2({}, reducer), fields.reduce(function (fieldsReducer, _ref2) {
      var property = _ref2.property,
        upsertOptions = _ref2.upsertOptions;
      return _objectSpread2(_objectSpread2({}, fieldsReducer), (upsertOptions === null || upsertOptions === void 0 ? void 0 : upsertOptions.value) ? _defineProperty({}, property, upsertOptions.value) : {});
    }, {}));
  }, {});
};

var ModelUpsert = function ModelUpsert(_ref4) {
  var _header$options, _header$options2, _header$options2$upse, _header$options3;

  var header = _ref4.header,
    children = _ref4.children;

  var _useState = React.useState({
    data: getInitialState(header.sections),
    aux: {}
  }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];

  // var history = reactRouterDom.useHistory();
  var params = reactRouterDom.useParams();

  var _useTranslation = reactI18next.useTranslation(),
    t = _useTranslation.t;

  var _ref5 = ((_header$options = header.options) === null || _header$options === void 0 ? void 0 : _header$options.requests) || {},
    _ref5$findOneRequest = _ref5.findOneRequest,
    findOneRequest = _ref5$findOneRequest === void 0 ? function () {
      return Promise.resolve();
    } : _ref5$findOneRequest,
    _ref5$upsertRequest = _ref5.upsertRequest,
    upsertRequest = _ref5$upsertRequest === void 0 ? function () {
      return Promise.resolve();
    } : _ref5$upsertRequest;

  var _header$options$upser = header.options.upsertOptions;
  _header$options$upser = _header$options$upser === void 0 ? {} : _header$options$upser;
  var _header$options$upser2 = _header$options$upser.onMount,
    onMount = _header$options$upser2 === void 0 ? function () {
      return Promise.resolve();
    } : _header$options$upser2,
    _header$options$upser3 = _header$options$upser.renderAfter,
    renderAfter = _header$options$upser3 === void 0 ? function () {
      return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null);
    } : _header$options$upser3;
  var id = params.id;
  var isCreating = typeof id === "undefined";
  var path = getRoutePath(header.options.route);
  var renderChildren = children || ((_header$options2 = header.options) === null || _header$options2 === void 0 ? void 0 : (_header$options2$upse = _header$options2.upsertOptions) === null || _header$options2$upse === void 0 ? void 0 : _header$options2$upse.children);
  var allFields = header.sections.reduce(function (reducer, section) {
    return [].concat(_toConsumableArray(reducer), _toConsumableArray(section.fields));
  }, []);

  var updateState = function updateState(nextState) {
    return setState(function (currentState) {
      return _objectSpread2(_objectSpread2({}, currentState), nextState);
    });
  };

  React.useEffect(function () {
    if (!isCreating) {
      findOneRequest({
        id: id
      }).then(function (data) {
        return updateState({
          data: data
        });
      });
    }

    onMount().then(function (aux) {
      return updateState({
        aux: aux
      });
    });
  }, [params.id]);

  var onSubmit = function onSubmit() {
    return beforeSave({
      header: header,
      state: state
    }).then(upsertRequest).then(function (res) {
      alertify.notify("Guardado con éxito", "success");
      return res;
    });
  };

  var handleChange = function handleChange(data) {
    updateState({
      data: _objectSpread2(_objectSpread2({}, state.data), data)
    });
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(H1, {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React__default['default'].createElement(ActionSpan, null, t("general.".concat(id ? "edit" : "create"))), " ", t("general.one" + ((_header$options3 = header.options) === null || _header$options3 === void 0 ? void 0 : _header$options3.name))), /*#__PURE__*/React__default['default'].createElement(CustomCard, null, isCreating || !isCreating && !isEmptyObject(state.data) ? /*#__PURE__*/React__default['default'].createElement(Form__default['default'], {
    headers: filterHeaders(header),
    onSubmit: onSubmit,
    state: state,
    handleChange: handleChange,
    children: renderChildren
  }) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null), typeof renderAfter === "function" ? renderAfter({
    state: state
  }) : renderAfter));
};

var ActionSpan = styled__default['default'].span(_templateObject$9());

var index$1 = {
  UnAuthForm: UnAuthForm,
  ModelTable: ModelTable,
  ModelUpsert: ModelUpsert
};

var getRoutes = function getRoutes(_ref) {
  var headers = _ref.headers,
    _ref$isLoggedIn = _ref.isLoggedIn,
    isLoggedIn = _ref$isLoggedIn === void 0 ? false : _ref$isLoggedIn,
    user = _ref.user;
  return getRoutesFromHeaders({
    headers: headers,
    isLoggedIn: isLoggedIn,
    user: user
  }).then(function (routes) {
    var authRoutes = routes.filter(function (_ref2) {
      var _ref2$auth = _ref2.auth,
        auth = _ref2$auth === void 0 ? true : _ref2$auth;
      return auth === true;
    });
    var unAuthRoutes = routes.filter(function (_ref3) {
      var _ref3$unAuth = _ref3.unAuth,
        unAuth = _ref3$unAuth === void 0 ? false : _ref3$unAuth;
      return unAuth === true;
    });
    return {
      authRoutes: authRoutes,
      unAuthRoutes: unAuthRoutes
    };
  });
};

var getRoutesFromHeaders = function getRoutesFromHeaders(_ref4) {
  var _ref4$headers = _ref4.headers,
    headers = _ref4$headers === void 0 ? [] : _ref4$headers,
    isLoggedIn = _ref4.isLoggedIn,
    user = _ref4.user;
  return headers.reduce(function (reducer, header) {
    return reducer.then(function (accumulator) {
      return (typeof header === "function" ? header({
        isLoggedIn: isLoggedIn,
        user: user
      }) : Promise.resolve(header)).then(function (header) {
        return [].concat(_toConsumableArray(accumulator), _toConsumableArray(getRoutesByType(header)));
      });
    });
  }, Promise.resolve([]));
};

var getRoutesByType = function getRoutesByType(header) {
  var _header$options, _header$options$table, _header$options2, _header$options2$upse, _header$options3, _header$options3$upse;

  if (typeof header.type === "undefined") {
    throw new Error("You must define the type property in your ".concat(header.options.name, " header"));
  }

  switch (header.type) {
    case "CRUD":
      return [_objectSpread2({
        name: header.options.name,
        exact: true,
        component: composeComponent({
          DefaultComponent: ModelTable,
          component: (_header$options = header.options) === null || _header$options === void 0 ? void 0 : (_header$options$table = _header$options.tableOptions) === null || _header$options$table === void 0 ? void 0 : _header$options$table.component,
          header: header
        }),
        to: _typeof(header.options.route) === "object" ? header.options.route.path : header.options.route
      }, getRouteProps({
        route: header.options.route
      })), _objectSpread2({
        name: header.options.name,
        component: composeComponent({
          DefaultComponent: ModelUpsert,
          component: (_header$options2 = header.options) === null || _header$options2 === void 0 ? void 0 : (_header$options2$upse = _header$options2.upsertOptions) === null || _header$options2$upse === void 0 ? void 0 : _header$options2$upse.component,
          header: header
        }),
        exact: true
      }, getRouteProps({
        route: header.options.route,
        suffix: "/new"
      })), _objectSpread2({
        name: header.options.name,
        component: composeComponent({
          DefaultComponent: ModelUpsert,
          component: (_header$options3 = header.options) === null || _header$options3 === void 0 ? void 0 : (_header$options3$upse = _header$options3.upsertOptions) === null || _header$options3$upse === void 0 ? void 0 : _header$options3$upse.component,
          header: header
        })
      }, getRouteProps({
        route: header.options.route,
        suffix: "/:id"
      }))];

    case "Page":
      return [_objectSpread2({
        name: header.options.name
      }, _typeof(header.options.route) === "object" ? header.options.route : {})];
  }
};

var getRouteProps = function getRouteProps(_ref5) {
  var route = _ref5.route,
    _ref5$suffix = _ref5.suffix,
    suffix = _ref5$suffix === void 0 ? "" : _ref5$suffix;
  return _typeof(route) === "object" ? _objectSpread2(_objectSpread2({}, route), {}, {
    path: route.path + suffix
  }) : {
    path: route + suffix
  };
};

var getRoutePath = function getRoutePath(route) {
  return _typeof(route) === "object" ? route.path : route;
};

var composeComponent = function composeComponent(_ref6) {
  var DefaultComponent = _ref6.DefaultComponent,
    component = _ref6.component,
    header = _ref6.header;
  return function (props) {
    return typeof component === "function" ? component(_objectSpread2(_objectSpread2({}, props), {}, {
      headers: header
    }), DefaultComponent) : /*#__PURE__*/React__default['default'].createElement(DefaultComponent, _extends({}, props, {
      header: header
    }));
  };
};

var App = function App(_ref) {
  var _ref$headers = _ref.headers,
    headers = _ref$headers === void 0 ? [] : _ref$headers;

  var _useContext = React.useContext(AuthContext),
    isLoggedIn = _useContext.isLoggedIn,
    user = _useContext.user;

  var Page = isLoggedIn ? AuthPage : UnAuthPage;

  var _useState = React.useState({
    authRoutes: [],
    unAuthRoutes: [],
    authRedirect: "",
    unAuthRedirect: ""
  }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];

  var availableRoutes = state[isLoggedIn ? "authRoutes" : "unAuthRoutes"];
  var redirect = state[isLoggedIn ? "authRedirect" : "unAuthRedirect"];
  React.useEffect(function () {
    getRoutes({
      headers: headers,
      isLoggedIn: isLoggedIn,
      user: user
    }).then(function (_ref2) {
      var authRoutes = _ref2.authRoutes,
        unAuthRoutes = _ref2.unAuthRoutes;
      var homeAuthRoute = authRoutes.find(function (_ref3) {
        var _ref3$home = _ref3.home,
          home = _ref3$home === void 0 ? false : _ref3$home;
        return home;
      });
      var homeUnAuthRoute = unAuthRoutes.find(function (_ref4) {
        var _ref4$home = _ref4.home,
          home = _ref4$home === void 0 ? false : _ref4$home;
        return home;
      });
      setState({
        authRoutes: authRoutes,
        unAuthRoutes: unAuthRoutes,
        authRedirect: homeAuthRoute ? homeAuthRoute.path : "/",
        unAuthRedirect: homeUnAuthRoute ? homeUnAuthRoute.path : "/"
      });
    });
  }, []);
  return availableRoutes.length > 0 ? /*#__PURE__*/React__default['default'].createElement(reactRouterDom.BrowserRouter, null, /*#__PURE__*/React__default['default'].createElement(Page, {
    routes: availableRoutes
  }, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Switch, null, availableRoutes.map(function (route, key) {
    return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, _extends({
      key: key
    }, route));
  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Redirect, {
    to: redirect
  })))) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null);
};

var index$2 = {
  App: App
};

var index$3 = {
  AuthContext: AuthContext,
  AuthProvider: AuthProvider
};

var translation = {
  general: {
    areYouSure: "¿Estás seguro/a?",
    thisActionCannotBeUndone: "Esta acción no puede deshacerse",
    search: "Buscar"
  },
  actions: {
    cancel: "Cancelar",
    confirm: "Confirmar",
    "delete": "Eliminar"
  },
  login: {
    title: "Bienvenido/a de nuevo"
  },
  register: {
    title: "Regístrate"
  }
};
var es = {
  translation: translation
};

var index$4 = {
  es: es
};

exports.apps = index$2;
exports.components = index$1;
exports.contexts = index$3;
exports.languages = index$4;
exports.pages = index;
//# sourceMappingURL=index.js.map
